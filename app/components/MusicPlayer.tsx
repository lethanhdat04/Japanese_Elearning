"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlay, FiPause, FiSkipForward, FiSkipBack, FiVolume2, FiX, FiMaximize2 } from "react-icons/fi";

interface Song {
  id: number;
  title: string;
  artist: string;
  thumbnail: string;
  audioUrl: string;
  duration: string;
}

interface MusicPlayerContextType {
  currentSong: Song | null;
  isPlaying: boolean;
  playSong: (song: Song) => void;
  togglePlay: () => void;
  nextSong: () => void;
  prevSong: () => void;
  closePlaye: () => void;
}

const MusicPlayerContext = createContext<MusicPlayerContextType | null>(null);

export const useMusicPlayer = () => {
  const context = useContext(MusicPlayerContext);
  if (!context) throw new Error("useMusicPlayer must be used within MusicPlayerProvider");
  return context;
};

export function MusicPlayerProvider({ children }: { children: React.ReactNode }) {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [progress, setProgress] = useState(0);

  const playSong = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    setProgress(0);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    // Implementation would load next song from playlist
    console.log("Next song");
  };

  const prevSong = () => {
    // Implementation would load previous song
    console.log("Previous song");
  };

  const closePlayer = () => {
    setCurrentSong(null);
    setIsPlaying(false);
  };

  // Simulate progress
  useEffect(() => {
    if (isPlaying && currentSong) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + 0.5;
        });
      }, 500);
      return () => clearInterval(interval);
    }
  }, [isPlaying, currentSong]);

  return (
    <MusicPlayerContext.Provider
      value={{ currentSong, isPlaying, playSong, togglePlay, nextSong, prevSong, closePlaye: closePlayer }}
    >
      {children}
      <AnimatePresence>
        {currentSong && <FloatingPlayer />}
      </AnimatePresence>
    </MusicPlayerContext.Provider>
  );
}

function FloatingPlayer() {
  const { currentSong, isPlaying, togglePlay, nextSong, prevSong, closePlaye } = useMusicPlayer();
  const [volume, setVolume] = useState(70);
  const [progress, setProgress] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress(prev => (prev >= 100 ? 0 : prev + 0.5));
      }, 500);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  if (!currentSong) return null;

  return (
    <>
      {/* Mini Player */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700 shadow-2xl"
      >
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-700">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Song Info */}
            <div className="flex items-center gap-4 min-w-0 flex-1">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={currentSong.thumbnail}
                alt={currentSong.title}
                className="w-14 h-14 rounded-lg object-cover shadow-lg cursor-pointer"
                onClick={() => setIsExpanded(true)}
              />
              <div className="min-w-0 flex-1">
                <h4 className="text-white font-semibold truncate">{currentSong.title}</h4>
                <p className="text-gray-400 text-sm truncate">{currentSong.artist}</p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevSong}
                className="p-2 text-gray-400 hover:text-white transition"
              >
                <FiSkipBack className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={togglePlay}
                className="p-3 bg-white text-gray-900 rounded-full hover:scale-110 transition shadow-lg"
              >
                {isPlaying ? <FiPause className="w-5 h-5" /> : <FiPlay className="w-5 h-5 ml-0.5" />}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextSong}
                className="p-2 text-gray-400 hover:text-white transition"
              >
                <FiSkipForward className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Volume & Actions */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <FiVolume2 className="w-4 h-4 text-gray-400" />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-20 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #8b5cf6 0%, #8b5cf6 ${volume}%, #374151 ${volume}%, #374151 100%)`
                  }}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsExpanded(true)}
                className="p-2 text-gray-400 hover:text-white transition"
              >
                <FiMaximize2 className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closePlaye}
                className="p-2 text-gray-400 hover:text-white transition"
              >
                <FiX className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Expanded Player Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 backdrop-blur-xl"
            onClick={() => setIsExpanded(false)}
          >
            <div className="h-full flex flex-col items-center justify-center p-8" onClick={(e) => e.stopPropagation()}>
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition"
                onClick={() => setIsExpanded(false)}
              >
                <FiX className="w-6 h-6 text-white" />
              </motion.button>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-center max-w-2xl"
              >
                <motion.img
                  src={currentSong.thumbnail}
                  alt={currentSong.title}
                  className="w-64 h-64 md:w-96 md:h-96 rounded-3xl shadow-2xl mx-auto mb-8 object-cover"
                  whileHover={{ scale: 1.02 }}
                />

                <h2 className="text-4xl font-bold text-white mb-3">{currentSong.title}</h2>
                <p className="text-2xl text-gray-400 mb-8">{currentSong.artist}</p>

                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden mb-2">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>{Math.floor(progress / 100 * 4)}:30</span>
                    <span>{currentSong.duration}</span>
                  </div>
                </div>

                {/* Large Controls */}
                <div className="flex items-center justify-center gap-6">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevSong}
                    className="p-4 text-white hover:text-blue-400 transition"
                  >
                    <FiSkipBack className="w-8 h-8" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={togglePlay}
                    className="p-6 bg-white text-gray-900 rounded-full shadow-2xl"
                  >
                    {isPlaying ? <FiPause className="w-10 h-10" /> : <FiPlay className="w-10 h-10 ml-1" />}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextSong}
                    className="p-4 text-white hover:text-blue-400 transition"
                  >
                    <FiSkipForward className="w-8 h-8" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
