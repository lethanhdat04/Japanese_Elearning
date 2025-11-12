"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiClock } from "react-icons/fi";
import { completeLesson, updateLessonProgress, getLessonProgress } from "../lib/progressTracker";

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  description: string;
  keyPoints: string[];
  duration: string;
  courseId: number;
  lessonId: string;
  onComplete?: () => void;
}

export default function VideoPlayer({
  videoUrl,
  title,
  description,
  keyPoints,
  duration,
  courseId,
  lessonId,
  onComplete,
}: VideoPlayerProps) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [watchTime, setWatchTime] = useState(0); // Percentage watched
  const playerRef = useRef<any>(null);
  const updateIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const COMPLETION_THRESHOLD = 80; // 80% watched to auto-complete

  // Load progress from tracker
  useEffect(() => {
    const progress = getLessonProgress(courseId, lessonId);
    setIsCompleted(progress.completed || false);
    setWatchTime(progress.watchTime || 0);
  }, [courseId, lessonId]);

  // Initialize YouTube IFrame API
  useEffect(() => {
    const videoId = extractYouTubeVideoId(videoUrl);

    if (videoId) {
      // Check if YouTube API is already loaded
      if ((window as any).YT && (window as any).YT.Player) {
        initializePlayer(videoId);
      } else {
        // Load YouTube IFrame API
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

        // YouTube API ready callback
        (window as any).onYouTubeIframeAPIReady = () => {
          initializePlayer(videoId);
        };
      }
    }

    return () => {
      if (updateIntervalRef.current) {
        clearInterval(updateIntervalRef.current);
      }
      // Cleanup player
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, [videoUrl]);

  const initializePlayer = (videoId: string) => {
    playerRef.current = new (window as any).YT.Player("youtube-player", {
      videoId: videoId,
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
      },
      events: {
        onStateChange: onPlayerStateChange,
      },
    });
  };

  // Extract YouTube video ID from URL
  const extractYouTubeVideoId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Handle player state changes
  const onPlayerStateChange = (event: any) => {
    // Playing state
    if (event.data === 1) {
      startTracking();
    }
    // Paused or ended
    else if (event.data === 2 || event.data === 0) {
      stopTracking();

      // Check completion when video ends
      if (event.data === 0) {
        updateWatchProgress();
      }
    }
  };

  // Start tracking watch time
  const startTracking = () => {
    if (updateIntervalRef.current) {
      clearInterval(updateIntervalRef.current);
    }

    updateIntervalRef.current = setInterval(() => {
      updateWatchProgress();
    }, 3000); // Update every 3 seconds
  };

  // Stop tracking
  const stopTracking = () => {
    if (updateIntervalRef.current) {
      clearInterval(updateIntervalRef.current);
    }
  };

  // Update watch progress
  const updateWatchProgress = () => {
    if (playerRef.current && playerRef.current.getDuration) {
      const currentTime = playerRef.current.getCurrentTime();
      const totalTime = playerRef.current.getDuration();

      if (totalTime > 0) {
        const percentage = Math.min((currentTime / totalTime) * 100, 100);
        setWatchTime(percentage);

        // Save progress
        updateLessonProgress(courseId, lessonId, {
          watchTime: percentage,
          lastWatched: new Date().toISOString(),
        });

        // Auto-complete at 80%
        if (percentage >= COMPLETION_THRESHOLD && !isCompleted) {
          handleAutoComplete(percentage);
        }
      }
    }
  };

  // Auto-complete when threshold reached
  const handleAutoComplete = (currentWatchTime: number) => {
    setIsCompleted(true);
    completeLesson(courseId, lessonId, {
      watchTime: currentWatchTime,
      autoCompleted: true,
    });

    if (onComplete) {
      onComplete();
    }
  };

  // Manual completion toggle
  const toggleCompletion = () => {
    const newStatus = !isCompleted;
    setIsCompleted(newStatus);

    if (newStatus) {
      completeLesson(courseId, lessonId, {
        watchTime: Math.max(watchTime, COMPLETION_THRESHOLD),
        manuallyCompleted: true,
      });
    } else {
      updateLessonProgress(courseId, lessonId, {
        completed: false,
        watchTime: watchTime,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      {/* Video Player */}
      <div className="relative pt-[56.25%] bg-gray-900">
        {extractYouTubeVideoId(videoUrl) ? (
          <div
            id="youtube-player"
            className="absolute top-0 left-0 w-full h-full"
          />
        ) : (
          <iframe
            src={videoUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          />
        )}

        {/* Watch progress indicator */}
        {watchTime > 0 && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700 z-10">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
              style={{ width: `${watchTime}%` }}
            />
          </div>
        )}
      </div>

      {/* Video Info */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {duration}
          </span>
        </div>

        <p className="text-gray-600 mb-4">{description}</p>

        {/* Watch Progress */}
        {watchTime > 0 && (
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <FiClock className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">
                  Tiến độ xem
                </span>
              </div>
              <span className="text-sm font-bold text-blue-600">
                {Math.round(watchTime)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${watchTime}%` }}
              />
            </div>
            {watchTime >= COMPLETION_THRESHOLD && !isCompleted && (
              <p className="text-xs text-green-600 mt-2 font-medium">
                🎉 Bạn đã xem đủ 80% để hoàn thành bài học!
              </p>
            )}
          </div>
        )}

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
        <div className="mt-6">
          {/* Completion status */}
          <button
            onClick={toggleCompletion}
            className={`w-full px-6 py-3 rounded-xl transition font-semibold flex items-center justify-center gap-2 ${
              isCompleted
                ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30"
                : watchTime >= COMPLETION_THRESHOLD
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!isCompleted && watchTime < COMPLETION_THRESHOLD}
          >
            {isCompleted && <FiCheck className="w-5 h-5" />}
            {isCompleted
              ? "Đã hoàn thành"
              : watchTime >= COMPLETION_THRESHOLD
              ? "Đánh dấu hoàn thành"
              : `Xem thêm ${COMPLETION_THRESHOLD - Math.round(watchTime)}% để hoàn thành`}
          </button>

          {watchTime < COMPLETION_THRESHOLD && (
            <p className="text-xs text-gray-500 text-center mt-3">
              💡 Hệ thống tự động theo dõi tiến độ xem video của bạn
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
