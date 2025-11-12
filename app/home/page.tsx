"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import CourseCard from "../components/CourseCard";
import ChatbotWidget from "../components/ChatbotWidget";
import { courses } from "../lib/mockData";

export default function HomePage() {
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [userLevel, setUserLevel] = useState<string | null>(null);

  useEffect(() => {
    // Get user survey data from localStorage
    const surveyData = localStorage.getItem("userSurvey");
    if (surveyData) {
      const { level } = JSON.parse(surveyData);
      setUserLevel(level);

      // Filter courses based on user level
      if (level && level !== "Beginner") {
        const recommended = courses.filter((course) => course.level === level);
        const others = courses.filter((course) => course.level !== level);
        setFilteredCourses([...recommended, ...others]);
      }
    }
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold mb-4">
                Xin chào! Chào mừng bạn đến với WabiSabi
              </h1>
              <p className="text-xl text-blue-100">
                {userLevel
                  ? `Chúng tôi đã chuẩn bị các khóa học phù hợp với trình độ ${userLevel} của bạn`
                  : "Khám phá các khóa học tiếng Nhật chất lượng cao"}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Courses Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Recommended Courses */}
          {userLevel && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <div className="flex items-center mb-6">
                <div className="w-1 h-8 bg-blue-500 mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Khóa học được đề xuất cho bạn
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses
                  .filter((course) => course.level === userLevel)
                  .map((course, index) => (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <CourseCard {...course} />
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          )}

          {/* All Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-1 h-8 bg-blue-500 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">
                {userLevel ? "Các khóa học khác" : "Tất cả khóa học"}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(userLevel
                ? filteredCourses.filter((course) => course.level !== userLevel)
                : filteredCourses
              ).map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CourseCard {...course} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 bg-white rounded-lg shadow-md p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Tiến độ học tập của bạn
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <p className="text-4xl font-bold text-blue-500 mb-2">0</p>
                <p className="text-gray-600">Khóa học đã hoàn thành</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <p className="text-4xl font-bold text-blue-500 mb-2">0</p>
                <p className="text-gray-600">Giờ học</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <p className="text-4xl font-bold text-blue-500 mb-2">0</p>
                <p className="text-gray-600">Bài tập đã làm</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Chatbot Widget */}
        <ChatbotWidget />
      </div>
    </Layout>
  );
}
