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
      loomAlt: "经线与纬线编织意象",
    },

    what: {
      eyebrow: "这是什么",
      heading: "规格，就是驱动一切的织机",
      lede: "Specloom 在 VS Code 内把散落的文档与提示词，收敛为一份「活」的规格——需求、原型、设计、代码、测试都由它派生，并在同一面板有序流转。",
      cards: [
        {
          icon: "spec",
          title: "规格为唯一事实源",
          desc: "需求、原型、技术方案、代码与测试都从同一份活规格派生；上游一变，下游自动标记过期并按新规格重建，意图与实现不再脱节。",
        },
        {
          icon: "ai",
          title: "AI 贯穿全生命周期",
          desc: "需求 → 规格/原型 → 技术方案 → 代码 → 测试 → 发布，每一道工序由 AI 自动产出成果，而非外挂式助手。默认对接 Claude Code，也支持 VS Code 语言模型与 OpenAI 兼容端点。",
        },
        {
          icon: "pipe",
          title: "就在 VS Code 里",
          desc: "阶段看板与流水线详情合一，工作项进度一目了然；产物落盘到工作区 .lifecycle/ 目录，可随 git 提交、团队共享。",
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

    install: {
      eyebrow: "开始使用",
      heading: "装上扩展，编织第一份规格",
      lede: "Specloom 是 VS Code 扩展，默认以 Claude Code 作为 AI 引擎。先配好 AI 引擎，再在扩展里新建工作项、运行流水线。",
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
      },
      copyright: "© 2026 Specloom（经纬）",
    },
  };
})();
