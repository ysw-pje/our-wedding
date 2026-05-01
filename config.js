/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "양승원",
    nameEn: "YANG SEUNG WON",
    father: "양수현",
    mother: "정연옥",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "박재은",
    nameEn: "PARK JAE EUN",
    father: "박종만",
    mother: "변문희",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-09-12",
    time: "17:40",
    venue: "더컨벤션 잠실",
    hall: "그랜드볼룸 1층",
    address: "서울 송파구 올림픽로 319 1층",
    tel: "02-418-5000",
    mapLinks: {
      kakao: "https://kko.to/PtNPNGcKrY",
      naver: "https://naver.me/F1rxJcrX"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로를 향한 깊은 배려를 바탕으로\n사랑이 단단한 가정을 이루고자 합니다.\n그 첫걸음에 소중한 분들을 초대합니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "곁에 있을 때\n가장 나다운 모습이 되게 하는 사람을 만났습니다.\n이제 저희는 함께 모든 계절을 걸어가려 합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "양승원", bank: "국민은행", number: "000-000-000000" }
      /*{ role: "아버지", name: "홍판서", bank: "신한은행", number: "000-000-000000" },*/
      /*{ role: "어머니", name: "김부인", bank: "우리은행", number: "000-000-000000" }*/
    ],
    bride: [
      { role: "신부", name: "박재은", bank: "하나은행", number: "348-890735-71207" }
      /*{ role: "아버지", name: "김사장", bank: "기업은행", number: "000-000-000000" },*/
      /*{ role: "어머니", name: "이부인", bank: "농협은행", number: "000-000-000000" }*/
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "양승원 ♥ 박재은 결혼합니다",
    description: "2026년 09월 12일, 소중한 분들을 초대합니다."
  }
};
