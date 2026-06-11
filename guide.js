/*
 * guide.js — 文档页（guide.html）i18n 运行时（原生 JS，零依赖）
 *
 * 与首页共用同一套字典（window.SPECLOOM.dict.{zh,en}）与同一个 localStorage 语言偏好，
 * 切换语言在首页与文档页之间保持一致。不复用 app.js：app.js 的 render 会把首页的
 * title / meta 写到本页，且要渲染首页特有的卡片/流水线，不适合文档页。
 *
 * 渲染三类节点：
 *   data-i18n        → textContent（纯文本，自动转义）
 *   data-i18n-html   → innerHTML（仅用于本仓库自己撰写的受信富文本，含行内 <code>/<b>/<br>）
 *   data-i18n-attr   → setAttribute("attr:path;attr2:path2")
 *
 * 渐进增强：HTML 内默认中文文案即兜底；JS 缺失或字典未加载时页面保持中文可用。
 */
(function () {
  "use strict";

  var NS = window.SPECLOOM || {};
  var DICTS = NS.dict || {};
  var LS_KEY = "specloom.lang";
  var SUPPORTED = ["zh", "en"];

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

  /** 检测：localStorage（显式偏好）优先，否则默认英文（与首页一致）。
   *  按产品要求「默认英文显示」，不再按 navigator.language 自动切换。 */
  function detectLang(defaultLang) {
    var stored = null;
    try {
      stored = window.localStorage.getItem(LS_KEY);
    } catch (e) {
      stored = null;
    }
    if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    return SUPPORTED.indexOf(defaultLang) !== -1 ? defaultLang : "en";
  }

  function render(lang) {
    var dict = DICTS[lang];
    if (!dict || !dict.guide) return;
    var g = dict.guide;

    // 纯文本节点
    var textNodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < textNodes.length; i++) {
      var v = resolvePath(dict, textNodes[i].getAttribute("data-i18n"));
      if (typeof v === "string") textNodes[i].textContent = v;
    }

    // 富文本节点（受信，含行内标记）
    var htmlNodes = document.querySelectorAll("[data-i18n-html]");
    for (var j = 0; j < htmlNodes.length; j++) {
      var hv = resolvePath(dict, htmlNodes[j].getAttribute("data-i18n-html"));
      if (typeof hv === "string") htmlNodes[j].innerHTML = hv;
    }

    // 属性注入
    var attrNodes = document.querySelectorAll("[data-i18n-attr]");
    for (var k = 0; k < attrNodes.length; k++) {
      var pairs = attrNodes[k].getAttribute("data-i18n-attr").split(";");
      for (var p = 0; p < pairs.length; p++) {
        var pair = pairs[p].trim();
        if (!pair) continue;
        var idx = pair.indexOf(":");
        if (idx === -1) continue;
        var av = resolvePath(dict, pair.slice(idx + 1).trim());
        if (typeof av === "string") attrNodes[k].setAttribute(pair.slice(0, idx).trim(), av);
      }
    }

    // html lang / title / meta description
    document.documentElement.setAttribute("lang", g.meta.htmlLang);
    document.title = g.meta.title;
    var desc = document.querySelector('meta[name="description"]');
    if (desc && typeof g.meta.description === "string") {
      desc.setAttribute("content", g.meta.description);
    }

    // 语言开关 aria-pressed
    var langBtns = document.querySelectorAll(".lang-switch button[data-lang]");
    for (var b = 0; b < langBtns.length; b++) {
      langBtns[b].setAttribute(
        "aria-pressed",
        langBtns[b].getAttribute("data-lang") === lang ? "true" : "false"
      );
    }
  }

  function setLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) return;
    render(lang);
    try {
      window.localStorage.setItem(LS_KEY, lang);
    } catch (e) {
      /* 隐私模式：静默降级 */
    }
  }

  function boot() {
    // 字典缺失：保留 HTML 内默认中文，不白屏
    if (!DICTS.zh || !DICTS.en) return;
    var def = (NS.CONFIG && NS.CONFIG.defaultLang) || "zh";
    render(detectLang(def));

    var langBtns = document.querySelectorAll(".lang-switch button[data-lang]");
    for (var i = 0; i < langBtns.length; i++) {
      langBtns[i].addEventListener("click", function () {
        setLang(this.getAttribute("data-lang"));
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
