"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { FiEdit2, FiMail, FiCalendar, FiAward, FiBook, FiClock, FiTrendingUp, FiSave, FiX } from "react-icons/fi";

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "User",
    email: "user@example.com",
    avatar: "U",
    joinDate: new Date().toISOString(),
    level: "N5",
    goals: [] as string[],
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState("");

  useEffect(() => {
    // Load user data from localStorage
    const userData = localStorage.getItem("user");
    const surveyData = localStorage.getItem("userSurvey");

    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(prev => ({ ...prev, ...parsedUser }));
      setEditedName(parsedUser.name);
    }

    if (surveyData) {
      const parsed = JSON.parse(surveyData);
      setUser(prev => ({ ...prev, level: parsed.level, goals: parsed.goals }));
    }
  }, []);

  const handleSaveName = () => {
    const updatedUser = { ...user, name: editedName };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setIsEditing(false);
  };

  const stats = [
    { label: "Khóa học đã hoàn thành", value: "3", icon: FiBook, color: "from-blue-500 to-blue-600" },
    { label: "Giờ học", value: "24", icon: FiClock, color: "from-purple-500 to-purple-600" },
    { label: "Điểm trung bình", value: "85%", icon: FiTrendingUp, color: "from-pink-500 to-pink-600" },
    { label: "Huy chương", value: "5", icon: FiAward, color: "from-orange-500 to-orange-600" },
  ];

  const achievements = [
    { title: "Người mới", description: "Hoàn thành khóa học đầu tiên", earned: true, icon: "🎯" },
    { title: "Học siêng", description: "Học 7 ngày liên tiếp", earned: true, icon: "🔥" },
    { title: "Bậc thầy Hiragana", description: "Hoàn thành tất cả bài Hiragana", earned: true, icon: "あ" },
    { title: "JLPT Ready", description: "Hoàn thành khóa luyện thi N5", earned: false, icon: "📝" },
    { title: "Đa ngôn ngữ", description: "Học 100 từ vựng", earned: false, icon: "📚" },
    { title: "Vua ngữ pháp", description: "Hoàn thành 50 bài ngữ pháp", earned: false, icon: "👑" },
  ];

  const recentActivity = [
    { title: "Bài 1: Giới thiệu về Hiragana", course: "Tiếng Nhật cơ bản", date: "2 giờ trước", progress: 100 },
    { title: "Bài 2: Học Hiragana - Phần A-KO", course: "Tiếng Nhật cơ bản", date: "5 giờ trước", progress: 75 },
    { title: "Bài 1: Tổng quan kỳ thi JLPT N5", course: "Luyện thi JLPT N5", date: "1 ngày trước", progress: 100 },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-xl p-8 mb-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                  {user.avatar}
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                  <span className="text-white text-xs font-bold">N5</span>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  {isEditing ? (
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                        className="px-3 py-1 border-2 border-blue-500 rounded-lg focus:outline-none"
                      />
                      <button
                        onClick={handleSaveName}
                        className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                      >
                        <FiSave className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          setIsEditing(false);
                          setEditedName(user.name);
                        }}
                        className="p-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                      >
                        <FiX className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
                      <button
                        onClick={() => setIsEditing(true)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition"
                      >
                        <FiEdit2 className="w-5 h-5 text-gray-600" />
                      </button>
                    </>
                  )}
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4 text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <FiMail className="w-4 h-4" />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCalendar className="w-4 h-4" />
                    <span>Tham gia {new Date(user.joinDate).toLocaleDateString("vi-VN")}</span>
                  </div>
                </div>

                {/* Goals Tags */}
                {user.goals.length > 0 && (
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {user.goals.map((goal, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {goal}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FiAward className="w-6 h-6 mr-2 text-yellow-500" />
                Thành tích
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-2xl border-2 transition-all ${
                      achievement.earned
                        ? "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300"
                        : "bg-gray-50 border-gray-200 opacity-60"
                    }`}
                  >
                    <div className="text-4xl mb-2">{achievement.icon}</div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{achievement.title}</h3>
                    <p className="text-xs text-gray-600">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Hoạt động gần đây</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-900 mb-1">{activity.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{activity.course}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{activity.date}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                            style={{ width: `${activity.progress}%` }}
                          />
                        </div>
                        <span className="text-xs font-medium text-gray-700">{activity.progress}%</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
