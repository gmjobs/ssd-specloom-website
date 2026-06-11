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
      lede: "Scattered requirements and ideas go in; with the spec as the single source of truth, Specloom turns out spec, design, code and tests — clean and traceable, stage by stage.",
      reqLabel: "Requirements & ideas",
      assetLabel: "Deliverables",
      brandSub: "The spec is the loom · weaving delivery",
      req: { r1: "Idea", r2: "One-line need", r3: "Clarification", r4: "Constraints", r5: "Acceptance" },
      asset: { a1: "Spec", a2: "Prototype", a3: "Design", a4: "Code", a5: "Tests", a6: "Trace" },
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

    guide: {
      meta: {
        htmlLang: "en",
        title: "Specloom Docs · Quickstart & Feature Guide",
        description:
          "Specloom documentation: drive a requirement through the spec-driven pipeline inside VS Code — install & AI setup, the board & detail panel, the SDD pipeline, profiles & gates, advanced capabilities, data storage and FAQ.",
      },
      back: "← Back to home",
      title: "Specloom Documentation",
      sub: "Inside VS Code, walk a requirement through a configurable spec-driven pipeline, step by step from spec to delivery. This page covers install, everyday use and advanced capabilities.",
      tocLabel: "Contents",
      toc: {
        quickstart: "Quickstart",
        install: "Install & AI setup",
        board: "Board & detail panel",
        sdd: "SDD pipeline",
        gates: "Profiles & gates",
        advanced: "Advanced",
        data: "Data & artifacts",
        faq: "FAQ",
      },
      quickstart: {
        h: "Quickstart",
        s1: "<b>Configure AI:</b> run <code>Specloom: Configure AI (guided)</code> from the Command Palette (defaults to the Claude Code CLI — run <code>claude login</code> first).",
        s2: "<b>Create a work item:</b> add one in the <b>Specloom</b> sidebar, with a title and a one-line requirement.",
        s3: "<b>Run the pipeline:</b> hit <b>▶ Run pipeline</b> on the detail page — the simple profile auto-produces end to end; the standard profile stops at each review gate for you to approve or send back for revision.",
      },
      install: {
        h: "Install & AI setup",
        p1: "Specloom is a VS Code extension. After installing it from the Extensions panel, you configure an AI provider. It defaults to the <b>Claude Code CLI</b> — install and sign in locally:",
        code: "npm i -g @anthropic-ai/claude-code\nclaude login",
        p2: "If you'd rather not use the CLI, set <code>lifecycle.aiProvider</code> in settings to:",
        opt1: "<code>vscode-lm</code>: reuse an authorized VS Code language model such as GitHub Copilot (this mode does not support writing files directly).",
        opt2: "<code>openai-compatible</code>: connect to OpenAI-compatible endpoints like Qwen / Qianfan / Doubao / DeepSeek.",
        note: "Setting changes take effect immediately — no window reload needed.",
      },
      board: {
        h: "Board & detail panel",
        p1: "The <b>Specloom</b> icon in the left activity bar opens the work-item board, grouped into five stages:",
        code1: "💡 Requirement → 📖 Product → 💻 Dev → 🧪 Test → ✅ Done",
        p2: "Each work item is one row, with SDD progress markers and the update date on the right, e.g.:",
        code2: "Login feature    ✓spec ✓design ○code ○test  ·  6/2",
        p3: "Meaning: <code>✓spec</code> = spec exists, <code>✓design</code> = design generated, <code>○code</code> = code skeleton not yet generated, <code>○test</code> = tests not yet generated. Click any item to open the detail panel, where you can edit the title / requirement / spec, click the progress dots to switch stages, and drive the whole SDD pipeline.",
      },
      sdd: {
        h: "SDD pipeline",
        p1: "The detail panel lays out four nodes left to right, deriving artifacts from the spec step by step:",
        code: "[Spec] → [Design] → [Code skeleton] → [Test cases]",
        p2: "<b>Recommended order</b>: generate the <b>Spec</b> first; design, code skeleton and test cases are all generated from it. Clicking a later step before the spec exists prompts you to “run AI to generate the spec first”.",
        th: { step: "Step", input: "Input", output: "Output", flow: "Auto stage transition" },
        r1: { step: "Spec", input: "Title + requirement", output: "Spec text", flow: "Requirement → Product" },
        r2: { step: "Design", input: "Spec", output: "<code>.lifecycle/&lt;id&gt;/design.md</code>", flow: "Product → Dev" },
        r3: { step: "Code skeleton", input: "Spec", output: "<code>code.md</code> or files written into the workspace", flow: "—" },
        r4: { step: "Test cases", input: "Spec", output: "<code>.lifecycle/&lt;id&gt;/tests.md</code>", flow: "Dev → Test" },
        h3: "Write the code skeleton into the workspace (optional)",
        p3: "With <code>lifecycle.codeGenWriteFiles</code> enabled, the code skeleton switches to agent mode: the AI uses Write/Edit tools to create or modify source files directly in the current workspace, then opens a change summary. Best used on a clean git workspace for easy review and rollback; a confirmation dialog appears before each run.",
      },
      gates: {
        h: "Profiles & gates",
        p1: "One spec supports both rhythms — you only choose how much human review to weave in:",
        profileSimple: "<b>Simple profile:</b> low-risk, well-bounded requirements run end to end in one shot, with no manual hand-offs.",
        profileStandard: "<b>Standard profile:</b> human review at key points such as spec, design and release, where a person approves or rejects.",
        p2: "Gates come in three kinds, freely arranged per stage by team / app:",
        g1: "<b>Human review:</b> stop and wait for a person to approve or reject.",
        g2: "<b>Command check:</b> run a command / CI and pass before proceeding.",
        g3: "<b>Auto-pass:</b> no stop — continue straight to the next stage.",
      },
      advanced: {
        h: "Advanced (optional, off by default)",
        p: "These capabilities make “AI produces to spec + automation + metrics” solid. All are opt-in; left off, behavior is unchanged:",
        th: { cap: "Capability", entry: "Setting / entry", one: "In one line" },
        a1: { cap: "Project-wide Steering", entry: "<code>.lifecycle/steering/*.md</code>", one: "Write team conventions / stack / security baseline once; the AI honors them at every stage." },
        a2: { cap: "Event-driven Hooks", entry: "<code>.lifecycle/hooks.json</code>", one: "Auto-trigger on events like “code written → run tests” or “spec changed → regenerate stale artifacts”." },
        a3: { cap: "Atomic step execution", entry: "<code>atomicSteps</code>", one: "Split big changes into small steps — implement + verify + commit each; on failure it stops at that step instead of discarding the whole batch." },
        a4: { cap: "Double-check vs hallucination", entry: "<code>verifyCodeGrounding</code>", one: "An independent agent verifies the symbols / dependencies the code references actually exist." },
        a5: { cap: "Spec self-feedback", entry: "<code>specFeedback</code>", one: "Review spec quality after delivery, building an improvement backlog with a score." },
        a6: { cap: "AI effectiveness metrics", entry: "Admin board “AI effectiveness”", one: "Adoption / regeneration rate, first-pass yield (FPY), spec quality score." },
      },
      data: {
        h: "Data & artifacts",
        p1: "With a workspace folder open, all data lives in the workspace's <code>.lifecycle/</code> folder — commit it with git, share it with the team:",
        tree: "<your project>/\n└── .lifecycle/\n    ├── items.json            # all work items (title / stage / spec / artifact paths…)\n    └── <work-item-id>/\n        ├── design.md         # design\n        ├── code.md           # code skeleton (doc mode)\n        └── tests.md          # test cases",
        p2: "Deleting a work item also clears its <code>.lifecycle/&lt;id&gt;/</code> artifact folder. With no folder open, data falls back to VS Code's workspaceState (this machine only) and AI artifacts degrade to temporary documents (lost on close, never written to disk).",
      },
      faq: {
        h: "FAQ",
        q1: "Error: “Claude CLI not found”",
        a1: "Not installed or not on PATH. Run <code>npm i -g @anthropic-ai/claude-code</code> then <code>claude login</code>, or set the full path with <code>lifecycle.claudeCodePath</code>.",
        q2: "Error: “no available language model” (vscode-lm mode)",
        a2: "Install and sign in to an extension that provides models (such as GitHub Copilot).",
        q3: "Clicking “Open” says the document doesn't exist",
        a3: "The artifact under <code>.lifecycle/&lt;id&gt;/</code> was deleted by hand — just “generate” it again.",
        q4: "The stage didn't advance automatically",
        a4: "It only advances when you're at the matching starting stage (e.g. “Design” advances Product → Dev only from the Product stage), to avoid overwriting a stage you set by hand. Click a progress dot to switch when needed.",
        q5: "Artifacts weren't written; only a temporary document opened",
        a5: "No workspace folder is open — open a folder in the extension host window and retry.",
      },
    },
  };
})();
