# modutools — 모두도구 (웹도구·데일리 게임)

무료 웹도구 10종 + 게임 6종. **순수 정적 HTML/JS — 서버·빌드·외부 API 런타임 호출 0.** 익명 독립 브랜드(WWA 이름 미노출·비주얼만 WWA 가이드라인 v8.4 이식, 2026-07-21 원석씨 지시).

- 배포: github `wws21c/modutools` push → Vercel 자동 → https://modutools.vercel.app
- WIP 쪽 포인터·보고서 = `WWA_WIP/webtools_experiment/` (트랙 등재 = 원석씨 확정 대기)

## 구조
- 도구 10: char-count·salary·age·dday·percent·image-compress·bmi·lotto·youtube-thumbnail·reaction
- 학부모 도구 2 (2026-07-22 신설, 3타깃 재편 = 학부모만 실공백 판정): phone-contract(스마트폰 사용 계약서 생성기 — 폼→인쇄, 양방향 계약)·child-safety(우리 동네 어린이 안전지도 — 어린이보호구역 Leaflet 지도+CCTV/경찰서 + 학폭 공시 링크아웃)
- 게임 6: city(미니시티)·apt(집값 맞히기)·map(여기 어디?)·archi(오늘의 건축물)·space-test(공간 성향)·scale(높이 여행) — 데일리 훅 = KST 날짜 FNV 해시, 공유 = 스포일러 없는 이모지+클립보드, 스트릭 = localStorage
- 데이터 파일: apt-data.js(실거래 40건, 전 건 src 출처 — 보도 기준 참고용)·map-data.js(시군구 251, CC BY 4.0 southkorea-maps)·archi-data.js(건축물 61, hints+hints_en)·scale-data.js(44노드 실측치)·data/childzones.json(어린이보호구역 — 現 광진구 64건 샘플, 전국 스왑 대기)

## child-safety 데이터 파이프 (★ 미완 = 원석씨 클릭 1건 대기)
- 現 상태 = 서울 광진구 64건 샘플만 로드(라이브 작동하나 전국 아님). Leaflet 1.9.4 + OSM 타일(키 불필요, SRI 무결성 해시 박음).
- **전국 스왑 절차**: ① 원석씨가 data.go.kr 15012891 "활용신청"(자동승인) → serviceKey 발급 ② `PUBLIC_DATA_KEY=... python3 build_childzones.py` 실행(전국 ~16,800건 배치) ③ commit+push. 기존 .env.mcp의 PUBLIC_DATA_KEY는 이 API 미등록(resultCode 30) = 별도 활용신청 필수.
- **학폭 심의 = 링크아웃만** (재게시 금지 판정): 일괄 다운로드 목록에 심의 결과 없음(예방교육 실적뿐)·개별 학교 캡차·OpenAPI 15098092=공공누리 3유형 변경금지 → 학교명→학교알리미 공식 검색어 복사+페이지 오픈으로 대체. 검증보고서 = WIP `webtools_experiment/docs/검토보고서/2026-07-22_학부모_안전조회툴_법규검증_국내외.md`

## 스타일 (WWA v8.4)
- `style.css` 단일 SSOT: Pretendard(CDN @import, 시스템 폰트 fallback 금지—generic만) + Source Code Pro(수치) + WWA Slate `#2C3A47` 단일 브랜드색 + Slate Scale 다크모드. 임의 색·폰트 추가 금지.

## i18n (KO 기본 + EN/JA/ZH)
- `i18n.js` = 엔진 (★head **동기 로드** — defer 금지, 본문 게임 스크립트가 초기 렌더에 t() 호출): data-i18n/-ph/-title 속성 + `window.t(key, ko원문)` + `mt:lang` 이벤트(동적 영역 재렌더) + localStorage `mt_lang`/?lang. COMMON에 도구명 16종.
- 새 페이지 추가 시: head에 `window.I18N_PAGE={en,ja,zh}` → `<script src="/i18n.js"></script>` → 정적은 data-i18n, JS 문자열은 t(). **전역 `var t` 선언 금지** (window.t 덮어씀 — char-count 사고).
- archi 힌트 = JA/ZH는 EN 폴백(완역 = v2 백로그).

## 룰
- 도구 신규 추가 = **원석씨 아이디어만** (범용 도구 동결, 2026-07-21). 타겟 프레임 = 학부모/외국관광객/직장인/일반 — index 섹션, 학부모·관광객 슬롯 비어있음.
- 게임 데이터 팩트 지어내기 금지 — 출처 확인된 값만 (법규·팩트 룰 준용).
- 워들 클론 금지: 5×6 그리드·초록/노랑 타일·"-dle" 네이밍 (NYT DMCA).
- 새 페이지 = index 카드 + sitemap.xml + 푸터 링크 3종 동반 갱신.
- 수익화 순서 = `수익화_체크리스트.md` (관문: 도메인 구입 — vercel.app은 애드센스 등록 불가. ads.js CLIENT 입력 = 승인 후).
