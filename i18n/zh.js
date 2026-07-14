/*
 * i18n/zh.js — 中文字典。
 * 结构必须与 i18n/en.js 完全对称。
 */
(function () {
  "use strict";
  var NS = (window.SPECLOOM = window.SPECLOOM || {});
  NS.dict = NS.dict || {};

  NS.dict.zh = {
    meta: {
      htmlLang: "zh-CN",
      title: "Specloom 经纬 · VS Code 里的规格驱动研发流水线",
      description:
        "Specloom 是一个 VS Code 扩展：把需求沿可配置流水线，逐阶段沉淀为规格、原型、技术方案、代码与测试，每阶段自动产出、按门禁评审推进。规格是唯一事实源。",
    },

    nav: {
      what: "是什么",
      why: "为什么",
      how: "工作流",
      install: "安装",
      docs: "文档",
      menu: "展开导航",
    },

    lang: {
      label: "语言",
      zh: "中",
      en: "EN",
      zhAria: "切换为中文",
      enAria: "切换为英文",
    },

    hero: {
      badge: "VS Code 扩展 · 规格驱动研发",
      product: "Specloom",
      productZh: "经纬",
      titleLead: "把规格编织成",
      titleGrad: "可交付的软件",
      tagline:
        "一个 VS Code 扩展——让一条需求沿可配置流水线，从规格到交付有序走完每一步。规格是唯一事实源，上游一变，下游自动重建。",
      primaryCta: { label: "安装", target: "#install" },
      secondaryCta: { label: "了解工作流" },
      meta1: "规格为唯一事实源",
      meta2: "可配置门禁与档位",
      meta3: "需求全程可追溯",
      loomAlt: "经线与纬线编织意象",
    },

    show: {
      alt: "示意：一份 spec.md 规格，据此派生出原型、技术方案、代码、测试与追溯映射",
      winTag: "Specloom",
      specTitle: "需求：邮箱登录",
      specGoal: "## 目标：用户用邮箱 + 密码登录",
      ac1: "校验邮箱格式，错误即时提示",
      ac2: "连续 5 次失败锁定 10 分钟",
      specNote: "# 改规格 → 下游产物自动标记过期",
      genHead: "据规格生成 / 落盘",
      g1: "可点击交互原型",
      g2: "技术方案 + 架构图",
      g3: "可运行实现代码",
      g4: "面向规格的验收测试",
      g5: "需求 ↔ 代码 ↔ 测试 追溯",
    },

    flow: {
      eyebrow: "从需求到交付",
      heading: "把零散的需求，编织成可交付物",
      lede: "把零散的需求与想法收进来，以规格为单一事实源，逐阶段产出规格、设计、代码与测试——干净、可追溯。",
      reqLabel: "需求与想法",
      assetLabel: "可交付物",
      brandSub: "规格即织机 · 自动编织交付",
      req: { r1: "想法", r2: "一句话需求", r3: "澄清对话", r4: "约束/边界", r5: "验收点" },
      asset: { a1: "规格", a2: "原型", a3: "技术方案", a4: "代码", a5: "测试", a6: "追溯" },
    },

    what: {
      eyebrow: "这是什么",
      heading: "不是又一个代码补全",
      lede: "Specloom 在 VS Code 内把散落的文档与提示词，收敛为一份「活」的规格——需求、原型、设计、代码、测试都由它派生，并在同一面板有序流转。",
      cards: [
        {
          icon: "spec",
          title: "规格为唯一事实源",
          desc: "需求、原型、技术方案、代码与测试都从同一份活规格派生；上游一变，下游自动标记过期并按新规格重建，意图与实现不再脱节。",
        },
        {
          icon: "ai",
          title: "产物自动产出",
          desc: "规格、可交互原型、技术方案、代码、测试、追溯映射——每道工序该产出的，都据规格一次到位，而非外挂式补全。",
        },
        {
          icon: "verify",
          title: "双轮校验，杜绝幻觉",
          desc: "代码生成后再独立校验回看，核对引用的符号、依赖、契约是否真实存在，把「看起来对」的幻觉挡在落盘之前。",
        },
        {
          icon: "model",
          title: "用你自己的模型",
          desc: "默认对接 Claude Code；也支持 VS Code 语言模型与 OpenAI 兼容端点（通义 / 千帆 / 豆包 / DeepSeek…），模型选择权在你。",
        },
        {
          icon: "trace",
          title: "全程可追溯、可审计",
          desc: "需求 ↔ 代码 ↔ 测试 的追溯映射，产物记录血缘与来源；每一次门禁审批都挂靠在规格上，破除生成代码的黑盒。",
        },
        {
          icon: "local",
          title: "数据留在你的仓库",
          desc: "全部产物落盘到工作区 .lifecycle/ 目录，可随 git 提交、团队共享，不离开你的代码仓库。",
        },
      ],
    },

    why: {
      eyebrow: "解决什么问题",
      heading: "两种节奏，同一事实源",
      lede: "简单需求一键贯穿全程，关键需求逐道人工把关。同一份规格同时支撑两者——你只需决定编织进多少人审。",
      simple: {
        tag: "简单档",
        title: "简单需求一键成品",
        desc: "对低风险、边界清晰的需求，Specloom 把规格一次性推进到可交付成品，全程无需人工交接。",
        points: [
          "从需求到发布全程自动产出",
          "原型与小改动获得快速反馈",
          "每件产物仍可追溯回规格",
        ],
      },
      complex: {
        tag: "标准档",
        title: "关键需求逐道人审",
        desc: "对高风险工作，在任意工序设置人审门禁；由人确认通过或驳回修订后，流水线再继续推进。",
        points: [
          "人工评审 / 命令校验 / 自动放行三类门禁",
          "驳回意见回流到下一轮重新生成",
          "审批与血缘全程可追溯、可审计",
        ],
      },
    },

    pipeline: {
      eyebrow: "怎么用",
      heading: "可配置的研发流水线",
      lede: "六道工序端到端贯通。切换档位即可看到流水线在哪里自动执行、在哪里由人审后再继续。",
      modeSimpleLabel: "简单档 — 一键成品",
      modeComplexLabel: "标准档 — 逐道人审",
      modeAria: "流水线档位",
      stages: [
        { name: "需求", desc: "把意图沉淀为结构化、可评审的需求与规格。" },
        { name: "规格 / 原型", desc: "生成规格说明与可交互原型，即点即玩、供评审确认。" },
        { name: "技术方案", desc: "从规格推导技术方案、架构图与接口设计。" },
        { name: "代码", desc: "依据已确认的规格，直接在工作区实现可运行代码。" },
        { name: "测试", desc: "面向规格生成验收测试用例并运行校验。" },
        { name: "发布", desc: "打包交付，规格与产物即审计轨迹。" },
      ],
      legend: { auto: "自动", human: "人审" },
      legendNote: "门禁按所选档位展示；每道工序都可独立配置。",
    },

    steps: {
      eyebrow: "三步上手",
      heading: "三步，从一句话到可交付",
      lede: "在编辑器侧栏新建工作项，点「▶ 运行流水线」，剩下的交给规格。",
      s1: {
        title: "描述需求",
        desc: "写下标题与一句话需求，自动起草结构化规格，并生成一份可点击的交互原型供评审。",
      },
      s2: {
        title: "按档评审",
        desc: "简单档自动放行；标准档在规格、方案、发布等门停下，由你通过或驳回修订。",
      },
      s3: {
        title: "自动交付",
        desc: "技术方案、代码、测试随规格生成并落盘到 .lifecycle/，可随 git 提交、团队共享。",
      },
    },

    roadmap: {
      eyebrow: "路线图",
      badge: "规划中",
      heading: "从单兵到团队，平滑长出",
      lede: "编辑器里已足够个人高效。以下面向团队 / 企业的能力仍在规划中，尚未交付——列在此处只为说明方向，不代表当前版本已具备。",
      r1: { title: "可视化流程编排", desc: "在后台配置阶段 / 门禁 / 角色 / 档位，可全局或按应用生效。" },
      r2: { title: "审批中心 + RBAC", desc: "人审门待办集中处理，谁审批、何时放行全程可追溯。" },
      r3: { title: "通知与协作", desc: "评审待办、放行 / 驳回实时推送到团队 IM。" },
      r4: { title: "交付度量看板", desc: "吞吐、交付周期、各阶段瓶颈、回流率与首次正确率（FPY）。" },
    },

    install: {
      eyebrow: "开始使用",
      heading: "装上扩展，编织第一份规格",
      lede: "Specloom 是 VS Code 扩展，默认以 Claude Code 作为引擎。先配好引擎，再在扩展里新建工作项、运行流水线。",
      copyLabel: "复制",
      copiedLabel: "已复制",
      copyAria: "复制安装命令",
      placeholderNote: "",
      latestLabel: "最新稳定版",
      loadingRelease: "正在检查版本…",
      releaseUnavailable: "首个公开安装包准备中",
      downloadVsix: "下载 VSIX",
      releaseNotes: "更新说明",
      checksumLabel: "SHA-256",
      infoTitle: "在 VS Code 里运行",
      infoText:
        "在 VS Code 扩展面板安装 Specloom，命令面板运行「Specloom: 配置 AI（引导）」完成对接。随后在侧栏新建工作项、点击「▶ 运行流水线」即可——数据存于工作区 .lifecycle/，可随 git 提交。",
      docsCta: "了解工作流",
    },

    footer: {
      tagline: "VS Code 里的规格驱动研发流水线，以规格为唯一事实源。",
      colProduct: "导航",
      links: {
        what: "是什么",
        why: "为什么选 Specloom",
        how: "工作流",
        install: "安装",
        docs: "文档",
      },
      copyright: "© 2026 Specloom（经纬）",
    },

    guide: {
      meta: {
        htmlLang: "zh-CN",
        title: "Specloom 文档 · 快速上手与功能说明",
        description:
          "Specloom 使用文档：在 VS Code 内把需求沿规格驱动流水线推进——安装与 AI 配置、看板与详情面板、SDD 流水线、档位与门禁、进阶能力、数据存储与常见问题。",
      },
      back: "← 返回首页",
      title: "Specloom 文档",
      sub: "在 VS Code 内，让一条需求沿可配置的规格驱动流水线，有序走完从规格到交付的每一步。本页覆盖安装、日常使用与进阶能力。",
      tocLabel: "目录",
      toc: {
        quickstart: "快速开始",
        install: "安装与 AI 配置",
        board: "看板与详情面板",
        sdd: "SDD 流水线",
        gates: "档位与门禁",
        advanced: "进阶能力",
        data: "数据与产物",
        faq: "常见问题",
      },
      quickstart: {
        h: "快速开始",
        s1: "<b>配置 AI：</b>命令面板运行 <code>Specloom: 配置 AI（引导）</code>（默认使用 Claude Code CLI，需先 <code>claude login</code>）。",
        s2: "<b>新建工作项：</b>在侧边栏 <b>Specloom</b> 中创建，填写标题与一句话需求。",
        s3: "<b>运行流水线：</b>在详情页点击 <b>▶ 运行流水线</b>——简单档一路自动产出；标准档在每道评审门停下，由你审批通过或驳回修订。",
      },
      install: {
        h: "安装与 AI 配置",
        p1: "Specloom 是一个 VS Code 扩展。在 VS Code 扩展面板中安装后，需要配置一个 AI 提供方。默认走 <b>Claude Code CLI</b>，在本机安装并登录：",
        code: "npm i -g @anthropic-ai/claude-code\nclaude login",
        p2: "若不想用 CLI，可在设置里把 <code>lifecycle.aiProvider</code> 改为：",
        opt1: "<code>vscode-lm</code>：复用 GitHub Copilot 等已授权的 VS Code 语言模型（此模式不支持「直接写文件」）。",
        opt2: "<code>openai-compatible</code>：对接通义 / 千帆 / 豆包 / DeepSeek 等 OpenAI 兼容端点。",
        note: "切换设置即时生效，无需重载窗口。",
      },
      board: {
        h: "看板与详情面板",
        p1: "左侧活动栏的 <b>Specloom</b> 图标打开「工作项看板」，工作项按五个阶段分组：",
        code1: "💡 需求 → 📖 产品 → 💻 研发 → 🧪 测试 → ✅ 完成",
        p2: "每个工作项一行，右侧显示 SDD 进度小标记与更新日期，例如：",
        code2: "登录功能    ✓规 ✓方 ○码 ○测  ·  6/2",
        p3: "含义：<code>✓规</code>=已有规格、<code>✓方</code>=已生成技术方案、<code>○码</code>=代码骨架未生成、<code>○测</code>=测试用例未生成。点任意工作项打开详情面板，可编辑标题/需求/规格、点击进度条圆点切换阶段，并驱动整条 SDD 流水线。",
      },
      sdd: {
        h: "SDD 流水线",
        p1: "详情面板里四个节点横向排列，依规格逐步派生产物：",
        code: "[规格说明] → [技术方案] → [代码骨架] → [测试用例]",
        p2: "<b>推荐顺序</b>：先生成「规格说明」，之后技术方案 / 代码骨架 / 测试用例都基于规格生成。未生成规格就点后续步骤会提示「请先执行 AI 生成规格」。",
        th: { step: "步骤", input: "输入", output: "产出", flow: "自动阶段流转" },
        r1: { step: "规格说明", input: "标题 + 需求描述", output: "规格文本", flow: "需求 → 产品" },
        r2: { step: "技术方案", input: "规格说明", output: "<code>.lifecycle/&lt;id&gt;/design.md</code>", flow: "产品 → 研发" },
        r3: { step: "代码骨架", input: "规格说明", output: "<code>code.md</code> 或直接写工作区文件", flow: "—" },
        r4: { step: "测试用例", input: "规格说明", output: "<code>.lifecycle/&lt;id&gt;/tests.md</code>", flow: "研发 → 测试" },
        h3: "代码骨架直接写入工作区（可选）",
        p3: "设置项 <code>lifecycle.codeGenWriteFiles</code> 开启后，「代码骨架」改用 agent 模式，让 AI 用 Write/Edit 工具直接在当前工作区创建/修改源文件，完成后打开一份「改动总结」。建议在干净的 git 工作区下使用，便于 review 与回滚；每次执行前会弹确认框。",
      },
      gates: {
        h: "档位与门禁",
        p1: "同一份规格同时支撑两种节奏，你只需选择编织进多少人审：",
        profileSimple: "<b>简单档：</b>低风险、边界清晰的需求一键贯穿全程，无需人工交接。",
        profileStandard: "<b>标准档：</b>在规格、技术方案、发布等关键节点逐道人审，由人确认通过或驳回。",
        p2: "门禁分三类，可按团队 / 应用为每道工序自由编排：",
        g1: "<b>人工评审：</b>停下等人审批通过或驳回。",
        g2: "<b>命令校验：</b>跑一条命令 / CI，通过才放行。",
        g3: "<b>自动放行：</b>无需停留，直接续跑下一阶段。",
      },
      advanced: {
        h: "进阶能力（可选，默认关）",
        p: "以下能力把「让 AI 按规范产出 + 自动化 + 度量」做扎实，全部 opt-in，默认关闭即行为不变：",
        th: { cap: "能力", entry: "设置 / 入口", one: "一句话" },
        a1: { cap: "项目级全局约束 Steering", entry: "<code>.lifecycle/steering/*.md</code>", one: "写一次团队规范/技术栈/安全基线，所有阶段的 AI 都遵守。" },
        a2: { cap: "事件驱动自动化 Hooks", entry: "<code>.lifecycle/hooks.json</code>", one: "「代码落盘→跑测试」「spec 改→重生过期产物」等事件自动触发。" },
        a3: { cap: "原子步骤执行", entry: "<code>atomicSteps</code>", one: "大变更拆成小步逐个实现 + 校验 + 提交，失败停在该步不整笔废。" },
        a4: { cap: "双轮校验防幻觉", entry: "<code>verifyCodeGrounding</code>", one: "独立 Agent 核对代码引用的符号/依赖是否真实存在。" },
        a5: { cap: "Spec 自反馈", entry: "<code>specFeedback</code>", one: "交付后回看规格质量，沉淀改进 backlog 并打分。" },
        a6: { cap: "AI 效果度量", entry: "管理看板「AI 效果」", one: "采纳/重生率、首次正确率 FPY、规格质量分。" },
      },
      data: {
        h: "数据与产物",
        p1: "打开工作区文件夹时，全部数据存在工作区的 <code>.lifecycle/</code> 目录，可随 git 提交、团队共享：",
        tree: "<你的项目>/\n└── .lifecycle/\n    ├── items.json            # 所有工作项（标题/阶段/规格/产物路径…）\n    └── <工作项id>/\n        ├── design.md         # 技术方案\n        ├── code.md           # 代码骨架（文档模式）\n        └── tests.md          # 测试用例",
        p2: "删除工作项时，其 <code>.lifecycle/&lt;id&gt;/</code> 产物目录会被一并清理。未打开任何文件夹时，数据回退存到 VS Code 的 workspaceState（仅本机），AI 产物退化为临时文档（关闭即失，不落盘）。",
      },
      faq: {
        h: "常见问题",
        q1: "报错「未找到 Claude CLI」",
        a1: "未安装或不在 PATH。执行 <code>npm i -g @anthropic-ai/claude-code</code> 后 <code>claude login</code>，或用 <code>lifecycle.claudeCodePath</code> 指定完整路径。",
        q2: "报错「未找到可用的语言模型」（vscode-lm 模式）",
        a2: "需安装并登录可提供模型的扩展（如 GitHub Copilot）。",
        q3: "点「打开」提示文档不存在",
        a3: "<code>.lifecycle/&lt;id&gt;/</code> 下的产物被手工删除了，重新「生成」即可。",
        q4: "阶段没自动推进",
        a4: "只有当前正处于对应起始阶段时才会推进（如「技术方案」仅在「产品」阶段才推进到「研发」），以避免覆盖你手工设置的阶段。需要时直接点进度条圆点切换。",
        q5: "产物没落盘，只开了临时文档",
        a5: "当前没打开工作区文件夹，请在扩展宿主窗口打开一个文件夹后重试。",
      },
    },
  };
})();
