/*
 * config.js — 唯一配置点（Single configuration point）
 * 所有「待澄清」占位值集中于此，发布前逐项替换即可，无需改动其它源文件。
 * 关联：AC-7.2 / AC-6.3 / AC-8.4 / 待澄清 #1~#4
 *
 * 为保证「双击 index.html 直接打开 / file:// 离线运行」也可用（AT-26），
 * 本项目不使用 ES Module import，改为挂载到全局命名空间 window.SPECLOOM。
 */
(function () {
  "use strict";
  var NS = (window.SPECLOOM = window.SPECLOOM || {});

  NS.CONFIG = {
    // 待澄清 #2：正式仓库地址（组织名/仓库名）发布前替换
    githubUrl: "https://github.com/specloom/specloom",

    // 待澄清 #3：无法识别浏览器语言时的回退默认语言（开源惯例回退英文）
    defaultLang: "en",

    // 待澄清 #4：开源许可类型（占位 TBD）
    licenseType: "TBD",

    // 文档入口（次要引导，纯外链）
    docsUrl: "https://github.com/specloom/specloom#readme",

    // 待澄清 #1：安装命令尚未最终确定 —— 使用可识别占位，禁止臆造真实命令（AC-6.3）
    install: {
      commands: [
        {
          id: "npm",
          platform: "npm",
          command: "npm install -g specloom",
          // 占位标记：渲染时会以注释样式展示，明确告知访客这是占位
          placeholder: true,
        },
        {
          id: "init",
          platform: "cli",
          command: "specloom init my-project",
          placeholder: true,
        },
      ],
    },
  };
})();
