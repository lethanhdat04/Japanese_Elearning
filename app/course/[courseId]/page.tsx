"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiCheck, FiLock, FiPlay, FiFileText, FiMic, FiAward } from "react-icons/fi";
import Layout from "../../components/Layout";
import ChatbotWidget from "../../components/ChatbotWidget";
import { sampleCourseWithProgression } from "../../lib/lessonTypes";
import {
  getCourseProgress,
  isLessonUnlocked,
  calculateCourseCompletion,
  getLessonProgress,
} from "../../lib/progressTracker";

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = parseInt(params.courseId as string);

  // For now, using sample course. In production, fetch by courseId
  const course = sampleCourseWithProgression;

  const [courseProgress, setCourseProgress] = useState({});
  const [completionStats, setCompletionStats] = useState({ completed: 0, total: 0, percentage: 0 });

  // Load progress data
  useEffect(() => {
    const progress = getCourseProgress(courseId);
    setCourseProgress(progress);

    const stats = calculateCourseCompletion(courseId, course.lessons);
    setCompletionStats(stats);
  }, [courseId]);

  // Get lesson type icon
  const getLessonIcon = (type: string) => {
    switch (type) {
      case "video":
        return <FiPlay className="w-5 h-5" />;
      case "quiz":
        return <FiFileText className="w-5 h-5" />;
      case "pronunciation":
        return <FiMic className="w-5 h-5" />;
      case "final-test":
        return <FiAward className="w-5 h-5" />;
      default:
        return <FiPlay className="w-5 h-5" />;
    }
  };

  // Get lesson type color
  const getLessonColor = (type: string) => {
    switch (type) {
      case "video":
        return "text-blue-500 bg-blue-50";
      case "quiz":
        return "text-purple-500 bg-purple-50";
      case "pronunciation":
        return "text-pink-500 bg-pink-50";
      case "final-test":
        return "text-orange-500 bg-orange-50";
      default:
        return "text-blue-500 bg-blue-50";
    }
  };

  // Handle lesson click
  const handleLessonClick = (lesson: any) => {
    const unlocked = isLessonUnlocked(courseId, lesson, course.lessons);

    if (!unlocked) {
      alert("Bạn cần hoàn thành bài học trước đó để mở khóa bài này!");
      return;
    }

    // Navigate to lesson page based on type
    router.push(`/course/${courseId}/lesson/${lesson.id}`);
  };

  if (!course) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Không tìm thấy khóa học
            </h1>
            <p className="text-gray-600 mb-8">
              Khóa học bạn đang tìm kiếm không tồn tại
            </p>
            <a
              href="/home"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Quay lại trang chủ
            </a>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Course Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <div className="flex items-center mb-4">
                  <span className="bg-white text-blue-500 px-3 py-1 rounded-full text-sm font-semibold mr-3">
                    {course.level}
                  </span>
                  <span className="text-blue-100">{course.duration}</span>
                </div>
                <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
                <p className="text-xl text-blue-100 mb-6">{course.description}</p>
                <div className="flex items-center space-x-6 text-blue-100">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    {course.instructor}
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    {course.lessons.length} bài học
                  </div>
                </div>
                {/* Progress Bar */}
                <div className="mt-6 bg-white/20 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-white h-full rounded-full transition-all duration-500"
                    style={{ width: `${completionStats.percentage}%` }}
                  />
                </div>
                <p className="text-sm text-white/90 mt-2">
                  Hoàn thành {completionStats.completed}/{completionStats.total} bài học ({completionStats.percentage}%)
                </p>

                <button
                  onClick={() =>
                    router.push(`/course/${courseId}/lesson/${course.lessons[0].id}`)
                  }
                  className="mt-6 bg-white text-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg"
                >
                  {completionStats.completed > 0 ? "Tiếp tục học" : "Bắt đầu học"}
                </button>
              </div>
              <div className="hidden md:block">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Course Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content - Lesson List */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 mr-4"></div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Nội dung khóa học
                  </h2>
                </div>

                <div className="space-y-3">
                  {course.lessons.map((lesson, index) => {
                    const lessonProgress = getLessonProgress(courseId, lesson.id);
                    const isCompleted = lessonProgress.completed || false;
                    const isUnlocked = isLessonUnlocked(courseId, lesson, course.lessons);

                    return (
                      <motion.div
                        key={lesson.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        onClick={() => handleLessonClick(lesson)}
                        className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border ${
                          isCompleted
                            ? "border-green-200 bg-green-50/30"
                            : isUnlocked
                            ? "border-gray-200 hover:border-blue-300 cursor-pointer"
                            : "border-gray-200 opacity-60 cursor-not-allowed"
                        }`}
                      >
                        <div className="flex items-center p-4 gap-4">
                          {/* Lesson Type Icon */}
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${getLessonColor(
                              lesson.type
                            )}`}
                          >
                            {isUnlocked ? (
                              getLessonIcon(lesson.type)
                            ) : (
                              <FiLock className="w-5 h-5 text-gray-400" />
                            )}
                          </div>

                          {/* Lesson Info */}
                          <div className="flex-1 min-w-0">
                            <h3
                              className={`text-base font-semibold mb-1 ${
                                isUnlocked ? "text-gray-900" : "text-gray-500"
                              }`}
                            >
                              {lesson.title}
                            </h3>
                            <div className="flex items-center gap-3 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                {lesson.duration}
                              </span>
                              {lesson.type === "quiz" && lesson.passingScore && (
                                <span className="text-purple-600 text-xs font-medium bg-purple-100 px-2 py-0.5 rounded-full">
                                  Passing: {lesson.passingScore}%
                                </span>
                              )}
                              {lesson.type === "final-test" && lesson.passingScore && (
                                <span className="text-orange-600 text-xs font-medium bg-orange-100 px-2 py-0.5 rounded-full">
                                  Yêu cầu: {lesson.passingScore}%
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Completion Checkbox */}
                          <div className="flex items-center gap-3 flex-shrink-0">
                            {isCompleted ? (
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-green-500 rounded-md flex items-center justify-center">
                                  <FiCheck className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-sm font-medium text-green-600 hidden sm:block">
                                  Hoàn thành
                                </span>
                              </div>
                            ) : isUnlocked ? (
                              <div className="w-6 h-6 border-2 border-gray-300 rounded-md"></div>
                            ) : (
                              <FiLock className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Sidebar - Course Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white rounded-lg shadow-md p-6 sticky top-20"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Thông tin khóa học
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b">
                    <span className="text-gray-600">Trình độ</span>
                    <span className="font-semibold text-blue-500">
                      {course.level}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b">
                    <span className="text-gray-600">Thời lượng</span>
                    <span className="font-semibold text-gray-900">
                      {course.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b">
                    <span className="text-gray-600">Số bài học</span>
                    <span className="font-semibold text-gray-900">
                      {course.lessons.length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b">
                    <span className="text-gray-600">Giảng viên</span>
                    <span className="font-semibold text-gray-900">
                      {course.instructor}
                    </span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Bạn sẽ học được gì?
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Nắm vững kiến thức cơ bản
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Thực hành với bài tập thực tế
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Nhận certificate khi hoàn thành
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Chatbot Widget */}
        <ChatbotWidget />
      </div>
    </Layout>
  );
}
