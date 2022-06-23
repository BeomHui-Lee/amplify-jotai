// ----- 업체가입 -----
// 파일 업로드 사이즈
export enum SIZE {
  LIMIT_15MB = 15728640,
}

export const annualSalesSize = ["신생", "연 10억 이하", "연 30억 이하", "연 50억 이하", "연 50억 초과"];

// ----- 자재 플랫폼 -----
// 권한
export const AUTH = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  DASHBOARD: "dashboard",
  USER: "user",
  CUSTOMER: "customer",
  EMPLOYEE: "employee",
  COMPANY: "company",

  // 인바운드 DB관리
  INBOUND_DB: "inbound_db",
  HCOST_INBOUND_DB: "hcost_inbound_db",
  STARTUP_INBOUND_DB: "startup_inbound_db",

  // 간편견적 관리
  HCOST: "hcost",
  HCOST_MODEL: "hcost_model",
  HCOST_FACTOR: "hcost_factor",

  // 수익성 관리
  STARTUP: "startup",
  STARTUP_CREATE: "startup_create",
  STARTUP_MODEL: "startup_model",
  STARTUP_FACTOR: "startup_factor",
};

// 역할
export const ROLE = {
  ROLE_CUSTOMER: "고객",
  ROLE_MANAGER: "일반 관리자",
  ROLE_STARTUP_MANAGER: "농창업 관리자",
  ROLE_DESIGN_MANAGER: "전문설계 관리자",
  ROLE_ADMIN: "운영자",
  ROLE_ADMIN_DISTRIBUTION: "관리자(유통/시공사)",
  ROLE_ADMIN_MANUFACTURING: "관리자(제조/도매상)",
};

export const RegionData: any = {
  label: "",
  desc: "",
  items: [
    {
      value: "서울/경기권",
      regions: [
        { value: "서울" },
        { value: "인천" },
        { value: "인천 강화" },
        { value: "인천 옹진" },
        { value: "경기 가평" },
        { value: "경기 고양" },
        { value: "경기 과천" },
        { value: "경기 광명" },
        { value: "경기 광주" },
        { value: "경기 구리" },
        { value: "경기 군포" },
        { value: "경기 김포" },
        { value: "경기 남양주" },
        { value: "경기 동두천" },
        { value: "경기 부천" },
        { value: "경기 성남" },
        { value: "경기 수원" },
        { value: "경기 시흥" },
        { value: "경기 안산" },
        { value: "경기 안성" },
        { value: "경기 안양" },
        { value: "경기 양주" },
        { value: "경기 양평" },
        { value: "경기 여주" },
        { value: "경기 연천" },
        { value: "경기 오산" },
        { value: "경기 용인" },
        { value: "경기 의왕" },
        { value: "경기 의정부" },
        { value: "경기 이천" },
        { value: "경기 파주" },
        { value: "경기 평택" },
        { value: "경기 포천" },
        { value: "경기 하남" },
        { value: "경기 화성" },
      ],
    },
    {
      value: "강원권",
      regions: [
        { value: "강원 강릉" },
        { value: "강원 고성" },
        { value: "강원 동해" },
        { value: "강원 삼척" },
        { value: "강원 속초" },
        { value: "강원 양구" },
        { value: "강원 양양" },
        { value: "강원 영월" },
        { value: "강원 원주" },
        { value: "강원 인제" },
        { value: "강원 정선" },
        { value: "강원 철원" },
        { value: "강원 춘천" },
        { value: "강원 태백" },
        { value: "강원 평창" },
        { value: "강원 홍천" },
        { value: "강원 화천" },
        { value: "강원 횡성" },
      ],
    },
    {
      value: "대전/세종/충청권",
      regions: [
        { value: "대전" },
        { value: "세종" },
        { value: "충남 계룡" },
        { value: "충남 공주" },
        { value: "충남 금산" },
        { value: "충남 논산" },
        { value: "충남 당진" },
        { value: "충남 보령" },
        { value: "충남 부여" },
        { value: "충남 서산" },
        { value: "충남 서천" },
        { value: "충남 아산" },
        { value: "충남 예산" },
        { value: "충남 천안" },
        { value: "충남 청양" },
        { value: "충남 태안" },
        { value: "충남 홍성" },
        { value: "충북 괴산" },
        { value: "충북 단양" },
        { value: "충북 보은" },
        { value: "충북 영동" },
        { value: "충북 옥천" },
        { value: "충북 음성" },
        { value: "충북 제천" },
        { value: "충북 증평" },
        { value: "충북 진천" },
        { value: "충북 청주" },
        { value: "충북 충주" },
      ],
    },
    {
      value: "광주/전라권",
      regions: [
        { value: "광주" },
        { value: "전북 고창" },
        { value: "전북 군산" },
        { value: "전북 김제" },
        { value: "전북 남원" },
        { value: "전북 무주" },
        { value: "전북 부안" },
        { value: "전북 순창" },
        { value: "전북 완주" },
        { value: "전북 익산" },
        { value: "전북 임실" },
        { value: "전북 장수" },
        { value: "전북 전주" },
        { value: "전북 정읍" },
        { value: "전북 진안" },
        { value: "전남 강진" },
        { value: "전남 고흥" },
        { value: "전남 곡성" },
        { value: "전남 광양" },
        { value: "전남 구례" },
        { value: "전남 나주" },
        { value: "전남 담양" },
        { value: "전남 목포" },
        { value: "전남 무안" },
        { value: "전남 보성" },
        { value: "전남 순천" },
        { value: "전남 신안" },
        { value: "전남 여수" },
        { value: "전남 영광" },
        { value: "전남 영암" },
        { value: "전남 완도" },
        { value: "전남 장성" },
        { value: "전남 장흥" },
        { value: "전남 진도" },
        { value: "전남 함평" },
        { value: "전남 해남" },
        { value: "전남 화순" },
      ],
    },
    {
      value: "부산/대구/울산/경상권",
      regions: [
        { value: "부산" },
        { value: "대구" },
        { value: "울산" },
        { value: "울산 울주" },
        { value: "경북 경산" },
        { value: "경북 경주" },
        { value: "경북 고령" },
        { value: "경북 구미" },
        { value: "경북 군위" },
        { value: "경북 김천" },
        { value: "경북 문경" },
        { value: "경북 봉화" },
        { value: "경북 상주" },
        { value: "경북 성주" },
        { value: "경북 안동" },
        { value: "경북 영덕" },
        { value: "경북 영양" },
        { value: "경북 영주" },
        { value: "경북 영천" },
        { value: "경북 예천" },
        { value: "경북 울릉" },
        { value: "경북 울진" },
        { value: "경북 의성" },
        { value: "경북 청도" },
        { value: "경북 청송" },
        { value: "경북 칠곡" },
        { value: "경북 포항" },
        { value: "경남 거제" },
        { value: "경남 거창" },
        { value: "경남 고성" },
        { value: "경남 김해" },
        { value: "경남 남해" },
        { value: "경남 밀양" },
        { value: "경남 사천" },
        { value: "경남 산청" },
        { value: "경남 양산" },
        { value: "경남 의령" },
        { value: "경남 진주" },
        { value: "경남 창녕" },
        { value: "경남 창원" },
        { value: "경남 통영" },
        { value: "경남 하동" },
        { value: "경남 함안" },
        { value: "경남 함양" },
        { value: "경남 합천" },
      ],
    },
    {
      value: "제주권",
      regions: [{ value: "제주 서귀포" }, { value: "제주 제주" }],
    },
  ],
} as const;

/** 작물 대분류 */
export const ConCropMajorClassification: any = {
  label: "",
  desc: "",
  items: [
    "엽채류",
    "경채류",
    "근채류",
    "과채류",
    "조미채소류",
    "양채류",
    "산채류",
    "과실류",
    "화훼류",
    "버섯류",
    "미곡류",
    "맥류",
    "두류",
    "잡곡류",
    "서류",
    "특용작물류",
    "약용작물류",
    "과일과채류",
    "수실류",
    "인삼류",
    "초화류",
    "관엽식물류",
    "동물생산물",
  ],
};

/** 작물 중분류 */
export const ConCropMediumClassification: any = {
  label: "",
  desc: "",
  items: [
    "사과",
    "딸기",
    "토마토",
    "포도",
    "귤",
    "복숭아",
    "감",
    "블루베리",
    "자두",
    "매실",
    "수박",
    "대추",
    "배",
    "호두나무",
    "참외",
    "밤나무",
    "참다래(키위)",
    "메론",
    "체리",
    "무화과나무",
    "오디",
    "유자",
    "오렌지",
    "살구",
    "다래",
    "석류나무",
    "망고",
    "레몬",
    "바나나",
    "패션푸룻",
    "플럼코트",
    "블랙커런트",
    "파파야",
    "비파",
    "개암",
    "모과",
    "파인애플",
    "머루",
    "아보카도",
    "앵두나무",
    "은행",
    "보리수",
    "칼슘나무",
    "자몽",
    "용과",
    "플루오트",
    "금귤",
    "도토리",
    "체리모야",
    "구와바",
    "탱자",
    "망고스턴",
    "구즈베리",
    "으름",
    "수구리",
    "하스카프",
    "불수감",
    "흑노호",
    "아사이베리",
    "리치",
    "버찌",
    "피스타치오",
    "산사",
    "아몬드",
    "아보케이트",
    "탄제린",
    "코코넛",
    "듀리안",
    "카무카무",
    "사포딜라",
    "빵나무",
    "롱간",
    "람부탄",
    "표고버섯",
    "느타리버섯",
    "광대버섯",
    "새송이",
    "노루궁뎅이버섯",
    "송화버섯",
    "양송이",
    "목이",
    "상황버섯",
    "팽이버섯",
    "자연산송이",
    "영지버섯",
    "능이버섯",
    "꽃버섯",
    "만가닥버섯",
    "백령버섯",
    "애느타리버섯",
    "싸리버섯",
    "망태버섯",
    "아카시아버섯",
    "잔나비걸상",
    "구름버섯",
    "석이",
    "벼",
    "옥수수",
    "보리",
    "기장",
    "현미",
    "밀",
    "율무",
    "메밀",
    "조",
    "호밀",
    "찰수수",
    "차조",
    "좁쌀",
    "피",
    "고추",
    "감자",
    "고구마",
    "마늘",
    "상추",
    "배추",
    "콩",
    "양파",
    "대파",
    "오이",
    "양배추",
    "호박",
    "시금치",
    "두릅나무",
    "강낭콩",
    "가지",
    "비트(붉은사탕무우)",
    "도라지",
    "생강",
    "쪽파",
    "무",
    "부추",
    "깻잎",
    "더덕",
    "파프리카",
    "고사리",
    "당근",
    "서양채소",
    "양상추",
    "브로콜리",
    "참죽나무",
    "아스파라거스",
    "콜라비",
    "가랏",
    "미나리",
    "열무",
    "산마늘",
    "취나물",
    "팥",
    "피망",
    "갓",
    "마",
    "산나물",
    "토란",
    "머위대",
    "가지나무",
    "고추냉이",
    "연근",
    "케일",
    "냉이",
    "로메인",
    "달래",
    "눈개승마",
    "청경채",
    "완두",
    "쑥갓",
    "고수",
    "곤드레",
    "치커리",
    "아욱",
    "적채",
    "음나무",
    "근대",
    "루꼴라",
    "고들빼기",
    "콩나물",
    "쑥",
    "겨자",
    "우엉",
    "녹두",
    "귀리",
    "박",
    "야콘",
    "비타민",
    "순무",
    "참나물",
    "민들레",
    "삼채",
    "쌈추",
    "곤달비",
    "신선초",
    "파세리",
    "오크라",
    "삼엽채",
    "죽순",
    "동초",
    "방아",
    "동부",
    "비름",
    "그린빈스",
    "숙주",
    "크레송",
    "씀바귀",
    "춘채",
    "돌나물",
    "함초",
    "양하",
    "질경이",
    "엉게나물",
    "카사바",
    "백과",
    "돗나물",
    "수리취",
    "할라피뇨",
    "셀러리",
    "알파파싹",
    "알로애",
    "고비",
    "고라비",
    "명아주",
    "묵나물",
    "모시대",
    "얼래지",
    "모시잎",
    "카이란",
    "쇠똥",
    "염교",
    "신초",
    "루바브",
    "빈스",
    "컴프리",
    "양가지",
    "레드쉬",
    "교나",
    "커민",
    "팍치라오",
    "타이가지",
    "원추리",
    "수영",
    "금강초",
    "솔잎",
    "들깨",
    "참깨",
    "땅콩",
    "인삼",
    "오미자",
    "구기자",
    "복분자",
    "산양삼",
    "녹차",
    "방풍",
    "황칠나무",
    "감초",
    "유채",
    "초석잠",
    "담배",
    "참당귀",
    "헛개나무",
    "옻",
    "지황",
    "산초",
    "황기",
    "하수오",
    "강황",
    "울금",
    "산수유",
    "천마",
    "동충하초",
    "어성초",
    "대마",
    "수삼",
    "개오동나무",
    "천궁",
    "초피",
    "구절초",
    "우슬",
    "산약",
    "결명자",
    "묘삼",
    "강활",
    "삽주",
    "삼백초",
    "전호",
    "복령",
    "박하",
    "멀꿀",
    "사삼",
    "홍삼",
    "누에씨",
    "석창포",
    "아주까리",
    "갈근",
    "사인",
    "삼지구엽초",
    "칡",
    "백삼",
    "계피",
    "과루인",
    "구약",
    "백출",
    "회향",
    "만삼",
    "레몬머틀",
    "반하",
    "옥죽",
    "녹비",
    "황금",
    "두충",
    "익모초",
    "닥나무",
    "인초",
    "후추",
    "환삼덩굴",
    "저근백피",
    "인진호",
    "망초",
    "모시",
    "사탕무",
    "육두구",
    "코푸라",
    "용안",
    "부용",
    "사차인치",
    "백개자",
    "황련",
    "패모",
    "정향",
    "연자",
    "원지",
    "산조인",
    "산사자",
    "시호",
    "진피",
    "지모",
    "오배자",
    "형개",
  ],
};
