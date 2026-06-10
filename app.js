/*
 * app.js — Specloom 官网运行时（原生 JS，无框架，零依赖）
 *
 * 模块：
 *   I18nEngine   语言检测 · 渲染 · 持久化（FR-8 / NFR-I1~I3 / NFR-E2~E3）
 *   UIController 语言切换 · 一键复制（含降级）· 移动端导航 · 流水线模式切换
 *
 * 依赖：window.SPECLOOM.CONFIG / window.SPECLOOM.dict.{zh,en}（由前序 <script> 提供）
 */
(function () {
  "use strict";

  var NS = window.SPECLOOM || {};
  var CONFIG = NS.CONFIG;
  var DICTS = NS.dict || {};
  var LS_KEY = "specloom.lang";
  var SUPPORTED = ["zh", "en"];

  /* ---------- 工具：按点路径取字典值，如 "why.simple.title" ---------- */
  function resolvePath(obj, path) {
    if (!path) return undefined;
    var parts = path.split(".");
    var cur = obj;
    for (var i = 0; i < parts.length; i++) {
      if (cur == null) return undefined;
      cur = cur[parts[i]];
    }
    return cur;
  }

  /* ============================================================
   * I18nEngine
   * ========================================================== */
  function I18nEngine(dicts, config) {
    this.dicts = dicts;
    this.config = config;
    this.lang = config.defaultLang;
  }

  /** 检测优先级：localStorage > navigator.language > config.defaultLang（AC-8.4） */
  I18nEngine.prototype.detectInitialLang = function () {
    // 1) 已持久化偏好
    var stored = null;
    try {
      stored = window.localStorage.getItem(LS_KEY);
    } catch (e) {
      stored = null; // 隐私模式不可用，静默降级（NFR-E2）
    }
    if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;

    // 2) 浏览器语言偏好
    var langs = [];
    if (navigator.languages && navigator.languages.length) {
      langs = navigator.languages;
    } else if (navigator.language) {
      langs = [navigator.language];
    }
    for (var i = 0; i < langs.length; i++) {
      var code = String(langs[i] || "").toLowerCase();
      if (code.indexOf("zh") === 0) return "zh";
      if (code.indexOf("en") === 0) return "en";
    }

    // 3) 回退默认语言（NFR-E3）
    return SUPPORTED.indexOf(this.config.defaultLang) !== -1
      ? this.config.defaultLang
      : "en";
  };

  /** 渲染所有 data-i18n / data-i18n-attr 节点 + 动态列表 + html/title/meta */
  I18nEngine.prototype.render = function (lang) {
    var dict = this.dicts[lang];
    if (!dict) return;
    this.lang = lang;
    var self = this;

    // 文本节点
    var textNodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < textNodes.length; i++) {
      var el = textNodes[i];
      var val = resolvePath(dict, el.getAttribute("data-i18n"));
      if (typeof val === "string") el.textContent = val;
    }

    // 属性注入：data-i18n-attr="attr:path;attr2:path2"
    var attrNodes = document.querySelectorAll("[data-i18n-attr]");
    for (var j = 0; j < attrNodes.length; j++) {
      var aEl = attrNodes[j];
      var pairs = aEl.getAttribute("data-i18n-attr").split(";");
      for (var k = 0; k < pairs.length; k++) {
        var pair = pairs[k].trim();
        if (!pair) continue;
        var idx = pair.indexOf(":");
        if (idx === -1) continue;
        var attr = pair.slice(0, idx).trim();
        var aVal = resolvePath(dict, pair.slice(idx + 1).trim());
        if (typeof aVal === "string") aEl.setAttribute(attr, aVal);
      }
    }

    // 动态列表
    this.renderWhatCards(dict);
    this.renderWhyPoints(dict);
    this.renderPipeline(dict);

    // html lang / title / meta（NFR-I2）
    document.documentElement.setAttribute("lang", dict.meta.htmlLang);
    document.title = dict.meta.title;

    // 语言开关 aria-pressed
    var langBtns = document.querySelectorAll(".lang-switch button[data-lang]");
    for (var m = 0; m < langBtns.length; m++) {
      var lb = langBtns[m];
      lb.setAttribute("aria-pressed", lb.getAttribute("data-lang") === lang ? "true" : "false");
    }
    void self; // keep reference (lint friendliness)
  };

  /* What 卡片 */
  var ICONS = {
    spec: '<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zM8 13h8v2H8v-2zm0 4h8v2H8v-2z"/></svg>',
    ai: '<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a1 1 0 0 1 1 1v1.06A8 8 0 0 1 19.94 11H21a1 1 0 1 1 0 2h-1.06A8 8 0 0 1 13 19.94V21a1 1 0 1 1-2 0v-1.06A8 8 0 0 1 4.06 13H3a1 1 0 1 1 0-2h1.06A8 8 0 0 1 11 4.06V3a1 1 0 0 1 1-1zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></svg>',
    pipe: '<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 5h6v4H4V5zm10 0h6v4h-6V5zM4 15h6v4H4v-4zm10 0h6v4h-6v-4zM10 6h4v2h-4V6zm-3 4h2v4H7v-4zm8 0h2v4h-2v-4z"/></svg>',
    verify: '<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 1L3 5v6c0 5.05 3.41 9.76 9 11 5.59-1.24 9-5.95 9-11V5l-9-4zm-1.2 14.2L7 11.4l1.4-1.4 2.4 2.4 4.8-4.8L17 9l-6.2 6.2z"/></svg>',
    model: '<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a3 3 0 0 1 3 3 3 3 0 0 1-.4 1.5l2 2A3 3 0 0 1 22 11a3 3 0 0 1-5.6 1.5l-2 2A3 3 0 1 1 9.5 16.4l-2-2A3 3 0 1 1 6 9.4l2-2A3 3 0 0 1 12 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM5 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm14 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-7 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>',
    trace: '<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4v2H7a1.1 1.1 0 0 0 0 2.2h4v2H7A3.1 3.1 0 0 1 3.9 12zM13 8.9h4a3.1 3.1 0 0 1 0 6.2h-4v-2h4a1.1 1.1 0 0 0 0-2.2h-4v-2zM8 11h8v2H8v-2z"/></svg>',
    local: '<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 4h7l2 2h7a2 2 0 0 1 2 2v3.5a3.5 3.5 0 0 0-2-1.4V8H4v10h6.1a3.5 3.5 0 0 0 1.4 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm13.5 8a2.5 2.5 0 0 1 2.5 2.5V16h.5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h.5v-1.5a2.5 2.5 0 0 1 2.5-2.5zm0 1.8a.7.7 0 0 0-.7.7V16h1.4v-1.5a.7.7 0 0 0-.7-.7z"/></svg>',
  };
  I18nEngine.prototype.renderWhatCards = function (dict) {
    var host = document.getElementById("whatCards");
    if (!host) return;
    var cards = (dict.what && dict.what.cards) || [];
    var html = "";
    for (var i = 0; i < cards.length; i++) {
      var c = cards[i];
      html +=
        '<article class="card">' +
        '<div class="ic" aria-hidden="true">' + (ICONS[c.icon] || "") + "</div>" +
        "<h3>" + escapeHtml(c.title) + "</h3>" +
        "<p>" + escapeHtml(c.desc) + "</p>" +
        "</article>";
    }
    host.innerHTML = html;
  };

  /* Why 要点列表 */
  I18nEngine.prototype.renderWhyPoints = function (dict) {
    fillList(document.getElementById("whySimplePoints"), dict.why && dict.why.simple && dict.why.simple.points);
    fillList(document.getElementById("whyComplexPoints"), dict.why && dict.why.complex && dict.why.complex.points);
  };
  function fillList(host, points) {
    if (!host) return;
    var arr = points || [];
    var html = "";
    for (var i = 0; i < arr.length; i++) html += "<li>" + escapeHtml(arr[i]) + "</li>";
    host.innerHTML = html;
  }

  /* 流水线 6 阶段，门控随模式变化（AC-5.1~5.3） */
  // 各阶段在不同模式下的门控：简单=一键成品（多为自动）；复杂=逐道人审（关键节点人审）
  var GATE_MATRIX = {
    simple:  ["auto", "auto",  "auto",  "auto", "auto", "auto"],
    complex: ["auto", "human", "human", "auto", "auto", "human"],
  };
  I18nEngine.prototype.renderPipeline = function (dict) {
    var host = document.getElementById("pipeStages");
    if (!host) return;
    var stages = (dict.pipeline && dict.pipeline.stages) || [];
    var legend = (dict.pipeline && dict.pipeline.legend) || { auto: "Auto", human: "Human" };
    var mode = host.getAttribute("data-mode") || "simple";
    var gates = GATE_MATRIX[mode] || GATE_MATRIX.simple;

    var arrow =
      '<div class="pipe-arrow" aria-hidden="true">' +
      '<svg width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M9 6l6 6-6 6z"/></svg>' +
      "</div>";

    var html = "";
    for (var i = 0; i < stages.length; i++) {
      var s = stages[i];
      var gate = gates[i] || "auto";
      var gateLabel = gate === "human" ? legend.human : legend.auto;
      html +=
        '<div class="stage" role="listitem">' +
        '<span class="gate ' + gate + '">' + escapeHtml(gateLabel) + "</span>" +
        '<span class="num">0' + (i + 1) + "</span>" +
        '<div class="nm">' + escapeHtml(s.name) + "</div>" +
        '<div class="ds">' + escapeHtml(s.desc) + "</div>" +
        "</div>";
      if (i < stages.length - 1) html += arrow;
    }
    host.innerHTML = html;
  };

  /** 即时切换：render + 持久化（try/catch 降级） */
  I18nEngine.prototype.setLang = function (lang) {
    if (SUPPORTED.indexOf(lang) === -1) return;
    this.render(lang);
    try {
      window.localStorage.setItem(LS_KEY, lang);
    } catch (e) {
      /* 隐私模式：静默降级，仅本次会话生效（NFR-E2） */
    }
  };

  I18nEngine.prototype.init = function () {
    // 注入配置驱动的属性（一次性，与语言无关）
    applyConfig(this.config);
    var initial = this.detectInitialLang();
    this.render(initial);
  };

  /* ---------- 配置注入：href + 许可类型（唯一配置点 AC-7.2） ---------- */
  function applyConfig(config) {
    var cfgNodes = document.querySelectorAll("[data-cfg-href]");
    for (var i = 0; i < cfgNodes.length; i++) {
      var el = cfgNodes[i];
      var key = el.getAttribute("data-cfg-href");
      if (config[key]) el.setAttribute("href", config[key]);
    }
    var lic = document.getElementById("licenseType");
    if (lic) lic.textContent = config.licenseType;
  }

  /* ---------- HTML 转义，防止字典内容被当作标记解析 ---------- */
  function escapeHtml(str) {
    if (str == null) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ============================================================
   * UIController
   * ========================================================== */
  function UIController(engine, config) {
    this.engine = engine;
    this.config = config;
    this.toastTimer = null;
  }

  UIController.prototype.bind = function () {
    var self = this;

    // 语言切换
    var langBtns = document.querySelectorAll(".lang-switch button[data-lang]");
    for (var i = 0; i < langBtns.length; i++) {
      langBtns[i].addEventListener("click", function () {
        self.engine.setLang(this.getAttribute("data-lang"));
      });
    }

    // 流水线模式切换
    var modeBtns = document.querySelectorAll(".mode-toggle button[data-mode]");
    for (var m = 0; m < modeBtns.length; m++) {
      modeBtns[m].addEventListener("click", function () {
        var mode = this.getAttribute("data-mode");
        var host = document.getElementById("pipeStages");
        if (host) host.setAttribute("data-mode", mode);
        for (var n = 0; n < modeBtns.length; n++) {
          modeBtns[n].setAttribute(
            "aria-pressed",
            modeBtns[n].getAttribute("data-mode") === mode ? "true" : "false"
          );
        }
        self.engine.renderPipeline(self.engine.dicts[self.engine.lang]);
      });
    }

    // 复制按钮
    var copyBtn = document.getElementById("copyBtn");
    if (copyBtn) {
      copyBtn.addEventListener("click", function () {
        self.onCopy();
      });
    }

    // 移动端导航
    var toggle = document.getElementById("navToggle");
    var menu = document.getElementById("mobileMenu");
    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        var open = menu.hasAttribute("hidden");
        if (open) {
          menu.removeAttribute("hidden");
        } else {
          menu.setAttribute("hidden", "");
        }
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      // 点击菜单内任一链接后收起
      var mLinks = menu.querySelectorAll("a");
      for (var l = 0; l < mLinks.length; l++) {
        mLinks[l].addEventListener("click", function () {
          menu.setAttribute("hidden", "");
          toggle.setAttribute("aria-expanded", "false");
        });
      }
    }

    // 顶栏随滚动加深（专业感细节）
    var nav = document.querySelector("header.nav");
    if (nav) {
      var onScroll = function () {
        if (window.scrollY > 8) nav.classList.add("scrolled");
        else nav.classList.remove("scrolled");
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
  };

  /** 当前安装命令拼接为多行文本 */
  UIController.prototype.commandText = function () {
    var cmds = (this.config.install && this.config.install.commands) || [];
    var lines = [];
    for (var i = 0; i < cmds.length; i++) lines.push(cmds[i].command);
    return lines.join("\n");
  };

  /** 渲染安装命令到代码块（含占位注释） */
  UIController.prototype.renderCommands = function () {
    var body = document.getElementById("codeBody");
    if (!body) return;
    var cmds = (this.config.install && this.config.install.commands) || [];
    var dict = this.engine.dicts[this.engine.lang];
    var html = "";
    var hasPlaceholder = false;
    for (var i = 0; i < cmds.length; i++) {
      if (cmds[i].placeholder) hasPlaceholder = true;
      html += '<span class="pl">$</span> <span class="cmd">' + escapeHtml(cmds[i].command) + "</span>\n";
    }
    if (hasPlaceholder && dict) {
      // 明确标注占位（AC-6.3 / AT-13）
      html += '<span class="note"># ' + escapeHtml(dict.install.placeholderNote) + "</span>";
    }
    body.innerHTML = html;
  };

  /** 一键复制（三级降级，绝不报错中断，NFR-E1） */
  UIController.prototype.onCopy = function () {
    var self = this;
    var text = this.commandText();
    var dict = this.engine.dicts[this.engine.lang];

    function success() {
      self.markCopied();
      self.toast(dict.install.copiedLabel);
    }
    function manualFallback() {
      // 选中代码块文本并提示手动复制
      self.selectCode();
      self.toast(self.manualHint());
    }

    if (navigator.clipboard && navigator.clipboard.writeText && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(success, function () {
        self.execCopyFallback(text, success, manualFallback);
      });
    } else {
      this.execCopyFallback(text, success, manualFallback);
    }
  };

  UIController.prototype.execCopyFallback = function (text, ok, fail) {
    try {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      var done = document.execCommand && document.execCommand("copy");
      document.body.removeChild(ta);
      if (done) ok();
      else fail();
    } catch (e) {
      fail();
    }
  };

  UIController.prototype.selectCode = function () {
    var body = document.getElementById("codeBody");
    if (!body) return;
    try {
      var range = document.createRange();
      range.selectNodeContents(body);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      body.focus();
    } catch (e) {
      /* ignore */
    }
  };

  UIController.prototype.manualHint = function () {
    var isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent || "");
    return (this.engine.lang === "zh" ? "请手动复制 " : "Press ") + (isMac ? "⌘+C" : "Ctrl+C");
  };

  UIController.prototype.markCopied = function () {
    var btn = document.getElementById("copyBtn");
    var label = btn && btn.querySelector(".copy-label");
    if (!btn || !label) return;
    var dict = this.engine.dicts[this.engine.lang];
    btn.classList.add("ok");
    label.textContent = dict.install.copiedLabel;
    var self = this;
    window.setTimeout(function () {
      btn.classList.remove("ok");
      var d = self.engine.dicts[self.engine.lang];
      label.textContent = d.install.copyLabel;
    }, 2000);
  };

  UIController.prototype.toast = function (msg) {
    var t = document.getElementById("toast");
    if (!t) return;
    t.textContent = msg;
    t.classList.add("show");
    if (this.toastTimer) window.clearTimeout(this.toastTimer);
    this.toastTimer = window.setTimeout(function () {
      t.classList.remove("show");
    }, 2200);
  };

  /* ============================================================
   * Bootstrap
   * ========================================================== */
  function boot() {
    if (!CONFIG || !DICTS.zh || !DICTS.en) {
      // 字典/配置缺失时不应白屏：保留 HTML 内的英文兜底文案
      return;
    }
    var engine = new I18nEngine(DICTS, CONFIG);
    var ui = new UIController(engine, CONFIG);

    // 安装命令渲染需在 render 后保持语言一致：包装 render 以同步刷新命令注释
    var origRender = engine.render.bind(engine);
    engine.render = function (lang) {
      origRender(lang);
      ui.renderCommands();
    };

    engine.init();
    ui.bind();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
