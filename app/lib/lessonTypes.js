// Lesson types and structure for progression system

// Sample course with full lesson progression
export const sampleCourseWithProgression = {
  id: 1,
  title: "Tiếng Nhật cơ bản cho người mới bắt đầu",
  description: "Học Hiragana, Katakana và các câu giao tiếp cơ bản hàng ngày",
  level: "N5",
  thumbnail: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=400",
  instructor: "Tanaka Sensei",
  duration: "8 tuần",
  lessons: [
    // === MODULE 1: HIRAGANA ===
    {
      id: "lesson-1",
      order: 1,
      title: "Bài 1: Giới thiệu về Hiragana",
      type: "video",
      duration: "15:30",
      thumbnail: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300",
      videoUrl: "https://www.youtube.com/embed/6p9Il_j0zjc",
      description: "Tìm hiểu về bảng chữ cái Hiragana - hệ thống chữ viết cơ bản nhất.",
      keyPoints: [
        "Hiragana là gì và tại sao cần học?",
        "Cấu trúc của bảng Hiragana",
        "Cách phát âm đúng các ký tự",
        "Tips ghi nhớ Hiragana hiệu quả",
      ],
      chatbotContext: {
        topic: "Hiragana cơ bản",
        knowledgeBase: [
          { q: "Hiragana là gì", a: "Hiragana là một trong ba hệ thống chữ viết của tiếng Nhật, gồm 46 ký tự cơ bản." },
          { q: "có bao nhiêu chữ Hiragana", a: "Có 46 ký tự cơ bản và khoảng 71 nếu tính cả biến thể." },
        ],
      },
    },
    {
      id: "lesson-2",
      order: 2,
      title: "Bài 2: Quiz - Hiragana cơ bản",
      type: "quiz",
      description: "Kiểm tra kiến thức về Hiragana vừa học",
      duration: "10 phút",
      passingScore: 70,
      questions: [
        {
          id: 1,
          question: "Hiragana có bao nhiêu ký tự cơ bản?",
          options: ["26 ký tự", "46 ký tự", "50 ký tự", "71 ký tự"],
          correctAnswer: 1, // index của đáp án đúng
          explanation: "Hiragana có 46 ký tự cơ bản, bao gồm 5 nguyên âm và các âm tiết khác.",
        },
        {
          id: 2,
          question: "Hiragana được dùng để viết gì?",
          options: [
            "Từ gốc Hán",
            "Từ vựng tiếng Nhật thuần túy",
            "Từ ngoại lai",
            "Tên riêng nước ngoài",
          ],
          correctAnswer: 1,
          explanation: "Hiragana chủ yếu dùng để viết từ vựng tiếng Nhật thuần túy, trợ từ và động từ.",
        },
        {
          id: 3,
          question: "5 nguyên âm cơ bản trong tiếng Nhật là gì?",
          options: ["A E I O U", "A I U E O", "A O U E I", "I E A O U"],
          correctAnswer: 1,
          explanation: "5 nguyên âm cơ bản là A, I, U, E, O theo thứ tự trong bảng chữ cái.",
        },
      ],
    },
    {
      id: "lesson-3",
      order: 3,
      title: "Bài 3: Học Hiragana A-KO",
      type: "video",
      duration: "22:15",
      thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Học chi tiết 15 ký tự Hiragana đầu tiên từ A đến KO.",
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
        ],
      },
    },
    {
      id: "lesson-4",
      order: 4,
      title: "Bài 4: Luyện phát âm Hiragana A-KO",
      type: "pronunciation",
      description: "Luyện phát âm các ký tự Hiragana vừa học với AI",
      duration: "15 phút",
      words: [
        {
          id: 1,
          hiragana: "あ",
          romaji: "a",
          meaning: "a (nguyên âm)",
          audioUrl: "/audio/hiragana/a.mp3", // mock
        },
        {
          id: 2,
          hiragana: "い",
          romaji: "i",
          meaning: "i (nguyên âm)",
          audioUrl: "/audio/hiragana/i.mp3",
        },
        {
          id: 3,
          hiragana: "う",
          romaji: "u",
          meaning: "u (nguyên âm)",
          audioUrl: "/audio/hiragana/u.mp3",
        },
        {
          id: 4,
          hiragana: "え",
          romaji: "e",
          meaning: "e (nguyên âm)",
          audioUrl: "/audio/hiragana/e.mp3",
        },
        {
          id: 5,
          hiragana: "お",
          romaji: "o",
          meaning: "o (nguyên âm)",
          audioUrl: "/audio/hiragana/o.mp3",
        },
        {
          id: 6,
          hiragana: "か",
          romaji: "ka",
          meaning: "ka",
          audioUrl: "/audio/hiragana/ka.mp3",
        },
      ],
    },
    {
      id: "lesson-5",
      order: 5,
      title: "Bài 5: Quiz - Hiragana A-KO",
      type: "quiz",
      description: "Kiểm tra Hiragana A-KO",
      duration: "10 phút",
      passingScore: 70,
      questions: [
        {
          id: 1,
          question: "Chữ あ đọc như thế nào?",
          options: ["i", "a", "u", "e"],
          correctAnswer: 1,
          explanation: "Chữ あ đọc là 'a'.",
        },
        {
          id: 2,
          question: "Chữ か thuộc hàng nào?",
          options: ["Hàng A", "Hàng K", "Hàng S", "Hàng T"],
          correctAnswer: 1,
          explanation: "か thuộc hàng K (ka, ki, ku, ke, ko).",
        },
        {
          id: 3,
          question: "Từ あか (aka) có nghĩa là gì?",
          options: ["Màu xanh", "Màu đỏ", "Màu vàng", "Màu trắng"],
          correctAnswer: 1,
          explanation: "あか (aka) có nghĩa là màu đỏ.",
        },
      ],
    },

    // === MODULE 2: HIRAGANA SA-TO ===
    {
      id: "lesson-6",
      order: 6,
      title: "Bài 6: Học Hiragana SA-TO",
      type: "video",
      duration: "18:45",
      thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300",
      videoUrl: "https://www.youtube.com/embed/6p9Il_j0zjc",
      description: "Học các ký tự Hiragana từ hàng SA đến TO",
      keyPoints: [
        "Học hàng S: さ し す せ そ",
        "Học hàng T: た ち つ て と",
        "Luyện kết hợp với các ký tự đã học",
        "Bài tập đọc và viết",
      ],
      chatbotContext: {
        topic: "Hiragana SA-TO",
        knowledgeBase: [
          { q: "し và つ khác nhau thế nào", a: "し (shi) phát âm là 'shi', còn つ (tsu) là 'tsu'." },
        ],
      },
    },
    {
      id: "lesson-7",
      order: 7,
      title: "Bài 7: Luyện phát âm SA-TO",
      type: "pronunciation",
      description: "Luyện phát âm hàng SA và TO",
      duration: "15 phút",
      words: [
        { id: 1, hiragana: "さ", romaji: "sa", meaning: "sa", audioUrl: "/audio/hiragana/sa.mp3" },
        { id: 2, hiragana: "し", romaji: "shi", meaning: "shi", audioUrl: "/audio/hiragana/shi.mp3" },
        { id: 3, hiragana: "す", romaji: "su", meaning: "su", audioUrl: "/audio/hiragana/su.mp3" },
        { id: 4, hiragana: "た", romaji: "ta", meaning: "ta", audioUrl: "/audio/hiragana/ta.mp3" },
        { id: 5, hiragana: "ち", romaji: "chi", meaning: "chi", audioUrl: "/audio/hiragana/chi.mp3" },
      ],
    },
    {
      id: "lesson-8",
      order: 8,
      title: "Bài 8: Quiz - Hiragana SA-TO",
      type: "quiz",
      description: "Kiểm tra Hiragana SA-TO",
      duration: "10 phút",
      passingScore: 70,
      questions: [
        {
          id: 1,
          question: "Chữ し đọc như thế nào?",
          options: ["si", "shi", "chi", "ti"],
          correctAnswer: 1,
          explanation: "Chữ し đọc là 'shi', không phải 'si'.",
        },
        {
          id: 2,
          question: "Chữ つ đọc như thế nào?",
          options: ["tu", "tsu", "su", "chu"],
          correctAnswer: 1,
          explanation: "Chữ つ đọc là 'tsu'.",
        },
      ],
    },

    // === FINAL TEST ===
    {
      id: "final-test",
      order: 999, // Always last
      title: "Kiểm tra tổng kết: Hiragana hoàn chỉnh",
      type: "final-test",
      description: "Bài kiểm tra cuối khóa. Yêu cầu đạt 80% để hoàn thành khóa học.",
      duration: "30 phút",
      passingScore: 80,
      questions: [
        {
          id: 1,
          question: "Hiragana có bao nhiêu ký tự cơ bản?",
          options: ["26", "46", "50", "71"],
          correctAnswer: 1,
          explanation: "Hiragana có 46 ký tự cơ bản.",
        },
        {
          id: 2,
          question: "5 nguyên âm là gì?",
          options: ["A E I O U", "A I U E O", "A O U E I", "I E A O U"],
          correctAnswer: 1,
          explanation: "5 nguyên âm là A, I, U, E, O.",
        },
        {
          id: 3,
          question: "Chữ か thuộc hàng nào?",
          options: ["Hàng A", "Hàng K", "Hàng S", "Hàng T"],
          correctAnswer: 1,
          explanation: "か thuộc hàng K.",
        },
        {
          id: 4,
          question: "Chữ し đọc là gì?",
          options: ["si", "shi", "chi", "ti"],
          correctAnswer: 1,
          explanation: "し đọc là 'shi'.",
        },
        {
          id: 5,
          question: "Hiragana dùng để viết gì?",
          options: ["Từ gốc Hán", "Từ thuần Nhật", "Từ ngoại lai", "Tên nước ngoài"],
          correctAnswer: 1,
          explanation: "Hiragana dùng viết từ thuần Nhật, trợ từ, động từ.",
        },
      ],
    },
  ],
};

// Progress tracker structure
export const progressStructure = {
  // courseId: {
  //   lessonId: {
  //     completed: true/false,
  //     score: 85, // for quiz/test
  //     watchTime: 90, // percentage for video
  //     attempts: 2, // number of attempts
  //     lastAttempt: Date
  //   }
  // }
};

// Helper functions
export const getLessonType = (type) => {
  const types = {
    video: { icon: "🎥", label: "Video bài giảng", color: "blue" },
    quiz: { icon: "📝", label: "Bài tập quiz", color: "purple" },
    pronunciation: { icon: "🎤", label: "Luyện phát âm", color: "pink" },
    "final-test": { icon: "🏆", label: "Kiểm tra tổng kết", color: "orange" },
  };
  return types[type] || types.video;
};

export const isLessonUnlocked = (courseId, lessonOrder, progress) => {
  // First lesson is always unlocked
  if (lessonOrder === 1) return true;

  // Check if previous lesson is completed
  const course = progress[courseId];
  if (!course) return false;

  // Find previous lesson
  const previousOrder = lessonOrder - 1;
  const previousLesson = Object.values(course).find(
    (lesson) => lesson.order === previousOrder
  );

  return previousLesson?.completed || false;
};

export const calculateCourseProgress = (courseId, lessons, progress) => {
  const courseProgress = progress[courseId] || {};
  const completedLessons = Object.values(courseProgress).filter(
    (l) => l.completed
  ).length;
  const totalLessons = lessons.filter((l) => l.type !== "final-test").length;

  return {
    completed: completedLessons,
    total: totalLessons,
    percentage: Math.round((completedLessons / totalLessons) * 100),
  };
};
