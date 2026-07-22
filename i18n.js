/* 모두도구 i18n — KO(기본)/EN/JA/ZH
   사용법: 각 페이지가 window.I18N_PAGE = {en:{key:"..."},ja:{...},zh:{...}} 선언 +
   마크업에 data-i18n="key"(textContent) / data-i18n-ph="key"(placeholder) / data-i18n-title="key"(title,aria-label).
   KO 원문은 마크업 자체 — 최초 적용 시 원문을 저장해 두고 KO 복귀 시 복원.
   JS 동적 문자열은 window.t("key","한국어 원문") 사용. */
(function () {
  var LANGS = { ko: "KO", en: "EN", ja: "日本語", zh: "中文" };
  var COMMON = {
    en: { site_name_prefix:"Modu", site_name_suffix:"Tools", footer_note:"ⓒ ModuTools · Everything runs in your browser. We never store what you enter.",
      nav_games:"Games", nav_tools:"Tools", links_all:"All tools",
      c_apt_t:"Home Price Guess", c_map_t:"Where Is This?", c_archi_t:"Daily Architecture", c_space_t:"Space Test", c_scale_t:"Journey of Heights", c_city_t:"Mini City",
      c_char_t:"Characters", c_salary_t:"Take-home Pay", c_pct_t:"Percent", c_img_t:"Image Compress", c_react_t:"Reaction", c_age_t:"Age", c_dday_t:"D-day", c_bmi_t:"BMI", c_lotto_t:"Lotto", c_yt_t:"YT Thumbnail", c_pc_t:"Phone Contract" },
    ja: { site_name_prefix:"モドゥ", site_name_suffix:"ツール", footer_note:"ⓒ モドゥツール · すべての処理はブラウザ内で完結し、入力内容は保存されません。",
      nav_games:"ゲーム", nav_tools:"ツール", links_all:"全ツール",
      c_apt_t:"住宅価格当て", c_map_t:"ここはどこ？", c_archi_t:"今日の建築", c_space_t:"空間タイプ診断", c_scale_t:"高さの旅", c_city_t:"ミニシティ",
      c_char_t:"文字数", c_salary_t:"手取り計算", c_pct_t:"パーセント", c_img_t:"画像圧縮", c_react_t:"反応速度", c_age_t:"満年齢", c_dday_t:"Dデー", c_bmi_t:"BMI", c_lotto_t:"ロト", c_yt_t:"サムネイル", c_pc_t:"スマホ契約書" },
    zh: { site_name_prefix:"全民", site_name_suffix:"工具", footer_note:"ⓒ 全民工具 · 所有计算均在浏览器内完成，不会保存您输入的内容。",
      nav_games:"游戏", nav_tools:"工具", links_all:"全部工具",
      c_apt_t:"猜房价", c_map_t:"这是哪里？", c_archi_t:"今日建筑", c_space_t:"空间测试", c_scale_t:"高度之旅", c_city_t:"迷你城市",
      c_char_t:"字数统计", c_salary_t:"到手工资", c_pct_t:"百分比", c_img_t:"图片压缩", c_react_t:"反应速度", c_age_t:"周岁", c_dday_t:"倒数日", c_bmi_t:"BMI", c_lotto_t:"乐透", c_yt_t:"缩略图", c_pc_t:"手机契约" }
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
