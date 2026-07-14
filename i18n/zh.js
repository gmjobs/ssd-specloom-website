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
      title: "Specloom 经纬 · 看得见、可验证的 AI 研发工作台",
      description:
        "Specloom 是运行在 VS Code / Cursor 中的 AI 研发工作台：把模糊想法澄清为明确任务，让需求、规格、开发、测试、发布和历史记录全程可查看、可验证、可恢复。",
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
      badge: "VS Code / Cursor · AI 研发工作台",
      product: "Specloom",
      productZh: "经纬",
      titleLead: "把模糊想法变成",
      titleGrad: "可信交付",
      tagline:
        "从一句想法开始，逐步形成明确需求与可执行任务。每个节点都能看到输入、输出、执行记录和验证结果，重开项目也能继续。",
      primaryCta: { label: "安装", target: "#install" },
      secondaryCta: { label: "了解工作流" },
      meta1: "任务过程不再黑盒",
      meta2: "完成必须有验证证据",
      meta3: "历史交付可恢复",
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
      heading: "把零散想法，编织成可信交付",
      lede: "想法、痛点和明确需求都可以进入 Specloom；AI 先澄清意图，再拆成可执行任务，沿规格、设计、代码、测试和发布逐步交付。",
      reqLabel: "需求与想法",
      assetLabel: "可交付物",
      brandSub: "意图编译为任务 · 任务沉淀为交付",
      req: { r1: "想法", r2: "一句话需求", r3: "澄清对话", r4: "约束/边界", r5: "验收点" },
      asset: { a1: "规格", a2: "原型", a3: "技术方案", a4: "代码", a5: "测试", a6: "追溯" },
    },

    what: {
      eyebrow: "这是什么",
      heading: "不是一个看不见过程的 AI 黑盒",
      lede: "Specloom 把对话式 AI 变成结构化工作流：每个阶段有明确任务、依赖、输入、输出、尝试记录和门禁，用户随时知道正在做什么、为什么停下、接下来是什么。",
      cards: [
        {
          icon: "spec",
          title: "先澄清意图，再开始执行",
          desc: "一句模糊想法会先补齐目标、范围、约束、假设和验收标准，再形成可评审规格；不清楚的地方显式呈现，不让 AI 靠猜测直接开工。",
        },
        {
          icon: "ai",
          title: "任务与内容都看得见",
          desc: "规格、原型、方案、代码、单元测试、验收、发布各自成为任务节点；点开即可查看任务说明、生成内容、真实执行结果和失败原因。",
        },
        {
          icon: "verify",
          title: "完成不是一句口头声明",
          desc: "命令退出码、测试报告、文件变化和发布结果会进入执行记录；缺少证据时明确显示未验证，不把“AI 说完成了”冒充真实完成。",
        },
        {
          icon: "model",
          title: "连接你已有的 AI 工具",
          desc: "支持 Cursor Agent、Claude Code、OpenAI Codex、OpenAI 兼容 API 和 VS Code 语言模型；首次向导会检测环境、验证连接并冻结明确模型。",
        },
        {
          icon: "trace",
          title: "关闭再打开，记录还在",
          desc: "工作项、任务尝试、产物版本、阶段流转和门禁记录随项目保存；重开对应需求后，可以继续查看原来的交付过程和内容。",
        },
        {
          icon: "local",
          title: "项目记录本地优先",
          desc: "工作项与交付档案保存在工作区 .lifecycle/，可随 git 管理。发送给外部 AI 的上下文由所选提供方处理，执行副作用会在门禁中明确展示。",
        },
      ],
    },

    why: {
      eyebrow: "解决什么问题",
      heading: "简单任务省步骤，重要任务留控制",
      lede: "同一套任务和证据模型支持两种节奏：边界清晰时自动推进，风险较高时在关键节点由你确认。",
      simple: {
        tag: "简单档",
        title: "简单需求一键成品",
        desc: "对低风险、边界清晰的需求，Specloom 自动执行已确认的任务路径，并保留完整过程记录。",
        points: [
          "从澄清、实现到验证连续推进",
          "原型与小改动获得快速反馈",
          "每件产物仍可追溯回规格",
        ],
      },
      complex: {
        tag: "标准档",
        title: "关键需求逐道人审",
        desc: "对重要或高风险工作，在规格、方案、测试、发布等节点设置门禁；确认通过或驳回修订后再继续。",
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
      lede: "从需求到发布与运维形成完整路径。切换档位即可看到哪里自动执行、哪里需要人审，以及每一步留下了什么证据。",
      modeSimpleLabel: "简单档 — 一键成品",
      modeComplexLabel: "标准档 — 逐道人审",
      modeAria: "流水线档位",
      stages: [
        { name: "需求", desc: "澄清目标、范围、约束、假设与验收标准。" },
        { name: "产品", desc: "形成规格、原型和可评审的产品决策。" },
        { name: "研发", desc: "拆解技术任务，生成方案并在工作区实现代码。" },
        { name: "测试", desc: "生成并运行单元测试、验收与质量门。" },
        { name: "发布", desc: "构建、生成发布说明，可选发布到本地 Docker 或 GitHub。" },
        { name: "运维 / 完成", desc: "核对发布结果，保留追溯关系与完整交付档案。" },
      ],
      legend: { auto: "自动", human: "人审" },
      legendNote: "门禁按所选档位展示；每道工序都可独立配置。",
    },

    steps: {
      eyebrow: "三步上手",
      heading: "三步，从一个想法到可验证交付",
      lede: "先完成约 3 分钟的首次设置，再记录想法或创建明确需求；Specloom 会把接下来的任务和执行路径展示出来。",
      s1: {
        title: "写下想法或需求",
        desc: "只有一句痛点也可以开始；AI 会通过澄清补齐目标、边界和验收标准。",
      },
      s2: {
        title: "确认任务路径",
        desc: "查看规格、方案、开发、测试和发布任务；简单档自动推进，标准档在关键门停下。",
      },
      s3: {
        title: "执行并检查证据",
        desc: "随时点开任务查看内容、命令、测试和错误；完成后形成可恢复的交付档案。",
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
      heading: "安装扩展，开始第一件真实任务",
      lede: "下载最新 VSIX，在 VS Code / Cursor 中安装。首次向导会检查环境，并让你从 Cursor、Claude、Codex、OpenAI 兼容 API 或 VS Code 模型中选择。",
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
      infoTitle: "约 3 分钟完成首次设置",
      infoText:
        "下载并从 VSIX 安装后，打开 Specloom，按向导完成环境检测、AI 连接和项目确认。随后记录一个想法或直接创建需求；工作记录保存在项目 .lifecycle/ 中。",
      docsCta: "了解工作流",
    },

    footer: {
      tagline: "VS Code / Cursor 里的 AI 研发工作台：任务看得见，完成有证据，历史可恢复。",
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
        title: "Specloom 文档 · 从想法到可信交付",
        description:
          "Specloom 使用文档：VSIX 安装、首次环境检查、AI 连接、需求孵化、任务执行路径、门禁、交付记录与常见问题。",
      },
      back: "← 返回首页",
      title: "Specloom 文档",
      sub: "从一句想法开始，在 VS Code / Cursor 中形成明确需求与可执行任务，并沿完整路径交付。本页覆盖安装、首次设置、日常使用与进阶能力。",
      tocLabel: "目录",
      toc: {
        quickstart: "快速开始",
        install: "安装与 AI 配置",
        board: "需求孵化与交付看板",
        sdd: "任务与执行路径",
        gates: "档位与门禁",
        advanced: "进阶能力",
        data: "数据与产物",
        faq: "常见问题",
      },
      quickstart: {
        h: "快速开始",
        s1: "<b>完成首次设置：</b>打开 Specloom，按向导完成环境检测、选择 AI、连接测试和项目确认。",
        s2: "<b>开始一件事：</b>只有想法就选「记录一个想法」；需求已经明确则直接创建工作项。",
        s3: "<b>查看并运行任务：</b>在详情页确认任务路径后运行。点开任一节点可查看说明、内容、执行结果和历史尝试。",
      },
      install: {
        h: "安装与 AI 配置",
        p1: "Specloom 目前通过公开 VSIX 安装。下载官网最新安装包后，在 VS Code / Cursor 扩展页右上角选择「从 VSIX 安装…」，安装完成后重载窗口：",
        code: "1. 下载 specloom-<version>.vsix\n2. 扩展页 → … → 从 VSIX 安装…\n3. Developer: Reload Window",
        p2: "首次向导会展示本机可用的 AI，并要求真实连接测试。当前支持：",
        opt1: "<b>CLI Agent：</b>Cursor Agent、Claude Code、OpenAI Codex；支持在明确授权后直接修改工作区。",
        opt2: "<b>模型/API：</b>OpenAI 兼容 API 与 VS Code Language Model；适合文本生成或由宿主提供的模型能力。",
        note: "从 v0.0.176 开始，插件通过官网 stable 清单自动或手动检查更新，不依赖 Marketplace 判定版本。",
      },
      board: {
        h: "需求孵化与交付看板",
        p1: "左侧活动栏包含两个清晰入口：需求孵化用于收集模糊想法，交付看板用于管理已经形成的工作项。工作项沿七个生命周期阶段推进：",
        code1: "需求 → 产品 → 研发 → 测试 → 发布 → 运维 → 完成",
        p2: "每个工作项显示当前阶段和状态；重新打开项目或工作项时，原来的任务、产物和执行记录会继续显示。",
        code2: "工作项 → 阶段 → 任务节点 → 尝试记录 → 产物 / 证据",
        p3: "点击工作项进入详情，可以查看完整执行路径。每个任务节点都包含任务说明、依赖、输入、输出、状态、耗时和历史尝试；需求或测试不会再以空白占位展示。",
      },
      sdd: {
        h: "任务与执行路径",
        p1: "流水线不是一串黑盒提示词。每个阶段会展开为格式化任务，并记录真实输入、输出、命令、测试和发布证据：",
        code: "[需求澄清] → [规格 / 原型] → [方案 / 开发] → [单测 / 验收] → [发布 / 归档]",
        p2: "<b>推荐顺序</b>：先确认需求和验收标准，再执行下游任务。上游发生变化时，受影响的证据与产物会标记过期，避免继续拿旧结果冒充当前完成。",
        th: { step: "步骤", input: "输入", output: "产出", flow: "自动阶段流转" },
        r1: { step: "需求 / 规格", input: "想法、约束、项目上下文", output: "结构化需求、假设、验收标准", flow: "需求 → 产品" },
        r2: { step: "产品 / 方案", input: "已确认规格", output: "原型、验收方案、技术设计", flow: "产品 → 研发" },
        r3: { step: "开发", input: "冻结任务与方案", output: "工作区代码、变更摘要、追溯映射", flow: "研发" },
        r4: { step: "测试 / 发布", input: "真实代码与构建结果", output: "单测、验收、发布事实与交付档案", flow: "测试 → 发布 → 完成" },
        h3: "写入工作区与外部副作用",
        p3: "支持写文件的 CLI Agent 可以在确认后直接修改当前工作区。执行前会冻结模型、目录、写入范围、命令和门禁；测试、Docker 或 GitHub 发布等外部结果会记录为可复查事实。建议在干净的 git 工作区使用。",
      },
      gates: {
        h: "档位与门禁",
        p1: "同一套任务与证据模型支持两种节奏，你只需选择需要多少人工控制：",
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
        p1: "打开工作区文件夹时，项目配置、工作项、任务运行、产物和交付记录保存在 <code>.lifecycle/</code>，可随 git 管理并在重开项目后恢复：",
        tree: "<你的项目>/\n└── .lifecycle/\n    ├── project.json          # 项目与应用配置\n    ├── items.json            # 工作项与生命周期状态\n    ├── runs/                 # 任务快照、执行报告与证据\n    └── <工作项id>/            # 规格、方案、测试与交付产物",
        p2: "已有源码默认留在当前文件夹，不会被搬家。外部 AI 会接收完成任务所需的受控上下文；具体数据处理边界取决于你选择的 AI 提供方。关键存储损坏或迁移不可信时，Specloom 会进入受限只读模式而不是继续覆盖数据。",
      },
      faq: {
        h: "常见问题",
        q1: "AI 工具探测或连接测试失败",
        a1: "打开「Specloom: Agent AI 工具设置」，检查 Cursor / Claude / Codex 的可执行路径、登录状态和明确模型，然后重新运行连接测试。只有真实 probe 与非空响应成功才会显示已连接。",
        q2: "报错「未找到可用的语言模型」（vscode-lm 模式）",
        a2: "需安装并登录可提供模型的扩展（如 GitHub Copilot）。",
        q3: "点「打开」提示文档不存在",
        a3: "<code>.lifecycle/&lt;id&gt;/</code> 下的产物被手工删除了，重新「生成」即可。",
        q4: "任务为什么停住或没有推进",
        a4: "打开对应任务查看阻断原因。常见原因包括前置任务未完成、证据已过期、命令或测试失败、需要人工门禁，或外部执行结果需要对账。Specloom 不会只根据阶段名称伪造任务成功。",
        q5: "产物没落盘，只开了临时文档",
        a5: "当前没打开工作区文件夹，请在扩展宿主窗口打开一个文件夹后重试。",
      },
    },
  };
})();
