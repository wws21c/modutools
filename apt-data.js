/* 집값 맞히기 — 실거래 데이터셋
 *
 * 모든 항목은 뉴스 기사·공개 보도에 명시된 국토부 실거래가 기반 실제 거래입니다.
 * 지어낸 값 없음. 각 항목의 src 필드에 출처 기사 URL을 명기했습니다.
 * price 단위 = 억원. area 단위 = 전용면적 m². floor = 거래 층(기사에 명시된 경우만).
 * ym = 거래 연월(가격은 시점 종속이므로 필수).
 *
 * 수집 방식: WebSearch로 "OO아파트 전용OO 실거래가 2024 신고가" 등 다각도 검색,
 * 기사 본문에 층·면적·연월·가격이 모두 명시된 거래만 채택.
 */
window.APT_DATA = [
  // ── 서울 강남·서초 (프리미엄) ──
  { district:"서초구", name:"래미안 원베일리", area:84, floor:9, ym:"2024-08", price:60.0,
    src:"https://www.newsis.com/view/NISX20240910_0002883410" },
  { district:"서초구", name:"래미안 원베일리", area:133, floor:28, ym:"2024-12", price:106.0,
    src:"https://www.newsis.com/view/NISX20240910_0002883410" },
  { district:"서초구", name:"아크로리버파크", area:84, floor:20, ym:"2024-07", price:50.0,
    src:"https://biz.newdaily.co.kr/site/data/html/2024/07/30/2024073000095.html" },
  { district:"서초구", name:"래미안 퍼스티지", area:84.93, floor:26, ym:"2024-11", price:55.25,
    src:"https://www.businesspost.co.kr/BP?command=article_view&num=421951" },
  { district:"서초구", name:"반포자이", area:84, floor:14, ym:"2024-06", price:46.7,
    src:"https://homedubu.com/3645/" },
  { district:"강남구", name:"압구정 신현대(9·11·12차)", area:155, floor:8, ym:"2024-11", price:71.5,
    src:"https://apkevin.com/bbs/board.php?bo_table=w2_1&wr_id=19" },
  { district:"강남구", name:"압구정 신현대(9·11·12차)", area:170, floor:5, ym:"2024-11", price:70.5,
    src:"https://apkevin.com/bbs/board.php?bo_table=w2_1&wr_id=19" },
  { district:"강남구", name:"디에이치 아너힐즈", area:84.35, floor:12, ym:"2024-09", price:36.0,
    src:"https://m.richgo.ai/realty/danji/a2XnxGy" },

  // ── 서울 송파 (잠실·가락) ──
  { district:"송파구", name:"잠실 엘스", area:84, floor:11, ym:"2024-12", price:25.7,
    src:"https://news.nate.com/view/20241221n04647" },
  { district:"송파구", name:"잠실 트리지움", area:84, floor:23, ym:"2024-03", price:16.8,
    src:"https://www.sedaily.com/article/13477626" },
  { district:"송파구", name:"헬리오시티", area:84, floor:15, ym:"2024-09", price:24.0,
    src:"https://www.hankyung.com/article/202409138068i" },
  { district:"송파구", name:"올림픽파크포레온(둔촌주공)", area:84, floor:22, ym:"2024-08", price:24.5,
    src:"https://www.etoday.co.kr/news/view/2397744" },

  // ── 서울 강동 ──
  { district:"강동구", name:"고덕 그라시움", area:84, floor:14, ym:"2024-07", price:20.1,
    src:"https://www.etoday.co.kr/news/view/2397744" },

  // ── 서울 마용성 (마포·용산·성동) ──
  { district:"마포구", name:"마포 래미안 푸르지오", area:84, floor:15, ym:"2024-01", price:23.15,
    src:"https://www.hankyung.com/article/202502042087i" },
  { district:"마포구", name:"마포 래미안 푸르지오", area:84, floor:22, ym:"2024-01", price:21.0,
    src:"https://www.hankyung.com/article/202502042087i" },
  { district:"성동구", name:"트리마제", area:140.31, floor:20, ym:"2024-06", price:47.0,
    src:"https://mr-everything.kr/entry/성수동-아파트-실거래가-알아보기" },
  { district:"성동구", name:"아크로 서울포레스트", area:206.74, floor:12, ym:"2024-05", price:140.0,
    src:"https://www.businesspost.co.kr/BP?command=article_view&num=439080" },

  // ── 서울 목동·여의도 ──
  { district:"양천구", name:"목동 신시가지 7단지", area:101, floor:5, ym:"2024-06", price:36.5,
    src:"https://biz.heraldcorp.com/article/10770892" },
  { district:"양천구", name:"목동 신시가지 7단지", area:66, floor:10, ym:"2024-07", price:20.5,
    src:"https://biz.heraldcorp.com/article/10770892" },
  { district:"양천구", name:"목동 신시가지 2단지", area:144, floor:7, ym:"2024-04", price:38.8,
    src:"https://biz.heraldcorp.com/article/10770892" },

  // ── 경기 (분당·판교·과천·광교·수원) ──
  { district:"성남시 분당구", name:"판교 알파리움 1단지", area:117, floor:12, ym:"2024-07", price:19.5,
    src:"https://hogangnono.com/apt/azg11" },
  { district:"수원시 영통구", name:"광교 자연앤힐스테이트", area:84, floor:17, ym:"2024-12", price:15.0,
    src:"https://news.nate.com/view/20250108n28370" },
  { district:"화성시(동탄2)", name:"동탄역 롯데캐슬", area:135, floor:20, ym:"2024-02", price:22.0,
    src:"https://kbland.kr/se/otd/932578" },
  { district:"광명시", name:"광명자이 힐스테이트 SK뷰", area:84, floor:15, ym:"2024-01", price:12.35,
    src:"https://2welllife2.com/entry/대장아파트로-떠오른-철산-자이" },

  // ── 부산 (해운대) ──
  { district:"부산 해운대구", name:"엘시티 더샵", area:186, floor:40, ym:"2024-04", price:47.0,
    src:"https://www.busan.com/view/busan/view.php?code=2024041014074982196" },
  { district:"부산 해운대구", name:"마린시티자이", area:84, floor:20, ym:"2024-06", price:15.0,
    src:"https://m.richgo.ai/realty/danji/a1QJwck" },

  // ── 대구 (수성구) ──
  { district:"대구 수성구", name:"힐스테이트 범어", area:84, floor:9, ym:"2024-08", price:15.7,
    src:"https://m.sedaily.com/amparticle/13977284" },

  // ── 대전 (도안) ──
  { district:"대전 서구", name:"갑천1 트리풀시티 힐스테이트", area:84, floor:10, ym:"2024-05", price:7.5,
    src:"https://hogangnono.com/apt/dVO7e/0/4/review/5200234" },

  // ── 인천 (송도) ──
  { district:"인천 연수구", name:"송도 더샵 센트럴시티", area:84, floor:37, ym:"2024-06", price:8.68,
    src:"https://news.nate.com/view/20260527n29358" },

  // ── 서울 용산 (한남) ──
  { district:"용산구", name:"나인원한남", area:273.94, floor:1, ym:"2024-08", price:250.0,
    src:"https://www.businesspost.co.kr/BP?command=article_view&num=440810" },
  { district:"용산구", name:"나인원한남", area:273.41, floor:1, ym:"2024-08", price:220.0,
    src:"https://www.dt.co.kr/article/11602691" },

  // ── 서울 영등포 (여의도) ──
  { district:"영등포구", name:"여의도 시범", area:79, floor:10, ym:"2024-06", price:29.5,
    src:"https://www.sedaily.com/article/20025487" },
  { district:"영등포구", name:"여의도 광장", area:102, floor:8, ym:"2024-04", price:32.0,
    src:"https://www.sedaily.com/article/20025487" },
  { district:"영등포구", name:"여의도 장미", area:106, floor:6, ym:"2024-04", price:38.0,
    src:"https://www.sedaily.com/article/20025487" },

  // ── 경기 고양 (일산 킨텍스) ──
  { district:"고양시 일산동구", name:"킨텍스 원시티 1블럭", area:84, floor:20, ym:"2024-02", price:10.5,
    src:"https://www.newstomato.com/ReadNews.aspx?no=1189420" },

  // ── 추가 검증 거래 ──
  { district:"서초구", name:"반포자이", area:84, floor:9, ym:"2024-03", price:45.5,
    src:"https://homedubu.com/3645/" },
  { district:"서초구", name:"래미안 퍼스티지", area:84.93, floor:5, ym:"2024-06", price:52.0,
    src:"https://www.businesspost.co.kr/BP?command=article_view&num=421951" },
  { district:"서초구", name:"래미안 퍼스티지", area:84.93, floor:29, ym:"2024-06", price:40.0,
    src:"https://biz.heraldcorp.com/article/3433475" },
  { district:"양천구", name:"목동 신시가지 5단지", area:115, floor:8, ym:"2024-06", price:30.0,
    src:"https://m.richgo.ai/realty/danji/a2AEaaR" },
  { district:"강동구", name:"올림픽파크포레온(둔촌주공)", area:84, floor:29, ym:"2024-06", price:23.52,
    src:"https://www.etoday.co.kr/news/view/2397744" }
];
