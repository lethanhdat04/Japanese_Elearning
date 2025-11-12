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
        description:
          "Trong bài học này, chúng ta sẽ tìm hiểu về bảng chữ cái Hiragana - hệ thống chữ viết cơ bản nhất trong tiếng Nhật.",
        keyPoints: [
          "Hiragana là gì và tại sao cần học?",
          "Cấu trúc của bảng Hiragana",
          "Cách phát âm đúng các ký tự",
          "Tips ghi nhớ Hiragana hiệu quả",
        ],
        chatbotContext: {
          topic: "Hiragana cơ bản",
          knowledgeBase: [
            {
              q: "Hiragana là gì",
              a: "Hiragana là một trong ba hệ thống chữ viết của tiếng Nhật, gồm 46 ký tự cơ bản.",
            },
            {
              q: "có bao nhiêu chữ Hiragana",
              a: "Có 46 ký tự cơ bản và khoảng 71 nếu tính cả biến thể.",
            },
            {
              q: "cách học Hiragana",
              a: "Chia nhỏ bảng chữ, luyện viết mỗi ngày, đọc từ mẫu và ôn tập video phần 05:30.",
            },
          ],
        },
      },
      {
        id: 2,
        title: "Bài 2: Học Hiragana - Phần A-KO",
        duration: "22:15",
        thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description:
          "Học chi tiết 15 ký tự Hiragana đầu tiên từ A đến KO với cách viết và phát âm chuẩn.",
        keyPoints: [
          "Học 5 ký tự nguyên âm: あ い う え お",
          "Học hàng K: か き く け こ",
          "Luyện viết và phát âm",
          "Từ vựng mẫu với các ký tự đã học",
        ],
        chatbotContext: {
          topic: "Hiragana A-KO",
          knowledgeBase: [
            { q: "viết chữ あ", a: "Chữ あ (a) viết bằng 3 nét cơ bản." },
            { q: "か đọc như thế nào", a: "か đọc là 'ka', tương tự như 'ca' trong tiếng Việt." },
            {
              q: "từ vựng",
              a: "あか (aka - màu đỏ), いえ (ie - nhà), かお (kao - khuôn mặt).",
            },
          ],
        },
      },
      {
        id: 3,
        title: "Bài 3: Học Hiragana - Phần SA-TO",
        duration: "18:45",
        thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300",
        videoUrl: "https://www.youtube.com/embed/6p9Il_j0zjc",
        description:
          "Tiếp tục với các ký tự Hiragana từ hàng SA đến TO, cùng các bài tập thực hành.",
        keyPoints: [
          "Học hàng S: さ し す せ そ",
          "Học hàng T: た ち つ て と",
          "Luyện kết hợp với các ký tự đã học",
          "Bài tập đọc và viết",
        ],
        chatbotContext: {
          topic: "Hiragana SA-TO",
          knowledgeBase: [
            {
              q: "し và つ khác nhau thế nào",
              a: "し (shi) phát âm là 'shi', còn つ (tsu) là 'tsu' hoặc 'xu'.",
            },
            {
              q: "bài tập luyện",
              a: "Viết mỗi chữ 10 lần, đọc các từ mẫu và làm quiz nhận diện.",
            },
          ],
        },
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
        videoUrl: "https://www.youtube.com/embed/jlptn5_intro",
        description:
          "Giới thiệu cấu trúc bài thi JLPT N5, các phần thi chính và chiến lược học hiệu quả.",
        keyPoints: [
          "Cấu trúc đề thi N5",
          "Thời gian và cách tính điểm",
          "Các phần thi: Từ vựng, Ngữ pháp, Đọc hiểu, Nghe hiểu",
          "Chiến lược làm bài hiệu quả",
        ],
        chatbotContext: {
          topic: "Tổng quan JLPT N5",
          knowledgeBase: [
            { q: "JLPT N5 gồm mấy phần", a: "Gồm 4 phần chính: Từ vựng, Ngữ pháp, Đọc hiểu, Nghe hiểu." },
            { q: "thời gian làm bài", a: "Khoảng 105 phút tổng cộng, chia theo từng phần." },
          ],
        },
      },
      {
        id: 2,
        title: "Bài 2: Ngữ pháp cơ bản N5 - Phần 1",
        duration: "25:30",
        thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300",
        videoUrl: "https://www.youtube.com/embed/n5_grammar1",
        description:
          "Học các cấu trúc ngữ pháp nền tảng trong JLPT N5 như です, あります/います, và danh từ ghép.",
        keyPoints: [
          "Cấu trúc です và cách sử dụng",
          "Động từ あります và います",
          "Câu khẳng định, phủ định, nghi vấn",
          "Ví dụ và bài tập ứng dụng",
        ],
        chatbotContext: {
          topic: "Ngữ pháp N5 phần 1",
          knowledgeBase: [
            { q: "です dùng khi nào", a: "です dùng để kết thúc câu lịch sự, tương tự 'là' trong tiếng Việt." },
            { q: "phân biệt あります và います", a: "あります dùng cho vật vô tri, います dùng cho người/động vật." },
          ],
        },
      },
      {
        id: 3,
        title: "Bài 3: Từ vựng N5 - Chủ đề gia đình",
        duration: "20:15",
        thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300",
        videoUrl: "https://www.youtube.com/embed/n5_vocab_family",
        description:
          "Cùng học các từ vựng liên quan đến chủ đề gia đình và cách sử dụng chúng trong hội thoại.",
        keyPoints: [
          "Các danh từ về thành viên gia đình",
          "Cách xưng hô lịch sự",
          "Câu mẫu thường gặp trong giao tiếp",
          "Bài tập luyện nghe và nói",
        ],
        chatbotContext: {
          topic: "Từ vựng N5 - Gia đình",
          knowledgeBase: [
            { q: "từ cha mẹ tiếng Nhật", a: "父 (chichi) và 母 (haha). Khi nói lịch sự: お父さん, お母さん." },
            { q: "anh trai nói sao", a: "兄 (ani) – dùng khi nói về anh mình; お兄さん – dùng khi nói với người khác." },
          ],
        },
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
        videoUrl: "https://www.youtube.com/embed/japanese_restaurant",
        description:
          "Thực hành hội thoại cơ bản khi đi ăn ở nhà hàng tại Nhật: gọi món, hỏi giá, và thanh toán.",
        keyPoints: [
          "Mẫu câu gọi món ăn",
          "Từ vựng về món ăn và đồ uống",
          "Cách thanh toán lịch sự",
          "Bài tập đóng vai tình huống",
        ],
        chatbotContext: {
          topic: "Giao tiếp nhà hàng",
          knowledgeBase: [
            { q: "gọi món tiếng Nhật sao", a: "すみません、〜をください (Sumimasen, ... o kudasai)." },
            { q: "hỏi giá thế nào", a: "いくらですか？ (Ikura desu ka?) nghĩa là 'Bao nhiêu tiền?'" },
          ],
        },
      },
      {
        id: 2,
        title: "Bài 2: Mua sắm tại cửa hàng tiện lợi",
        duration: "16:45",
        thumbnail: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=300",
        videoUrl: "https://www.youtube.com/embed/japanese_conbini",
        description:
          "Luyện tập hội thoại và từ vựng thường dùng khi mua hàng tại cửa hàng tiện lợi.",
        keyPoints: [
          "Từ vựng về hàng hóa phổ biến",
          "Hỏi vị trí sản phẩm",
          "Cách thanh toán và cảm ơn",
          "Luyện phát âm tự nhiên",
        ],
        chatbotContext: {
          topic: "Mua sắm tại combini",
          knowledgeBase: [
            { q: "tôi muốn mua tiếng Nhật", a: "これをください (Kore o kudasai) nghĩa là 'Cho tôi cái này.'" },
            { q: "cảm ơn nhân viên", a: "ありがとう hoặc ありがとうございました khi kết thúc giao dịch." },
          ],
        },
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
        videoUrl: "https://www.youtube.com/embed/jlptn3_strategy",
        description:
          "Giới thiệu cấu trúc và mẹo làm bài thi JLPT N3 hiệu quả cho từng phần thi.",
        keyPoints: [
          "Cấu trúc đề thi N3",
          "Chiến lược phân bổ thời gian",
          "Mẹo tránh bẫy trong phần đọc hiểu",
          "Luyện nghe hiệu quả",
        ],
        chatbotContext: {
          topic: "Chiến lược JLPT N3",
          knowledgeBase: [
            { q: "JLPT N3 khác N4 ra sao", a: "N3 có ngữ pháp phức tạp hơn và bài đọc dài hơn đáng kể." },
            { q: "mẹo nghe hiệu quả", a: "Tập trung vào từ khóa, không cố dịch toàn bộ." },
          ],
        },
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
        videoUrl: "https://www.youtube.com/embed/kanji_method",
        description:
          "Khám phá cách ghi nhớ Kanji bằng hình ảnh, câu chuyện và phương pháp phân tích bộ thủ.",
        keyPoints: [
          "Hiểu cấu tạo Kanji",
          "Phân tích bộ thủ",
          "Ghi nhớ bằng liên tưởng hình ảnh",
          "Bài tập luyện nhớ Kanji",
        ],
        chatbotContext: {
          topic: "Kanji cơ bản",
          knowledgeBase: [
            { q: "Kanji là gì", a: "Kanji là chữ Hán được người Nhật sử dụng để ghi từ gốc Hán." },
            { q: "có bao nhiêu Kanji", a: "Có hơn 2000 Kanji thông dụng trong tiếng Nhật hiện đại." },
          ],
        },
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
        videoUrl: "https://www.youtube.com/embed/business_japanese",
        description:
          "Học các mẫu câu và cách nói lịch sự khi giao tiếp trong môi trường làm việc chuyên nghiệp tại Nhật.",
        keyPoints: [
          "Cách chào hỏi và giới thiệu bản thân",
          "Mẫu câu khi trao đổi công việc",
          "Từ vựng chuyên ngành văn phòng",
          "Ứng xử trong môi trường công sở",
        ],
        chatbotContext: {
          topic: "Tiếng Nhật công sở",
          knowledgeBase: [
            { q: "chào buổi sáng", a: "おはようございます (Ohayou gozaimasu)." },
            { q: "cách nói lịch sự", a: "Dùng thể ます và kính ngữ 敬語 (keigo) trong giao tiếp công việc." },
          ],
        },
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

// Japanese Music for listening practice
export const japaneseMusic = [
  {
    id: 1,
    title: "Lemon",
    artist: "Kenshi Yonezu",
    duration: "4:15",
    thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
    audioUrl: "https://www.youtube.com/watch?v=SX_ViT4Ra7k",
    genre: "J-Pop",
    level: "N4",
    lyrics: true,
  },
  {
    id: 2,
    title: "Pretender",
    artist: "Official HIGE DANdism",
    duration: "5:29",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300",
    audioUrl: "https://www.youtube.com/watch?v=TQ8WlA2GXbk",
    genre: "J-Pop",
    level: "N3",
    lyrics: true,
  },
  {
    id: 3,
    title: "Kanade",
    artist: "Sukima Switch",
    duration: "4:40",
    thumbnail: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300",
    audioUrl: "https://www.youtube.com/watch?v=s726laPSCgc",
    genre: "J-Rock",
    level: "N4",
    lyrics: true,
  },
  {
    id: 4,
    title: "Paprika",
    artist: "Foorin",
    duration: "3:50",
    thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300",
    audioUrl: "https://www.youtube.com/watch?v=s7XSeYkiODk",
    genre: "J-Pop",
    level: "N5",
    lyrics: true,
  },
  {
    id: 5,
    title: "Koi",
    artist: "Gen Hoshino",
    duration: "4:18",
    thumbnail: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300",
    audioUrl: "https://www.youtube.com/watch?v=pfGI91CFtRg",
    genre: "J-Pop",
    level: "N4",
    lyrics: true,
  },
  {
    id: 6,
    title: "Sayonara Elegy",
    artist: "Masaki Suda",
    duration: "4:52",
    thumbnail: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300",
    audioUrl: "https://www.youtube.com/watch?v=HFNB_VT9_fs",
    genre: "J-Pop",
    level: "N3",
    lyrics: true,
  },
  {
    id: 7,
    title: "Uchiage Hanabi",
    artist: "DAOKO x Kenshi Yonezu",
    duration: "4:49",
    thumbnail: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300",
    audioUrl: "https://www.youtube.com/watch?v=RVkK8iaCqBg",
    genre: "J-Pop",
    level: "N4",
    lyrics: true,
  },
  {
    id: 8,
    title: "Shape of You (Japanese Ver.)",
    artist: "Ed Sheeran",
    duration: "3:54",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300",
    audioUrl: "https://www.youtube.com/watch?v=example",
    genre: "J-Pop",
    level: "N5",
    lyrics: true,
  },
  {
    id: 9,
    title: "Yoru ni Kakeru",
    artist: "YOASOBI",
    duration: "4:23",
    thumbnail: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300",
    audioUrl: "https://www.youtube.com/watch?v=x8VYWazR5mE",
    genre: "J-Pop",
    level: "N3",
    lyrics: true,
  },
  {
    id: 10,
    title: "Gurenge",
    artist: "LiSA",
    duration: "4:08",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300",
    audioUrl: "https://www.youtube.com/watch?v=cK9Z9Zcuso0",
    genre: "Anime",
    level: "N3",
    lyrics: true,
  },
  {
    id: 11,
    title: "Homura",
    artist: "LiSA",
    duration: "4:34",
    thumbnail: "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?w=300",
    audioUrl: "https://www.youtube.com/watch?v=4Q9DWE32LGM",
    genre: "Anime",
    level: "N3",
    lyrics: true,
  },
  {
    id: 12,
    title: "Sparkle",
    artist: "RADWIMPS",
    duration: "6:49",
    thumbnail: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=300",
    audioUrl: "https://www.youtube.com/watch?v=a2GujJZfXpg",
    genre: "Anime",
    level: "N3",
    lyrics: true,
  },
];
