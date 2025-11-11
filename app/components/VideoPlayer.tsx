"use client";

import { motion } from "framer-motion";

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  description: string;
  keyPoints: string[];
  duration: string;
}

export default function VideoPlayer({
  videoUrl,
  title,
  description,
  keyPoints,
  duration,
}: VideoPlayerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      {/* Video Player */}
      <div className="relative pt-[56.25%] bg-gray-900">
        <iframe
          src={videoUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>

      {/* Video Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {duration}
          </span>
        </div>

        <p className="text-gray-600 mb-6">{description}</p>

        {/* Key Points */}
        <div className="border-t pt-4">
          <h3 className="font-semibold text-gray-900 mb-3">
            Điểm chính trong bài học:
          </h3>
          <ul className="space-y-2">
            {keyPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 mt-6">
          <button className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition font-medium">
            Đánh dấu đã xem
          </button>
          <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition font-medium">
            Thêm vào danh sách
          </button>
        </div>
      </div>
    </motion.div>
  );
}
