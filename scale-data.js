/* 높이 여행 — 데이터. 모든 m 값은 실측(출처는 scale.html 하단).
   svg = 인라인 실루엣(외부 이미지 0). viewBox는 자유, CSS가 svgbox에 맞춤.
   순서 = 고도 내림차순(위=하늘 10,668m -> 아래=해구 -10,935m). */
(function(){
// 실루엣 헬퍼용 공통 색
var SKY='#1e3a5f', STEEL='#5b6470', GOLD='#c99a3a';

window.SCALE_DATA=[

/* ── 하늘 ── */
{m:10668,name:'여객기 순항고도',cmt:'여기서부터 바깥은 영하 50도. 창밖에 인간이 지은 건 아무것도 없습니다.',
 svg:'<svg viewBox="0 0 60 24"><path d="M2 12h34l10-5 3 1-6 6h-4l-4 3h-3l2-3H10l-3 4H4l2-4H2z" fill="'+SKY+'"/></svg>'},
{m:8849,name:'에베레스트 정상',cmt:'지구에서 가장 높은 땅. 그런데 여객기는 이 위로 날아갑니다.',
 svg:'<svg viewBox="0 0 60 60"><path d="M4 56 26 10l8 14 6-9 16 41z" fill="#8090a0"/><path d="M22 18l4-8 6 11-5 3z" fill="#eef3fb"/></svg>'},
{m:3776,name:'후지산',cmt:'구름을 뚫고 올라온 이 완벽한 원뿔도, 아직 성층권 발치입니다.',
 svg:'<svg viewBox="0 0 60 60"><path d="M4 56 30 10l26 46z" fill="#5a6b82"/><path d="M22 24 30 10l8 14-8 5z" fill="#f2f6fd"/></svg>'},
{m:1947,name:'한라산',cmt:'남한에서 가장 높은 곳. 백록담에 서면 발밑이 벌써 2km 상공입니다.',
 svg:'<svg viewBox="0 0 60 60"><path d="M4 56 30 16l26 40z" fill="#3f6b4a"/><path d="M24 26h12l-2 6h-8z" fill="#2c4d36"/></svg>'},

/* ── 초고층 인공 구조물 ── */
{m:979,name:'엔젤 폭포',cmt:'세계에서 가장 높은 폭포. 979m를 떨어지는 동안 물이 안개가 되어 바닥에 닿기 전 흩어집니다.',
 svg:'<svg viewBox="0 0 30 60"><path d="M4 4h22v6l-6 44h-4l-6-44z" fill="#3f5a4a"/><path d="M13 10c-1 14 1 30 2 44 1-14 3-30 2-44z" fill="#dbeafe"/></svg>'},
{m:828,name:'부르즈 할리파',cmt:'인간이 지은 가장 높은 것. 꼭대기 사람은 20분 먼저 해가 진 걸 봅니다.',
 svg:'<svg viewBox="0 0 24 60"><path d="M12 2l1 6h1l1 8h1l1 10h1l2 32H3l2-32h1l1-10h1l1-8h1z" fill="'+STEEL+'"/></svg>'},
{m:678.9,name:'메르데카 118',cmt:'말레이시아의 뾰족한 자존심. 세계 2위 높이의 건물.',
 svg:'<svg viewBox="0 0 24 60"><path d="M12 3l2 12 2 43H8l2-43z" fill="'+STEEL+'"/><rect x="11" y="0" width="2" height="6" fill="'+STEEL+'"/></svg>'},
{m:632,name:'상하이 타워',cmt:'꽈배기처럼 비틀린 632m. 바람을 흘려보내려 몸을 꼬았습니다.',
 svg:'<svg viewBox="0 0 24 60"><path d="M9 58C6 40 16 34 13 18 11 8 15 6 14 2c4 6 1 14 3 24 2 14-6 20-3 32z" fill="'+STEEL+'"/></svg>'},
{m:555,name:'롯데월드타워',cmt:'대한민국에서 가장 높은 곳. 서울 어디서나 이 붓끝이 보입니다.',
 svg:'<svg viewBox="0 0 24 60"><path d="M12 1l3 14 3 43H6l3-43z" fill="'+STEEL+'"/></svg>'},

/* 이스터에그 1 */
{easter:true,m:520,easter:'📐 <b>체감</b> — 여기까지 <b>63빌딩(249m)</b>을 2개하고 조금 더 쌓아야 롯데월드타워 꼭대기에 닿습니다.'},

{m:330,name:'에펠탑',cmt:'파리의 철탑. 여름이면 쇠가 늘어나 키가 15cm쯤 자랍니다.',
 svg:'<svg viewBox="0 0 40 60"><path d="M20 2v10M12 26h16M8 40h24M20 12 4 58h6l10-30 10 30h6z" fill="none" stroke="#7a6a4a" stroke-width="2.4"/></svg>'},
{m:249,name:'63빌딩',cmt:'한때 여의도의 왕. 금빛 유리로 노을을 통째로 반사합니다.',
 svg:'<svg viewBox="0 0 24 60"><path d="M4 58V22l8-16 8 16v36z" fill="'+GOLD+'"/></svg>'},
{m:236.7,name:'남산서울타워 (탑 자체)',cmt:'산 높이는 빼고 탑만 236.7m. 자물쇠 무게는 계산에 넣지 않았습니다.',
 svg:'<svg viewBox="0 0 24 60"><rect x="11" y="4" width="2" height="26" fill="'+STEEL+'"/><path d="M6 30h12l-2 8H8z" fill="'+STEEL+'"/><path d="M10 38h4v20h-4z" fill="'+STEEL+'"/><circle cx="12" cy="4" r="3" fill="'+STEEL+'"/></svg>'},
{m:146.6,name:'기자 대피라미드 (원래 높이)',cmt:'4,500년 전 지어져 3,800년간 세계 최고층이었습니다. 지금은 표면석이 벗겨져 138.5m.',
 svg:'<svg viewBox="0 0 60 60"><path d="M4 56 30 6l26 50z" fill="#c9a86a"/><path d="M30 6 30 56 4 56z" fill="#b8975a"/></svg>'},
{m:96,name:'빅 벤 (엘리자베스 타워)',cmt:'런던의 시계탑. 종소리는 이 96m 꼭대기에서 울려 퍼집니다.',
 svg:'<svg viewBox="0 0 24 60"><path d="M8 58V22h8v36z" fill="#a8905c"/><rect x="9" y="10" width="6" height="12" fill="#8a7548"/><circle cx="12" cy="16" r="2.4" fill="#f2e6c0"/><path d="M8 10 12 2l4 8z" fill="#6a5638"/></svg>'},
{m:93,name:'자유의 여신상 (받침 포함)',cmt:'횃불 끝까지 93m. 뉴욕항으로 들어오는 배들의 첫 이정표.',
 svg:'<svg viewBox="0 0 30 60"><rect x="8" y="34" width="14" height="24" fill="#7f9b86"/><path d="M13 6l4 4-2 4 3 2-3 16h-4l-2-16-2-2 3-4z" fill="#9fbfaa"/><path d="M15 6l1-5 2 3z" fill="#9fbfaa"/></svg>'},
/* 이스터에그 2 */
{easter:true,m:74,easter:'👑 <b>체감</b> — 여기 오기까지 광화문 <b>세종대왕 동상(6.2m)</b>을 15개쯤 목말 태워야 했습니다. 임금님도 어지러우실 높이.'},

{m:63,name:'아파트 20층 (약)',cmt:'한 층 3m로 잡으면 20층. 엘리베이터가 서면 다리가 후들거리는 높이.',
 svg:'<svg viewBox="0 0 30 60"><rect x="6" y="4" width="18" height="54" fill="#8a94a2"/><g fill="#d8e2ee"><rect x="9" y="8" width="4" height="4"/><rect x="17" y="8" width="4" height="4"/><rect x="9" y="16" width="4" height="4"/><rect x="17" y="16" width="4" height="4"/><rect x="9" y="24" width="4" height="4"/><rect x="17" y="24" width="4" height="4"/><rect x="9" y="32" width="4" height="4"/><rect x="17" y="32" width="4" height="4"/><rect x="9" y="40" width="4" height="4"/><rect x="17" y="40" width="4" height="4"/></g></svg>'},
{m:46,name:'자유의 여신상 (동상만)',cmt:'받침을 빼면 46m. 발끝부터 횃불까지의 순수한 구리 몸체.',
 svg:'<svg viewBox="0 0 24 60"><path d="M9 58V30h6v28z" fill="#7f9b86"/><path d="M10 8l4 4-2 4 3 2-3 12h-4l-2-12-2-2 3-4z" fill="#9fbfaa"/><path d="M12 8l1-5 2 3z" fill="#9fbfaa"/></svg>'},
{m:38,name:'구세주 그리스도상',cmt:'리우를 내려다보는 두 팔. 받침까지 38m, 팔 폭만 28m.',
 svg:'<svg viewBox="0 0 40 60"><rect x="18" y="46" width="4" height="12" fill="#9aa2ac"/><path d="M2 22h36v3H2z" fill="#b6bec8"/><rect x="18" y="16" width="4" height="30" fill="#c6cdd6"/><circle cx="20" cy="12" r="4" fill="#c6cdd6"/></svg>'},
{m:9.5,name:'세종대왕 동상 (기단 포함)',cmt:'앉아 계신데도 9.5m. 광화문광장의 온화한 군주.',
 svg:'<svg viewBox="0 0 40 40"><rect x="10" y="30" width="20" height="8" fill="#8a7550"/><path d="M14 30c0-8 2-14 6-14s6 6 6 14z" fill="#b89a5f"/><circle cx="20" cy="12" r="4" fill="#b89a5f"/></svg>'},
{m:9.17,name:'첨성대',cmt:'신라의 천문대. 별을 보려 1,400년 전 쌓아 올린 돌 항아리.',
 svg:'<svg viewBox="0 0 30 40"><path d="M8 38C8 20 10 10 15 8s7 12 7 30z" fill="#9c8b6a"/><rect x="12" y="16" width="6" height="6" fill="#5c4f38"/><rect x="9" y="6" width="12" height="3" fill="#8a7a5c"/></svg>'},
{m:6.2,name:'한옥 기와지붕 처마',cmt:'곡선을 그리며 하늘로 살짝 들린 처마 끝. 사람 키의 세 배 남짓.',
 svg:'<svg viewBox="0 0 40 30"><path d="M2 16C10 6 30 6 38 16l-3 2C28 12 12 12 5 18z" fill="#5a4230"/><rect x="8" y="18" width="24" height="10" fill="#c9b48f"/><rect x="12" y="20" width="4" height="8" fill="#7a5c3a"/><rect x="24" y="20" width="4" height="8" fill="#7a5c3a"/></svg>'},
{m:1.72,name:'사람 (평균 키)',cmt:'여행의 기준점. 여기서 위아래로 세상이 아득해집니다.',
 svg:'<svg viewBox="0 0 20 40"><circle cx="10" cy="6" r="4" fill="#3a3f47"/><path d="M6 12h8v14l3 12h-4l-3-10-3 10H4l3-12z" fill="#3a3f47"/></svg>'},
{m:0.3,name:'보도블록 한 칸',cmt:'발밑. 이제 곧 땅속으로 들어갑니다.',
 svg:'<svg viewBox="0 0 30 20"><rect x="3" y="6" width="24" height="8" fill="#9aa0a6"/><path d="M3 6l3-3h24l-3 3z" fill="#b6bcc2"/></svg>'},

/* ── 지면 통과 ── */
{ground:true},

/* ── 지하 ── */
{m:-2,name:'지하 주차장 B1',cmt:'해가 사라졌습니다. 형광등과 기둥의 세계.',
 svg:'<svg viewBox="0 0 40 30"><rect x="2" y="4" width="36" height="24" fill="#4a4f57"/><rect x="8" y="10" width="10" height="14" fill="#2f333a"/><rect x="22" y="10" width="10" height="14" fill="#2f333a"/></svg>'},
{m:-14,name:'지하철 승강장 (일반)',cmt:'열차가 들어올 때 훅 부는 바람의 정체는, 터널이 밀어낸 공기입니다.',
 svg:'<svg viewBox="0 0 40 30"><rect x="2" y="6" width="36" height="18" rx="9" fill="#3a4048"/><rect x="8" y="12" width="24" height="10" rx="2" fill="#7fa8d8"/><circle cx="13" cy="24" r="2" fill="#2a2e34"/><circle cx="27" cy="24" r="2" fill="#2a2e34"/></svg>'},
{m:-20,name:'파리 카타콤',cmt:'지하 20m, 600만 명의 뼈가 벽을 이룬 지하 도시. "멈춰라, 여기는 죽음의 제국".',
 svg:'<svg viewBox="0 0 40 30"><rect x="2" y="4" width="36" height="24" fill="#3a3630"/><circle cx="12" cy="14" r="4" fill="#d8cfc0"/><rect x="9" y="18" width="6" height="3" fill="#d8cfc0"/><circle cx="26" cy="14" r="4" fill="#d8cfc0"/><rect x="23" y="18" width="6" height="3" fill="#d8cfc0"/></svg>'},
{m:-49.3,name:'버티고개역 (6호선)',cmt:'서울에서 손꼽히게 깊은 역. 에스컬레이터에서 노래 한 곡이 끝납니다.',
 svg:'<svg viewBox="0 0 40 40"><rect x="2" y="2" width="36" height="36" fill="#2f333a"/><path d="M4 6 20 18 36 6" fill="none" stroke="#6a7078" stroke-width="2"/><rect x="14" y="24" width="12" height="8" rx="2" fill="#7fa8d8"/></svg>'},
{m:-55.79,name:'산성역 (8호선)',cmt:'서울 지하철 최심역. 여기서부터 엘리베이터에서 귀가 먹먹해집니다.',
 svg:'<svg viewBox="0 0 40 40"><rect x="2" y="2" width="36" height="36" fill="#2b2f36"/><path d="M4 4 20 20 36 4M4 10 20 26 36 10" fill="none" stroke="#5a6068" stroke-width="1.6"/><rect x="14" y="30" width="12" height="6" rx="2" fill="#7fa8d8"/></svg>'},
{m:-76,name:'만덕역 (부산 3호선)',cmt:'한국에서 가장 깊은 지하철역. 지상까지 25층 건물 하나를 걸어 올라와야 합니다.',
 svg:'<svg viewBox="0 0 40 40"><rect x="2" y="2" width="36" height="36" fill="#26292f"/><path d="M4 3 20 19 36 3M4 9 20 25 36 9M4 15 20 31 36 15" fill="none" stroke="#4a5058" stroke-width="1.4"/><rect x="15" y="33" width="10" height="5" rx="2" fill="#7fa8d8"/></svg>'},

/* 이스터에그 3 */
{easter:true,m:-140,easter:'🏔️ <b>체감</b> — 여기서 위를 올려다보면, <b>기자 대피라미드(146.6m)</b> 하나가 통째로 머리 위 흙에 파묻혀 있는 셈입니다.'},

/* ── 바다로 전환: 해수면 아래 깊이(수심). 지하 암반 깊이와 크기순으로 섞임 ── */
{m:-200,name:'유광층의 끝 (광합성층)',cmt:'식물성 플랑크톤이 사는 마지막 깊이. 여기 아래로는 광합성이 불가능합니다.',
 svg:'<svg viewBox="0 0 40 30"><rect x="2" y="2" width="36" height="26" fill="#3a6da0"/><path d="M8 6c2 6 6 6 8 0M22 8c2 6 6 6 8 0" stroke="#9fc0e0" stroke-width="1.5" fill="none"/><circle cx="14" cy="20" r="1.5" fill="#cfe4f6"/><circle cx="26" cy="18" r="1.5" fill="#cfe4f6"/></svg>'},
{m:-240,name:'가장 깊은 광산 갱도 근처',cmt:'남아공 금광이 여기쯤에서 아직 한참 더 내려갑니다. 암반 온도가 60도까지 오릅니다.',
 svg:'<svg viewBox="0 0 40 30"><rect x="2" y="2" width="36" height="26" fill="#332e28"/><path d="M6 8 14 20M20 6l4 22M30 8l2 20" stroke="#5a4f3f" stroke-width="2" fill="none"/><rect x="16" y="22" width="8" height="6" fill="#c99a3a"/></svg>'},
{m:-1000,name:'박광층의 끝 (트와일라잇 존)',cmt:'희미한 푸른 빛마저 완전히 꺼지는 깊이. 여기서부터 영원한 밤입니다.',
 svg:'<svg viewBox="0 0 40 30"><rect x="2" y="2" width="36" height="26" fill="#1f3a5c"/><path d="M18 8c-3 0-6 3-6 6s3 6 6 6 8-2 10-6c-2-4-7-6-10-6z" fill="#123"/><circle cx="16" cy="14" r="1.4" fill="#7fd0ff"/><path d="M28 14l4-3v6z" fill="#0d2038"/></svg>'},
{m:-1000.1,name:'대왕오징어',cmt:'300~1000m의 암흑에 사는 전설의 거대 오징어. 눈 지름만 축구공만 합니다.',
 svg:'<svg viewBox="0 0 40 40"><path d="M20 4c5 0 8 5 8 11l-2 6c3 6-1 15-2 18-1-4-1-8-2-6-1 3-2 3-2 0-1 4-2 4-3 0-1-2-2 2-3 6-1-3-5-12-2-18l-2-6c0-6 3-11 8-11z" fill="#7a3a4a"/><circle cx="15" cy="14" r="2" fill="#f2d0d8"/><circle cx="25" cy="14" r="2" fill="#f2d0d8"/></svg>'},
{m:-2000,name:'향유고래 사냥 깊이',cmt:'포유류인데도 숨 한 번으로 여기까지 내려와 대왕오징어를 사냥합니다.',
 svg:'<svg viewBox="0 0 50 24"><path d="M4 12c8-8 30-8 40 0-4 3-6 3-8 1l-2 5-3-4c-8 3-20 3-27-2z" fill="#2c4560"/><circle cx="14" cy="10" r="1.4" fill="#cfe"/></svg>'},
{m:-3800,name:'타이타닉 잔해',cmt:'1912년 이후 이 어둠 속에 잠들어 있습니다. 수압은 지상의 380배.',
 svg:'<svg viewBox="0 0 50 30"><path d="M4 20h34l6-4-40-2z" fill="#4a4238"/><rect x="10" y="10" width="4" height="8" fill="#5a5248"/><rect x="18" y="8" width="4" height="10" fill="#5a5248"/><rect x="26" y="10" width="4" height="8" fill="#5a5248"/></svg>'},

/* 이스터에그 4 */
{easter:true,m:-5000,easter:'🏢 <b>체감</b> — 이 깊이에 <b>롯데월드타워(555m)</b>를 9개 쌓아 넣어도, 꼭대기는 아직 캄캄한 물속입니다. 지구의 진짜 깊이는 이제 시작입니다.'},

{m:-6000,name:'초심해대(하달존)의 시작',cmt:'해구만이 이보다 깊습니다. 대부분의 심해 지도가 여기서 끝납니다 — 달 표면보다 낯선 곳.',
 svg:'<svg viewBox="0 0 40 24"><rect x="2" y="2" width="36" height="20" fill="#0c1424"/><path d="M2 18c8-4 14 2 20-1s12 3 16 0v4H2z" fill="#08101c"/><circle cx="12" cy="8" r="1" fill="#3a6"/><circle cx="30" cy="6" r="1" fill="#3a6"/></svg>'},
{m:-6212,name:'빅핀 오징어 (관측 최심 두족류)',cmt:'필리핀 해구 6,212m에서 촬영된 외계 생물 같은 오징어. 여기서 사는 게 확인된 가장 깊은 오징어.',
 svg:'<svg viewBox="0 0 40 40"><rect x="2" y="2" width="36" height="36" fill="#08101c"/><ellipse cx="20" cy="12" rx="5" ry="7" fill="#5a2a3a"/><path d="M17 18c0 8-6 14-6 18M20 18c0 8 0 15 0 20M23 18c0 8 6 14 6 18" stroke="#7a3a4a" stroke-width="1.4" fill="none"/></svg>'},
{m:-8848,name:'에베레스트를 거꾸로 담아도',cmt:'세계에서 가장 높은 산(8,849m)을 이 자리에 꽂아도, 정상이 물에 잠깁니다.',
 svg:'<svg viewBox="0 0 40 40"><rect x="2" y="2" width="36" height="36" fill="#060c18"/><path d="M4 4 30 40 8 40z" fill="#16223a"/><path d="M18 4l4 6-5 3z" fill="#2a3a58"/></svg>'},
{m:-10935,name:'챌린저 해연 (마리아나 해구)',cmt:'지구에서 가장 깊은 바닥. 수압은 지상의 1,100배. 여기가 끝입니다.',
 svg:'<svg viewBox="0 0 40 30"><rect x="2" y="2" width="36" height="26" fill="#030812"/><path d="M2 6c6 8 10 12 18 18 8-6 12-10 18-18v22H2z" fill="#020610"/><circle cx="20" cy="20" r="1.6" fill="#4ad"/></svg>'}

];
})();
