"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiVolume2,
  FiMic,
  FiCheck,
  FiArrowRight,
  FiAward,
} from "react-icons/fi";
import { completeLesson } from "../lib/progressTracker";

interface Word {
  id: number;
  hiragana: string;
  romaji: string;
  meaning: string;
  audioUrl: string;
}

interface PronunciationPracticeProps {
  courseId: number;
  lessonId: string;
  words: Word[];
  onComplete?: () => void;
}

export default function PronunciationPractice({
  courseId,
  lessonId,
  words,
  onComplete,
}: PronunciationPracticeProps) {
  const [practicedWords, setPracticedWords] = useState<Set<number>>(new Set());
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const currentWord = words[currentWordIndex];
  const allPracticed = practicedWords.size === words.length;
  const isWordPracticed = practicedWords.has(currentWord.id);

  // Play audio
  const playAudio = (audioUrl: string) => {
    // In production, this would play actual audio files
    // For now, we'll use Web Speech API for demonstration
    const utterance = new SpeechSynthesisUtterance(currentWord.romaji);
    utterance.lang = "ja-JP";
    utterance.rate = 0.7;
    window.speechSynthesis.speak(utterance);
  };

  // Start recording
  const startRecording = () => {
    setIsRecording(true);

    // Simulate recording for 2 seconds
    setTimeout(() => {
      setIsRecording(false);
      handlePracticeComplete();
    }, 2000);

    // In production, implement actual speech recognition here
    // Example with Web Speech API:
    /*
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'ja-JP';
    recognition.start();
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      // Process and compare with currentWord.romaji
      handlePracticeComplete();
    };
    */
  };

  // Mark word as practiced
  const handlePracticeComplete = () => {
    setPracticedWords(new Set([...practicedWords, currentWord.id]));

    // Check if all words are practiced
    if (practicedWords.size + 1 === words.length) {
      setShowSuccess(true);
      completeLesson(courseId, lessonId, {
        practicedWords: words.length,
      });
    }
  };

  // Go to next word
  const handleNextWord = () => {
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
    }
  };

  // Go to previous word
  const handlePreviousWord = () => {
    if (currentWordIndex > 0) {
      setCurrentWordIndex(currentWordIndex - 1);
    }
  };

  // Success view
  if (showSuccess) {
    return (
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8 text-center"
        >
          {/* Icon */}
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 flex items-center justify-center">
            <FiAward className="w-12 h-12 text-white" />
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Xuất sắc!
          </h2>

          {/* Message */}
          <p className="text-gray-600 mb-6">
            Bạn đã hoàn thành luyện phát âm {words.length} từ vựng!
          </p>

          {/* Stats */}
          <div className="bg-pink-50 rounded-xl p-6 mb-8">
            <div className="text-5xl font-bold text-pink-600 mb-2">
              {words.length}
            </div>
            <div className="text-gray-600">Từ vựng đã luyện</div>
          </div>

          {/* Action */}
          {onComplete && (
            <button
              onClick={onComplete}
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition font-medium mx-auto"
            >
              Tiếp tục
              <FiArrowRight className="w-5 h-5" />
            </button>
          )}
        </motion.div>
      </div>
    );
  }

  // Practice view
  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">
            Tiến độ: {practicedWords.size}/{words.length}
          </span>
          <span className="text-sm font-medium text-gray-600">
            {Math.round((practicedWords.size / words.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-pink-400 to-pink-600 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${(practicedWords.size / words.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Word card */}
        <motion.div
          key={currentWord.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          {/* Word display */}
          <div className="text-center mb-8">
            {/* Hiragana */}
            <div className="text-7xl font-bold text-gray-900 mb-4">
              {currentWord.hiragana}
            </div>

            {/* Romaji */}
            <div className="text-2xl text-gray-600 mb-2">
              {currentWord.romaji}
            </div>

            {/* Meaning */}
            <div className="text-lg text-gray-500">{currentWord.meaning}</div>
          </div>

          {/* Play button */}
          <button
            onClick={() => playAudio(currentWord.audioUrl)}
            className="w-full mb-4 py-4 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl transition flex items-center justify-center gap-3 font-medium"
          >
            <FiVolume2 className="w-6 h-6" />
            Nghe phát âm
          </button>

          {/* Record button */}
          <button
            onClick={startRecording}
            disabled={isRecording || isWordPracticed}
            className={`w-full py-4 rounded-xl transition flex items-center justify-center gap-3 font-medium ${
              isWordPracticed
                ? "bg-green-50 text-green-600 cursor-not-allowed"
                : isRecording
                ? "bg-red-500 text-white animate-pulse"
                : "bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:shadow-lg"
            }`}
          >
            {isWordPracticed ? (
              <>
                <FiCheck className="w-6 h-6" />
                Đã luyện
              </>
            ) : isRecording ? (
              <>
                <FiMic className="w-6 h-6" />
                Đang ghi âm...
              </>
            ) : (
              <>
                <FiMic className="w-6 h-6" />
                Bấm để luyện phát âm
              </>
            )}
          </button>

          {/* Navigation */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={handlePreviousWord}
              disabled={currentWordIndex === 0}
              className={`flex-1 py-2 rounded-lg transition ${
                currentWordIndex === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              ← Trước
            </button>
            <button
              onClick={handleNextWord}
              disabled={currentWordIndex === words.length - 1}
              className={`flex-1 py-2 rounded-lg transition ${
                currentWordIndex === words.length - 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Sau →
            </button>
          </div>
        </motion.div>

        {/* Word list */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Danh sách từ vựng
          </h3>
          <div className="space-y-2 max-h-[500px] overflow-y-auto">
            {words.map((word, index) => {
              const isPracticed = practicedWords.has(word.id);
              const isCurrent = index === currentWordIndex;

              return (
                <button
                  key={word.id}
                  onClick={() => setCurrentWordIndex(index)}
                  className={`w-full p-4 rounded-xl text-left transition-all ${
                    isCurrent
                      ? "bg-gradient-to-r from-pink-50 to-purple-50 border-2 border-pink-300"
                      : isPracticed
                      ? "bg-green-50 border border-green-200"
                      : "bg-gray-50 border border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl font-bold">
                          {word.hiragana}
                        </span>
                        {isPracticed && (
                          <FiCheck className="w-5 h-5 text-green-600" />
                        )}
                      </div>
                      <div className="text-sm text-gray-600">
                        {word.romaji} - {word.meaning}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
