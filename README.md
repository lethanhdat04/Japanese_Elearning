# 🎌 WabiSabi - Nền tảng học tiếng Nhật với AI

Nền tảng e-learning hiện đại giúp bạn học tiếng Nhật dễ dàng với sự hỗ trợ của AI, video bài giảng, âm nhạc Nhật Bản, và theo dõi tiến độ học tập.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38bdf8?style=flat-square&logo=tailwind-css)
![Groq](https://img.shields.io/badge/Groq-AI-orange?style=flat-square)

## ✨ Tính năng

### 🎓 Học tập
- **Khóa học đa dạng**: 6 khóa học từ N5 đến N2, phù hợp mọi trình độ
- **Video bài giảng**: Học qua video YouTube với nội dung dễ hiểu
- **AI Chatbot**: Trợ lý AI với Groq (Llama 3.1), hỗ trợ 24/7, trả lời câu hỏi về bài học
- **Video-Specific Chatbot**: Chatbot riêng cho từng video, hiểu context bài học
- **Progress Tracking**: Theo dõi tiến độ với checkmark tự động khi hoàn thành video
- **Progress Bar**: Thanh tiến độ hiển thị % hoàn thành khóa học

### 🎵 Âm nhạc
- **YouTube Music Style**: 12 bài hát Nhật (J-Pop, J-Rock, Anime) để luyện nghe
- **Floating Music Player**: Player nổi với controls đầy đủ (play/pause, skip, volume)
- **Expandable Player**: Full-screen modal với giao diện đẹp
- **Bộ lọc thông minh**: Tìm bài hát theo thể loại, trình độ (N5-N2), từ khóa
- **Global State**: React Context API cho music player toàn ứng dụng

### 👤 Quản lý người dùng
- **Sign Up**: Đăng ký tài khoản với password strength meter
- **Login**: Đăng nhập với social OAuth (Google, Facebook)
- **Survey**: Khảo sát trình độ và mục tiêu học tập (multi-step, auto-advance)
- **Profile Dashboard**:
  - Thống kê học tập (courses, hours, score, medals)
  - Achievements với earned/unearned badges
  - Recent activity tracker
  - Editable user info

### 🤖 AI Features (Powered by Groq)
- **Context-Aware**: Chatbot hiểu ngữ cảnh từng bài học cụ thể
- **Lightning Fast**: Phản hồi siêu nhanh với Groq LPU™
- **Free**: Sử dụng Groq API miễn phí
- **Smart Responses**: Llama 3.1 8B Instant model

### 🎨 UI/UX
- **Modern Design**: Gradient effects (blue → purple → pink)
- **Glassmorphism**: Backdrop blur, transparency effects
- **Animations**: Smooth transitions với Framer Motion
- **Responsive**: Hoạt động mượt trên mobile, tablet, desktop
- **Dark Accents**: Professional color scheme

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS 4
- **Animations**: Framer Motion
- **AI**: Groq API (Llama 3.1 8B Instant)
- **Icons**: React Icons (Feather Icons)
- **State Management**: React Context API
- **Storage**: LocalStorage (progress, user data)

## 📦 Cài đặt

### Prerequisites

- Node.js 18+
- npm hoặc yarn
- Groq API Key (miễn phí)

### Bước 1: Clone repository

```bash
git clone https://github.com/your-username/wabisabi-japanese-learning.git
cd wabisabi-japanese-learning
```

### Bước 2: Cài đặt dependencies

```bash
npm install
```

### Bước 3: Setup Environment Variables

1. **Lấy Groq API Key** (miễn phí):
   - Truy cập: https://console.groq.com/keys
   - Đăng ký/đăng nhập tài khoản
   - Click "Create API Key"
   - Copy key (dạng: `gsk_xxxxxxxxxxxxxxxx`)

2. **Tạo file `.env.local`**:

```bash
cp .env.example .env.local
```

3. **Thêm API key vào `.env.local`**:

```env
GROQ_API_KEY=gsk_your_actual_groq_api_key_here
```

⚠️ **Quan trọng**:
- File `.env.local` đã được thêm vào `.gitignore`, không bao giờ commit file này
- Không share API key với người khác
- Khi deploy, config environment variables trên hosting platform

### Bước 4: Chạy development server

```bash
npm run dev
```

Mở trình duyệt: **http://localhost:3000**

## 📁 Cấu trúc Project

```
e-learning/
├── app/
│   ├── api/
│   │   └── chat/              # API route cho Groq chatbot
│   │       └── route.ts
│   ├── components/
│   │   ├── ChatbotWidget.tsx  # Chatbot trang chủ (blue theme)
│   │   ├── VideoChatbot.tsx   # Chatbot video (purple theme)
│   │   ├── MusicPlayer.tsx    # Global music player + Context
│   │   ├── VideoPlayer.tsx    # Video player với completion tracking
│   │   ├── Navbar.tsx         # Navigation với Music link
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   ├── CourseCard.tsx
│   │   └── Providers.tsx      # MusicPlayerProvider wrapper
│   ├── course/[courseId]/     # Dynamic routes
│   │   ├── page.tsx           # Course detail + progress
│   │   └── video/[videoId]/
│   │       └── page.tsx       # Video player page
│   ├── home/                  # Home dashboard
│   ├── login/                 # Login page
│   ├── signup/                # Sign up page
│   ├── profile/               # User profile + stats
│   ├── music/                 # Music library
│   ├── survey/                # Multi-step survey
│   ├── lib/
│   │   └── mockData.js        # Mock data (courses, videos, music)
│   ├── layout.tsx             # Root layout với Providers
│   ├── page.tsx               # Landing page
│   └── globals.css
├── .env.local                 # Environment variables (GIT IGNORE)
├── .env.example               # Template
├── .gitignore
├── package.json
├── tailwind.config.ts
├── DEPLOY.md                  # 📘 Hướng dẫn deploy chi tiết
└── README.md
```

## 🎯 Flow người dùng

1. **Landing Page** (`/`) → Xem giới thiệu
2. **Sign Up** (`/signup`) → Đăng ký tài khoản
3. **Survey** (`/survey`) → Khảo sát trình độ, mục tiêu
4. **Home** (`/home`) → Dashboard với khóa học
5. **Course Detail** (`/course/[id]`) → Xem chi tiết, progress bar
6. **Video Page** (`/course/[id]/video/[videoId]`) → Học video + chatbot
7. **Music** (`/music`) → Nghe nhạc Nhật để luyện nghe
8. **Profile** (`/profile`) → Xem stats, achievements

## 🎨 Design System

### Colors
- **Primary**: Blue (#3b82f6) → Purple (#a855f7) → Pink (#ec4899)
- **Background**: Gradient from-purple-50 via-pink-50 to-blue-50
- **Text**: Gray-900 (headings), Gray-600 (body)
- **Success**: Green-500 (completed videos)
- **Purple Accent**: Video chatbot theme

### Components Style
- **Cards**: Rounded-2xl, shadow-lg, hover:shadow-2xl
- **Buttons**: Rounded-xl, gradient backgrounds
- **Glassmorphism**: bg-white/80, backdrop-blur-xl
- **Animations**: whileHover, AnimatePresence

## 🔧 Scripts

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start

# Lint
npm run lint
```

## 🚀 Deploy

Xem hướng dẫn chi tiết: **[DEPLOY.md](./DEPLOY.md)**

### Quick Deploy với Vercel (Recommended)

1. Push code lên GitHub
2. Kết nối với Vercel: https://vercel.com/new
3. **Thêm Environment Variable**:
   - Key: `GROQ_API_KEY`
   - Value: `gsk_your_key`
4. Deploy!

### Environment Variables khi Deploy

**Vercel / Netlify / Railway:**
- Vào Settings → Environment Variables
- Thêm: `GROQ_API_KEY=gsk_your_key`
- Redeploy

**⚠️ KHÔNG BAO GIỜ:**
- Commit file `.env.local` lên Git
- Để API key thật trong `.env.example`
- Share API key công khai

## 📊 Mock Data

### Courses (6 khóa)
- Tiếng Nhật cơ bản (N5) - 12 videos
- Hiragana & Katakana (N5)
- Kanji cho người mới (N5)
- JLPT N5 Preparation
- Văn hóa Nhật Bản (N4)
- Giao tiếp hàng ngày (N4)

### Music (12 bài)
- J-Pop: Lemon (Kenshi Yonezu), Pretender (Official HIGE DANdism)
- Anime: Gurenge (LiSA), Unravel (TK), Cruel Angel's Thesis
- J-Rock: Koi (Gen Hoshino), 3月9日 (Remioromen)

## 🤖 Chatbot Features

### Home Chatbot (Blue)
- Trợ lý học tiếng Nhật tổng quát
- Trả lời về ngữ pháp, từ vựng, văn hóa
- Floating widget ở góc phải

### Video Chatbot (Purple)
- Context-aware: Hiểu nội dung bài học cụ thể
- Knowledge base từ video metadata
- Quick questions
- Typing indicator

### API Integration
- Groq API (Llama 3.1 8B Instant)
- Server-side API route (`/api/chat`)
- Error handling + loading states
- Rate limit: 30 req/min (free tier)

## 🔐 Bảo mật

- ✅ API key trên server (không expose ra client)
- ✅ `.env.local` trong `.gitignore`
- ✅ Environment variables trên hosting platform
- ✅ No sensitive data in mock data
- ⚠️ Nên implement rate limiting cho production

## 📱 Responsive Design

- **Mobile**: Hamburger menu, stacked layouts
- **Tablet**: 2-column grids
- **Desktop**: Full layouts với sidebar
- **4K**: Max-width containers (7xl)

## 🎓 Learning Path

### Beginner (N5)
1. Tiếng Nhật cơ bản
2. Hiragana & Katakana
3. Kanji cho người mới
4. JLPT N5 Preparation

### Intermediate (N4-N3)
5. Văn hóa Nhật Bản
6. Giao tiếp hàng ngày

## 🤝 Contributing

Contributions welcome!

1. Fork project
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request

## 📝 Roadmap

- [ ] Real-time chat với instructor
- [ ] Quiz system với grading
- [ ] Certificate generation
- [ ] Payment integration (Stripe)
- [ ] Mobile app (React Native)
- [ ] Community features (comments, forum)
- [ ] Flashcards system
- [ ] Speech recognition practice
- [ ] Live class scheduling

## 🐛 Known Issues

- Music player: Progress simulation (không dùng real audio API)
- Video completion: Manual marking (không track real watch time)
- Auth: Mock authentication (cần backend thật)

## 📚 Tài liệu

- [Next.js Docs](https://nextjs.org/docs)
- [Groq API Docs](https://console.groq.com/docs)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Deploy Guide](./DEPLOY.md)

## 📞 Support

- 🐛 Issues: [GitHub Issues](https://github.com/your-username/wabisabi-japanese-learning/issues)
- 📧 Email: your.email@example.com
- 💬 Discord: [Join our server]

## 📄 License

MIT License - feel free to use for your own projects!

## 🙏 Credits

- **Design Inspiration**: Duolingo, Coursera, YouTube Music
- **AI**: Groq Cloud for lightning-fast inference
- **Icons**: Feather Icons via React Icons
- **Fonts**: Geist Sans, Geist Mono
- **Music Data**: Mock data inspired by popular J-Pop songs

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

**WabiSabi** - Cùng bạn chinh phục tiếng Nhật 🇯🇵🤖✨

Made with ❤️ by [Your Name]
