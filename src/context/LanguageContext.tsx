import { createContext, useContext, useState, type ReactNode } from 'react';

export type Language = 'en' | 'ko' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.features': 'Features',
    'nav.community': 'Community',
    'nav.universities': 'Universities',
    'nav.joinWaitlist': 'Join Waitlist',

    // Hero
    'hero.badge': 'Made for Students, by Students',
    'hero.title1': 'Your Campus.',
    'hero.title2': 'Your Voice.',
    'hero.title3': 'Your Wall.',
    'hero.description': 'The anonymous social network exclusively for university students. Share thoughts, get advice, and connect with your campus community — all while staying completely anonymous.',
    'hero.cta': 'Join the Waitlist',
    'hero.learnMore': 'Learn More',
    'hero.studentsWorldwide': 'Students Worldwide',
    'hero.universities': 'Universities',
    'hero.anonymous': 'Anonymous',

    // Waitlist
    'waitlist.title': 'Join the Waitlist',
    'waitlist.subtitle': 'Be the first to know when The Wall launches at your university!',
    'waitlist.counter': 'Students already waiting',
    'waitlist.counting': 'and counting...',
    'waitlist.placeholder': 'Enter your .edu email',
    'waitlist.button': 'Join Waitlist',
    'waitlist.joining': 'Joining...',
    'waitlist.success': "You're on the list! We'll notify you when we launch.",
    'waitlist.errorEmpty': 'Please enter your email address',
    'waitlist.errorInvalid': 'Please enter a valid email address',

    // Features
    'features.title': 'Why Students Love The Wall',
    'features.subtitle': 'Built with features that actually matter to your campus life',
    'features.anonymous.title': '100% Anonymous',
    'features.anonymous.desc': 'Your identity is always protected. Speak freely, share honestly, and be yourself without fear.',
    'features.verified.title': 'University Verified',
    'features.verified.desc': 'Only verified students with .edu emails can join. Keep the community authentic and safe.',
    'features.campus.title': 'See Any Campus',
    'features.campus.desc': 'Browse posts from any university in your country. Premium unlocks campuses worldwide!',
    'features.language.title': 'Multi-Language',
    'features.language.desc': 'Filter posts by language — English, Korean, Chinese, Spanish, and more. Your feed, your language.',
    'features.advice.title': 'Upperclassmen Advice',
    'features.advice.desc': "Get real advice from seniors who've been there. Which professors to take, where to eat, what to avoid.",
    'features.hottakes.title': 'Campus Hot Takes',
    'features.hottakes.desc': 'Share opinions, discuss drama, or just vent about that 8AM class. No judgment here.',

    // Competition
    'competition.title': 'Why The Wall Wins',
    'competition.subtitle': 'See how we compare to the alternatives',
    'competition.feature': 'Feature',
    'competition.anonymous': 'Anonymous posting',
    'competition.nationwide': 'See any campus nationwide',
    'competition.verification': 'University verification',
    'competition.multilang': 'Multi-language filter',
    'competition.clean': 'Clean, organized feed',
    'competition.global': 'Global university access',

    // OG Promo (replacing Pricing)
    'og.title': 'Be an OG Wall Member',
    'og.subtitle': 'Join the waitlist now and unlock exclusive founding member perks',
    'og.badge': 'Limited Time',
    'og.cardTitle': 'OG Founder Status',
    'og.cardSubtitle': 'For early waitlist members',
    'og.free': 'FREE',
    'og.forYear': 'for 1 year',
    'og.perk1': 'All Premium features unlocked',
    'og.perk2': 'Unlimited DMs',
    'og.perk3': 'Exclusive OG badge forever',
    'og.perk4': 'View ANY university worldwide',
    'og.perk5': 'All sticker packs included',
    'og.perk6': 'Priority access to new features',
    'og.cta': 'Claim Your OG Status',
    'og.note': 'Only available for waitlist members who join before launch',

    // Ambassador
    'ambassador.badge': 'Coming Soon',
    'ambassador.title': 'Become a Wall Ambassador',
    'ambassador.subtitle': 'The Wall grows campus by campus. Ambassadors help spark the first conversations — and shape what the Wall becomes.',
    'ambassador.getTitle': 'What Ambassadors get',
    'ambassador.get1': 'A visible Ambassador badge',
    'ambassador.get2': 'Early access to new features',
    'ambassador.get3': 'A private Ambassador feed',
    'ambassador.get4': 'The ability to start and pin threads',
    'ambassador.get5': 'A voice in campus-specific themes and rules',
    'ambassador.get6': 'Your name listed on the Early Builders Wall',
    'ambassador.doTitle': 'What Ambassadors do',
    'ambassador.do1': 'Invite trusted peers',
    'ambassador.do2': 'Start real conversations',
    'ambassador.do3': 'Help the Wall feel alive early on',
    'ambassador.howTitle': 'How to become one',
    'ambassador.how1': 'Join early',
    'ambassador.how2': 'Be active',
    'ambassador.how3': 'Help bring others in',
    'ambassador.note': "Ambassadors aren't moderators. They're builders.",
    'ambassador.tagline': 'Status is earned. Influence is real.',

    // Universities
    'universities.title': 'Launching At Top Universities',
    'universities.subtitle': 'Join students from the best schools around the world',
    'universities.students': 'students',

    // Referral
    'referral.title': 'Invite Friends, Get Rewards',
    'referral.subtitle': 'Share The Wall with your classmates and unlock exclusive perks',
    'referral.reward1.title': 'Free Premium Month',
    'referral.reward1.desc': 'For each friend who joins',
    'referral.reward2.title': 'OG Wall Member',
    'referral.reward2.desc': 'Exclusive badge forever',
    'referral.cta': 'Start Referring',

    // CTA
    'cta.title': 'Ready to Join The Wall?',
    'cta.subtitle': 'Sign up now and be the first to access your campus community',
    'cta.button': 'Join the Waitlist',

    // Footer
    'footer.tagline': 'The anonymous social network for university students. Your voice matters.',
    'footer.product': 'Product',
    'footer.team': 'Team',
    'footer.legal': 'Legal',
    'footer.aboutUs': 'About Us',
    'footer.safety': 'Safety',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.guidelines': 'Community Guidelines',
    'footer.copyright': '© 2024 The Wall (다왈). Made with 💜 for students everywhere.',
  },
  ko: {
    // Navbar
    'nav.features': '기능',
    'nav.community': '커뮤니티',
    'nav.universities': '대학교',
    'nav.joinWaitlist': '웨이트리스트 신청',

    // Hero
    'hero.badge': '학생을 위해, 학생이 만든',
    'hero.title1': '당신의 캠퍼스.',
    'hero.title2': '당신의 목소리.',
    'hero.title3': '당신의 월.',
    'hero.description': '대학생 전용 익명 소셜 네트워크. 생각을 나누고, 조언을 구하고, 캠퍼스 커뮤니티와 연결하세요 — 완전히 익명으로.',
    'hero.cta': '웨이트리스트 신청',
    'hero.learnMore': '더 알아보기',
    'hero.studentsWorldwide': '전 세계 학생',
    'hero.universities': '대학교',
    'hero.anonymous': '익명',

    // Waitlist
    'waitlist.title': '웨이트리스트 신청',
    'waitlist.subtitle': '당신의 대학교에서 The Wall이 출시될 때 가장 먼저 알림을 받으세요!',
    'waitlist.counter': '대기 중인 학생 수',
    'waitlist.counting': '계속 증가 중...',
    'waitlist.placeholder': '학교 이메일을 입력하세요',
    'waitlist.button': '신청하기',
    'waitlist.joining': '신청 중...',
    'waitlist.success': '신청 완료! 출시되면 알려드릴게요.',
    'waitlist.errorEmpty': '이메일을 입력해주세요',
    'waitlist.errorInvalid': '유효한 이메일을 입력해주세요',

    // Features
    'features.title': '학생들이 The Wall을 사랑하는 이유',
    'features.subtitle': '캠퍼스 생활에 꼭 필요한 기능들',
    'features.anonymous.title': '100% 익명',
    'features.anonymous.desc': '당신의 신원은 항상 보호됩니다. 자유롭게 말하고, 솔직하게 공유하세요.',
    'features.verified.title': '대학 인증',
    'features.verified.desc': '학교 이메일로 인증된 학생만 가입 가능. 진정한 커뮤니티를 유지합니다.',
    'features.campus.title': '모든 캠퍼스 보기',
    'features.campus.desc': '전국 모든 대학의 게시물을 탐색하세요. 프리미엄으로 전 세계 대학도!',
    'features.language.title': '다국어 지원',
    'features.language.desc': '언어별로 게시물 필터링 — 한국어, 영어, 중국어 등. 당신의 피드, 당신의 언어.',
    'features.advice.title': '선배들의 조언',
    'features.advice.desc': '경험 있는 선배들의 진짜 조언. 어떤 교수님, 어디서 먹을지, 뭘 피해야 하는지.',
    'features.hottakes.title': '캠퍼스 핫테이크',
    'features.hottakes.desc': '의견을 공유하고, 드라마를 토론하고, 아침 8시 수업에 대해 한탄하세요.',

    // Competition
    'competition.title': 'The Wall이 이기는 이유',
    'competition.subtitle': '다른 앱들과 비교해보세요',
    'competition.feature': '기능',
    'competition.anonymous': '익명 게시',
    'competition.nationwide': '전국 캠퍼스 보기',
    'competition.verification': '대학 인증',
    'competition.multilang': '다국어 필터',
    'competition.clean': '깔끔한 피드',
    'competition.global': '글로벌 대학 접근',

    // OG Promo
    'og.title': 'OG 월 멤버가 되세요',
    'og.subtitle': '지금 웨이트리스트에 신청하고 창립 멤버 혜택을 받으세요',
    'og.badge': '한정 기간',
    'og.cardTitle': 'OG 창립자 자격',
    'og.cardSubtitle': '초기 웨이트리스트 멤버 대상',
    'og.free': '무료',
    'og.forYear': '1년간',
    'og.perk1': '모든 프리미엄 기능 해제',
    'og.perk2': '무제한 DM',
    'og.perk3': '영구 OG 배지',
    'og.perk4': '전 세계 모든 대학 보기',
    'og.perk5': '모든 스티커팩 포함',
    'og.perk6': '새 기능 우선 접근',
    'og.cta': 'OG 자격 신청하기',
    'og.note': '출시 전 웨이트리스트 신청자에게만 제공',

    // Ambassador
    'ambassador.badge': '준비 중',
    'ambassador.title': 'Wall 앰배서더가 되세요',
    'ambassador.subtitle': 'The Wall은 캠퍼스별로 성장합니다. 앰배서더는 첫 대화를 시작하고 — Wall이 어떻게 될지 만들어 갑니다.',
    'ambassador.getTitle': '앰배서더가 받는 것',
    'ambassador.get1': '눈에 띄는 앰배서더 배지',
    'ambassador.get2': '새 기능 우선 접근',
    'ambassador.get3': '비공개 앰배서더 피드',
    'ambassador.get4': '스레드 시작 및 고정 권한',
    'ambassador.get5': '캠퍼스별 테마와 규칙에 대한 발언권',
    'ambassador.get6': 'Early Builders Wall에 이름 등재',
    'ambassador.doTitle': '앰배서더가 하는 일',
    'ambassador.do1': '신뢰할 수 있는 친구 초대',
    'ambassador.do2': '진정한 대화 시작',
    'ambassador.do3': '초기 Wall을 활기차게 만들기',
    'ambassador.howTitle': '앰배서더가 되는 방법',
    'ambassador.how1': '일찍 가입하기',
    'ambassador.how2': '활발하게 활동하기',
    'ambassador.how3': '다른 사람들 데려오기',
    'ambassador.note': '앰배서더는 관리자가 아닙니다. 그들은 빌더입니다.',
    'ambassador.tagline': '지위는 얻는 것입니다. 영향력은 진짜입니다.',

    // Universities
    'universities.title': '최고의 대학에서 런칭',
    'universities.subtitle': '전 세계 최고의 학교 학생들과 함께하세요',
    'universities.students': '학생',

    // Referral
    'referral.title': '친구 초대하고, 보상 받기',
    'referral.subtitle': '동기들에게 The Wall을 공유하고 특별 혜택을 받으세요',
    'referral.reward1.title': '무료 프리미엄 1개월',
    'referral.reward1.desc': '가입한 친구마다',
    'referral.reward2.title': 'OG 월 멤버',
    'referral.reward2.desc': '영구 특별 배지',
    'referral.cta': '초대 시작하기',

    // CTA
    'cta.title': 'The Wall에 합류할 준비가 되셨나요?',
    'cta.subtitle': '지금 신청하고 캠퍼스 커뮤니티에 가장 먼저 접근하세요',
    'cta.button': '웨이트리스트 신청',

    // Footer
    'footer.tagline': '대학생을 위한 익명 소셜 네트워크. 당신의 목소리가 중요합니다.',
    'footer.product': '제품',
    'footer.team': '팀',
    'footer.legal': '법적 고지',
    'footer.aboutUs': '소개',
    'footer.safety': '안전',
    'footer.privacy': '개인정보 처리방침',
    'footer.terms': '이용약관',
    'footer.guidelines': '커뮤니티 가이드라인',
    'footer.copyright': '© 2024 The Wall (다왈). 전 세계 학생들을 위해 💜로 만들었습니다.',
  },
  zh: {
    // Navbar
    'nav.features': '功能',
    'nav.community': '社区',
    'nav.universities': '大学',
    'nav.joinWaitlist': '加入等候名单',

    // Hero
    'hero.badge': '学生创造，为学生服务',
    'hero.title1': '你的校园。',
    'hero.title2': '你的声音。',
    'hero.title3': '你的墙。',
    'hero.description': '专属于大学生的匿名社交网络。分享想法，获取建议，与校园社区联系 — 完全匿名。',
    'hero.cta': '加入等候名单',
    'hero.learnMore': '了解更多',
    'hero.studentsWorldwide': '全球学生',
    'hero.universities': '大学',
    'hero.anonymous': '匿名',

    // Waitlist
    'waitlist.title': '加入等候名单',
    'waitlist.subtitle': '成为第一个知道 The Wall 在你的大学上线的人！',
    'waitlist.counter': '已在等待的学生',
    'waitlist.counting': '持续增长中...',
    'waitlist.placeholder': '输入你的学校邮箱',
    'waitlist.button': '加入名单',
    'waitlist.joining': '加入中...',
    'waitlist.success': '你已加入名单！上线时我们会通知你。',
    'waitlist.errorEmpty': '请输入你的邮箱地址',
    'waitlist.errorInvalid': '请输入有效的邮箱地址',

    // Features
    'features.title': '学生们喜爱 The Wall 的原因',
    'features.subtitle': '为校园生活打造的实用功能',
    'features.anonymous.title': '100% 匿名',
    'features.anonymous.desc': '你的身份始终受到保护。自由发言，真诚分享。',
    'features.verified.title': '大学认证',
    'features.verified.desc': '只有通过学校邮箱验证的学生才能加入。保持社区的真实性。',
    'features.campus.title': '查看任何校园',
    'features.campus.desc': '浏览全国任何大学的帖子。高级版解锁全球大学！',
    'features.language.title': '多语言',
    'features.language.desc': '按语言筛选帖子 — 中文、英文、韩文等。你的动态，你的语言。',
    'features.advice.title': '学长学姐建议',
    'features.advice.desc': '从有经验的学长学姐那里获得真实建议。选哪个教授，去哪吃饭，避免什么。',
    'features.hottakes.title': '校园热议',
    'features.hottakes.desc': '分享观点，讨论八卦，或者吐槽早八课程。',

    // Competition
    'competition.title': 'The Wall 的优势',
    'competition.subtitle': '看看我们与其他选择的对比',
    'competition.feature': '功能',
    'competition.anonymous': '匿名发帖',
    'competition.nationwide': '查看全国校园',
    'competition.verification': '大学认证',
    'competition.multilang': '多语言筛选',
    'competition.clean': '整洁的动态',
    'competition.global': '全球大学访问',

    // OG Promo
    'og.title': '成为 OG 墙成员',
    'og.subtitle': '现在加入等候名单，解锁专属创始成员福利',
    'og.badge': '限时',
    'og.cardTitle': 'OG 创始者身份',
    'og.cardSubtitle': '面向早期等候名单成员',
    'og.free': '免费',
    'og.forYear': '一年',
    'og.perk1': '解锁全部高级功能',
    'og.perk2': '无限私信',
    'og.perk3': '永久 OG 徽章',
    'og.perk4': '查看全球任何大学',
    'og.perk5': '包含所有表情包',
    'og.perk6': '优先体验新功能',
    'og.cta': '领取 OG 身份',
    'og.note': '仅限上线前加入等候名单的用户',

    // Ambassador
    'ambassador.badge': '即将推出',
    'ambassador.title': '成为墙大使',
    'ambassador.subtitle': 'The Wall 逐个校园发展。大使帮助点燃第一批对话 — 并塑造墙的未来。',
    'ambassador.getTitle': '大使获得什么',
    'ambassador.get1': '显眼的大使徽章',
    'ambassador.get2': '优先体验新功能',
    'ambassador.get3': '私密大使动态',
    'ambassador.get4': '发起和置顶帖子的权限',
    'ambassador.get5': '参与校园主题和规则制定',
    'ambassador.get6': '在 Early Builders Wall 上留名',
    'ambassador.doTitle': '大使做什么',
    'ambassador.do1': '邀请值得信赖的朋友',
    'ambassador.do2': '发起真实对话',
    'ambassador.do3': '帮助早期的墙充满活力',
    'ambassador.howTitle': '如何成为大使',
    'ambassador.how1': '尽早加入',
    'ambassador.how2': '积极活跃',
    'ambassador.how3': '带动他人加入',
    'ambassador.note': '大使不是管理员。他们是建设者。',
    'ambassador.tagline': '地位靠争取。影响力是真实的。',

    // Universities
    'universities.title': '首批上线的顶尖大学',
    'universities.subtitle': '与全球顶尖学校的学生一起加入',
    'universities.students': '学生',

    // Referral
    'referral.title': '邀请朋友，获得奖励',
    'referral.subtitle': '与同学分享 The Wall，解锁专属福利',
    'referral.reward1.title': '免费高级版一个月',
    'referral.reward1.desc': '每邀请一位朋友',
    'referral.reward2.title': 'OG 墙成员',
    'referral.reward2.desc': '永久专属徽章',
    'referral.cta': '开始邀请',

    // CTA
    'cta.title': '准备好加入 The Wall 了吗？',
    'cta.subtitle': '立即注册，率先访问你的校园社区',
    'cta.button': '加入等候名单',

    // Footer
    'footer.tagline': '大学生专属匿名社交网络。你的声音很重要。',
    'footer.product': '产品',
    'footer.team': '团队',
    'footer.legal': '法律',
    'footer.aboutUs': '关于我们',
    'footer.safety': '安全',
    'footer.privacy': '隐私政策',
    'footer.terms': '服务条款',
    'footer.guidelines': '社区准则',
    'footer.copyright': '© 2024 The Wall (다왈). 用 💜 为全球学生打造。',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export const languageNames: Record<Language, string> = {
  en: 'English',
  ko: '한국어',
  zh: '中文',
};
