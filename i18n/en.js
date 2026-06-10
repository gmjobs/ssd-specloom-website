/*
 * i18n/en.js — English dictionary.
 * Structure MUST stay symmetric with i18n/zh.js.
 */
(function () {
  "use strict";
  var NS = (window.SPECLOOM = window.SPECLOOM || {});
  NS.dict = NS.dict || {};

  NS.dict.en = {
    meta: {
      htmlLang: "en",
      title: "Specloom · Spec-Driven Development Pipeline for VS Code",
      description:
        "Specloom is a VS Code extension that takes a requirement through a configurable pipeline — spec, prototype, design, code and tests — each stage auto-generated and advanced through review gates. The spec is the single source of truth.",
    },

    nav: {
      what: "What",
      why: "Why",
      how: "Workflow",
      install: "Install",
      menu: "Toggle navigation",
    },

    lang: {
      label: "Language",
      zh: "中",
      en: "EN",
      zhAria: "Switch to Chinese",
      enAria: "Switch to English",
    },

    hero: {
      badge: "VS Code extension · Spec-Driven Development",
      product: "Specloom",
      productZh: "经纬",
      titleLead: "Weave specs into",
      titleGrad: "shipped software",
      tagline:
        "A VS Code extension that walks a requirement through a configurable pipeline, from spec to delivery. The spec is the single source of truth — change it upstream and the downstream rebuilds.",
      primaryCta: { label: "Install", target: "#install" },
      secondaryCta: { label: "See the workflow" },
      loomAlt: "Warp-and-weft loom motif",
    },

    what: {
      eyebrow: "What it is",
      heading: "The spec is the loom that runs everything",
      lede: "Inside VS Code, Specloom collapses scattered docs and prompts into one living spec — requirements, prototypes, design, code and tests all derive from it and flow through a single panel.",
      cards: [
        {
          icon: "spec",
          title: "Single source of truth",
          desc: "Requirements, prototypes, design, code and tests all derive from one living spec. Change it upstream and the downstream is marked stale and rebuilt — no drift between intent and implementation.",
        },
        {
          icon: "ai",
          title: "AI across the lifecycle",
          desc: "Requirement → spec/prototype → design → code → test → release: AI produces the artifact at every stage, not as a bolt-on assistant. Defaults to Claude Code, and also supports VS Code language models and OpenAI-compatible endpoints.",
        },
        {
          icon: "pipe",
          title: "Right inside VS Code",
          desc: "A board and pipeline detail in one view keep every work item's progress visible. Artifacts land in your workspace's .lifecycle/ folder — commit them with git, share them with the team.",
        },
      ],
    },

    why: {
      eyebrow: "Why it matters",
      heading: "Two rhythms, one source of truth",
      lede: "Ship trivial work in one shot; gate the critical work stage by stage. The same spec powers both — you only choose how much human review to weave in.",
      simple: {
        tag: "Simple",
        title: "One-shot delivery",
        desc: "For low-risk, well-bounded requirements, Specloom takes the spec all the way to a shipped result in a single pass, with no manual hand-offs.",
        points: [
          "From requirement to release, all auto-generated",
          "Fast feedback for prototypes and small changes",
          "Every artifact still traces back to the spec",
        ],
      },
      complex: {
        tag: "Standard",
        title: "Critical work, reviewed stage by stage",
        desc: "For high-stakes work, place a human gate at any stage; the pipeline resumes only after a person approves — or sends it back for revision.",
        points: [
          "Three gate types: human review / command check / auto-pass",
          "Rejections flow back into the next generation pass",
          "Approvals and lineage stay fully traceable and auditable",
        ],
      },
    },

    pipeline: {
      eyebrow: "How it works",
      heading: "A configurable development pipeline",
      lede: "Six stages, end to end. Switch the mode to see where the pipeline runs automatically and where a human reviews before it continues.",
      modeSimpleLabel: "Simple — one shot",
      modeComplexLabel: "Standard — human review",
      modeAria: "Pipeline mode",
      stages: [
        { name: "Requirement", desc: "Capture intent as a structured, reviewable requirement and spec." },
        { name: "Spec / Prototype", desc: "Generate the spec and an interactive prototype to click through and review." },
        { name: "Design", desc: "Derive the technical design, architecture diagrams and interfaces from the spec." },
        { name: "Code", desc: "Implement runnable code in your workspace, straight from the approved spec." },
        { name: "Test", desc: "Generate acceptance tests against the spec and run them." },
        { name: "Release", desc: "Package and ship, with the spec and artifacts as the audit trail." },
      ],
      legend: { auto: "Auto", human: "Human review" },
      legendNote: "Gates shown for the selected mode. Every stage is configurable.",
    },

    install: {
      eyebrow: "Get started",
      heading: "Install the extension, weave your first spec",
      lede: "Specloom is a VS Code extension and defaults to Claude Code as its AI engine. Set up the AI engine first, then create a work item and run the pipeline.",
      copyLabel: "Copy",
      copiedLabel: "Copied",
      copyAria: "Copy install command",
      placeholderNote: "",
      infoTitle: "Runs inside VS Code",
      infoText:
        "Install Specloom from the VS Code Extensions panel, then run “Specloom: Configure AI (guided)” from the Command Palette to connect it. Create a work item in the sidebar and hit “▶ Run pipeline” — data lives in your workspace's .lifecycle/, ready to commit with git.",
      docsCta: "See the workflow",
    },

    footer: {
      tagline: "A spec-driven development pipeline inside VS Code. The spec is the single source of truth.",
      colProduct: "Navigation",
      links: {
        what: "What it is",
        why: "Why Specloom",
        how: "Workflow",
        install: "Install",
      },
      copyright: "© 2026 Specloom (经纬)",
    },
  };
})();
