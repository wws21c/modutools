#!/usr/bin/env python3
"""전국어린이보호구역 → data/childzones.json 배치 생성.
원석씨가 data.go.kr 15012891 활용신청 후 발급받은 serviceKey를 넣고 1회 실행.
  PUBLIC_DATA_KEY=... python3 build_childzones.py
API: tn_pubr_public_child_prtc_zn_api (JSON, 1000건/페이지). 전국 약 16,800건.
라이선스: 배포 전 data.go.kr 페이지에서 공공누리 유형 육안 확인(관례 1유형)."""
import os, sys, json, time, urllib.request, urllib.parse

KEY = os.environ.get("PUBLIC_DATA_KEY", "").strip()
if not KEY:
    sys.exit("PUBLIC_DATA_KEY 환경변수 필요 (data.go.kr 15012891 활용신청 후 발급)")

BASE = "https://api.data.go.kr/openapi/tn_pubr_public_child_prtc_zn_api"
KREXT = lambda la, lo: (33 < la < 39 and 124 < lo < 132)  # 좌표 파싱깨짐 필터

def fetch(page, rows=1000):
    q = urllib.parse.urlencode({"serviceKey": KEY, "pageNo": page, "numOfRows": rows, "type": "json"}, safe="%")
    with urllib.request.urlopen(f"{BASE}?{q}", timeout=30) as r:
        return json.load(r)

def norm(d):
    try: la, lo = float(d.get("latitude") or d.get("위도") or 0), float(d.get("longitude") or d.get("경도") or 0)
    except (TypeError, ValueError): return None
    if not KREXT(la, lo): return None
    cctv_yn = (d.get("cctvInstlYn") or d.get("CCTV설치여부") or "").strip().upper()
    cnt = str(d.get("cctvInstlCnt") or d.get("CCTV설치대수") or "").strip()
    return {
        "k": (d.get("mnnstNm") or d.get("시설종류") or "").strip(),
        "n": (d.get("fcltNm") or d.get("대상시설명") or "").strip(),
        "a": (d.get("rnAdres") or d.get("lnmadr") or d.get("소재지도로명주소") or "").strip(),
        "la": round(la, 6), "lo": round(lo, 6),
        "p": (d.get("cmptncPolcSttnNm") or d.get("관할경찰서명") or "").strip(),
        "c": 1 if cctv_yn == "Y" else 0,
        "cn": int(cnt) if cnt.isdigit() else 0,
    }

def main():
    first = fetch(1, 1)
    body = first.get("response", {}).get("body", {})
    total = int(body.get("totalCount") or 0)
    if not total:
        sys.exit(f"응답 이상: {json.dumps(first, ensure_ascii=False)[:300]}")
    print(f"전국 총 {total}건, 수집 시작…")
    zones, page = [], 1
    while (page - 1) * 1000 < total:
        data = fetch(page, 1000)
        items = data.get("response", {}).get("body", {}).get("items", [])
        if isinstance(items, dict):
            items = items.get("item", [])
        for it in (items or []):
            z = norm(it)
            if z: zones.append(z)
        print(f"  page {page}: 누적 {len(zones)}건")
        page += 1
        time.sleep(0.3)
    out = {
        "updated": time.strftime("%Y-%m-%d"),
        "source": "전국어린이보호구역표준데이터(공공데이터포털 15012891)",
        "license": "공공누리 제1유형(출처표시) — 배포 전 육안 확인",
        "scope": f"전국 {len(zones)}건",
        "zones": zones,
    }
    path = os.path.join(os.path.dirname(__file__), "data", "childzones.json")
    json.dump(out, open(path, "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
    kb = round(os.path.getsize(path) / 1024, 1)
    print(f"완료: {len(zones)}건 → {path} ({kb} KB)")
    if kb > 4096:
        print("⚠ 4MB 초과 — 시도별 분할 로딩 고려")

if __name__ == "__main__":
    main()
