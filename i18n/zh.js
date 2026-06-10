/*
 * i18n/zh.js — 中文字典。
 * 结构必须与 i18n/en.js 完全对称（NFR-I1 / AC-3.2 / AC-8.2）。
 */
(function () {
  "use strict";
  var NS = (window.SPECLOOM = window.SPECLOOM || {});
  NS.dict = NS.dict || {};

  NS.dict.zh = {
    meta: {
      htmlLang: "zh-CN",
      title: "Specloom 经纬 · 规格驱动开发生命周期编排器",
      description:
        "Specloom（经纬）是 AI 原生的规格驱动开发（SDD）软件生命周期编排器，以规格为唯一事实源。",
    },

    nav: {
      what: "是什么",
      why: "为什么",
      how: "工作流",
      install: "安装",
      github: "GitHub",
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
      badge: "AI 原生 · 规格驱动开发",
      product: "Specloom",
      productZh: "经纬",
      titleLead: "把规格编织成",
      titleGrad: "可交付的软件",
      tagline:
        "AI 原生的规格驱动开发编排器——以规格为唯一事实源，驱动从需求到发布的完整流水线。",
      primaryCta: { label: "安装", target: "#install" },
      secondaryCta: { label: "在 GitHub 查看" },
      loomAlt: "经线与纬线编织意象",
    },

    what: {
      eyebrow: "这是什么",
      heading: "规格就是驱动一切的织机",
      lede: "Specloom 是面向规格驱动开发（SDD）的 AI 原生编排器。不再依赖散落的文档与提示词，一份「活」的规格驱动整条生命周期。",
      cards: [
        {
          icon: "spec",
          title: "规格为唯一事实源",
          desc: "需求、原型、设计与测试都从同一份活规格派生，意图与实现之间不再产生偏差。",
        },
        {
          icon: "ai",
          title: "AI 贯穿全生命周期",
          desc: "在 SDD 范式下，AI 贯穿每一道工序——需求 → 规格/原型 → 设计 → 代码 → 测试 → 发布，而非外挂式助手。",
        },
        {
          icon: "pipe",
          title: "可配置流水线",
          desc: "自由编排每一道工序，并决定自动化在哪里交接给人审。流水线适配团队，而非反过来。",
        },
      ],
    },

    why: {
      eyebrow: "解决什么问题",
      heading: "两种模式，同一事实源",
      lede: "简单工作一键成品，高风险工作逐道把关。同一份规格同时支撑两者——你只需选择编织进多少人审。",
      simple: {
        tag: "简单",
        title: "简单需求一键成品",
        desc: "对低风险、边界清晰的需求，Specloom 把规格一次性推进到可交付成品。",
        points: [
          "从需求到发布，无需人工交接",
          "原型与小改动获得快速反馈",
          "每件产物仍可追溯回规格",
        ],
      },
      complex: {
        tag: "复杂",
        title: "复杂需求逐道人审",
        desc: "对高风险工作，在任意工序插入人审节点，由人确认后流水线再继续推进。",
        points: [
          "在规格、设计、发布等节点设置人审门控",
          "审批记录全部挂靠在规格上",
          "门控通过的瞬间，自动化立即续跑",
        ],
      },
    },

    pipeline: {
      eyebrow: "怎么用",
      heading: "可配置的生命周期流水线",
      lede: "六道工序端到端贯通。切换模式即可看到流水线在哪里自动执行、在哪里由人审后再继续。",
      modeSimpleLabel: "简单 — 一键成品",
      modeComplexLabel: "复杂 — 逐道人审",
      modeAria: "流水线模式",
      stages: [
        { name: "需求", desc: "把意图沉淀为结构化、机器可读的规格。" },
        { name: "规格 / 原型", desc: "生成规格与可交互原型，供评审确认。" },
        { name: "设计", desc: "从规格推导技术设计、架构与接口。" },
        { name: "代码", desc: "依据已确认的规格直接实现可运行代码。" },
        { name: "测试", desc: "面向规格生成并运行验收测试。" },
        { name: "发布", desc: "打包交付，规格即审计轨迹。" },
      ],
      legend: { auto: "自动", human: "人审" },
      legendNote: "门控按所选模式展示；每道工序都可配置。",
    },

    install: {
      eyebrow: "开始使用",
      heading: "安装并编织你的第一份规格",
      lede: "Specloom 开源、可零依赖试用。复制命令、运行，即可从一份规格开始。",
      copyLabel: "复制",
      copiedLabel: "已复制",
      copyAria: "复制安装命令",
      placeholderNote: "占位文案 —— 最终安装命令待确认。",
      infoTitle: "开源，随你运行",
      infoText:
        "阅读源码、提交 issue、自托管文档。评估这个项目所需的一切都在 GitHub 上。",
      docsCta: "阅读文档",
      githubCta: "在 GitHub 加星",
    },

    footer: {
      tagline: "AI 原生的规格驱动开发生命周期编排器，以规格为唯一事实源。",
      colProduct: "产品",
      colResource: "资源",
      links: {
        what: "这是什么",
        why: "为什么选 Specloom",
        how: "工作流",
        install: "安装",
        github: "GitHub 仓库",
        docs: "文档",
        license: "许可协议",
      },
      copyright: "© 2026 Specloom（经纬）。开源项目。",
      licenseLabel: "许可",
    },
  };
})();
