// AdSense 게재 스위치 — 승인 후 CLIENT에 ca-pub-XXXX 입력하면 전 페이지 광고 슬롯 활성화
(function () {
  var CLIENT = ""; // 예: "ca-pub-1234567890123456" — 승인 전엔 빈 문자열 유지 (슬롯 비표시)
  if (!CLIENT) return;
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + CLIENT;
  s.crossOrigin = "anonymous";
  document.head.appendChild(s);
  document.querySelectorAll(".ad-slot").forEach(function (el) {
    var ins = document.createElement("ins");
    ins.className = "adsbygoogle";
    ins.style.display = "block";
    ins.setAttribute("data-ad-client", CLIENT);
    ins.setAttribute("data-ad-format", "auto");
    ins.setAttribute("data-full-width-responsive", "true");
    el.appendChild(ins);
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  });
})();
