/*
 * i18n/en.js — English dictionary.
 * Structure MUST stay symmetric with i18n/zh.js (NFR-I1 / AC-3.2 / AC-8.2).
 */
(function () {
  "use strict";
  var NS = (window.SPECLOOM = window.SPECLOOM || {});
  NS.dict = NS.dict || {};

  NS.dict.en = {
    meta: {
      htmlLang: "en",
      title: "Specloom · Spec-Driven Development Lifecycle Orchestrator",
      description:
        "Specloom is an AI-native, spec-driven development (SDD) software lifecycle orchestrator. The spec is the single source of truth.",
    },

    nav: {
      what: "What",
      why: "Why",
      how: "Workflow",
      install: "Install",
      github: "GitHub",
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
      badge: "AI-native · Spec-Driven Development",
      product: "Specloom",
      productZh: "经纬",
      titleLead: "Weave specs into",
      titleGrad: "shipped software",
      tagline:
        "An AI-native, spec-driven development orchestrator — the spec is the single source of truth that runs the pipeline from requirement to release.",
      primaryCta: { label: "Install", target: "#install" },
      secondaryCta: { label: "View on GitHub" },
      loomAlt: "Warp-and-weft loom motif",
    },

    what: {
      eyebrow: "What it is",
      heading: "The spec is the loom that runs everything",
      lede: "Specloom is an AI-native orchestrator for spec-driven development (SDD). Instead of scattered docs and prompts, a single living spec drives the whole lifecycle.",
      cards: [
        {
          icon: "spec",
          title: "Single source of truth",
          desc: "Requirements, prototypes, design and tests all derive from one living spec — no drift between intent and implementation.",
        },
        {
          icon: "ai",
          title: "AI across the lifecycle",
          desc: "AI runs every stage — requirement → spec/prototype → design → code → test → release — under SDD, not a bolt-on assistant.",
        },
        {
          icon: "pipe",
          title: "Configurable pipeline",
          desc: "Compose each stage and choose where automation hands off to a human. The pipeline bends to your team, not the other way round.",
        },
      ],
    },

    why: {
      eyebrow: "Why it matters",
      heading: "Two modes, one source of truth",
      lede: "Ship trivial work in one shot; gate the risky work stage by stage. The same spec powers both — you only choose how much human review to weave in.",
      simple: {
        tag: "Simple",
        title: "One-shot delivery",
        desc: "For low-risk, well-bounded requirements, Specloom takes the spec all the way to a shipped result in a single pass.",
        points: [
          "From requirement to release without manual hand-offs",
          "Fast feedback for prototypes and small changes",
          "Every artifact still traces back to the spec",
        ],
      },
      complex: {
        tag: "Complex",
        title: "Stage-by-stage human review",
        desc: "For high-stakes work, insert human gates at any stage so people approve before the pipeline moves on.",
        points: [
          "Human review gates at spec, design and release",
          "Approvals are recorded against the spec",
          "Automation resumes the moment a gate is cleared",
        ],
      },
    },

    pipeline: {
      eyebrow: "How it works",
      heading: "A configurable lifecycle pipeline",
      lede: "Six stages, end to end. Switch modes to see where the pipeline runs automatically and where a human reviews before it continues.",
      modeSimpleLabel: "Simple — one shot",
      modeComplexLabel: "Complex — human review",
      modeAria: "Pipeline mode",
      stages: [
        { name: "Requirements", desc: "Capture intent as a structured, machine-readable spec." },
        { name: "Spec / Prototype", desc: "Generate the spec and an interactive prototype to review." },
        { name: "Design", desc: "Derive technical design, architecture and interfaces." },
        { name: "Code", desc: "Implement runnable code straight from the approved spec." },
        { name: "Test", desc: "Generate and run acceptance tests against the spec." },
        { name: "Release", desc: "Package and ship, with the spec as the audit trail." },
      ],
      legend: { auto: "Auto", human: "Human review" },
      legendNote: "Gates shown for the selected mode. Every stage is configurable.",
    },

    install: {
      eyebrow: "Get started",
      heading: "Install and weave your first spec",
      lede: "Specloom is open source and zero-dependency to try. Copy the command, run it, and start from a spec.",
      copyLabel: "Copy",
      copiedLabel: "Copied",
      copyAria: "Copy install command",
      placeholderNote: "Placeholder — final install command pending confirmation.",
      infoTitle: "Open source, yours to run",
      infoText:
        "Read the source, file issues, and self-host the docs. Everything you need to evaluate the project lives on GitHub.",
      docsCta: "Read the docs",
      githubCta: "Star on GitHub",
    },

    footer: {
      tagline: "An AI-native, spec-driven development lifecycle orchestrator. The spec is the single source of truth.",
      colProduct: "Product",
      colResource: "Resources",
      links: {
        what: "What it is",
        why: "Why Specloom",
        how: "Workflow",
        install: "Install",
        github: "GitHub repository",
        docs: "Documentation",
        license: "License",
      },
      copyright: "© 2026 Specloom (经纬). Open source.",
      licenseLabel: "License",
    },
  };
})();
