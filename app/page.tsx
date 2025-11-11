"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Layout from "./components/Layout";
import { FiZap, FiBook, FiVideo, FiTrendingUp, FiUsers, FiAward } from "react-icons/fi";

export default function LandingPage() {
  return (
    <Layout>
      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative">
          {/* Hero Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold shadow-lg">
                  ✨ Nền tảng học tiếng Nhật #1 Việt Nam
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                Học tiếng Nhật dễ dàng{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  cùng AI
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              >
                Cá nhân hóa lộ trình học, có trợ lý AI đồng hành cùng bạn từng bước
                trên con đường chinh phục tiếng Nhật
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link href="/login">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      Bắt đầu ngay
                      <FiZap className="ml-2 group-hover:rotate-12 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </Link>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FiZap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Trợ lý học tập thông minh
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    AI chatbot hỗ trợ 24/7, giải đáp thắc mắc và hướng dẫn bạn học tập
                    hiệu quả hơn
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FiBook className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    Khóa học cá nhân hóa
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Lộ trình học được thiết kế riêng theo trình độ và mục tiêu của bạn
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-pink-200"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FiVideo className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                    Video bài giảng chất lượng
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Hàng trăm video bài giảng từ giáo viên bản xứ, nội dung phong phú và
                    dễ hiểu
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
            <div className="absolute inset-0 bg-black/10"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <FiUsers className="w-12 h-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-5xl font-bold text-white mb-2">1000+</p>
                    <p className="text-blue-100 font-medium">Học viên</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <FiBook className="w-12 h-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-5xl font-bold text-white mb-2">50+</p>
                    <p className="text-blue-100 font-medium">Khóa học</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <FiAward className="w-12 h-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-5xl font-bold text-white mb-2">95%</p>
                    <p className="text-blue-100 font-medium">Tỷ lệ hài lòng</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Sẵn sàng bắt đầu hành trình của bạn?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Tham gia cùng hàng nghìn học viên đã thành công trong việc học tiếng
                  Nhật
                </p>
                <Link href="/login">
                  <button className="group px-10 py-4 bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-lg font-bold shadow-xl hover:scale-105 transition-all duration-300">
                    <span className="flex items-center">
                      Bắt đầu ngay
                      <FiTrendingUp className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
              </div>
            </motion.div>
          </section>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </Layout>
  );
}
