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
      docs: "Docs",
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
      meta1: "Spec is the source of truth",
      meta2: "Configurable gates & profiles",
      meta3: "End-to-end traceability",
      loomAlt: "Warp-and-weft loom motif",
    },

    show: {
      alt: "Illustration: one spec.md, from which Specloom derives a prototype, design, code, tests and a traceability map",
      winTag: "Specloom",
      specTitle: "Requirement: Email login",
      specGoal: "## Goal: sign in with email + password",
      ac1: "Validate email format, inline errors",
      ac2: "Lock 10 min after 5 failed tries",
      specNote: "# Edit the spec → downstream artifacts flagged stale",
      genHead: "Generated from the spec",
      g1: "Clickable prototype",
      g2: "Design + architecture",
      g3: "Runnable implementation",
      g4: "Acceptance tests vs the spec",
      g5: "Requirement ↔ code ↔ test trace",
    },

    flow: {
      eyebrow: "From idea to delivery",
      heading: "Weave tangled requirements into shipped artifacts",
      lede: "Scattered human requirements and ideas go in; Specloom uses the spec as its loom, weaving them — stage by stage — into clean, traceable deliverables.",
      reqLabel: "Requirements & ideas",
      assetLabel: "Deliverables",
      brandSub: "The spec is the loom · weaving delivery",
      req: { r1: "Idea", r2: "One-line need", r3: "Clarification", r4: "Spec draft", r5: "Acceptance" },
      asset: { a1: "Spec", a2: "Prototype", a3: "Design", a4: "Code", a5: "Tests", a6: "Release" },
    },

    what: {
      eyebrow: "What it is",
      heading: "Not just another autocomplete",
      lede: "Inside VS Code, Specloom collapses scattered docs and prompts into one living spec — requirements, prototypes, design, code and tests all derive from it and flow through a single panel.",
      cards: [
        {
          icon: "spec",
          title: "Single source of truth",
          desc: "Requirements, prototypes, design, code and tests all derive from one living spec. Change it upstream and the downstream is marked stale and rebuilt — no drift between intent and implementation.",
        },
        {
          icon: "ai",
          title: "Every artifact, auto-produced",
          desc: "Spec, clickable prototype, design, code, tests and traceability — each stage produces what it should, generated from the spec, not a bolt-on autocomplete.",
        },
        {
          icon: "verify",
          title: "Double-checked against hallucination",
          desc: "After codegen, an independent pass re-reads the output and verifies the symbols, dependencies and contracts it references actually exist — catching plausible-but-wrong before it lands.",
        },
        {
          icon: "model",
          title: "Bring your own model",
          desc: "Defaults to Claude Code, and also supports VS Code language models and OpenAI-compatible endpoints (Qwen / Qianfan / Doubao / DeepSeek…). The model choice is yours.",
        },
        {
          icon: "trace",
          title: "Traceable and auditable",
          desc: "A requirement ↔ code ↔ test traceability map; artifacts record their lineage, and every gate approval is anchored to the spec — no generated-code black box.",
        },
        {
          icon: "local",
          title: "Your data stays in your repo",
          desc: "Every artifact lands in your workspace's .lifecycle/ folder — commit it with git, share it with the team, nothing leaves your repository.",
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

    steps: {
      eyebrow: "In practice",
      heading: "Three steps, sentence to shippable",
      lede: "Create a work item in the editor sidebar, hit “▶ Run pipeline”, and let the spec do the rest.",
      s1: {
        title: "Describe",
        desc: "Write a title and a one-line requirement. Specloom auto-drafts a structured spec and a clickable prototype for review.",
      },
      s2: {
        title: "Review by profile",
        desc: "The simple profile auto-passes; the standard profile stops at spec, design and release gates for you to approve or reject.",
      },
      s3: {
        title: "Deliver",
        desc: "Design, code and tests are generated from the spec and land in .lifecycle/, ready to commit with git and share with the team.",
      },
    },

    roadmap: {
      eyebrow: "Roadmap",
      badge: "Planned",
      heading: "Grows from solo to team",
      lede: "Productive for one in the editor today. The team / enterprise capabilities below are planned, not yet shipped — listed here to show direction, not current features.",
      r1: { title: "Visual flow orchestration", desc: "Configure stages / gates / roles / profiles in a back office, globally or per app." },
      r2: { title: "Approval center + RBAC", desc: "Human-gate todos in one place; who approved and when stays fully auditable." },
      r3: { title: "Notifications & collaboration", desc: "Review todos and approve / reject pushed to your team chat in real time." },
      r4: { title: "Delivery metrics dashboard", desc: "Throughput, lead time, per-stage bottlenecks, rework rate and first-pass yield (FPY)." },
    },

    install: {
      eyebrow: "Get started",
      heading: "Install the extension, weave your first spec",
      lede: "Specloom is a VS Code extension and defaults to Claude Code as its engine. Set up the engine first, then create a work item and run the pipeline.",
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
        docs: "Documentation",
      },
      copyright: "© 2026 Specloom (经纬)",
    },
  };
})();
