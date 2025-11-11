# NihongoLearn - Nền tảng học tiếng Nhật với AI

Một trang web học tiếng Nhật hiện đại được xây dựng bằng **Next.js 16** (App Router), **TailwindCSS 4**, và **Framer Motion**.

## Tính năng chính

- **Landing Page**: Trang giới thiệu với hero section và các tính năng nổi bật
- **Login Page**: Trang đăng nhập với hỗ trợ OAuth (Google, Facebook)
- **Survey Page**: Khảo sát trình độ và mục tiêu học tập để cá nhân hóa trải nghiệm
- **Home Page**: Hiển thị khóa học được đề xuất dựa trên khảo sát
- **Course Detail Page**: Trang chi tiết khóa học với danh sách video
- **AI Chatbot**: Trợ lý học tập AI hỗ trợ 24/7 (mock)
- **Responsive Design**: Giao diện thân thiện trên mọi thiết bị
- **Smooth Animations**: Hiệu ứng mượt mà với Framer Motion

## Cấu trúc dự án

```
e-learning/
├── app/
│   ├── components/         # Các components tái sử dụng
│   │   ├── Navbar.tsx      # Thanh điều hướng
│   │   ├── Footer.tsx      # Footer
│   │   ├── Layout.tsx      # Layout wrapper
│   │   ├── CourseCard.tsx  # Component hiển thị khóa học
│   │   └── ChatbotWidget.tsx # Widget chatbot AI
│   ├── lib/
│   │   └── mockData.js     # Dữ liệu mock
│   ├── page.tsx            # Landing page (/)
│   ├── login/
│   │   └── page.tsx        # Login page
│   ├── survey/
│   │   └── page.tsx        # Survey page
│   ├── home/
│   │   └── page.tsx        # Home page (dashboard)
│   ├── course/
│   │   └── [id]/
│   │       └── page.tsx    # Course detail page (dynamic route)
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles với TailwindCSS
└── package.json
```

## Công nghệ sử dụng

- **Next.js 16.0.1**: Framework React với App Router
- **React 19.2.0**: Thư viện UI
- **TailwindCSS 4**: CSS framework
- **Framer Motion 11**: Animation library
- **TypeScript**: Type safety

## Cài đặt và chạy dự án

### 1. Cài đặt dependencies

```bash
npm install
```

Lưu ý: Nếu gặp lỗi khi cài đặt, hãy thử:

```bash
rm -rf node_modules package-lock.json
npm install
```

### 2. Chạy development server

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

### 3. Build cho production

```bash
npm run build
npm start
```

## Các trang và route

| Route | Mô tả |
|-------|-------|
| `/` | Landing page - Trang giới thiệu |
| `/login` | Trang đăng nhập |
| `/survey` | Khảo sát trình độ và mục tiêu |
| `/home` | Dashboard với danh sách khóa học |
| `/course/[id]` | Chi tiết khóa học (VD: /course/1) |

## Flow người dùng

1. **Landing Page** (`/`): Người dùng xem giới thiệu và click "Get Started"
2. **Login** (`/login`): Đăng nhập (mock, nhập email/password bất kỳ)
3. **Survey** (`/survey`): Chọn trình độ và mục tiêu học tập
4. **Home** (`/home`): Xem khóa học được đề xuất, tương tác với chatbot
5. **Course Detail** (`/course/[id]`): Xem chi tiết và danh sách video

## Màu sắc chủ đạo

- **Primary**: Blue (#3b82f6 - blue-500)
- **Background**: White (#ffffff) và Blue-50 (#f0f9ff)
- **Text**: Gray-900 (#111827) và Gray-600 (#4b5563)

## Mock Data

Dữ liệu mock bao gồm:
- **6 khóa học** với các trình độ khác nhau (Beginner, N5, N4, N3, N2)
- Mỗi khóa học có video, thumbnail, instructor, duration
- Survey questions cho level và goals
- Chatbot responses mẫu

## Tính năng nâng cao có thể mở rộng

- [ ] Kết nối backend API thực
- [ ] Tích hợp OpenAI cho chatbot thực
- [ ] Video player tích hợp
- [ ] Hệ thống quiz và bài tập
- [ ] Tracking tiến độ học tập
- [ ] Payment integration
- [ ] User profile và settings
- [ ] Certificate generation
- [ ] Social features (comments, ratings)

## Lưu ý

- Dự án hiện sử dụng **mock data** và **fake authentication**
- Chatbot responses là random từ danh sách có sẵn
- LocalStorage được dùng để lưu survey results
- Chưa có backend, tất cả logic đều ở client-side

## License

MIT

## Liên hệ

Nếu có thắc mắc hoặc góp ý, vui lòng tạo issue hoặc liên hệ qua email.

---

**NihongoLearn** - Cùng bạn chinh phục tiếng Nhật 🇯🇵
