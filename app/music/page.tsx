"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { useMusicPlayer } from "../components/MusicPlayer";
import { japaneseMusic } from "../lib/mockData";
import { FiPlay, FiMusic, FiFilter, FiSearch } from "react-icons/fi";

export default function MusicPage() {
  const { playSong } = useMusicPlayer();
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const genres = ["All", "J-Pop", "J-Rock", "Anime"];
  const levels = ["All", "N5", "N4", "N3", "N2"];

  const filteredMusic = japaneseMusic.filter(song => {
    const matchesGenre = selectedGenre === "All" || song.genre === selectedGenre;
    const matchesLevel = selectedLevel === "All" || song.level === selectedLevel;
    const matchesSearch = song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          song.artist.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGenre && matchesLevel && matchesSearch;
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        {/* Header */}
        <div className="py-10 bg-linear-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FiMusic className="w-12 h-12" />
                <h1 className="text-5xl font-bold">Âm nhạc Nhật Bản</h1>
              </div>
              <p className="text-xl text-white/90 max-w-2xl">
                Luyện nghe tiếng Nhật qua các bài hát J-Pop, Anime yêu thích
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-6 mb-8"
          >
            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Tìm kiếm bài hát, nghệ sĩ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Genre Filter */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                  <FiFilter className="w-4 h-4 mr-2" />
                  Thể loại
                </label>
                <div className="flex flex-wrap gap-2">
                  {genres.map((genre) => (
                    <button
                      key={genre}
                      onClick={() => setSelectedGenre(genre)}
                      className={`px-4 py-2 rounded-xl font-medium transition-all ${
                        selectedGenre === genre
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {genre}
                    </button>
                  ))}
                </div>
              </div>

              {/* Level Filter */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                  <FiFilter className="w-4 h-4 mr-2" />
                  Trình độ
                </label>
                <div className="flex flex-wrap gap-2">
                  {levels.map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`px-4 py-2 rounded-xl font-medium transition-all ${
                        selectedLevel === level
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Tìm thấy <span className="font-bold text-purple-600">{filteredMusic.length}</span> bài hát
              </p>
              {(selectedGenre !== "All" || selectedLevel !== "All" || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedGenre("All");
                    setSelectedLevel("All");
                    setSearchQuery("");
                  }}
                  className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                >
                  Xóa bộ lọc
                </button>
              )}
            </div>
          </motion.div>

          {/* Music Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMusic.map((song, index) => (
              <motion.div
                key={song.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => playSong(song)}
              >
                {/* Thumbnail */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={song.thumbnail}
                    alt={song.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl"
                    >
                      <FiPlay className="w-8 h-8 text-purple-600 ml-1" />
                    </motion.div>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2 py-1 bg-purple-500 text-white text-xs font-bold rounded-full">
                      {song.level}
                    </span>
                    {song.lyrics && (
                      <span className="px-2 py-1 bg-pink-500 text-white text-xs font-bold rounded-full">
                        Lyrics
                      </span>
                    )}
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium rounded">
                    {song.duration}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1 line-clamp-1 group-hover:text-purple-600 transition-colors">
                    {song.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-1">{song.artist}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {song.genre}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredMusic.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <FiMusic className="w-20 h-20 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Không tìm thấy bài hát</h3>
              <p className="text-gray-600 mb-6">Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
              <button
                onClick={() => {
                  setSelectedGenre("All");
                  setSelectedLevel("All");
                  setSearchQuery("");
                }}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-lg transition"
              >
                Xóa bộ lọc
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </Layout>
  );
}
