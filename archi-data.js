/* 오늘의 건축물 — 데이터
 * 모든 팩트는 WebSearch 교차 확인(2026-07 기준). 출처는 각 항목 src 주석.
 * 완공연도·건축가 표기(공동 포함) 우선. 확인 못 한 항목은 제외했다.
 * 필드: id, name(정식 한글명), en(영문), aka(별칭/통칭 배열), arch(건축가),
 *       city, country, year(완공/개관, 표기 기준은 note), type(용도),
 *       feat(대표 수치/특징), hints[6](①연대·구조/재료 ②대륙/국가 ③용도 ④규모 ⑤건축가 ⑥도시)
 * 힌트는 뒤로 갈수록 구체적 → 적은 힌트로 맞힐수록 어렵고 고득점.
 */
window.ARCHI_DATA = [
/* ===== 세계 ===== */
{id:"pantheon",name:"판테온",en:"Pantheon",aka:["Pantheon","로마 판테온"],arch:"하드리아누스 황제 (설계자 미상)",city:"로마",country:"이탈리아",year:128,type:"신전",feat:"무근콘크리트 돔 지름 43.3m — 세계 최대 무보강 콘크리트 돔",hints:[
"약 2세기 초, 무보강 콘크리트로 만든 거대한 반구형 돔 구조물.",
"유럽 남부, 이탈리아에 있습니다.",
"본래 모든 신에게 바쳐진 신전 — 지금은 성당으로 쓰입니다.",
"돔 지름 43.3m·정점에 지름 9m 원형 채광창(오쿨루스). 지름과 높이가 같은 완전 구.",
"단일 설계자는 전하지 않고, 하드리아누스 황제 시대에 재건되었습니다.",
"로마의 심장부, 판테온 광장에 있습니다."],hints_en:[
"Early 2nd century — a colossal hemispherical dome built of unreinforced concrete.",
"In Italy, southern Europe.",
"Originally a temple dedicated to all the gods — now used as a church.",
"Dome 43.3 m in diameter with a 9 m circular oculus at the crown. A perfect sphere, its diameter equal to its height.",
"No single architect survives in record; it was rebuilt under Emperor Hadrian.",
"At the heart of Rome, on Piazza della Rotonda."]},
// src: Britannica, World History Encyclopedia

{id:"sagrada",name:"사그라다 파밀리아",en:"Sagrada Família",aka:["Sagrada Familia","성가족성당","사그라다 파밀리아 대성당"],arch:"안토니 가우디 (Antoni Gaudí)",city:"바르셀로나",country:"스페인",year:2026,type:"종교",feat:"높이 172.5m — 세계에서 가장 높은 교회. 1882년 착공, 144년 만에 구조 완공",hints:[
"1882년 착공해 돌과 콘크리트로 지어온, 아직도 완성 중인 초대형 대성당.",
"유럽 남서부, 스페인에 있습니다.",
"가톨릭 바실리카 — 종교 건축입니다.",
"높이 172.5m로 세계에서 가장 높은 교회. 2026년 예수 그리스도 탑 완공.",
"카탈루냐 모더니즘의 거장 안토니 가우디의 필생의 역작.",
"바르셀로나에 있습니다."],hints_en:["Construction began in 1882; built of stone and concrete — an immense cathedral still under completion.","In southwestern Europe, Spain.","A Catholic basilica — religious architecture.","172.5 m tall, the tallest church in the world. The Tower of Jesus Christ completed in 2026.","The life work of Catalan Modernisme master Antoni Gaudí.","In Barcelona."]},
// src: Wikipedia, Vatican News, sagradafamilia2026.org

{id:"farnsworth",name:"판스워스 하우스",en:"Farnsworth House",aka:["Farnsworth House","판스워스 주택"],arch:"미스 반 데어 로에 (Mies van der Rohe)",city:"플레이노",country:"미국",year:1951,type:"주거",feat:"지면에서 약 1.6m 들어올린 완전 유리 단층 파빌리온",hints:[
"1951년, 강철 프레임과 통유리로 지은 단층 주말주택.",
"북아메리카, 미국(일리노이주)에 있습니다.",
"강가에 지은 개인 별장 — 주거 건축입니다.",
"땅에서 약 1.6m 떠 있는 완전 투명한 유리 상자. 홍수 대비 필로티.",
"‘Less is more’ 미스 반 데어 로에의 대표 주택.",
"일리노이주 플레이노 인근, 폭스강 변에 있습니다."],hints_en:["1951 — a single-story weekend house of steel frame and floor-to-ceiling glass.","In North America, United States (Illinois).","A private weekend retreat by a river — residential architecture.","A fully transparent glass box raised roughly 1.6 m above the ground on pilotis, designed to cope with flooding.","The emblematic house of 'Less is more' — Mies van der Rohe.","Near Plano, Illinois, on the banks of the Fox River."]},
// src: Wikipedia, Britannica, MoMA

{id:"roppongi",name:"롯폰기 힐스 모리 타워",en:"Roppongi Hills Mori Tower",aka:["Roppongi Hills","모리 타워","롯폰기힐즈"],arch:"KPF (Kohn Pedersen Fox)",city:"도쿄",country:"일본",year:2003,type:"초고층 복합",feat:"높이 238m, 54층 — 도심 재개발 복합단지의 상징",hints:[
"2003년 완공한 강철·유리 초고층 복합빌딩.",
"아시아 동부, 일본에 있습니다.",
"오피스가 중심인 복합용도 초고층입니다.",
"높이 238m·54층. 대규모 도심 재개발의 중핵.",
"미국 설계사 KPF(콘 페더슨 폭스)가 설계했습니다.",
"도쿄 미나토구 롯폰기에 있습니다."],hints_en:["Completed in 2003 — a steel-and-glass high-rise mixed-use tower.","In eastern Asia, Japan.","A mixed-use high-rise with offices at its core.","238 m tall, 54 floors — the centerpiece of a large-scale urban redevelopment complex.","Designed by American firm KPF (Kohn Pedersen Fox).","In Roppongi, Minato Ward, Tokyo."]},
// src: Wikipedia, SkyscraperCenter

{id:"burj",name:"부르즈 할리파",en:"Burj Khalifa",aka:["Burj Khalifa","버즈 칼리파","부르즈 칼리파"],arch:"에이드리언 스미스 / SOM",city:"두바이",country:"아랍에미리트",year:2010,type:"초고층 복합",feat:"높이 828m — 세계에서 가장 높은 건축물",hints:[
"2010년 개장, 강철·콘크리트로 지은 세계 최고(最高)의 마천루.",
"서아시아 중동, 아랍에미리트에 있습니다.",
"호텔·주거·오피스가 섞인 복합 초고층입니다.",
"높이 828m·163층 — 세계에서 가장 높은 인공 구조물.",
"SOM의 에이드리언 스미스가 설계했습니다.",
"두바이에 있습니다."],hints_en:["Opened in 2010 — the world's tallest skyscraper, built of steel and concrete.","In western Asia, the Middle East, United Arab Emirates.","A mixed-use supertall combining hotel, residential, and office.","828 m tall, 163 floors — the tallest man-made structure in the world.","Designed by Adrian Smith of SOM.","In Dubai."]},
// src: SOM, Wikipedia

{id:"bilbao",name:"구겐하임 빌바오 미술관",en:"Guggenheim Museum Bilbao",aka:["Guggenheim Bilbao","빌바오 구겐하임","구겐하임 빌바오"],arch:"프랭크 게리 (Frank Gehry)",city:"빌바오",country:"스페인",year:1997,type:"미술관",feat:"티타늄 외피 약 33,000장의 곡면 조각 같은 미술관",hints:[
"1997년 개관, 티타늄으로 뒤덮인 곡면 조각 같은 건물.",
"유럽 남서부, 스페인에 있습니다.",
"현대미술 미술관입니다.",
"물결치는 티타늄 패널 약 3만 3천 장. 쇠락한 공업도시를 되살린 ‘빌바오 효과’.",
"해체주의의 거장 프랭크 게리가 설계했습니다.",
"스페인 북부 빌바오, 네르비온강 변에 있습니다."],hints_en:["Opened in 1997 — a sculptural building clad in titanium panels.","In southwestern Europe, Spain.","A contemporary art museum.","Approximately 33,000 undulating titanium panels — the catalyst of the 'Bilbao effect' that revived a declining industrial city.","Designed by deconstructivism master Frank Gehry.","In Bilbao, northern Spain, on the banks of the Nervión River."]},
// src: guggenheim-bilbao.eus, Britannica

{id:"fallingwater",name:"낙수장",en:"Fallingwater",aka:["Fallingwater","카우프만 저택","폴링워터"],arch:"프랭크 로이드 라이트 (Frank Lloyd Wright)",city:"밀런",country:"미국",year:1937,type:"주거",feat:"폭포 위로 뻗은 철근콘크리트 캔틸레버 테라스",hints:[
"1937년, 철근콘크리트 캔틸레버로 폭포 위에 얹은 별장.",
"북아메리카, 미국(펜실베이니아주)에 있습니다.",
"숲속 계곡의 개인 별장 — 주거 건축입니다.",
"흐르는 폭포 바로 위로 테라스가 겹겹이 뻗어 나옵니다. 유기적 건축의 정점.",
"미국의 거장 프랭크 로이드 라이트가 설계했습니다.",
"펜실베이니아 베어런 계곡, 밀런 인근에 있습니다."],hints_en:["1937 — a weekend house with reinforced concrete cantilever terraces projecting over a waterfall.","In North America, United States (Pennsylvania).","A private country retreat in a forested valley — residential architecture.","Terraces cascade in layers directly above the flowing waterfall — the pinnacle of organic architecture.","Designed by American master Frank Lloyd Wright.","In Bear Run valley, near Mill Run, Pennsylvania."]},
// src: Wikipedia, MoMA (본채 1937)

{id:"savoye",name:"빌라 사부아",en:"Villa Savoye",aka:["Villa Savoye","사보아 주택","빌라 사보아"],arch:"르 코르뷔지에 + 피에르 잔느레",city:"푸아시",country:"프랑스",year:1931,type:"주거",feat:"근대건축 5원칙의 정본 — 필로티·수평창·옥상정원",hints:[
"1931년, 하얀 콘크리트로 지은 필로티 위의 상자형 주택.",
"유럽 서부, 프랑스에 있습니다.",
"전원 속 개인 주택입니다.",
"필로티·자유로운 평면·자유로운 입면·수평 연속창·옥상정원 — 근대건축 5원칙의 교과서.",
"르 코르뷔지에가 사촌 피에르 잔느레와 함께 설계했습니다.",
"파리 근교 푸아시에 있습니다."],hints_en:["1931 — a box-shaped house raised on pilotis, clad in white concrete.","In western Europe, France.","A private country house.","Pilotis, free plan, free facade, horizontal ribbon windows, roof garden — the canonical textbook of the Five Points of Modern Architecture.","Designed by Le Corbusier together with his cousin Pierre Jeanneret.","In Poissy, near Paris."]},
// src: Fondation Le Corbusier, Wikipedia

{id:"sydney",name:"시드니 오페라 하우스",en:"Sydney Opera House",aka:["Sydney Opera House","시드니오페라하우스"],arch:"예른 웃손 (Jørn Utzon)",city:"시드니",country:"호주",year:1973,type:"공연장",feat:"조가비(셸) 지붕이 겹쳐진 항구의 공연장",hints:[
"1973년 개관, 흰 타일 셸 지붕이 겹쳐진 콘크리트 구조물.",
"오세아니아, 호주에 있습니다.",
"오페라·콘서트를 위한 공연장입니다.",
"돛 또는 조가비처럼 겹쳐진 셸 지붕. 구조 해법을 찾느라 14년이 걸렸습니다.",
"덴마크 건축가 예른 웃손이 설계했습니다(완공은 호주팀).",
"시드니 항구의 베넬롱 곶에 있습니다."],hints_en:["Opened in 1973 — a concrete structure with overlapping white-tiled shell roofs.","In Oceania, Australia.","A performance venue for opera and concerts.","Shell roofs resembling sails or shells stacked together — it took 14 years to find a structural solution.","Designed by Danish architect Jørn Utzon (completed by the Australian team).","On Bennelong Point in Sydney Harbour."]},
// src: UNESCO, ArchDaily

{id:"guggenheimny",name:"솔로몬 R. 구겐하임 미술관",en:"Solomon R. Guggenheim Museum",aka:["Guggenheim New York","뉴욕 구겐하임","구겐하임 미술관"],arch:"프랭크 로이드 라이트 (Frank Lloyd Wright)",city:"뉴욕",country:"미국",year:1959,type:"미술관",feat:"내부를 도는 연속 나선형 램프",hints:[
"1959년 개관, 위로 갈수록 벌어지는 흰 콘크리트 나선형 건물.",
"북아메리카, 미국에 있습니다.",
"현대미술 미술관입니다.",
"관람객이 나선형 경사로를 따라 내려오며 그림을 보는 연속 램프 구조.",
"프랭크 로이드 라이트의 유작(개관 6개월 전 타계).",
"뉴욕 맨해튼 5번가, 센트럴파크 옆에 있습니다."],hints_en:["Opened in 1959 — a white concrete spiral building that widens toward the top.","In North America, United States.","A contemporary art museum.","A continuous spiral ramp along which visitors descend while viewing art.","Frank Lloyd Wright's final work — he died six months before the opening.","On Fifth Avenue in Manhattan, New York, beside Central Park."]},
// src: Wikipedia, guggenheim.org

{id:"eiffel",name:"에펠탑",en:"Eiffel Tower",aka:["Eiffel Tower","에펠 타워","라 투르 에펠"],arch:"귀스타브 에펠 (Gustave Eiffel)",city:"파리",country:"프랑스",year:1889,type:"전망탑",feat:"높이 300m(첨탑 포함 330m) — 연철 격자 구조",hints:[
"1889년, 연철 격자로 조립한 거대한 철탑.",
"유럽 서부, 프랑스에 있습니다.",
"만국박람회 기념탑 겸 전망탑입니다.",
"높이 약 300m(첨탑 포함 330m). 완공 당시 세계에서 가장 높은 인공 구조물.",
"교량 기술자 귀스타브 에펠의 회사가 세웠습니다.",
"파리 샹드마르스 공원에 있습니다."],hints_en:["1889 — a towering iron lattice structure assembled from wrought iron.","In western Europe, France.","A commemorative tower for the World's Fair, doubling as an observation tower.","Approximately 300 m tall (330 m including the antenna) — the tallest man-made structure in the world when completed.","Built by the company of bridge engineer Gustave Eiffel.","In the Champ de Mars park, Paris."]},
// src: toureiffel.paris, Britannica

{id:"empire",name:"엠파이어 스테이트 빌딩",en:"Empire State Building",aka:["Empire State Building","엠파이어스테이트빌딩"],arch:"슈리브·램·하먼 (William Lamb)",city:"뉴욕",country:"미국",year:1931,type:"초고층 오피스",feat:"높이 지붕 381m(첨탑 443m) — 아르데코의 상징",hints:[
"1931년 완공, 계단식으로 물러나는 아르데코 마천루.",
"북아메리카, 미국에 있습니다.",
"업무용 초고층 오피스입니다.",
"지붕 381m·102층. 완공 당시부터 40년간 세계 최고층.",
"설계사 슈리브·램·하먼(주설계 윌리엄 램).",
"뉴욕 맨해튼 5번가에 있습니다."],hints_en:["Completed in 1931 — an Art Deco skyscraper with a stepped setback profile.","In North America, United States.","A high-rise office building.","Roof height 381 m, 102 floors — the world's tallest building for 40 years after completion.","Designed by Shreve, Lamb & Harmon (lead designer William Lamb).","On Fifth Avenue in Manhattan, New York."]},
// src: Wikipedia, Britannica

{id:"chrysler",name:"크라이슬러 빌딩",en:"Chrysler Building",aka:["Chrysler Building","크라이슬러빌딩"],arch:"윌리엄 밴 앨런 (William Van Alen)",city:"뉴욕",country:"미국",year:1930,type:"초고층 오피스",feat:"높이 319m — 스테인리스 스틸 왕관형 첨탑",hints:[
"1930년 완공, 금속 왕관형 첨탑이 빛나는 아르데코 마천루.",
"북아메리카, 미국에 있습니다.",
"업무용 초고층 오피스입니다.",
"높이 319m. 세계 최초로 300m를 넘긴 건물이자, 잠시 세계 최고층.",
"윌리엄 밴 앨런이 설계했습니다.",
"뉴욕 맨해튼 렉싱턴가에 있습니다."],hints_en:["Completed in 1930 — an Art Deco skyscraper with a gleaming metallic crown-like spire.","In North America, United States.","A high-rise office building.","319 m tall — the first building in the world to exceed 300 m and briefly the world's tallest.","Designed by William Van Alen.","On Lexington Avenue in Manhattan, New York."]},
// src: Wikipedia, ArchDaily

{id:"seagram",name:"시그램 빌딩",en:"Seagram Building",aka:["Seagram Building","시그램빌딩"],arch:"미스 반 데어 로에 + 필립 존슨",city:"뉴욕",country:"미국",year:1958,type:"초고층 오피스",feat:"브론즈 I-빔 멀리언 + 파크 애비뉴 광장",hints:[
"1958년 완공, 청동색 강철과 유리로 지은 절제된 고층 오피스.",
"북아메리카, 미국에 있습니다.",
"업무용 초고층 오피스입니다.",
"38층. 앞에 넓은 광장(플라자)을 비워 도시에 내준 인터내셔널 스타일의 전범.",
"미스 반 데어 로에가 필립 존슨과 함께 설계했습니다.",
"뉴욕 맨해튼 파크 애비뉴에 있습니다."],hints_en:["Completed in 1958 — a restrained high-rise office tower of bronze-toned steel and glass.","In North America, United States.","A high-rise office building.","38 floors — the archetypal International Style tower, with a generous public plaza set back from the street.","Designed by Mies van der Rohe together with Philip Johnson.","On Park Avenue in Manhattan, New York."]},
// src: Wikipedia, ArchDaily

{id:"barcelona_pav",name:"바르셀로나 파빌리온",en:"Barcelona Pavilion",aka:["Barcelona Pavilion","독일관","바르셀로나 파빌리온"],arch:"미스 반 데어 로에 + 릴리 라이히",city:"바르셀로나",country:"스페인",year:1929,type:"파빌리온",feat:"유리·강철·오닉스 벽으로 흐르는 공간(현존은 1986 재건)",hints:[
"1929년 박람회를 위해 지은 뒤 철거되었다가 1986년 그대로 재건된 전시관.",
"유럽 남서부, 스페인에 있습니다.",
"만국박람회 독일관 — 전시용 파빌리온입니다.",
"벽과 지붕이 분리되어 공간이 막힘없이 흐릅니다. 황색 오닉스 대리석 벽.",
"미스 반 데어 로에가 릴리 라이히와 함께 설계했습니다.",
"바르셀로나 몬주익 언덕에 있습니다."],hints_en:["Built for the 1929 World's Fair, then demolished and faithfully reconstructed in 1986.","In southwestern Europe, Spain.","The German Pavilion at the World's Fair — an exhibition pavilion.","Walls and roof are separated so space flows without interruption. Walls of golden onyx marble.","Designed by Mies van der Rohe together with Lilly Reich.","On Montjuïc hill in Barcelona."]},
// src: Wikipedia, Fundació Mies van der Rohe

{id:"ronchamp",name:"롱샹 성당",en:"Notre-Dame du Haut",aka:["Ronchamp","롱샹","롱샹 예배당","Notre-Dame du Haut"],arch:"르 코르뷔지에 (Le Corbusier)",city:"롱샹",country:"프랑스",year:1955,type:"종교",feat:"곡면 콘크리트 매스 + 불규칙 채광창",hints:[
"1955년, 조소처럼 휘어진 콘크리트 벽과 곡면 지붕의 작은 예배당.",
"유럽 서부, 프랑스에 있습니다.",
"언덕 위 순례 예배당 — 종교 건축입니다.",
"두꺼운 남측 벽에 크기가 제각각인 채광창들이 뚫려 신비로운 빛이 듭니다.",
"르 코르뷔지에가 설계했습니다.",
"프랑스 동부 롱샹 언덕에 있습니다."],hints_en:["1955 — a small chapel with sculpted curving concrete walls and a curved roof.","In western Europe, France.","A pilgrimage chapel on a hilltop — religious architecture.","Irregularly sized light openings pierce the thick south wall, admitting a mysterious quality of light.","Designed by Le Corbusier.","On a hill in Ronchamp, eastern France."]},
// src: Fondation Le Corbusier

{id:"kimbell",name:"킴벨 미술관",en:"Kimbell Art Museum",aka:["Kimbell Art Museum","킴벨미술관"],arch:"루이스 칸 (Louis Kahn)",city:"포트워스",country:"미국",year:1972,type:"미술관",feat:"사이클로이드 배럴 볼트 + 정점 자연 채광",hints:[
"1972년, 반원통 볼트 지붕이 나란히 늘어선 낮은 미술관.",
"북아메리카, 미국(텍사스주)에 있습니다.",
"미술관입니다.",
"사이클로이드 곡선 볼트 정점의 틈으로 은은한 자연광이 반사판을 타고 들어옵니다.",
"‘빛과 침묵’의 건축가 루이스 칸이 설계했습니다.",
"텍사스주 포트워스에 있습니다."],hints_en:["1972 — a low-lying museum with parallel cycloid barrel vaults running the length of the building.","In North America, United States (Texas).","An art museum.","Gentle natural light filtered through a reflector enters through a slit at the crown of each cycloid vault.","Designed by Louis Kahn, the architect of 'light and silence'.","In Fort Worth, Texas."]},
// src: kimbellart.org, ArchDaily

{id:"pompidou",name:"퐁피두 센터",en:"Centre Pompidou",aka:["Centre Pompidou","퐁피두","퐁피두센터"],arch:"렌초 피아노 + 리처드 로저스",city:"파리",country:"프랑스",year:1977,type:"문화시설",feat:"배관·구조·에스컬레이터를 밖으로 드러낸 하이테크",hints:[
"1977년 개관, 배관과 골조를 알록달록 밖으로 드러낸 건물.",
"유럽 서부, 프랑스에 있습니다.",
"미술관과 도서관을 품은 복합 문화센터입니다.",
"기둥·덕트·에스컬레이터를 외부로 노출해 내부를 완전히 비운 하이테크 건축.",
"렌초 피아노와 리처드 로저스가 함께 설계했습니다.",
"파리 보부르 지구에 있습니다."],hints_en:["Opened in 1977 — a building with its pipes and structural frame colorfully exposed on the outside.","In western Europe, France.","A mixed cultural center housing a museum and library.","Columns, ducts, and escalators are all expressed externally, leaving the interior entirely open — a High-Tech landmark.","Designed jointly by Renzo Piano and Richard Rogers.","In the Beaubourg district, Paris."]},
// src: Wikipedia, ArchEyes

{id:"petronas",name:"페트로나스 트윈타워",en:"Petronas Towers",aka:["Petronas Towers","페트로나스 타워","쌍둥이빌딩"],arch:"시저 펠리 (César Pelli)",city:"쿠알라룸푸르",country:"말레이시아",year:1998,type:"초고층 오피스",feat:"높이 452m·88층 — 스카이브리지로 이은 쌍둥이 타워",hints:[
"1998년 완공, 이슬람 기하 문양을 단면으로 삼은 쌍둥이 마천루.",
"아시아 동남부, 말레이시아에 있습니다.",
"업무용 초고층 오피스입니다.",
"높이 452m·88층. 41~42층을 잇는 스카이브리지. 1998~2004년 세계 최고층.",
"아르헨티나 출신 시저 펠리가 설계했습니다.",
"쿠알라룸푸르에 있습니다."],hints_en:["Completed in 1998 — twin supertall towers whose cross-section is derived from Islamic geometric patterns.","In southeastern Asia, Malaysia.","High-rise office towers.","452 m tall, 88 floors. A sky bridge links the two towers at floors 41–42. World's tallest buildings 1998–2004.","Designed by Argentine-born César Pelli.","In Kuala Lumpur."]},
// src: Britannica, Wikipedia

{id:"taipei101",name:"타이베이 101",en:"Taipei 101",aka:["Taipei 101","타이페이 101","101빌딩"],arch:"C.Y. 리 (C.Y. Lee & Partners)",city:"타이베이",country:"대만",year:2004,type:"초고층 오피스",feat:"높이 508m·101층 — 대나무 마디를 닮은 형태",hints:[
"2004년 완공, 죽순 마디처럼 8개 층씩 부풀어 오르는 초고층.",
"아시아 동부, 대만에 있습니다.",
"업무용 초고층 오피스입니다.",
"높이 508m·101층. 상층부에 660톤 튜닝 매스 댐퍼(진자)로 흔들림을 잡습니다.",
"C.Y. 리(리주위안)가 설계했습니다.",
"타이베이 신이구에 있습니다."],hints_en:["Completed in 2004 — a supertall tower that swells in sections of eight floors, like bamboo internodes.","In eastern Asia, Taiwan.","A high-rise office building.","508 m tall, 101 floors. A 660-tonne tuned mass damper (pendulum) in the upper floors controls sway.","Designed by C.Y. Lee (Li Zuyuan) & Partners.","In the Xinyi District, Taipei."]},
// src: Wikipedia, Britannica

{id:"shard",name:"더 샤드",en:"The Shard",aka:["The Shard","샤드","더샤드"],arch:"렌초 피아노 (RPBW)",city:"런던",country:"영국",year:2012,type:"초고층 복합",feat:"높이 309.6m·95층 — 유리 파편 형태",hints:[
"2012년 완공, 위로 갈수록 뾰족해지는 유리 파편 모양 초고층.",
"유럽 서부, 영국에 있습니다.",
"오피스·호텔·주거가 섞인 복합 초고층입니다.",
"높이 309.6m·95층으로 영국에서 가장 높은 건물. 8개의 기울어진 유리면.",
"렌초 피아노가 설계했습니다.",
"런던 서더크, 템스강 남안에 있습니다."],hints_en:["Completed in 2012 — a tapering glass-shard-shaped supertall tower.","In western Europe, United Kingdom.","A mixed-use supertall combining office, hotel, and residential.","309.6 m tall, 95 floors — the tallest building in the United Kingdom. Eight inclined glass facets.","Designed by Renzo Piano.","In Southwark, London, on the south bank of the Thames."]},
// src: Britannica, Wikipedia

{id:"gherkin",name:"30 세인트 메리 액스 (거킨)",en:"30 St Mary Axe (The Gherkin)",aka:["The Gherkin","거킨","30 St Mary Axe"],arch:"노먼 포스터 (Foster + Partners)",city:"런던",country:"영국",year:2004,type:"초고층 오피스",feat:"높이 180m·41층 — 오이를 닮은 유선형 유리 타워",hints:[
"2004년 완공, 오이(피클)를 닮은 곡면 유리 타워.",
"유럽 서부, 영국에 있습니다.",
"업무용 초고층 오피스입니다.",
"높이 180m·41층. 나선형으로 도는 유리 커튼월과 자연 환기 아트리움.",
"노먼 포스터(포스터+파트너스)가 설계했습니다.",
"런던 금융가 시티 오브 런던에 있습니다."],hints_en:["Completed in 2004 — a curved glass tower shaped like a gherkin (pickle).","In western Europe, United Kingdom.","A high-rise office building.","180 m tall, 41 floors. A spiraling glass curtain wall and naturally ventilated atrium.","Designed by Norman Foster (Foster + Partners).","In the City of London financial district."]},
// src: Wikipedia, Britannica

{id:"louvre_pyramid",name:"루브르 피라미드",en:"Louvre Pyramid",aka:["Louvre Pyramid","루브르 피라미드","유리 피라미드"],arch:"I. M. 페이 (I. M. Pei)",city:"파리",country:"프랑스",year:1989,type:"미술관 입구",feat:"높이 21.6m — 유리·강철 피라미드",hints:[
"1989년, 옛 궁전 마당 한가운데 세운 투명한 유리 피라미드.",
"유럽 서부, 프랑스에 있습니다.",
"세계적 미술관의 지하 로비 겸 진입구입니다.",
"높이 21.6m, 유리 패널 673장. 역피라미드가 지하로도 매달려 있습니다.",
"중국계 미국 건축가 I. M. 페이가 설계했습니다.",
"파리 루브르 박물관 나폴레옹 광장에 있습니다."],hints_en:["1989 — a transparent glass pyramid erected in the middle of an ancient palace courtyard.","In western Europe, France.","The underground lobby and main entrance to a world-famous museum.","21.6 m tall, 673 glass panels. An inverted pyramid also hangs below grade.","Designed by Chinese-American architect I. M. Pei.","In the Cour Napoléon of the Louvre Museum, Paris."]},
// src: Wikipedia

{id:"jewish_berlin",name:"베를린 유대인 박물관",en:"Jewish Museum Berlin",aka:["Jewish Museum Berlin","베를린 유대인박물관"],arch:"다니엘 리베스킨트 (Daniel Libeskind)",city:"베를린",country:"독일",year:2001,type:"박물관",feat:"지그재그 평면 + 관통하는 빈 공간(보이드)",hints:[
"2001년 개관, 번개처럼 꺾이는 지그재그 평면의 아연 외장 건물.",
"유럽 중부, 독일에 있습니다.",
"역사를 다루는 박물관입니다.",
"건물을 직선으로 관통하는 텅 빈 ‘보이드’와 기울어진 축이 부재(不在)를 형상화합니다.",
"다니엘 리베스킨트가 설계했습니다(건물 준공 1999, 개관 2001).",
"베를린에 있습니다."],hints_en:["Opened in 2001 — a zinc-clad building with a lightning-bolt zigzag plan.","In central Europe, Germany.","A museum devoted to history.","Straight voids pierce the building diagonally, and a tilted axis embodies absence.","Designed by Daniel Libeskind (building completed 1999, opened 2001).","In Berlin."]},
// src: Wikipedia, jmberlin.de

{id:"casa_mila",name:"카사 밀라 (라 페드레라)",en:"Casa Milà (La Pedrera)",aka:["Casa Mila","La Pedrera","라 페드레라","카사밀라"],arch:"안토니 가우디 (Antoni Gaudí)",city:"바르셀로나",country:"스페인",year:1912,type:"주거",feat:"물결치는 석재 파사드 — 직선이 없는 공동주택",hints:[
"1912년, 채석장처럼 물결치는 돌 외벽의 공동주택.",
"유럽 남서부, 스페인에 있습니다.",
"고급 임대 아파트 — 주거 건축입니다.",
"직선이 거의 없는 곡면 파사드와 투구 쓴 병사 같은 옥상 굴뚝들.",
"안토니 가우디의 마지막 세속 건축입니다.",
"바르셀로나 그라시아 거리에 있습니다."],hints_en:["1912 — a residential block with a stone facade that undulates like a quarry face.","In southwestern Europe, Spain.","An upscale rental apartment block — residential architecture.","A curvilinear facade almost devoid of straight lines, with rooftop chimneys resembling helmeted warriors.","Antoni Gaudí's last secular architectural work.","On Passeig de Gràcia, Barcelona."]},
// src: lapedrera.com

{id:"casa_batllo",name:"카사 바트요",en:"Casa Batlló",aka:["Casa Batllo","카사바트요","바트요 주택"],arch:"안토니 가우디 (Antoni Gaudí)",city:"바르셀로나",country:"스페인",year:1906,type:"주거",feat:"뼈·용 비늘 모티프의 타일 파사드",hints:[
"1906년 개축, 뼈와 해골, 용 비늘을 닮은 화려한 타일 외벽의 집.",
"유럽 남서부, 스페인에 있습니다.",
"기존 건물을 리모델링한 도시 주택입니다.",
"발코니는 해골, 기둥은 뼈, 지붕은 용의 등을 닮았습니다. 깨진 타일 모자이크(트렌카디스).",
"안토니 가우디가 개축 설계했습니다.",
"바르셀로나 그라시아 거리에 있습니다."],hints_en:["Remodelled in 1906 — a town house with a vivid tiled facade evoking bones, skulls, and dragon scales.","In southwestern Europe, Spain.","A remodelled urban residential building.","Balconies like skulls, columns like bones, a roof like a dragon's back — all clad in trencadís (broken-tile mosaic).","Antoni Gaudí designed the remodel.","On Passeig de Gràcia, Barcelona."]},
// src: Wikipedia

{id:"marina_bay",name:"마리나 베이 샌즈",en:"Marina Bay Sands",aka:["Marina Bay Sands","마리나베이샌즈","MBS"],arch:"모셰 사프디 (Moshe Safdie)",city:"싱가포르",country:"싱가포르",year:2010,type:"복합 리조트",feat:"세 타워 위에 얹힌 340m 스카이파크",hints:[
"2010년 개장, 세 개의 타워 꼭대기를 하나의 배 모양 판이 잇는 리조트.",
"아시아 동남부, 싱가포르에 있습니다.",
"호텔·카지노·전망대가 있는 복합 리조트입니다.",
"높이 195m 세 타워 위에 얹힌 길이 340m 스카이파크(수영장 포함) 캔틸레버.",
"모셰 사프디가 설계했습니다.",
"싱가포르 마리나 베이에 있습니다."],hints_en:["Opened in 2010 — a resort where a single boat-shaped platform bridges three towers.","In southeastern Asia, Singapore.","A mixed-use resort with hotel, casino, and observation deck.","A cantilevered SkyPark 340 m long (including an infinity pool) spanning three 195 m towers.","Designed by Moshe Safdie.","At Marina Bay, Singapore."]},
// src: Wikipedia

{id:"cctv",name:"CCTV 본사",en:"CCTV Headquarters",aka:["CCTV Headquarters","CCTV 빌딩","중국중앙방송 본사"],arch:"렘 콜하스 + 올레 스히런 (OMA)",city:"베이징",country:"중국",year:2012,type:"초고층 오피스",feat:"고리처럼 이어진 234m 루프 구조 — 캔틸레버",hints:[
"2012년 완공, 두 개의 기울어진 탑을 위아래로 이어 고리를 만든 건물.",
"아시아 동부, 중국에 있습니다.",
"방송국 업무용 초고층 오피스입니다.",
"높이 234m. 공중에서 두 탑이 75m 캔틸레버로 만나 닫힌 순환 고리를 이룹니다.",
"렘 콜하스와 올레 스히런(OMA)이 설계했습니다.",
"베이징에 있습니다."],hints_en:["Completed in 2012 — a building that forms a closed loop by connecting two leaning towers at top and bottom.","In eastern Asia, China.","A high-rise office building for a broadcaster.","234 m tall. The two towers meet in mid-air with a 75 m cantilever, forming a closed loop.","Designed by Rem Koolhaas and Ole Scheeren (OMA).","In Beijing."]},
// src: OMA, ArchDaily

{id:"birdsnest",name:"베이징 국가체육장 (새둥지)",en:"Beijing National Stadium (Bird's Nest)",aka:["Bird's Nest","새둥지","냐오차오","국가체육장"],arch:"헤르초크 & 드 뫼롱",city:"베이징",country:"중국",year:2008,type:"경기장",feat:"수용 8만 석 — 얽힌 철골 격자 외피",hints:[
"2008년 완공, 나뭇가지를 얽어 놓은 듯한 철골 외피의 대형 경기장.",
"아시아 동부, 중국에 있습니다.",
"올림픽 주경기장 — 스타디움입니다.",
"약 8만 명 수용. 새 둥지를 닮은 불규칙 강재 격자가 구조이자 외관.",
"헤르초크 & 드 뫼롱이 설계했습니다(예술 자문 아이 웨이웨이).",
"베이징 올림픽공원에 있습니다."],hints_en:["Completed in 2008 — a large stadium wrapped in an irregular lattice of steel members resembling interlaced branches.","In eastern Asia, China.","An Olympic main stadium.","Capacity approximately 80,000. The irregular steel lattice acts as both structure and cladding, like a bird's nest.","Designed by Herzog & de Meuron (artistic consultant Ai Weiwei).","In the Olympic Park, Beijing."]},
// src: Wikipedia

{id:"heydar",name:"헤이다르 알리예프 센터",en:"Heydar Aliyev Center",aka:["Heydar Aliyev Center","헤이다르 알리예프 센터"],arch:"자하 하디드 (Zaha Hadid)",city:"바쿠",country:"아제르바이잔",year:2012,type:"문화시설",feat:"연면적 5.7만㎡ — 각(角)이 없는 유선형 셸",hints:[
"2012년 완공, 땅에서 솟아올라 물결처럼 흐르는 흰 곡면 건물.",
"서아시아 코카서스, 아제르바이잔에 있습니다.",
"전시·공연을 아우르는 복합 문화센터입니다.",
"직각이 거의 없는 연속 곡면. 바닥·벽·지붕이 하나로 이어집니다.",
"‘곡선의 여왕’ 자하 하디드가 설계했습니다.",
"아제르바이잔의 수도 바쿠에 있습니다."],hints_en:["Completed in 2012 — an all-white fluid building that seems to rise from the ground in continuous waves.","In western Asia, the Caucasus region, Azerbaijan.","A mixed cultural center for exhibitions and performances.","An almost entirely angle-free continuous surface — floor, walls, and roof flow as one.","Designed by 'queen of curves' Zaha Hadid.","In Baku, the capital of Azerbaijan."]},
// src: Wikipedia, ArchDaily

{id:"disney_hall",name:"월트 디즈니 콘서트홀",en:"Walt Disney Concert Hall",aka:["Walt Disney Concert Hall","디즈니 콘서트홀"],arch:"프랭크 게리 (Frank Gehry)",city:"로스앤젤레스",country:"미국",year:2003,type:"공연장",feat:"스테인리스 스틸 곡면 외피의 콘서트홀",hints:[
"2003년 개관, 스테인리스 스틸 돛이 부풀어 오른 듯한 공연장.",
"북아메리카, 미국(캘리포니아주)에 있습니다.",
"교향악단의 콘서트홀입니다.",
"금속 곡면들이 활짝 펼쳐진 해체주의 형태. 내부는 나무로 감싼 포도밭형 객석.",
"프랭크 게리가 설계했습니다.",
"로스앤젤레스 다운타운에 있습니다."],hints_en:["Opened in 2003 — a concert hall that looks like billowing stainless steel sails.","In North America, United States (California).","A concert hall for a symphony orchestra.","Deconstructivist form of unfolding metallic curves. Interior is wrapped in wood with a vineyard-style seating arrangement.","Designed by Frank Gehry.","In Downtown Los Angeles."]},
// src: ArchEyes

{id:"salk",name:"소크 생물학 연구소",en:"Salk Institute",aka:["Salk Institute","소크 연구소"],arch:"루이스 칸 (Louis Kahn)",city:"라호이아",country:"미국",year:1965,type:"연구소",feat:"중앙 광장을 가르는 물길, 바다로 열린 시선축",hints:[
"1965년, 트래버틴 대리석 광장을 사이에 둔 대칭 두 동의 연구소.",
"북아메리카, 미국(캘리포니아주)에 있습니다.",
"과학 실험 연구소입니다.",
"텅 빈 중앙 광장을 가르는 가느다란 물길이 시선을 태평양 수평선으로 이끕니다.",
"루이스 칸이 설계했습니다.",
"캘리포니아 라호이아, 태평양이 내려다보이는 절벽에 있습니다."],hints_en:["1965 — two symmetrical laboratory buildings flanking a central travertine plaza.","In North America, United States (California).","A scientific research laboratory.","A narrow channel of water bisects the empty central plaza, directing the gaze to the Pacific horizon.","Designed by Louis Kahn.","On a clifftop overlooking the Pacific, in La Jolla, California."]},
// src: ArchDaily

{id:"fondation_lv",name:"루이 비통 재단 미술관",en:"Fondation Louis Vuitton",aka:["Fondation Louis Vuitton","루이비통 재단","LV 파운데이션"],arch:"프랭크 게리 (Frank Gehry)",city:"파리",country:"프랑스",year:2014,type:"미술관",feat:"유리 돛 12개가 감싼 유리 범선 형태",hints:[
"2014년 개관, 열두 개의 유리 돛이 배처럼 펼쳐진 미술관.",
"유럽 서부, 프랑스에 있습니다.",
"현대미술 미술관입니다.",
"곡면 유리 패널 약 3,600장으로 만든 유리 돛이 콘크리트 본체를 감쌉니다.",
"프랭크 게리가 설계했습니다.",
"파리 불로뉴 숲 안에 있습니다."],hints_en:["Opened in 2014 — a museum with twelve glass sails unfurling like a sailing vessel.","In western Europe, France.","A contemporary art museum.","Approximately 3,600 curved glass panels form glass sails that envelop a concrete core.","Designed by Frank Gehry.","Inside the Bois de Boulogne, Paris."]},
// src: Wikipedia

{id:"teshima",name:"데시마 미술관",en:"Teshima Art Museum",aka:["Teshima Art Museum","데시마미술관","테시마 미술관"],arch:"니시자와 류에 (Ryue Nishizawa)",city:"데시마",country:"일본",year:2010,type:"미술관",feat:"기둥 없는 물방울형 콘크리트 셸 (두께 25cm)",hints:[
"2010년, 기둥 하나 없이 얇은 콘크리트 껍질만으로 덮은 물방울형 공간.",
"아시아 동부, 일본에 있습니다.",
"단 하나의 작품을 위한 미술관입니다.",
"40×60m 무주(無柱) 셸 두께 25cm. 지붕의 두 개구부로 바람·비·빛이 그대로 들어옵니다.",
"니시자와 류에(SANAA)가 설계했습니다.",
"일본 세토내해 데시마 섬에 있습니다."],hints_en:["2010 — a droplet-shaped space covered by a thin concrete shell with no columns whatsoever.","In eastern Asia, Japan.","A museum dedicated to a single artwork.","A column-free shell 40 × 60 m with a wall thickness of just 25 cm. Two openings in the roof admit wind, rain, and light directly.","Designed by Ryue Nishizawa (SANAA).","On Teshima island in the Seto Inland Sea, Japan."]},
// src: Wikipedia, ArchDaily

{id:"church_light",name:"빛의 교회",en:"Church of the Light",aka:["Church of the Light","빛의교회"],arch:"안도 다다오 (Tadao Ando)",city:"이바라키",country:"일본",year:1989,type:"종교",feat:"정면 벽의 십자 개구부에서 쏟아지는 빛",hints:[
"1989년, 노출 콘크리트 상자 한쪽 벽에 십자로 틈을 낸 작은 교회.",
"아시아 동부, 일본에 있습니다.",
"작은 개신교 교회 — 종교 건축입니다.",
"정면 벽을 십자로 뚫어, 그 틈으로 들어온 빛이 예배당에 십자가를 그립니다. 약 113㎡.",
"노출 콘크리트의 거장 안도 다다오가 설계했습니다.",
"오사카부 이바라키시에 있습니다."],hints_en:["1989 — a small church consisting of a board-formed concrete box with a cross-shaped slit in one wall.","In eastern Asia, Japan.","A small Protestant church — religious architecture.","The front wall is cut in a cross pattern; light entering through the slit draws a luminous cross across the interior. Approximately 113 m².","Designed by Tadao Ando, master of exposed concrete.","In Ibaraki City, Osaka Prefecture."]},
// src: Wikipedia, ArchDaily

{id:"therme_vals",name:"테르메 발스 (발스 온천)",en:"Therme Vals",aka:["Therme Vals","발스 온천","테르메 발스"],arch:"페터 춤토어 (Peter Zumthor)",city:"발스",country:"스위스",year:1996,type:"온천",feat:"현지 규암 6만 장을 쌓아 산비탈에 묻은 온천",hints:[
"1996년, 현지에서 캔 돌을 켜켜이 쌓아 산비탈에 파묻은 목욕 시설.",
"유럽 중부, 스위스에 있습니다.",
"온천·스파 시설입니다.",
"발스 규암 약 6만 장. 어둠과 빛, 물소리와 온도로 감각을 일깨우는 공간.",
"‘분위기(Atmospheres)’의 건축가 페터 춤토어가 설계했습니다.",
"스위스 그라우뷘덴주 발스 마을에 있습니다."],hints_en:["1996 — a bathing facility buried into a hillside, built with layers of locally quarried stone.","In central Europe, Switzerland.","A thermal spa facility.","Approximately 60,000 slabs of Vals quartzite. Darkness and light, the sound of water, and temperature all awaken the senses.","Designed by Peter Zumthor, architect of 'Atmospheres'.","In the village of Vals, canton of Graubünden, Switzerland."]},
// src: Wikipedia

{id:"neuschwanstein",name:"노이슈반슈타인 성",en:"Neuschwanstein Castle",aka:["Neuschwanstein","노이슈반슈타인","백조의 성"],arch:"에두아르트 리델 (발주 루트비히 2세)",city:"호엔슈방가우",country:"독일",year:1886,type:"성",feat:"로마네스크 리바이벌 — 계획 200실 중 15실만 완공",hints:[
"19세기 후반, 중세 기사 성을 낭만적으로 재현한 흰 성.",
"유럽 중부, 독일(바이에른)에 있습니다.",
"왕의 은둔용 궁전 — 성입니다.",
"산 정상 바위 위 로마네스크 리바이벌 양식. 왕의 사망으로 미완공에 그쳤습니다.",
"바이에른 왕 루트비히 2세가 발주하고 에두아르트 리델이 건축했습니다.",
"독일 남부 호엔슈방가우, 알프스 기슭에 있습니다."],hints_en:["Late 19th century — a white castle evoking a Romantic vision of a medieval knight's fortress.","In central Europe, Germany (Bavaria).","A royal retreat — a palace-castle.","Romanesque Revival style on a rocky mountain summit. The king's death left it unfinished — only 15 of the 200 planned rooms were completed.","Built for King Ludwig II of Bavaria; architect Eduard Riedel.","In Hohenschwangau, southern Germany, at the foot of the Alps."]},
// src: Wikipedia, Britannica

{id:"flatiron",name:"플랫아이언 빌딩",en:"Flatiron Building",aka:["Flatiron Building","플랫아이언","다리미빌딩"],arch:"대니얼 버넘 (Daniel Burnham)",city:"뉴욕",country:"미국",year:1902,type:"오피스",feat:"삼각형 평면 — 다리미를 닮은 22층 빌딩",hints:[
"1902년, 두 도로가 만나는 예각 부지에 세운 다리미 모양 빌딩.",
"북아메리카, 미국에 있습니다.",
"초기 철골 고층 오피스입니다.",
"삼각형 평면, 높이 약 87m·22층. 가장 좁은 끝은 폭이 2m 남짓입니다.",
"대니얼 버넘의 회사가 설계했습니다.",
"뉴욕 맨해튼 5번가·브로드웨이 교차점에 있습니다."],hints_en:["1902 — a flatiron-shaped building erected on an acute-angled triangular site where two roads converge.","In North America, United States.","An early steel-frame high-rise office building.","Triangular floor plate, approximately 87 m tall, 22 floors. The narrowest tip is barely 2 m wide.","Designed by Daniel Burnham's firm.","At the intersection of Fifth Avenue and Broadway, Manhattan, New York."]},
// src: Wikipedia

{id:"colosseum",name:"콜로세움",en:"Colosseum",aka:["Colosseum","콜로세움","원형경기장"],arch:"베스파시아누스 황제 (설계자 미상)",city:"로마",country:"이탈리아",year:80,type:"원형경기장",feat:"수용 5만~8만 명 — 로마 최대 원형경기장",hints:[
"서기 1세기, 돌과 콘크리트로 쌓은 4층 타원형 경기장.",
"유럽 남부, 이탈리아에 있습니다.",
"검투 경기 등을 위한 원형경기장입니다.",
"약 5만~8만 명 수용. 아치를 층층이 쌓아 올린 로마 최대 규모의 원형극장.",
"단일 설계자는 전하지 않고, 플라비우스 황조가 세웠습니다.",
"로마 도심에 있습니다."],hints_en:["1st century AD — an elliptical four-story arena built of stone and concrete.","In southern Europe, Italy.","An amphitheatre for gladiatorial combat and other spectacles.","Capacity approximately 50,000–80,000. Tiered arches rise storey by storey in Rome's largest amphitheatre.","No single architect survives in record; built under the Flavian dynasty.","In the heart of Rome."]},
// src: Wikipedia, Britannica

/* ===== 한국 ===== */
{id:"ddp",name:"동대문디자인플라자",en:"Dongdaemun Design Plaza",aka:["DDP","동대문디자인플라자","디디피"],arch:"자하 하디드 (Zaha Hadid)",city:"서울",country:"대한민국",year:2014,type:"문화시설",feat:"외장 패널 45,133장 — 세계 최대 비정형 건축",hints:[
"2014년 개관, 은빛 곡면 패널로 뒤덮인 우주선 같은 건물.",
"아시아 동부, 대한민국에 있습니다.",
"전시·컨벤션 복합 문화시설입니다.",
"크기가 모두 다른 알루미늄 패널 45,133장. 세계 최대 규모의 3차원 비정형 건축.",
"자하 하디드가 설계했습니다.",
"서울 동대문(옛 동대문운동장 자리)에 있습니다."],hints_en:["Opened in 2014 — a spaceship-like building clad in silver curved panels.","In eastern Asia, South Korea.","A mixed-use cultural facility for exhibitions and conventions.","45,133 aluminum panels, each a unique shape — the world's largest three-dimensional freeform building.","Designed by Zaha Hadid.","At Dongdaemun in Seoul, on the former site of Dongdaemun Stadium."]},
// src: 나무위키, 한국어 위키

{id:"leeum",name:"리움미술관",en:"Leeum Museum of Art",aka:["Leeum","리움","리움미술관"],arch:"마리오 보타·장 누벨·렘 콜하스",city:"서울",country:"대한민국",year:2004,type:"미술관",feat:"거장 3인이 각각 설계한 세 개의 동",hints:[
"2004년 개관, 성격이 전혀 다른 세 채의 건물이 모인 미술관.",
"아시아 동부, 대한민국에 있습니다.",
"고미술·현대미술 미술관입니다.",
"테라코타 원통(고미술), 부식 스테인리스 상자(현대), 검은 콘크리트(교육) — 3동 구성.",
"마리오 보타·장 누벨·렘 콜하스 세 거장이 각각 설계했습니다.",
"서울 용산구 한남동에 있습니다."],hints_en:["Opened in 2004 — a museum composed of three buildings with completely different characters.","In eastern Asia, South Korea.","A museum of ancient and contemporary art.","A terracotta cylinder (ancient art), a weathered stainless steel box (contemporary), and black concrete (education) — three buildings in one.","Designed by three masters: Mario Botta, Jean Nouvel, and Rem Koolhaas, each designing one building.","In Hannam-dong, Yongsan-gu, Seoul."]},
// src: 나무위키, 공식

{id:"kyungdong",name:"경동교회",en:"Kyungdong Presbyterian Church",aka:["경동교회","Kyungdong Church"],arch:"김수근",city:"서울",country:"대한민국",year:1981,type:"종교",feat:"맞잡은 두 손을 형상화한 붉은 벽돌 매스",hints:[
"1981년, 거친 붉은 벽돌을 손으로 쌓아 올린 듯한 교회.",
"아시아 동부, 대한민국에 있습니다.",
"개신교 교회 — 종교 건축입니다.",
"기도하며 맞잡은 두 손을 형상화한 매스. 뒤편 언덕길로 돌아 들어가는 진입.",
"한국 현대건축의 거장 김수근이 설계했습니다.",
"서울 중구 장충동에 있습니다."],hints_en:["1981 — a church that appears hand-stacked from rough red brick.","In eastern Asia, South Korea.","A Presbyterian church — religious architecture.","The massing evokes two hands clasped together in prayer. Visitors approach through a path wrapping around the back of the hill.","Designed by Kim Swoo-geun, a master of Korean modern architecture.","In Jangchung-dong, Jung-gu, Seoul."]},
// src: 나무위키, 한국어 위키

{id:"france_embassy",name:"주한 프랑스대사관",en:"French Embassy in Korea",aka:["주한 프랑스대사관","프랑스대사관"],arch:"김중업",city:"서울",country:"대한민국",year:1962,type:"공관",feat:"콘크리트 처마의 곡선 — 한국 전통과 근대의 결합",hints:[
"1960년대 초, 콘크리트로 한옥 지붕의 곡선을 번안한 공관 건물.",
"아시아 동부, 대한민국에 있습니다.",
"외국 공관 — 대사관 건축입니다.",
"살짝 들린 콘크리트 처마 곡선으로 전통 지붕의 멋을 근대적으로 풀어냈습니다.",
"르 코르뷔지에의 제자 김중업이 설계했습니다.",
"서울 서대문구에 있습니다."],hints_en:["Early 1960s — an embassy building that reinterprets the curved eaves of traditional Korean architecture in concrete.","In eastern Asia, South Korea.","A foreign diplomatic mission — embassy architecture.","The gently upswept concrete eaves translate the elegance of traditional Korean roof lines into a modern language.","Designed by Kim Chung-up, a pupil of Le Corbusier.","In Seodaemun-gu, Seoul."]},
// src: 나무위키(설계자 확정, 준공 1961~62 문헌 상충 → 힌트는 '1960년대 초'로 처리)

{id:"lotte_tower",name:"롯데월드타워",en:"Lotte World Tower",aka:["롯데월드타워","롯데타워","제2롯데월드"],arch:"KPF (Kohn Pedersen Fox)",city:"서울",country:"대한민국",year:2017,type:"초고층 복합",feat:"높이 555m·123층 — 국내 최고층",hints:[
"2017년 완공, 붓처럼 위로 갈수록 가늘어지는 초고층 타워.",
"아시아 동부, 대한민국에 있습니다.",
"오피스·호텔·전망대 복합 초고층입니다.",
"높이 555m·123층으로 국내 최고층. 도자기 곡선을 모티프로 한 형태.",
"미국 설계사 KPF(콘 페더슨 폭스)가 설계했습니다.",
"서울 송파구 잠실에 있습니다."],hints_en:["Completed in 2017 — a supertall tower that tapers like a brush toward the top.","In eastern Asia, South Korea.","A mixed-use supertall combining office, hotel, and observation deck.","555 m tall, 123 floors — the tallest building in South Korea. The silhouette is inspired by the curves of traditional Korean celadon.","Designed by KPF (Kohn Pedersen Fox).","In Jamsil, Songpa-gu, Seoul."]},
// src: 팩트체크 정정(2016→2017, 설계 KPF)

{id:"seonyudo",name:"선유도공원",en:"Seonyudo Park",aka:["선유도공원","선유도","Seonyudo Park"],arch:"조성룡 + 정영선",city:"서울",country:"대한민국",year:2002,type:"공원",feat:"옛 정수장을 재생한 국내 최초 재활용 생태공원",hints:[
"2002년, 버려진 산업 구조물을 그대로 남겨 만든 강 위 섬 공원.",
"아시아 동부, 대한민국에 있습니다.",
"도시 재생 생태공원입니다.",
"옛 정수장의 콘크리트 수조와 기둥을 헐지 않고 정원으로 되살린 국내 최초 사례.",
"건축가 조성룡과 조경가 정영선이 함께 설계했습니다.",
"서울 영등포구, 한강 선유도에 있습니다."],hints_en:["2002 — an island park created by leaving industrial structures of a decommissioned facility in place.","In eastern Asia, South Korea.","An urban ecological park through adaptive reuse.","Concrete tanks and columns from the former water purification plant were preserved and transformed into gardens — South Korea's first such precedent.","Designed by architect Cho Sung-yong and landscape architect Jung Young-sun.","On Seonyudo island, Yeongdeungpo-gu, Seoul, in the Han River."]},
// src: 나무위키, 조경 자료

{id:"space_old",name:"구 공간사옥",en:"SPACE Group Building (old)",aka:["공간사옥","구 공간사옥","공간 구관","SPACE"],arch:"김수근",city:"서울",country:"대한민국",year:1971,type:"사옥",feat:"검은 벽돌 + 스킵플로어 미로 공간 (등록문화재)",hints:[
"1971년, 검은 벽돌로 감싼 담쟁이덩굴 덮인 작은 사옥.",
"아시아 동부, 대한민국에 있습니다.",
"건축사무소 사옥 겸 문화공간입니다.",
"반 층씩 어긋나는 스킵플로어로 좁은 내부를 미로처럼 엮었습니다. 국가등록문화재.",
"김수근이 자신의 사무소를 위해 설계했습니다.",
"서울 종로구 원서동, 창덕궁 옆에 있습니다."],hints_en:["1971 — a small office building wrapped in dark brick and draped in ivy.","In eastern Asia, South Korea.","An architectural office building doubling as a cultural space.","The skip-floor section stacks rooms at half-level offsets, weaving the narrow interior into a labyrinth. Designated as a registered cultural heritage site.","Designed by Kim Swoo-geun for his own office.","In Wonseo-dong, Jongno-gu, Seoul, beside Changdeokgung Palace."]},
// src: 나무위키, 등록문화재

{id:"space_new",name:"공간 신관 (유리사옥)",en:"SPACE Group Building (new)",aka:["공간 신관","유리사옥","공간 유리관"],arch:"장세양",city:"서울",country:"대한민국",year:1997,type:"사옥",feat:"검은 벽돌 구관과 대비되는 투명 유리 매스",hints:[
"1997년, 검은 벽돌 옛 사옥 바로 옆에 세운 투명한 유리 건물.",
"아시아 동부, 대한민국에 있습니다.",
"건축사무소 사옥입니다.",
"불투명하고 무거운 구관과 정반대로, 가볍고 투명한 유리로 대비를 이룹니다.",
"김수근의 뒤를 이은 장세양이 설계했습니다.",
"서울 종로구 원서동, 옛 공간사옥 옆에 있습니다."],hints_en:["1997 — a transparent glass building erected immediately beside the dark brick original office.","In eastern Asia, South Korea.","An architectural office building.","In deliberate contrast to the opaque, heavy original building, the new wing is light and transparent.","Designed by Jang Sae-yang, successor to Kim Swoo-geun.","In Wonseo-dong, Jongno-gu, Seoul, beside the former SPACE building."]},
// src: 팩트체크(장세양/1997, 구관과 별개 건물)

{id:"amore",name:"아모레퍼시픽 신사옥",en:"Amorepacific Headquarters",aka:["아모레퍼시픽 사옥","아모레퍼시픽 신사옥","APHQ"],arch:"데이비드 치퍼필드 (David Chipperfield)",city:"서울",country:"대한민국",year:2018,type:"오피스",feat:"높이 110m — 달항아리를 모티프로 한 정육면체",hints:[
"2018년 완공, 커다란 정육면체 가운데를 뻥 뚫은 하얀 사옥.",
"아시아 동부, 대한민국에 있습니다.",
"기업 본사 오피스입니다.",
"높이 약 110m의 정육면체. 세 방향으로 중정(루프가든)을 파낸 달항아리 모티프.",
"영국 건축가 데이비드 치퍼필드가 설계했습니다.",
"서울 용산구에 있습니다."],hints_en:["Completed in 2018 — a white cubic headquarters with voids carved through its center.","In eastern Asia, South Korea.","A corporate headquarters office building.","An approximately 110 m tall cube with roof gardens cut into three sides — inspired by the rounded form of the Korean moon jar (dal hangari).","Designed by British architect David Chipperfield.","In Yongsan-gu, Seoul."]},
// src: 나무위키, 공식

{id:"building63",name:"63빌딩",en:"63 Square",aka:["63빌딩","육삼빌딩","63스퀘어"],arch:"SOM",city:"서울",country:"대한민국",year:1985,type:"초고층 복합",feat:"높이 249m·지상 60층 — 금빛 유리 커튼월",hints:[
"1985년 완공, 금빛으로 빛나는 완만한 곡면의 마천루.",
"아시아 동부, 대한민국에 있습니다.",
"전망대·오피스 복합 초고층입니다.",
"높이 249m·지상 60층. 1980~90년대 서울의 대표 랜드마크(이름의 63은 지하 포함).",
"미국 설계사 SOM이 설계에 참여했습니다.",
"서울 영등포구 여의도, 한강 변에 있습니다."],hints_en:["Completed in 1985 — a gold-glazed curtain wall skyscraper with a gently curved profile.","In eastern Asia, South Korea.","A mixed-use high-rise with observation deck and offices.","249 m tall, 60 floors above grade (the name '63' counts underground floors). An iconic Seoul landmark of the 1980s–90s.","Designed with the involvement of American firm SOM.","On the Han River in Yeouido, Yeongdeungpo-gu, Seoul."]},
// src: 나무위키

{id:"mmca_seoul",name:"국립현대미술관 서울관",en:"MMCA Seoul",aka:["국립현대미술관 서울관","MMCA 서울","현대미술관 서울관"],arch:"민현준 (mpArt)",city:"서울",country:"대한민국",year:2013,type:"미술관",feat:"옛 기무사 터에 저층 분산형으로 앉힌 미술관",hints:[
"2013년 개관, 낮게 흩어진 여러 마당과 건물이 골목처럼 이어진 미술관.",
"아시아 동부, 대한민국에 있습니다.",
"국립 현대미술관입니다.",
"옛 국군기무사령부 터에 저층으로 분산 배치. 도심 속 마당과 골목의 흐름.",
"건축가 민현준(엠피아트)이 설계했습니다.",
"서울 종로구 소격동, 경복궁 옆에 있습니다."],hints_en:["Opened in 2013 — a museum spread in low-rise clusters with multiple courtyards connected like alleyways.","In eastern Asia, South Korea.","A national museum of modern and contemporary art.","Low-rise dispersed layout on the former site of the Defense Security Command — a flow of urban courtyards and alleyways through the city center.","Designed by Min Hyun-jun (mpArt).","In Sogyeok-dong, Jongno-gu, Seoul, beside Gyeongbokgung Palace."]},
// src: 팩트체크(민현준/2013)

{id:"welcomm",name:"웰콤시티",en:"Welcomm City",aka:["웰콤시티","웰콤 시티"],arch:"승효상",city:"서울",country:"대한민국",year:2000,type:"오피스",feat:"코르텐강 네 개의 매스가 공중에 떠 있는 형태",hints:[
"2000년, 녹슨 붉은 강판(코르텐)으로 감싼 네 덩어리가 떠 있는 사옥.",
"아시아 동부, 대한민국에 있습니다.",
"광고회사 사옥 — 업무 건축입니다.",
"콘크리트 저층부 위로 코르텐강 매스 넷이 부유하며 사이에 빈 공간을 둡니다.",
"‘빈자의 미학’의 건축가 승효상이 설계했습니다.",
"서울 중구에 있습니다."],hints_en:["2000 — an office building where four masses clad in rusted red steel plate (Corten) appear to float in the air.","In eastern Asia, South Korea.","An advertising agency's office — commercial architecture.","Four Corten steel masses hover above a concrete podium, with voids between them.","Designed by Seung H-Sang, architect of the 'aesthetics of poverty'.","In Jung-gu, Seoul."]},
// src: 나무위키, 이로재

{id:"sujoldang",name:"수졸당",en:"Sujoldang",aka:["수졸당","守拙堂"],arch:"승효상",city:"서울",country:"대한민국",year:1993,type:"주거",feat:"‘빈자의 미학’을 처음 구현한 단독주택",hints:[
"1993년, 절제된 회색 매스와 작은 마당을 품은 도시 단독주택.",
"아시아 동부, 대한민국에 있습니다.",
"개인 단독주택 — 주거 건축입니다.",
"화려함을 덜어내고 빈 마당과 여백에 집중한 ‘빈자의 미학’의 첫 대표작.",
"승효상이 설계했습니다.",
"서울 강남구에 있습니다."],hints_en:["1993 — a detached urban house with a restrained grey massing and a small courtyard.","In eastern Asia, South Korea.","A private detached house — residential architecture.","Ornament stripped away; focus placed on an empty courtyard and spatial void — the first canonical work of the 'aesthetics of poverty'.","Designed by Seung H-Sang.","In Gangnam-gu, Seoul."]},
// src: 나무위키

{id:"kyobo_gangnam",name:"강남 교보타워",en:"Gangnam Kyobo Tower",aka:["강남 교보타워","교보타워","강남교보"],arch:"마리오 보타 (Mario Botta)",city:"서울",country:"대한민국",year:2003,type:"오피스",feat:"높이 약 118m — 벽돌 외장 쌍둥이 매스",hints:[
"2003년 완공, 붉은 벽돌로 마감한 두 개의 육중한 고층 매스.",
"아시아 동부, 대한민국에 있습니다.",
"업무용 고층 오피스입니다.",
"높이 약 118m. 대칭적인 두 덩어리와 벽돌의 물성이 특징.",
"스위스 건축가 마리오 보타가 설계했습니다.",
"서울 강남구 신논현 교차로에 있습니다."],hints_en:["Completed in 2003 — two massive high-rise volumes finished in red brick.","In eastern Asia, South Korea.","A high-rise office building.","Approximately 118 m tall. Twin symmetrical volumes and the materiality of brick are the defining features.","Designed by Swiss architect Mario Botta.","At the Sinnonhyeon intersection, Gangnam-gu, Seoul."]},
// src: 나무위키

{id:"jongno_tower",name:"종로타워",en:"Jongno Tower",aka:["종로타워","종로 타워"],arch:"라파엘 비뇰리 (Rafael Viñoly)",city:"서울",country:"대한민국",year:1999,type:"오피스",feat:"높이 약 132m — 최상부에 뜬 ‘비행접시’ 링",hints:[
"1999년 완공, 최상부에 원반형 구조물이 공중에 떠 있는 오피스.",
"아시아 동부, 대한민국에 있습니다.",
"업무용 고층 오피스입니다.",
"높이 약 132m·33층. 세 개의 코어 위로 최상층 링(‘탑클라우드’)이 떠 있습니다.",
"우루과이 출신 라파엘 비뇰리가 설계했습니다.",
"서울 종로 네거리에 있습니다."],hints_en:["Completed in 1999 — an office building with a disc-shaped structure floating at the top.","In eastern Asia, South Korea.","A high-rise office building.","Approximately 132 m tall, 33 floors. A ring-shaped top floor ('Top Cloud') floats above three core shafts.","Designed by Uruguayan-born Rafael Viñoly.","At the Jongno intersection, Seoul."]},
// src: 팩트체크 정정(2001→1999)

{id:"busan_cinema",name:"영화의전당",en:"Busan Cinema Center",aka:["영화의전당","부산 영화의전당","두레라움"],arch:"쿱 힘멜블라우 (Coop Himmelb(l)au)",city:"부산",country:"대한민국",year:2011,type:"문화시설",feat:"세계 최장 캔틸레버 지붕(빅루프) — 기네스 기록",hints:[
"2011년 완공, 기둥 하나로 떠받친 거대한 지붕이 하늘을 나는 듯한 건물.",
"아시아 동부, 대한민국에 있습니다.",
"영화제 상영·공연 문화시설입니다.",
"길이 약 163m·85m 외팔보(빅루프) 지붕에 LED 4만여 개. 기네스 최장 캔틸레버 지붕.",
"오스트리아 설계사 쿱 힘멜블라우가 설계했습니다.",
"부산 해운대구 센텀시티에 있습니다."],hints_en:["Completed in 2011 — a building with an enormous roof that appears to fly, supported by a single column.","In eastern Asia, South Korea.","A cultural facility for film festival screenings and performances.","The 'Big Roof' cantilever is approximately 163 m × 85 m, studded with over 40,000 LEDs — the world's longest cantilevered roof (Guinness record).","Designed by Austrian firm Coop Himmelb(l)au.","In Centum City, Haeundae-gu, Busan."]},
// src: 나무위키

{id:"ewha_ecc",name:"이화여대 ECC",en:"Ewha Campus Complex",aka:["이화여대 ECC","이화 ECC","ECC"],arch:"도미니크 페로 (Dominique Perrault)",city:"서울",country:"대한민국",year:2008,type:"교육시설",feat:"땅을 협곡처럼 가른 국내 최대 지하 캠퍼스",hints:[
"2008년, 땅을 계곡처럼 갈라 그 벽면을 유리로 채운 지하 캠퍼스.",
"아시아 동부, 대한민국에 있습니다.",
"대학 교육·문화 복합시설입니다.",
"경사진 대지를 V자 협곡으로 파내고 양쪽 유리벽에 강의실·도서관을 넣었습니다.",
"프랑스 건축가 도미니크 페로가 설계했습니다.",
"서울 서대문구 이화여대 캠퍼스에 있습니다."],hints_en:["2008 — an underground campus created by splitting the ground open like a canyon and filling both walls with glass.","In eastern Asia, South Korea.","A university education and cultural complex.","The sloped terrain is carved into a V-shaped canyon; lecture halls and library are housed behind the glass walls on either side.","Designed by French architect Dominique Perrault.","On the Ewha Womans University campus, Seodaemun-gu, Seoul."]},
// src: 나무위키

{id:"mimesis",name:"미메시스 아트 뮤지엄",en:"Mimesis Art Museum",aka:["미메시스 아트 뮤지엄","미메시스미술관","미메시스"],arch:"알바로 시자 (Álvaro Siza)",city:"파주",country:"대한민국",year:2010,type:"미술관",feat:"고양이가 몸을 만 듯한 백색 곡면 매스",hints:[
"2010년 개관, 흰 콘크리트가 고양이처럼 부드럽게 휘어 도는 미술관.",
"아시아 동부, 대한민국에 있습니다.",
"현대미술 미술관입니다.",
"하나의 곡면 매스가 안뜰을 품고, 빛을 반사로 은은하게 끌어들입니다.",
"포르투갈의 거장 알바로 시자가 설계했습니다.",
"경기도 파주 출판도시에 있습니다."],hints_en:["Opened in 2010 — a museum of white concrete that curves gently like a cat curled into itself.","In eastern Asia, South Korea.","A contemporary art museum.","A single curvilinear mass wraps around an inner courtyard, drawing in soft light through reflection.","Designed by Portuguese master Álvaro Siza.","In Paju Book City, Gyeonggi-do."]},
// src: 팩트체크(시자/개관 2010)

{id:"kyobo_gwanghwamun",name:"교보생명빌딩 (광화문)",en:"Kyobo Building",aka:["광화문 교보빌딩","교보빌딩","교보생명빌딩"],arch:"시저 펠리 (César Pelli)",city:"서울",country:"대한민국",year:1980,type:"오피스",feat:"광화문 네거리의 절제된 격자 입면 오피스",hints:[
"1980년, 광화문 네거리 모퉁이에 세운 정갈한 격자 입면의 오피스.",
"아시아 동부, 대한민국에 있습니다.",
"업무용 고층 오피스입니다.",
"높이 약 97m·지상 23층. 1층에 대형 서점을 품은 도심 랜드마크.",
"시저 펠리가 설계했습니다.",
"서울 종로구 광화문 네거리에 있습니다."],hints_en:["1980 — a clean grid-facade office building on the corner of a major intersection.","In eastern Asia, South Korea.","A high-rise office building.","Approximately 97 m tall, 23 floors above grade. A downtown landmark housing a large bookstore on the ground floor.","Designed by César Pelli.","At the Gwanghwamun intersection, Jongno-gu, Seoul."]},
// src: 팩트체크(시저 펠리/1980)

{id:"nseoul_tower",name:"N서울타워 (남산타워)",en:"N Seoul Tower",aka:["N서울타워","남산타워","남산서울타워","서울타워"],arch:"장종률",city:"서울",country:"대한민국",year:1975,type:"전망탑",feat:"탑 높이 236.7m — 해발 포함 480m 전망탑",hints:[
"1970년대, 산 정상에 세운 원통형 전망·방송탑.",
"아시아 동부, 대한민국에 있습니다.",
"방송 송신 겸 전망탑입니다.",
"탑 자체 높이 236.7m, 산 높이를 더하면 해발 약 480m. 일반 개방은 1980년.",
"건축가 장종률이 설계했습니다.",
"서울 남산 정상에 있습니다."],hints_en:["1970s — a cylindrical observation and broadcast tower on a mountain summit.","In eastern Asia, South Korea.","A broadcast transmission tower and observation tower.","The tower itself stands 236.7 m; including the mountain's elevation, the tip reaches approximately 480 m above sea level. Opened to the public in 1980.","Designed by architect Jang Jong-ryul.","At the summit of Namsan, Seoul."]},
// src: 나무위키(준공 1975/개방 1980)

{id:"sewoon",name:"세운상가",en:"Sewoon Sangga",aka:["세운상가","세운 상가"],arch:"김수근",city:"서울",country:"대한민국",year:1967,type:"주상복합",feat:"길이 약 1km — 한국 최초의 주상복합 메가스트럭처",hints:[
"1960년대 후반, 도심을 남북으로 관통하는 약 1km의 거대한 상가 구조물.",
"아시아 동부, 대한민국에 있습니다.",
"상가와 주거가 결합된 주상복합입니다.",
"8개 동이 공중보행로로 이어진 한국 최초의 주상복합 메가스트럭처.",
"김수근이 설계했습니다.",
"서울 종로~중구를 잇는 도심에 있습니다."],hints_en:["Late 1960s — a roughly 1 km-long mega-structure running north to south through the city center.","In eastern Asia, South Korea.","A mixed-use complex combining commercial and residential — South Korea's first mixed-use development.","Eight blocks linked by elevated pedestrian walkways — South Korea's first mixed-use mega-structure.","Designed by Kim Swoo-geun.","In the city center stretching from Jongno to Jung-gu, Seoul."]},
// src: 나무위키(단계적 완공, 1967 1차)

{id:"whanki",name:"환기미술관",en:"Whanki Museum",aka:["환기미술관","환기 미술관","Whanki Museum"],arch:"우규승 (Kyu Sung Woo)",city:"서울",country:"대한민국",year:1992,type:"미술관",feat:"화가 김환기를 기리는 3개 동의 석조 미술관",hints:[
"1992년 개관, 언덕 지형을 따라 낮게 앉힌 석조 미술관.",
"아시아 동부, 대한민국에 있습니다.",
"한 화가를 기리는 개인 미술관입니다.",
"3개 동이 지형에 맞춰 배치되고, 화가의 점화(點畵)를 공간의 빛으로 번안했습니다.",
"재미 건축가 우규승이 설계했습니다.",
"서울 종로구 부암동, 북악산 자락에 있습니다."],hints_en:["Opened in 1992 — a stone museum settled low into a hillside topography.","In eastern Asia, South Korea.","A dedicated museum honoring a single painter.","Three buildings arranged to follow the terrain; the dots of the painter's dot paintings are reinterpreted as light in space.","Designed by Korean-American architect Kyu Sung Woo.","In Buam-dong, Jongno-gu, Seoul, on the slopes of Bugaksan."]},
// src: 팩트체크(우규승/1992)
];
