/* 모두도구 i18n — KO(기본)/EN/JA/ZH
   사용법: 각 페이지가 window.I18N_PAGE = {en:{key:"..."},ja:{...},zh:{...}} 선언 +
   마크업에 data-i18n="key"(textContent) / data-i18n-ph="key"(placeholder) / data-i18n-title="key"(title,aria-label).
   KO 원문은 마크업 자체 — 최초 적용 시 원문을 저장해 두고 KO 복귀 시 복원.
   JS 동적 문자열은 window.t("key","한국어 원문") 사용. */
(function () {
  var LANGS = { ko: "KO", en: "EN", ja: "日本語", zh: "中文" };
  var COMMON = {
    en: { site_name_prefix:"Modu", site_name_suffix:"Tools", footer_note:"ⓒ ModuTools · Everything runs in your browser. We never store what you enter.",
      nav_games:"Games", nav_tools:"Tools" },
    ja: { site_name_prefix:"モドゥ", site_name_suffix:"ツール", footer_note:"ⓒ モドゥツール · すべての処理はブラウザ内で完結し、入力内容は保存されません。",
      nav_games:"ゲーム", nav_tools:"ツール" },
    zh: { site_name_prefix:"全民", site_name_suffix:"工具", footer_note:"ⓒ 全民工具 · 所有计算均在浏览器内完成，不会保存您输入的内容。",
      nav_games:"游戏", nav_tools:"工具" }
  };
  var saved = {};
  function dict(lang) {
    var page = (window.I18N_PAGE && window.I18N_PAGE[lang]) || {};
    var common = COMMON[lang] || {};
    var d = {};
    for (var k in common) d[k] = common[k];
    for (var k2 in page) d[k2] = page[k2];
    return d;
  }
  function currentLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q && LANGS[q]) { try { localStorage.setItem("mt_lang", q); } catch (e) {} return q; }
    try { var s = localStorage.getItem("mt_lang"); if (s && LANGS[s]) return s; } catch (e) {}
    return "ko";
  }
  function apply(lang) {
    var d = dict(lang);
    ["i18n", "i18n-ph", "i18n-title"].forEach(function (attr) {
      document.querySelectorAll("[data-" + attr + "]").forEach(function (el) {
        var key = el.getAttribute("data-" + attr);
        var sid = attr + ":" + key;
        var set = function (v) {
          if (attr === "i18n") el.textContent = v;
          else if (attr === "i18n-ph") el.setAttribute("placeholder", v);
          else { el.setAttribute("title", v); el.setAttribute("aria-label", v); }
        };
        var cur = attr === "i18n" ? el.textContent : el.getAttribute(attr === "i18n-ph" ? "placeholder" : "title") || "";
        if (!(sid in saved)) saved[sid] = cur;
        if (lang === "ko") set(saved[sid]);
        else if (d[key] != null) set(d[key]);
      });
    });
    document.documentElement.lang = lang === "ko" ? "ko" : lang;
    window.MT_LANG = lang;
    document.dispatchEvent(new CustomEvent("mt:lang", { detail: lang }));
  }
  window.t = function (key, ko) {
    var lang = window.MT_LANG || "ko";
    if (lang === "ko") return ko;
    var d = dict(lang);
    return d[key] != null ? d[key] : ko;
  };
  function injectSwitcher() {
    var nav = document.querySelector("header nav") || document.querySelector("header");
    if (!nav) return;
    var sel = document.createElement("select");
    sel.className = "lang-switch";
    sel.setAttribute("aria-label", "Language");
    for (var code in LANGS) {
      var o = document.createElement("option");
      o.value = code; o.textContent = LANGS[code];
      sel.appendChild(o);
    }
    sel.value = window.MT_LANG || "ko";
    sel.addEventListener("change", function () {
      try { localStorage.setItem("mt_lang", sel.value); } catch (e) {}
      apply(sel.value);
    });
    nav.appendChild(sel);
  }
  function init() {
    var lang = currentLang();
    window.MT_LANG = lang;
    injectSwitcher();
    if (lang !== "ko") apply(lang);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
