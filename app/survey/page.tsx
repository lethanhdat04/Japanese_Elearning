"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";
import { surveyQuestions } from "../lib/mockData";
import { FiCheckCircle, FiArrowRight, FiArrowLeft } from "react-icons/fi";

export default function SurveyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const router = useRouter();

  const totalSteps = 2;

  const handleLevelSelect = (level: string) => {
    setSelectedLevel(level);
    // Auto advance after selection
    setTimeout(() => {
      setCurrentStep(2);
    }, 500);
  };

  const handleGoalToggle = (goal: string) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter((g) => g !== goal));
    } else {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  const handleComplete = () => {
    if (selectedGoals.length > 0) {
      // Save survey data to localStorage
      localStorage.setItem(
        "userSurvey",
        JSON.stringify({ level: selectedLevel, goals: selectedGoals })
      );
      router.push("/home");
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hãy cho chúng tôi biết về bạn
            </h1>
            <p className="text-lg text-gray-600">
              Để cá nhân hóa trải nghiệm học tập của bạn
            </p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-700">
                Bước {currentStep} / {totalSteps}
              </span>
              <span className="text-sm font-medium text-gray-700">
                {Math.round((currentStep / totalSteps) * 100)}%
              </span>
            </div>
            <div className="h-3 bg-white/80 backdrop-blur-sm rounded-full overflow-hidden shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* Steps Container */}
          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait" custom={1}>
              {/* Step 1: Level Selection */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  custom={1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute inset-0"
                >
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Trình độ tiếng Nhật hiện tại của bạn?
                      </h2>
                      <p className="text-gray-600">Chọn trình độ phù hợp nhất</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {surveyQuestions.levels.map((level, index) => (
                        <motion.button
                          key={level}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleLevelSelect(level)}
                          className={`relative p-6 rounded-2xl font-semibold text-lg transition-all duration-300 overflow-hidden ${
                            selectedLevel === level
                              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-2xl shadow-blue-500/50"
                              : "bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-blue-300"
                          }`}
                        >
                          {selectedLevel === level && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute top-2 right-2"
                            >
                              <FiCheckCircle className="w-6 h-6" />
                            </motion.div>
                          )}
                          {level}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Goals Selection */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  custom={1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute inset-0"
                >
                  <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Mục tiêu học của bạn?
                      </h2>
                      <p className="text-gray-600">Chọn một hoặc nhiều mục tiêu</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {surveyQuestions.goals.map((goal, index) => (
                        <motion.button
                          key={goal}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleGoalToggle(goal)}
                          className={`relative p-5 rounded-2xl font-medium transition-all duration-300 text-left ${
                            selectedGoals.includes(goal)
                              ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-xl shadow-purple-500/30"
                              : "bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-purple-300"
                          }`}
                        >
                          <div className="flex items-center">
                            <div
                              className={`w-6 h-6 rounded-lg border-2 mr-3 flex items-center justify-center transition-all ${
                                selectedGoals.includes(goal)
                                  ? "border-white bg-white/20"
                                  : "border-gray-300"
                              }`}
                            >
                              {selectedGoals.includes(goal) && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                >
                                  <FiCheckCircle className="w-5 h-5 text-white" />
                                </motion.div>
                              )}
                            </div>
                            {goal}
                          </div>
                        </motion.button>
                      ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCurrentStep(1)}
                        className="flex items-center px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all"
                      >
                        <FiArrowLeft className="mr-2" />
                        Quay lại
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleComplete}
                        disabled={selectedGoals.length === 0}
                        className={`flex items-center px-8 py-3 rounded-xl font-semibold transition-all ${
                          selectedGoals.length > 0
                            ? "bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white shadow-xl hover:shadow-2xl hover:shadow-purple-500/50"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        Hoàn tất
                        <FiArrowRight className="ml-2" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Skip Option */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-8"
          >
            <button
              onClick={() => router.push("/home")}
              className="text-gray-500 hover:text-gray-700 transition text-sm underline"
            >
              Bỏ qua bước này
            </button>
          </motion.div>
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
