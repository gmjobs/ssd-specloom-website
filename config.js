/*
 * config.js — 唯一配置点（Single configuration point）
 * 站点的可变值集中于此，无需改动其它源文件。
 *
 * 为保证「双击 index.html 直接打开 / file:// 离线运行」也可用，
 * 本项目不使用 ES Module import，改为挂载到全局命名空间 window.SPECLOOM。
 */
(function () {
  "use strict";
  var NS = (window.SPECLOOM = window.SPECLOOM || {});

  NS.CONFIG = {
    // 无法识别浏览器语言时的回退默认语言（项目以中文为主，回退中文）
    defaultLang: "zh",

    // 安装与配置命令：Specloom 是 VS Code 扩展，默认以 Claude Code 作为 AI 引擎。
    // 下列为「配置 AI 引擎」所需命令；扩展本身在 VS Code 扩展面板中安装。
    install: {
      commands: [
        {
          id: "ai",
          platform: "npm",
          command: "npm i -g @anthropic-ai/claude-code",
        },
        {
          id: "login",
          platform: "cli",
          command: "claude login",
        },
      ],
    },
  };
})();
