// Mock data for the e-learning platform

export const courses = [
  {
    id: 1,
    title: "Tiếng Nhật cơ bản cho người mới bắt đầu",
    description: "Học Hiragana, Katakana và các câu giao tiếp cơ bản hàng ngày",
    level: "Beginner",
    thumbnail: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=400",
    instructor: "Tanaka Sensei",
    duration: "8 tuần",
    lessonsCount: 24,
    videos: [
      {
        id: 1,
        title: "Bài 1: Giới thiệu về Hiragana",
        duration: "15:30",
        thumbnail: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300",
        videoUrl: "https://www.youtube.com/embed/6p9Il_j0zjc",
        description: "Trong bài học này, chúng ta sẽ tìm hiểu về bảng chữ cái Hiragana - hệ thống chữ viết cơ bản nhất trong tiếng Nhật.",
        keyPoints: [
          "Hiragana là gì và tại sao cần học?",
          "Cấu trúc của bảng Hiragana",
          "Cách phát âm đúng các ký tự",
          "Tips ghi nhớ Hiragana hiệu quả"
        ],
        chatbotContext: {
          topic: "Hiragana cơ bản",
          knowledgeBase: [
            { q: "Hiragana là gì", a: "Hiragana là một trong ba hệ thống chữ viết của tiếng Nhật, bao gồm 46 ký tự cơ bản. Nó được dùng để viết từ thuần Nhật và các trợ từ ngữ pháp." },
            { q: "có bao nhiêu chữ Hiragana", a: "Có 46 ký tự Hiragana cơ bản, cộng thêm các ký tự đặc biệt như dakuten và handakuten tạo thành khoảng 71 ký tự." },
            { q: "cách học Hiragana", a: "Cách tốt nhất là chia nhỏ thành các nhóm 5-10 ký tự, luyện viết mỗi ngày, và thực hành đọc các từ đơn giản. Bạn có thể xem lại phần 05:30 của video để biết tips chi tiết." },
            { q: "khó không", a: "Hiragana là hệ thống chữ viết dễ nhất trong tiếng Nhật! Với luyện tập đều đặn, bạn có thể thuộc trong 1-2 tuần." },
          ]
        }
      },
      {
        id: 2,
        title: "Bài 2: Học Hiragana - Phần A-KO",
        duration: "22:15",
        thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Học chi tiết 15 ký tự Hiragana đầu tiên từ A đến KO với cách viết và phát âm chuẩn.",
        keyPoints: [
          "Học 5 ký tự nguyên âm: あ い う え お",
          "Học hàng K: か き く け こ",
          "Luyện viết và phát âm",
          "Từ vựng mẫu với các ký tự đã học"
        ],
        chatbotContext: {
          topic: "Hiragana A-KO",
          knowledgeBase: [
            { q: "viết chữ あ", a: "Chữ あ (a) viết bằng 3 nét. Bắt đầu từ nét cong bên trái, sau đó nét ngang ở giữa, và cuối cùng là nét cong bên phải. Xem lại phần 08:15 của video để thấy demo chi tiết." },
            { q: "か đọc như thế nào", a: "か đọc là 'ka', phát âm tương tự như 'ca' trong tiếng Việt. Chú ý không được nhấn mạnh quá." },
            { q: "phân biệt き và さ", a: "き (ki) có 4 nét và phần dưới cong về bên phải. さ (sa) có 3 nét và đuôi thẳng hơn. Video ở phút 15:20 có so sánh chi tiết hai chữ này." },
            { q: "từ vựng", a: "Một số từ đơn giản dùng chữ đã học: あか (aka - màu đỏ), いえ (ie - nhà), かお (kao - khuôn mặt). Danh sách đầy đủ ở phút 20:00." },
          ]
        }
      },
      {
        id: 3,
        title: "Bài 3: Học Hiragana - Phần SA-TO",
        duration: "18:45",
        thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300",
        videoUrl: "https://www.youtube.com/embed/6p9Il_j0zjc",
        description: "Tiếp tục với các ký tự Hiragana từ hàng SA đến TO, cùng các bài tập thực hành.",
        keyPoints: [
          "Học hàng S: さ し す せ そ",
          "Học hàng T: た ち つ て と",
          "Luyện kết hợp với các ký tự đã học",
          "Bài tập đọc và viết"
        ],
        chatbotContext: {
          topic: "Hiragana SA-TO",
          knowledgeBase: [
            { q: "し và つ", a: "し (shi) phát âm như 'shi' không phải 'si'. つ (tsu) phát âm như 'tsu/xu', đây là âm đặc trưng của tiếng Nhật. Video ở 06:30 có hướng dẫn phát âm." },
            { q: "ち khác gì", a: "ち (chi) phát âm là 'chi' chứ không phải 'ti'. Đây là một trong những âm cần chú ý khi học tiếng Nhật." },
            { q: "bài tập", a: "Bạn nên làm bài tập ở phút 16:00 của video, gồm: viết mỗi chữ 10 lần, đọc các từ mẫu, và làm quiz nhận diện." },
          ]
        }
      },
    ],
  },
  {
    id: 2,
    title: "Luyện thi JLPT N5",
    description: "Chuẩn bị toàn diện cho kỳ thi JLPT N5 với đề thi thử và bài giảng chi tiết",
    level: "N5",
    thumbnail: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400",
    instructor: "Yamamoto Sensei",
    duration: "12 tuần",
    lessonsCount: 36,
    videos: [
      {
        id: 1,
        title: "Bài 1: Tổng quan kỳ thi JLPT N5",
        duration: "10:20",
        thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300",
      },
      {
        id: 2,
        title: "Bài 2: Ngữ pháp cơ bản N5 - Phần 1",
        duration: "25:30",
        thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300",
      },
      {
        id: 3,
        title: "Bài 3: Từ vựng N5 - Chủ đề gia đình",
        duration: "20:15",
        thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300",
      },
    ],
  },
  {
    id: 3,
    title: "Hội thoại tiếng Nhật giao tiếp hàng ngày",
    description: "Thực hành các tình huống giao tiếp thực tế: mua sắm, nhà hàng, đi du lịch",
    level: "N4",
    thumbnail: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400",
    instructor: "Sato Sensei",
    duration: "10 tuần",
    lessonsCount: 30,
    videos: [
      {
        id: 1,
        title: "Bài 1: Giao tiếp tại nhà hàng",
        duration: "18:20",
        thumbnail: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=300",
      },
      {
        id: 2,
        title: "Bài 2: Mua sắm tại cửa hàng tiện lợi",
        duration: "16:45",
        thumbnail: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=300",
      },
    ],
  },
  {
    id: 4,
    title: "Luyện thi JLPT N3",
    description: "Chinh phục kỳ thi JLPT N3 với phương pháp học hiện đại và hiệu quả",
    level: "N3",
    thumbnail: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400",
    instructor: "Takahashi Sensei",
    duration: "16 tuần",
    lessonsCount: 48,
    videos: [
      {
        id: 1,
        title: "Bài 1: Chiến lược làm bài thi N3",
        duration: "22:10",
        thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300",
      },
    ],
  },
  {
    id: 5,
    title: "Kanji thực chiến",
    description: "Học và ghi nhớ Kanji một cách hiệu quả với phương pháp học thông minh",
    level: "N4",
    thumbnail: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400",
    instructor: "Nakamura Sensei",
    duration: "14 tuần",
    lessonsCount: 42,
    videos: [
      {
        id: 1,
        title: "Bài 1: Phương pháp học Kanji hiệu quả",
        duration: "15:00",
        thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300",
      },
    ],
  },
  {
    id: 6,
    title: "Tiếng Nhật trong công việc",
    description: "Học tiếng Nhật chuyên ngành để làm việc tại các công ty Nhật Bản",
    level: "N2",
    thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400",
    instructor: "Suzuki Sensei",
    duration: "20 tuần",
    lessonsCount: 60,
    videos: [
      {
        id: 1,
        title: "Bài 1: Giao tiếp trong môi trường văn phòng",
        duration: "24:30",
        thumbnail: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300",
      },
    ],
  },
];

export const surveyQuestions = {
  levels: ["Beginner", "N5", "N4", "N3", "N2", "N1"],
  goals: [
    "Giao tiếp hàng ngày",
    "Thi JLPT",
    "Du học Nhật Bản",
    "Làm việc tại Nhật",
    "Đọc truyện manga/novel",
    "Xem anime không phụ đề",
  ],
};

export const chatbotResponses = [
  "Tôi có thể giúp gì cho bạn hôm nay?",
  "Đây là một câu hỏi hay! Hãy để tôi giải thích...",
  "Bạn có thể xem lại phần video về chủ đề này ở bài học số 3.",
  "Rất tốt! Bạn đang tiến bộ rất nhanh!",
  "Hãy thử làm bài tập thực hành để củng cố kiến thức nhé!",
];
