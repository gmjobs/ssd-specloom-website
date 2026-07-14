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
      title: "Specloom · Visible, Verifiable AI Delivery in VS Code",
      description:
        "Specloom is an AI delivery workspace for VS Code and Cursor. It turns rough ideas into explicit tasks and keeps requirements, implementation, tests, releases and execution history visible, verifiable and recoverable.",
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
      badge: "VS Code / Cursor · AI delivery workspace",
      product: "Specloom",
      productZh: "经纬",
      titleLead: "Turn rough ideas into",
      titleGrad: "trusted delivery",
      tagline:
        "Start with one sentence, clarify the intent, and turn it into explicit tasks. Every node exposes its inputs, outputs, execution history and verification evidence — even after reopening the project.",
      primaryCta: { label: "Install", target: "#install" },
      secondaryCta: { label: "See the workflow" },
      meta1: "No black-box task execution",
      meta2: "Completion requires evidence",
      meta3: "Delivery history survives reloads",
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
      heading: "Weave scattered ideas into trusted delivery",
      lede: "Ideas, pain points and defined requirements all fit. Specloom clarifies intent first, then builds an explicit task path through spec, design, code, tests and release.",
      reqLabel: "Requirements & ideas",
      assetLabel: "Deliverables",
      brandSub: "Compile intent into tasks · turn tasks into delivery",
      req: { r1: "Idea", r2: "One-line need", r3: "Clarification", r4: "Constraints", r5: "Acceptance" },
      asset: { a1: "Spec", a2: "Prototype", a3: "Design", a4: "Code", a5: "Tests", a6: "Trace" },
    },

    what: {
      eyebrow: "What it is",
      heading: "Not another invisible AI black box",
      lede: "Specloom turns conversational AI into a structured workflow. Every stage has explicit tasks, dependencies, inputs, outputs, attempts and gates, so you always know what is running, why it stopped and what comes next.",
      cards: [
        {
          icon: "spec",
          title: "Clarify intent before execution",
          desc: "A rough idea is expanded into goals, scope, constraints, assumptions and acceptance criteria before work starts. Unknowns stay explicit instead of being silently guessed.",
        },
        {
          icon: "ai",
          title: "Tasks and content stay visible",
          desc: "Specs, prototypes, design, code, unit tests, acceptance and release become inspectable task nodes. Open any node to see its instructions, content, real result and failure reason.",
        },
        {
          icon: "verify",
          title: "Completion is evidence-backed",
          desc: "Command exits, test reports, file changes and release results are recorded. Missing evidence stays unverified; an AI saying “done” never becomes a false green result.",
        },
        {
          icon: "model",
          title: "Connect the AI tools you use",
          desc: "Supports Cursor Agent, Claude Code, OpenAI Codex, OpenAI-compatible APIs and VS Code language models. Onboarding checks the environment, verifies the connection and pins an explicit model.",
        },
        {
          icon: "trace",
          title: "History survives reopening",
          desc: "Work items, attempts, artifact versions, stage transitions and gates stay with the project. Reopen a requirement to continue reviewing its original delivery history and content.",
        },
        {
          icon: "local",
          title: "Local-first project records",
          desc: "Work items and delivery records live under .lifecycle/ and can be managed with git. Context sent to external AI follows your chosen provider; side effects are disclosed at the gate.",
        },
      ],
    },

    why: {
      eyebrow: "Why it matters",
      heading: "Less ceremony for simple work, more control for critical work",
      lede: "One task-and-evidence model supports both rhythms: automate when boundaries are clear, and stop for confirmation when risk is higher.",
      simple: {
        tag: "Simple",
        title: "One-shot delivery",
        desc: "For low-risk, well-bounded requirements, Specloom follows the confirmed task path automatically while keeping the complete execution record.",
        points: [
          "Clarification, implementation and verification run continuously",
          "Fast feedback for prototypes and small changes",
          "Every artifact still traces back to the spec",
        ],
      },
      complex: {
        tag: "Standard",
        title: "Critical work, reviewed stage by stage",
        desc: "For important or high-risk work, place gates at spec, design, test or release. The pipeline continues only after approval or revision.",
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
      lede: "A complete path from requirement through release and operations. Switch profiles to see what runs automatically, where a human reviews and which evidence each step leaves behind.",
      modeSimpleLabel: "Simple — one shot",
      modeComplexLabel: "Standard — human review",
      modeAria: "Pipeline mode",
      stages: [
        { name: "Requirement", desc: "Clarify goals, scope, constraints, assumptions and acceptance criteria." },
        { name: "Product", desc: "Create the spec, prototype and reviewable product decisions." },
        { name: "Development", desc: "Break down technical tasks, produce the design and implement in the workspace." },
        { name: "Test", desc: "Generate and run unit tests, acceptance checks and quality gates." },
        { name: "Release", desc: "Build and describe the release, optionally publishing to local Docker or GitHub." },
        { name: "Operate / Complete", desc: "Verify release results and retain traceability plus the full delivery record." },
      ],
      legend: { auto: "Auto", human: "Human review" },
      legendNote: "Gates shown for the selected mode. Every stage is configurable.",
    },

    steps: {
      eyebrow: "In practice",
      heading: "Three steps from an idea to verifiable delivery",
      lede: "Finish the three-minute setup, then capture an idea or create a defined requirement. Specloom makes the tasks and execution path explicit.",
      s1: {
        title: "Capture an idea or requirement",
        desc: "A single pain point is enough. AI clarification fills in the goal, boundaries and acceptance criteria.",
      },
      s2: {
        title: "Confirm the task path",
        desc: "Inspect the spec, design, development, test and release tasks. Simple mode advances automatically; standard mode stops at critical gates.",
      },
      s3: {
        title: "Execute and inspect evidence",
        desc: "Open any task to inspect content, commands, tests and errors. Completion leaves a recoverable delivery record.",
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
      heading: "Install the extension and start real work",
      lede: "Download the latest VSIX for VS Code or Cursor. Onboarding checks your environment and lets you choose Cursor, Claude, Codex, an OpenAI-compatible API or a VS Code model.",
      copyLabel: "Copy",
      copiedLabel: "Copied",
      copyAria: "Copy install command",
      placeholderNote: "",
      latestLabel: "Latest stable",
      loadingRelease: "Checking release…",
      releaseUnavailable: "The first public package is being prepared",
      downloadVsix: "Download VSIX",
      releaseNotes: "Release notes",
      checksumLabel: "SHA-256",
      infoTitle: "Finish first-time setup in about three minutes",
      infoText:
        "Download and install the VSIX, open Specloom, then follow onboarding for environment checks, AI connection and project confirmation. Capture an idea or create a requirement; project records live under .lifecycle/.",
      docsCta: "See the workflow",
    },

    footer: {
      tagline: "An AI delivery workspace for VS Code and Cursor: visible tasks, evidence-backed completion and recoverable history.",
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
        title: "Specloom Docs · From Idea to Trusted Delivery",
        description:
          "Specloom documentation for VSIX installation, environment checks, AI connection, idea incubation, explicit task paths, gates, delivery records and troubleshooting.",
      },
      back: "← Back to home",
      title: "Specloom Documentation",
      sub: "Start with one idea, form a clear requirement and explicit tasks, then deliver through a complete path in VS Code or Cursor. This page covers setup, everyday use and advanced capabilities.",
      tocLabel: "Contents",
      toc: {
        quickstart: "Quickstart",
        install: "Install & AI setup",
        board: "Idea incubation & delivery board",
        sdd: "Tasks & execution path",
        gates: "Profiles & gates",
        advanced: "Advanced",
        data: "Data & artifacts",
        faq: "FAQ",
      },
      quickstart: {
        h: "Quickstart",
        s1: "<b>Finish onboarding:</b> open Specloom and follow the guide through environment checks, AI selection, connection verification and project confirmation.",
        s2: "<b>Start one thing:</b> capture an idea when it is still fuzzy, or create a work item directly when the requirement is already clear.",
        s3: "<b>Inspect and run tasks:</b> confirm the task path on the detail page. Open any node to inspect its instructions, content, result and previous attempts.",
      },
      install: {
        h: "Install & AI setup",
        p1: "Specloom is currently installed from a public VSIX. Download the latest package, choose “Install from VSIX…” from the Extensions view menu in VS Code or Cursor, then reload the window:",
        code: "1. Download specloom-<version>.vsix\n2. Extensions → … → Install from VSIX…\n3. Developer: Reload Window",
        p2: "Onboarding shows the AI tools available on your machine and requires a real connection test. Supported options include:",
        opt1: "<b>CLI agents:</b> Cursor Agent, Claude Code and OpenAI Codex, with direct workspace writes only after explicit authorization.",
        opt2: "<b>Models / APIs:</b> OpenAI-compatible APIs and VS Code Language Models for text generation or host-provided model capabilities.",
        note: "The extension checks the official stable manifest automatically or manually. When an update is found, you can confirm once to download, verify and install it. Updates are never installed silently and do not rely on Marketplace version detection.",
      },
      board: {
        h: "Idea incubation & delivery board",
        p1: "The activity bar exposes two clear entries: idea incubation for fuzzy inputs and the delivery board for formed work items. Work items move through seven lifecycle stages:",
        code1: "Requirement → Product → Development → Test → Release → Operations → Complete",
        p2: "Each work item shows its current stage and state. Reopening a project or work item restores the original tasks, artifacts and execution history.",
        code2: "Work item → Stage → Task node → Attempt → Artifact / evidence",
        p3: "Open a work item to inspect its full execution path. Every task node exposes instructions, dependencies, inputs, outputs, state, duration and previous attempts; requirement and test stages are no longer empty placeholders.",
      },
      sdd: {
        h: "Tasks & execution path",
        p1: "The pipeline is not a row of black-box prompts. Every stage expands into formatted tasks and records the real inputs, outputs, commands, tests and release evidence:",
        code: "[Clarify] → [Spec / Prototype] → [Design / Develop] → [Unit / Acceptance] → [Release / Archive]",
        p2: "<b>Recommended order:</b> confirm the requirement and acceptance criteria first. When upstream inputs change, affected evidence and artifacts become stale instead of being reused as current completion.",
        th: { step: "Step", input: "Input", output: "Output", flow: "Auto stage transition" },
        r1: { step: "Requirement / spec", input: "Idea, constraints and project context", output: "Structured requirement, assumptions and acceptance criteria", flow: "Requirement → Product" },
        r2: { step: "Product / design", input: "Confirmed spec", output: "Prototype, acceptance plan and technical design", flow: "Product → Development" },
        r3: { step: "Development", input: "Frozen tasks and design", output: "Workspace code, change summary and traceability", flow: "Development" },
        r4: { step: "Test / release", input: "Real code and build results", output: "Unit tests, acceptance, release facts and delivery record", flow: "Test → Release → Complete" },
        h3: "Workspace writes and external effects",
        p3: "Write-capable CLI agents can modify the workspace after confirmation. Specloom freezes the model, directory, write roots, commands and gates first; tests, Docker and GitHub release results are recorded as reviewable facts. Use a clean git workspace when possible.",
      },
      gates: {
        h: "Profiles & gates",
        p1: "One task-and-evidence model supports both rhythms; you choose how much human control is appropriate:",
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
        p1: "With a workspace folder open, project configuration, work items, task runs, artifacts and delivery records live under <code>.lifecycle/</code>, ready for git and recovery after reopening:",
        tree: "<your project>/\n└── .lifecycle/\n    ├── project.json          # project and app configuration\n    ├── items.json            # work items and lifecycle state\n    ├── runs/                 # task snapshots, reports and evidence\n    └── <work-item-id>/        # specs, design, tests and delivery artifacts",
        p2: "Existing source stays in the current folder and is not moved. External AI receives the bounded context required for the selected task; data handling follows the provider you choose. If a critical store is corrupt or migration is untrusted, Specloom enters limited read-only mode instead of overwriting data.",
      },
      faq: {
        h: "FAQ",
        q1: "AI tool probe or connection test failed",
        a1: "Open “Specloom: Agent AI Tool Settings”, check the Cursor / Claude / Codex executable path, login and explicit model, then rerun the connection test. The tool is connected only after a real probe and non-empty response succeed.",
        q2: "Error: “no available language model” (vscode-lm mode)",
        a2: "Install and sign in to an extension that provides models (such as GitHub Copilot).",
        q3: "Clicking “Open” says the document doesn't exist",
        a3: "The artifact under <code>.lifecycle/&lt;id&gt;/</code> was deleted by hand — just “generate” it again.",
        q4: "Why did a task stop or fail to advance?",
        a4: "Open the task to inspect the blocker. Common causes are unmet prerequisites, stale evidence, command or test failure, a human gate, or an external result requiring reconciliation. Specloom never invents task success from the stage label alone.",
        q5: "Artifacts weren't written; only a temporary document opened",
        a5: "No workspace folder is open — open a folder in the extension host window and retry.",
      },
    },
  };
})();
