"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Layout from "../../components/Layout";
import ChatbotWidget from "../../components/ChatbotWidget";
import { courses } from "../../lib/mockData";

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = parseInt(params.courseId as string);
  const course = courses.find((c) => c.id === courseId);

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
                    {course.lessonsCount} bài học
                  </div>
                </div>
                <button
                  onClick={() =>
                    router.push(`/course/${courseId}/video/${course.videos[0].id}`)
                  }
                  className="mt-8 bg-white text-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg"
                >
                  Bắt đầu học
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
            {/* Main Content - Video List */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-1 h-8 bg-blue-500 mr-4"></div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Nội dung khóa học
                  </h2>
                </div>

                <div className="space-y-4">
                  {course.videos.map((video, index) => (
                    <motion.div
                      key={video.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
                    >
                      <div className="flex items-center p-4">
                        <div className="relative w-40 h-24 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-10 w-10 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                            {video.duration}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {video.title}
                          </h3>
                          <div className="flex items-center text-sm text-gray-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mr-1"
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
                            {video.duration}
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            router.push(`/course/${courseId}/video/${video.id}`)
                          }
                          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                        >
                          Xem
                        </button>
                      </div>
                    </motion.div>
                  ))}
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
                      {course.lessonsCount}
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
