# FictionOps 第一周 SEO 需求验证

日期：2026-07-13

## 结论

FictionOps 已经完成收录和首次曝光验证。下一阶段不应继续横向增加泛功能，而应优先吃下三个已经由 GSC 证明存在的需求：

1. `royal road average views`
2. `royal road shoutout generator`
3. `royal road rising stars checker`

其中，`average views` 适合立刻优化现有统计解释页；`shoutout generator` 和 `rising stars checker` 虽然需求明确，但现有强竞争者已经提供实际生成/检查功能。FictionOps 当前只有跟踪和准备功能，不能用同名页面暗示并不存在的能力。因此短期采用“内容承接 + 现有工具导流”，中期再根据曝光和用户反馈决定是否开发真正的生成器或检查器。

## GSC 基线

数据窗口：2026-07-04 至 2026-07-10。

| 指标 | 当前值 |
| --- | ---: |
| 总点击 | 1 |
| 总曝光 | 153 |
| 平均 CTR | 0.7% |
| 平均排名 | 8.7 |
| 已提交 Sitemap | `https://fictionops.com/sitemap.xml` |
| Sitemap 状态 | 成功 |
| 已发现网页 | 20 |

当前查询：

| 查询 | 点击 | 曝光 | 判断 |
| --- | ---: | ---: | --- |
| `royal road average views` | 0 | 8 | 最强真实信号，直接匹配现有 Stats 内容 |
| `royal road shoutout generator` | 0 | 2 | 工具意图强，但当前产品不是代码生成器 |
| `royal road rising stars checker` | 0 | 1 | 工具意图强，竞争者已有实时检查器 |

网页索引报告仍显示“正在处理数据”，应等待至少一天后复查；这不是抓取故障。Sitemap 已于 2026-07-10 成功读取。

## SERP 竞争判断

### 1. royal road average views

- 结果主要由 Reddit、Royal Road 论坛和零散分析内容组成。
- 搜索者真正想知道的不是单一“平均值”，而是自己的 views、followers、favorites 和 retention 是否正常。
- 当前结果缺乏一个可信、分阶段解释指标的精品页。
- FictionOps 已获得 8 次曝光，说明 Google 已初步认可主题相关性。
- 机会：高。先优化现有统计解释页，不新增重复页面。

### 2. royal road shoutout generator

- 搜索意图是输入 Royal Road 小说链接后，直接生成可粘贴进 Author Notes 的 shoutout code。
- 现有明确竞争者包括 RR Writer's Guild generator 和 FiniteVoid generator。
- Royal Road 论坛及 Reddit 讨论会直接推荐上述工具，竞争者拥有社区口碑和自然外链。
- FictionOps 当前是 Swap Tracker，不具备代码生成能力。
- 机会：中。先做解释/模板页承接长尾；除非访谈证明生成器仍有明显体验缺口，否则不立即开发。

### 3. royal road rising stars checker

- 搜索意图是输入故事链接，检查主榜、类型榜和标签榜位置。
- 现有竞争者包括 Royal Road Watch、Doomlabs Rising Stars Tracker、Stepan Chizhov checker。
- 竞争者有历史快照、榜单检查和实时/准实时数据，产品深度显著高于 FictionOps 当前能力。
- FictionOps 的合适差异化是 launch readiness，而不是榜单实时数据。
- 机会：中低。可做 `Rising Stars readiness checklist`，但不要把它命名成实时 checker。

### 4. royal road launch checklist

- 搜索结果缺少稳定占位的专门工具，存在泛用 launch checklist 和社区帖子噪声。
- FictionOps 的现有 Launch Planner 已经被搜索引擎抓取，并且功能与意图高度匹配。
- Royal Road 官方建议持续发布、不要一次批量发布、尽量错开发布时间，这些可以成为可信内容基础。
- 机会：高。它应该继续作为 FictionOps 的主入口和核心定位页。

### 5. royal road patreon calculator

- 结果以论坛经验、Reddit 自报数据和收入分析内容为主，缺少可信、可编辑假设的轻量计算器。
- 不同作者自报转化率差异很大，页面必须强调用户自定义和样本偏差。
- FictionOps 已有可用计算器，功能与搜索意图直接匹配。
- 机会：高，但需要避免把默认数值描述成行业基准。

## 关键词候选池

候选词来自 Google 自动补全、GSC 查询、Royal Road 官方文档、Royal Road 论坛和近期社区讨论。完整清单保存在 `data/seo-keyword-pool-2026-07-13.csv`。

主题分布：

| 主题 | 候选数量 | 主要意图 |
| --- | ---: | --- |
| Launch / schedule | 15 | 教程、清单、计划工具 |
| Shoutout / swaps | 13 | 生成器、模板、跟踪工具 |
| Rising Stars | 12 | 检查器、历史、准备指南 |
| Stats / followers | 12 | 指标解释、基准、诊断 |
| Patreon / backlog | 12 | 计算器、转化、分层方案 |

## 最终选择的 5 个关键词

| 优先级 | 主关键词 | 页面策略 | 选择理由 |
| ---: | --- | --- | --- |
| 1 | `royal road average views` | 优化现有 Stats Explained/Views vs Followers 页面，避免关键词内耗 | 已有 8 次 GSC 曝光；竞争结果以讨论为主；与现有内容完全匹配 |
| 2 | `royal road launch checklist` | 强化现有 Launch Plan 工具页 | 工具已存在；搜索结果缺乏强专页；最符合 FictionOps 核心定位 |
| 3 | `royal road patreon calculator` | 强化现有 Patreon Calculator 工具页 | 高商业意图；现有功能直接满足需求；可自然承接邮箱订阅 |
| 4 | `royal road shoutout swap tracker` | 强化现有 Swap Tracker，并新增 spreadsheet/template 支撑页 | 比 generator 更符合当前真实功能；社区明确使用 spreadsheet 管理 swaps |
| 5 | `royal road rising stars readiness checklist` | 新增轻量 checklist 页面或在现有 guide 中加入交互模块 | 避开实时 checker 强竞争；保持“不承诺排名”的产品边界 |

## 暂不选择的词

- `royal road shoutout generator`：已有强社区工具，且 FictionOps 当前功能不匹配。
- `royal road rising stars checker`：实时检查和历史数据竞争强，需要抓取/数据基础设施。
- `royal road rising stars tracker`：Doomlabs 和 Royal Road Watch 的数据资产领先。
- `royal road patreon conversion rate`：适合支撑内容，不适合作为默认数值承诺。
- `how to get on rising stars royal road`：搜索量可能较好，但容易诱发不可信的算法承诺，先作为指南副词。

## 第二周输入清单

下一阶段只修改三个现有页面和准备一个新页面：

1. Stats 页面：把 `royal road average views` 设为主意图，增加分阶段解释、无统一平均值说明和指标诊断表。
2. Launch Plan：以 `royal road launch checklist` 为主词，增加可复制的 30 天实例和 3/5/7 次周更对比。
3. Patreon Calculator：以 `royal road patreon calculator` 为主词，增加 500/1,000/5,000 followers 示例和敏感性说明。
4. Rising Stars：先设计 readiness checklist，不做实时排名检查器。

每次只修改一个主搜索意图，避免新建与现有页面高度重复的 URL。

## 复查节奏

- 2026-07-14：复查 GSC 网页索引报告是否完成处理。
- 2026-07-20：记录第二周 GSC 查询、页面、国家和设备数据。
- 当页面进入平均排名 10–30：优先补示例、内链和相关引用。
- 有曝光无点击：优化 Title 和 Description，而不是立刻重写整页。
- 连续 30 天没有相关曝光：重新判断关键词需求或页面匹配。

## 主要来源

- Google Search Console：`sc-domain:fictionops.com`
- Royal Road Chapters Knowledge Base: https://www.royalroad.com/support/knowledgebase/83
- Royal Road Rising Stars History Tracker: https://rst.doomlabs.net/
- Royal Road Watch: https://www.royalroadwatch.site/
- Royal Road forum discussion on Rising Stars: https://www.royalroad.com/forums/thread/163704
- Royal Road forum discussion on shoutouts: https://www.royalroad.com/forums/thread/162098
- Reddit discussion on shoutout swaps: https://www.reddit.com/r/royalroad/comments/1q46kpq/what_are_shout_out_swaps/
