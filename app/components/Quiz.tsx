"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck, FiX, FiAward, FiRefreshCw, FiArrowRight } from "react-icons/fi";
import { completeLesson, updateLessonProgress } from "../lib/progressTracker";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizProps {
  courseId: number;
  lessonId: string;
  questions: QuizQuestion[];
  passingScore: number;
  onComplete?: () => void;
}

export default function Quiz({
  courseId,
  lessonId,
  questions,
  passingScore,
  onComplete,
}: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const hasSelectedAnswer = selectedAnswers[currentQuestion.id] !== undefined;

  // Handle answer selection
  const handleAnswerSelect = (optionIndex: number) => {
    if (!showResults) {
      setSelectedAnswers({
        ...selectedAnswers,
        [currentQuestion.id]: optionIndex,
      });
      setShowExplanation(false);
    }
  };

  // Check answer and show explanation
  const handleCheckAnswer = () => {
    setShowExplanation(true);
  };

  // Go to next question
  const handleNextQuestion = () => {
    if (isLastQuestion) {
      handleSubmitQuiz();
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowExplanation(false);
    }
  };

  // Submit quiz and calculate score
  const handleSubmitQuiz = () => {
    let correctCount = 0;

    questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctCount++;
      }
    });

    const finalScore = Math.round((correctCount / questions.length) * 100);
    setScore(finalScore);
    setShowResults(true);

    // Save progress
    if (finalScore >= passingScore) {
      completeLesson(courseId, lessonId, {
        score: finalScore,
        attempts: 1,
      });
    } else {
      updateLessonProgress(courseId, lessonId, {
        score: finalScore,
        attempts: 1,
        completed: false,
      });
    }
  };

  // Retry quiz
  const handleRetry = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setShowExplanation(false);
    setScore(0);
  };

  // Results view
  if (showResults) {
    const passed = score >= passingScore;

    return (
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8 text-center"
        >
          {/* Icon */}
          <div
            className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${
              passed
                ? "bg-gradient-to-r from-green-400 to-green-600"
                : "bg-gradient-to-r from-red-400 to-red-600"
            }`}
          >
            {passed ? (
              <FiAward className="w-12 h-12 text-white" />
            ) : (
              <FiX className="w-12 h-12 text-white" />
            )}
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {passed ? "Chúc mừng bạn!" : "Chưa đạt yêu cầu"}
          </h2>

          {/* Score */}
          <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            {score}%
          </div>

          {/* Message */}
          <p className="text-gray-600 mb-6">
            {passed
              ? `Bạn đã hoàn thành bài quiz với ${score}%. Xuất sắc!`
              : `Bạn cần đạt tối thiểu ${passingScore}% để hoàn thành. Hãy thử lại!`}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">
                {questions.length}
              </div>
              <div className="text-sm text-gray-600">Tổng câu hỏi</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600">
                {Math.round((score / 100) * questions.length)}
              </div>
              <div className="text-sm text-gray-600">Đúng</div>
            </div>
            <div className="bg-red-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-red-600">
                {questions.length - Math.round((score / 100) * questions.length)}
              </div>
              <div className="text-sm text-gray-600">Sai</div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={handleRetry}
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition font-medium"
            >
              <FiRefreshCw className="w-5 h-5" />
              Làm lại
            </button>
            {passed && onComplete && (
              <button
                onClick={onComplete}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition font-medium"
              >
                Tiếp tục
                <FiArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  // Quiz view
  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">
            Câu hỏi {currentQuestionIndex + 1}/{questions.length}
          </span>
          <span className="text-sm font-medium text-gray-600">
            {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Question card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          {/* Question */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {currentQuestion.question}
          </h2>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswers[currentQuestion.id] === index;
              const isCorrect = index === currentQuestion.correctAnswer;
              const showCorrectness = showExplanation;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                    showCorrectness
                      ? isCorrect
                        ? "border-green-500 bg-green-50"
                        : isSelected
                        ? "border-red-500 bg-red-50"
                        : "border-gray-200 bg-gray-50"
                      : isSelected
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                  } ${showExplanation ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{option}</span>
                    {showCorrectness && isCorrect && (
                      <FiCheck className="w-6 h-6 text-green-600" />
                    )}
                    {showCorrectness && isSelected && !isCorrect && (
                      <FiX className="w-6 h-6 text-red-600" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className={`p-4 rounded-xl mb-6 ${
                  selectedAnswers[currentQuestion.id] ===
                  currentQuestion.correctAnswer
                    ? "bg-green-50 border border-green-200"
                    : "bg-blue-50 border border-blue-200"
                }`}
              >
                <p className="text-sm font-medium text-gray-700 mb-1">
                  Giải thích:
                </p>
                <p className="text-sm text-gray-600">
                  {currentQuestion.explanation}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Actions */}
          <div className="flex gap-3">
            {!showExplanation ? (
              <button
                onClick={handleCheckAnswer}
                disabled={!hasSelectedAnswer}
                className={`flex-1 py-3 rounded-xl font-semibold transition ${
                  hasSelectedAnswer
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Kiểm tra
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="flex-1 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg transition flex items-center justify-center gap-2"
              >
                {isLastQuestion ? "Xem kết quả" : "Câu tiếp theo"}
                <FiArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
