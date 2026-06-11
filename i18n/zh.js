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
  };
})();
