import { useLanguage, type Language } from '../context/LanguageContext';

interface Post {
  avatar: string;
  text: string;
  likes: number;
  comments: number;
  time: string;
}

interface SchoolConfig {
  name: string;
  emoji: string;
  mascot: string;
  languages: string[];
  posts: Post[];
}

const schoolConfigs: Record<Language, SchoolConfig> = {
  en: {
    name: 'UW Seattle',
    emoji: '🏫',
    mascot: 'Husky',
    languages: ['EN', '한국어', '中文'],
    posts: [
      {
        avatar: '🦆',
        text: "anyone know if the CSE building is open late for finals week? desperately need a quiet spot 😭",
        likes: 42,
        comments: 18,
        time: '2h',
      },
      {
        avatar: '🌟',
        text: "hot take: UW dining hall food actually slaps if you know what to order 🔥",
        likes: 128,
        comments: 45,
        time: '4h',
      },
      {
        avatar: '✨',
        text: "that feeling when you finally finish your CS project at 3am... pain but also relief",
        likes: 89,
        comments: 23,
        time: '5h',
      },
      {
        avatar: '🎯',
        text: "looking for study group for MATH 126, anyone down to meet at Ode?",
        likes: 34,
        comments: 12,
        time: '6h',
      },
    ],
  },
  ko: {
    name: '서울대학교',
    emoji: '🏛️',
    mascot: '관악인',
    languages: ['한국어', 'EN', '中文'],
    posts: [
      {
        avatar: '🦁',
        text: "중앙도서관 자리 잡으려면 몇시에 가야해요? ㅠㅠ 시험기간이라 미치겠음",
        likes: 156,
        comments: 42,
        time: '1시간',
      },
      {
        avatar: '⭐',
        text: "학식 순대국밥 진짜 맛있음... 가성비 최고 👍",
        likes: 203,
        comments: 67,
        time: '3시간',
      },
      {
        avatar: '🌸',
        text: "선배님들 전공 선택 어떻게 하셨어요? 경영 vs 경제 고민중입니다",
        likes: 78,
        comments: 31,
        time: '4시간',
      },
      {
        avatar: '🎓',
        text: "관악산 등산 같이 하실 분? 다음주 토요일 아침에 가려고요",
        likes: 45,
        comments: 19,
        time: '5시간',
      },
    ],
  },
  zh: {
    name: '香港中文大學',
    emoji: '🏯',
    mascot: '中大人',
    languages: ['中文', 'EN', '한국어'],
    posts: [
      {
        avatar: '🐉',
        text: "图书馆今晚开到几点？期末周真的太累了 😫",
        likes: 134,
        comments: 38,
        time: '1小时',
      },
      {
        avatar: '🌙',
        text: "范克廉楼的奶茶店真的好喝！推荐珍珠奶茶 🧋",
        likes: 187,
        comments: 52,
        time: '2小时',
      },
      {
        avatar: '📚',
        text: "有人想一起组队参加商业案例比赛吗？需要找队友",
        likes: 67,
        comments: 24,
        time: '4小时',
      },
      {
        avatar: '🎭',
        text: "下学期选课有什么建议吗？想选一些轻松的通识课",
        likes: 92,
        comments: 41,
        time: '5小时',
      },
    ],
  },
};

export function PhoneMockup() {
  const { language } = useLanguage();
  const config = schoolConfigs[language];

  return (
    <div className="phone-mockup">
      <div className="phone">
        <div className="phone-screen">
          <div className="phone-header">
            <h3>{config.emoji} {config.name}</h3>
            <div className="language-tags">
              {config.languages.map((lang, index) => (
                <span key={index} className="lang-tag">{lang}</span>
              ))}
            </div>
          </div>
          <div className="phone-content">
            {config.posts.map((post, index) => (
              <div key={index} className="post-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="post-header">
                  <div className="post-avatar">{post.avatar}</div>
                  <div className="post-meta">
                    <strong>Anonymous {config.mascot}</strong> · {post.time}
                  </div>
                </div>
                <div className="post-text">{post.text}</div>
                <div className="post-actions">
                  <span>💜 {post.likes}</span>
                  <span>💬 {post.comments}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
