"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import Layout from "../../../../components/Layout";
import VideoPlayer from "../../../../components/VideoPlayer";
import VideoChatbot from "../../../../components/VideoChatbot";
import { courses } from "../../../../lib/mockData";

export default function VideoPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = parseInt(params.courseId as string);
  const videoId = parseInt(params.videoId as string);

  const course = courses.find((c) => c.id === courseId);
  const video = course?.videos.find((v) => v.id === videoId);
  const [completedVideos, setCompletedVideos] = useState<Set<number>>(new Set());

  // Load completion status for all videos
  useEffect(() => {
    if (course) {
      const completed = new Set<number>();
      course.videos.forEach((v) => {
        const completionKey = `video_completed_${courseId}_${v.id}`;
        if (localStorage.getItem(completionKey) === "true") {
          completed.add(v.id);
        }
      });
      setCompletedVideos(completed);
    }
  }, [course, courseId]);

  if (!course || !video) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Không tìm thấy video
            </h1>
            <p className="text-gray-600 mb-8">
              Video bạn đang tìm kiếm không tồn tại
            </p>
            <button
              onClick={() => router.push("/home")}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Quay lại trang chủ
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  // Get other videos from the same course
  const otherVideos = course.videos.filter((v) => v.id !== videoId);

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
              <span className="text-gray-700">{video.title}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Side - Video Player and Chatbot */}
            <div className="lg:col-span-2 space-y-6">
              <VideoPlayer
                videoUrl={video.videoUrl}
                title={video.title}
                description={video.description}
                keyPoints={video.keyPoints}
                duration={video.duration}
                courseId={courseId}
                videoId={videoId}
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
                    {course.lessonsCount} bài học
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

            {/* Right Side - Chatbot and Other Videos */}
            <div className="lg:col-span-1 space-y-6">
              {/* Video Chatbot */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <VideoChatbot
                  context={video.chatbotContext}
                  videoTitle={video.title}
                />
              </motion.div>

              {/* Other Videos in Course */}
              {otherVideos.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white rounded-lg shadow-md p-4"
                >
                  <h3 className="font-bold text-gray-900 mb-4">
                    Bài học khác trong khóa
                  </h3>
                  <div className="space-y-3">
                    {otherVideos.map((otherVideo) => (
                      <button
                        key={otherVideo.id}
                        onClick={() =>
                          router.push(`/course/${courseId}/video/${otherVideo.id}`)
                        }
                        className="w-full flex items-start p-3 rounded-lg hover:bg-gray-50 transition text-left relative"
                      >
                        <div className="relative">
                          <img
                            src={otherVideo.thumbnail}
                            alt={otherVideo.title}
                            className="w-24 h-16 object-cover rounded mr-3 flex-shrink-0"
                          />
                          {completedVideos.has(otherVideo.id) && (
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded mr-3">
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <FiCheck className="w-4 h-4 text-white" />
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1 mb-1">
                            <h4 className="text-sm font-semibold text-gray-900 line-clamp-2">
                              {otherVideo.title}
                            </h4>
                            {completedVideos.has(otherVideo.id) && (
                              <FiCheck className="w-3 h-3 text-green-500 flex-shrink-0" />
                            )}
                          </div>
                          <p className="text-xs text-gray-500">{otherVideo.duration}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => router.push(`/course/${courseId}`)}
                    className="w-full mt-4 text-center text-sm text-blue-500 hover:text-blue-600 font-medium"
                  >
                    Xem tất cả bài học →
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
