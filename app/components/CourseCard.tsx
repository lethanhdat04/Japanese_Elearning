"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiClock, FiBookOpen, FiUser, FiPlay } from "react-icons/fi";

interface CourseCardProps {
  id: number;
  title: string;
  description: string;
  level: string;
  thumbnail: string;
  instructor: string;
  duration: string;
  lessonsCount: number;
}

export default function CourseCard({
  id,
  title,
  description,
  level,
  thumbnail,
  instructor,
  duration,
  lessonsCount,
}: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" style={{ padding: '2px' }}>
        <div className="absolute inset-[2px] bg-white rounded-2xl"></div>
      </div>

      <div className="relative z-10">
        {/* Thumbnail with overlay */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Play Icon on Hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
              <FiPlay className="w-8 h-8 text-blue-600 ml-1" />
            </div>
          </div>

          {/* Level Badge */}
          <div className="absolute top-3 right-3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
              {level}
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">
              <FiUser className="w-4 h-4 mr-2 text-blue-500" />
              <span className="truncate">{instructor}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">
              <FiBookOpen className="w-4 h-4 mr-2 text-purple-500" />
              <span>{lessonsCount} bài</span>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center text-sm font-semibold text-gray-700">
              <FiClock className="w-4 h-4 mr-1.5 text-orange-500" />
              {duration}
            </div>
            <Link href={`/course/${id}`}>
              <button className="relative px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium overflow-hidden group/btn">
                <span className="relative z-10">Xem chi tiết</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
