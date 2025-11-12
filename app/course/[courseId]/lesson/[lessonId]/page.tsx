"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Layout from "../../../../components/Layout";
import Quiz from "../../../../components/Quiz";
import PronunciationPractice from "../../../../components/PronunciationPractice";
import VideoPlayer from "../../../../components/VideoPlayer";
import VideoChatbot from "../../../../components/VideoChatbot";
import { sampleCourseWithProgression } from "../../../../lib/lessonTypes";
import { getLessonProgress, isLessonUnlocked, getNextLesson } from "../../../../lib/progressTracker";
import { motion } from "framer-motion";

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = parseInt(params.courseId as string);
  const lessonId = params.lessonId as string;

  // For now, using sample course. In production, fetch by courseId
  const course = sampleCourseWithProgression;
  const lesson = course.lessons.find((l) => l.id === lessonId);

  const [isUnlocked, setIsUnlocked] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0); // Force re-render lesson list

  useEffect(() => {
    if (lesson) {
      const unlocked = isLessonUnlocked(courseId, lesson, course.lessons);
      setIsUnlocked(unlocked);

      if (!unlocked) {
        alert("Bạn cần hoàn thành bài học trước đó để mở khóa bài này!");
        router.push(`/course/${courseId}`);
      }
    }
  }, [lesson, courseId, router]);

  if (!lesson) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Không tìm thấy bài học
            </h1>
            <p className="text-gray-600 mb-8">
              Bài học bạn đang tìm kiếm không tồn tại
            </p>
            <a
              href={`/course/${courseId}`}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Quay lại khóa học
            </a>
          </div>
        </div>
      </Layout>
    );
  }

  // Route to appropriate component based on lesson type
  if (lesson.type === "video") {
    // Get next lesson info - pass current lesson id to get next lesson after current
    const nextLesson = getNextLesson(courseId, course.lessons, lessonId);

    // Handle video completion - refresh lesson list
    const handleVideoCompleted = () => {
      setRefreshKey(prev => prev + 1); // Trigger re-render
    };

    return (
      <Layout>
        <div className="min-h-screen bg-gray-50">
          {/* Breadcrumb */}
          <div className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center text-sm">
                <button
                  onClick={() => router.push("/home")}
                  className="text-blue-500 hover:text-blue-600 transition"
                >
                  Home
                </button>
                <svg
                  className="h-4 w-4 mx-2 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <button
                  onClick={() => router.push(`/course/${courseId}`)}
                  className="text-blue-500 hover:text-blue-600 transition"
                >
                  {course.title}
                </button>
                <svg
                  className="h-4 w-4 mx-2 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="text-gray-700">{lesson.title}</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Side - Video Player */}
              <div className="lg:col-span-2 space-y-6">
                <VideoPlayer
                  videoUrl={lesson.videoUrl || ""}
                  title={lesson.title}
                  description={lesson.description || ""}
                  keyPoints={lesson.keyPoints || []}
                  duration={lesson.duration}
                  courseId={courseId}
                  lessonId={lessonId}
                  nextLessonTitle={nextLesson?.title}
                  nextLessonId={nextLesson?.id}
                  onComplete={handleVideoCompleted}
                />

                {/* Course Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Về khóa học này
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <svg
                        className="h-5 w-5 mr-1 text-blue-500"
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
                        className="h-5 w-5 mr-1 text-blue-500"
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
                    <div className="flex items-center">
                      <svg
                        className="h-5 w-5 mr-1 text-blue-500"
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
                      {course.duration}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Side - Chatbot and Lessons */}
              <div className="lg:col-span-1 space-y-6">
                {/* Chatbot */}
                {lesson.chatbotContext && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <VideoChatbot
                      context={lesson.chatbotContext}
                      videoTitle={lesson.title}
                    />
                  </motion.div>
                )}

                {/* Lesson List */}
                <motion.div
                  key={refreshKey}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white rounded-xl shadow-md p-4 sticky top-24"
                >
                  <h3 className="font-bold text-gray-900 mb-4">
                    Danh sách bài học
                  </h3>
                  <div className="space-y-2 max-h-[500px] overflow-y-auto">
                    {course.lessons.map((lessonItem) => {
                      const lessonProgress = getLessonProgress(courseId, lessonItem.id);
                      const isItemCompleted = lessonProgress.completed || false;
                      const isItemUnlocked = isLessonUnlocked(courseId, lessonItem, course.lessons);
                      const isCurrent = lessonItem.id === lessonId;

                      // Get icon based on type
                      const getIcon = () => {
                        if (!isItemUnlocked) return "🔒";
                        switch (lessonItem.type) {
                          case "video": return "🎥";
                          case "quiz": return "📝";
                          case "pronunciation": return "🎤";
                          case "final-test": return "🏆";
                          default: return "📄";
                        }
                      };

                      return (
                        <button
                          key={lessonItem.id}
                          onClick={() => {
                            if (isItemUnlocked) {
                              router.push(`/course/${courseId}/lesson/${lessonItem.id}`);
                            } else {
                              alert("Bạn cần hoàn thành bài học trước đó!");
                            }
                          }}
                          disabled={!isItemUnlocked}
                          className={`w-full p-3 rounded-lg text-left transition-all ${
                            isCurrent
                              ? "bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300"
                              : isItemCompleted
                              ? "bg-green-50 border border-green-200 hover:bg-green-100"
                              : isItemUnlocked
                              ? "bg-gray-50 border border-gray-200 hover:bg-gray-100"
                              : "bg-gray-100 border border-gray-200 opacity-60 cursor-not-allowed"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{getIcon()}</span>
                            <div className="flex-1 min-w-0">
                              <h4 className={`text-sm font-semibold line-clamp-2 ${
                                isItemUnlocked ? "text-gray-900" : "text-gray-500"
                              }`}>
                                {lessonItem.title}
                              </h4>
                              <p className="text-xs text-gray-500">{lessonItem.duration}</p>
                            </div>
                            {isItemCompleted && (
                              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  <button
                    onClick={() => router.push(`/course/${courseId}`)}
                    className="w-full mt-4 text-center text-sm text-blue-500 hover:text-blue-600 font-medium"
                  >
                    Xem tất cả bài học →
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (lesson.type === "quiz" || lesson.type === "final-test") {
    const handleQuizComplete = () => {
      // Refresh lesson list
      setRefreshKey(prev => prev + 1);

      // Auto-navigate to next lesson after completing quiz
      const nextLesson = getNextLesson(courseId, course.lessons, lessonId);

      setTimeout(() => {
        if (nextLesson) {
          router.push(`/course/${courseId}/lesson/${nextLesson.id}`);
        } else {
          router.push(`/course/${courseId}`);
        }
      }, 2000); // Wait 2 seconds before navigating
    };

    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 py-12 px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto mb-8">
            <button
              onClick={() => router.push(`/course/${courseId}`)}
              className="text-gray-600 hover:text-gray-900 mb-4 flex items-center gap-2"
            >
              ← Quay lại khóa học
            </button>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
              {lesson.title}
            </h1>
            <p className="text-gray-600">{lesson.description}</p>
          </div>

          {/* Quiz Component */}
          <Quiz
            courseId={courseId}
            lessonId={lessonId}
            questions={lesson.questions || []}
            passingScore={lesson.passingScore || 70}
            onComplete={handleQuizComplete}
          />
        </div>
      </Layout>
    );
  }

  if (lesson.type === "pronunciation") {
    const handlePronunciationComplete = () => {
      // Refresh lesson list
      setRefreshKey(prev => prev + 1);

      // Auto-navigate to next lesson
      const nextLesson = getNextLesson(courseId, course.lessons, lessonId);

      setTimeout(() => {
        if (nextLesson) {
          router.push(`/course/${courseId}/lesson/${nextLesson.id}`);
        } else {
          router.push(`/course/${courseId}`);
        }
      }, 2000); // Wait 2 seconds before navigating
    };

    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-pink-50/30 py-12 px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-8">
            <button
              onClick={() => router.push(`/course/${courseId}`)}
              className="text-gray-600 hover:text-gray-900 mb-4 flex items-center gap-2"
            >
              ← Quay lại khóa học
            </button>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-2">
              {lesson.title}
            </h1>
            <p className="text-gray-600">{lesson.description}</p>
          </div>

          {/* PronunciationPractice Component */}
          <PronunciationPractice
            courseId={courseId}
            lessonId={lessonId}
            words={lesson.words || []}
            onComplete={handlePronunciationComplete}
          />
        </div>
      </Layout>
    );
  }

  return null;
}
