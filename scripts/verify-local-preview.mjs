import { spawn, spawnSync } from "node:child_process";
import net from "node:net";

const DEFAULT_ORIGIN = "http://127.0.0.1:3102";
const originArg = process.argv.find((arg) => arg.startsWith("--origin="));
const requestedOrigin = originArg
  ? originArg.slice("--origin=".length)
  : process.env.LOCAL_PREVIEW_ORIGIN || DEFAULT_ORIGIN;

const useShell = process.platform === "win32";

function parseLocalOrigin(value) {
  let url;
  try {
    url = new URL(value);
  } catch {
    throw new Error(`Invalid origin: ${value}`);
  }

  if (!["127.0.0.1", "localhost"].includes(url.hostname)) {
    throw new Error(`Local preview origin must use localhost or 127.0.0.1: ${value}`);
  }

  if (!url.port) {
    throw new Error(`Local preview origin must include a port: ${value}`);
  }

  return url;
}

function isPortFree(host, port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once("error", () => resolve(false));
    server.once("listening", () => {
      server.close(() => resolve(true));
    });
    server.listen(port, host);
  });
}

async function resolvePreviewOrigin(url, canAutoPort) {
  const basePort = Number(url.port);
  if (await isPortFree(url.hostname, basePort)) return url;

  if (!canAutoPort) {
    throw new Error(`${url.origin} is already in use. Stop that server or pass a free --origin.`);
  }

  for (let port = basePort + 1; port <= basePort + 20; port += 1) {
    if (await isPortFree(url.hostname, port)) {
      url.port = String(port);
      return url;
    }
  }

  throw new Error(`No free local preview port found from ${basePort} to ${basePort + 20}.`);
}

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: "inherit",
      shell: options.shell ?? useShell,
      ...options,
      env: {
        ...process.env,
        ...options.env
      }
    });

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
        return;
      }
      reject(new Error(`${command} ${args.join(" ")} exited with code ${code}`));
    });
  });
}

function startServer(host, port) {
  const child = spawn("npm", ["run", "start", "--", "--hostname", host, "--port", port], {
    stdio: "inherit",
    shell: useShell,
    env: process.env
  });

  child.on("error", (error) => {
    throw error;
  });

  return child;
}

function stopServer(child) {
  if (!child || child.killed) return;

  if (process.platform === "win32") {
    spawnSync("taskkill", ["/pid", String(child.pid), "/t", "/f"], {
      stdio: "ignore"
    });
    return;
  }

  child.kill("SIGTERM");
}

async function waitForOrigin(origin, serverProcess) {
  const deadline = Date.now() + 30000;
  let lastError = "server not ready";

  while (Date.now() < deadline) {
    if (serverProcess.exitCode !== null) {
      throw new Error(`Preview server exited before becoming ready with code ${serverProcess.exitCode}.`);
    }

    try {
      const response = await fetch(origin);
      if (response.ok) return;
      lastError = `HTTP ${response.status}`;
    } catch (error) {
      lastError = error.message;
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error(`Timed out waiting for ${origin}: ${lastError}`);
}

async function main() {
  const parsedOrigin = parseLocalOrigin(requestedOrigin);
  const previewOrigin = await resolvePreviewOrigin(parsedOrigin, !originArg);
  const origin = previewOrigin.origin;

  console.log(`[local-preview] using ${origin}`);

  await run("npm", ["run", "lint"]);
  await run("npm", ["test"]);
  await run("npm", ["audit", "--omit=dev"]);
  await run("npm", ["run", "build"], {
    env: {
      NEXT_PUBLIC_SITE_URL: origin
    }
  });

  const server = startServer(previewOrigin.hostname, previewOrigin.port);
  try {
    await waitForOrigin(origin, server);
    await run(process.execPath, ["scripts/verify-launch-readiness.mjs", `--origin=${origin}`], {
      shell: false
    });
    console.log(`[local-preview] all checks passed for ${origin}`);
  } finally {
    stopServer(server);
  }
}

main().catch((error) => {
  console.error(`[local-preview] ${error.message}`);
  process.exit(1);
});
