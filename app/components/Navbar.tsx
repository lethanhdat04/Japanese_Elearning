"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSearch, FiHome, FiBookOpen, FiMusic, FiUser, FiLogOut } from "react-icons/fi";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  // Check if user is logged in (simple check based on pathname)
  const isLoggedIn = pathname !== "/" && pathname !== "/login";

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic here
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={isLoggedIn ? "/home" : "/"} className="flex items-center group">
            <div className="relative">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                WabiSabi
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-500 group-hover:w-full transition-all duration-300"></div>
            </div>
          </Link>

          {/* Search Bar - Only show when logged in */}
          {isLoggedIn && (
            <form onSubmit={handleSearch} className="flex-1 max-w-md mx-8">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Tìm kiếm khóa học, video, bài giảng..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200"
                />
              </div>
            </form>
          )}

          {/* Menu Items */}
          {isLoggedIn ? (
            <div className="flex items-center space-x-2">
              <Link
                href="/home"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive("/home")
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <FiHome className="w-4 h-4" />
                <span className="font-medium">Home</span>
              </Link>
              <Link
                href="/home"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  pathname.startsWith("/course")
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <FiBookOpen className="w-4 h-4" />
                <span className="font-medium">Courses</span>
              </Link>
              <Link
                href="/music"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive("/music")
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <FiMusic className="w-4 h-4" />
                <span className="font-medium">Music</span>
              </Link>
              <Link
                href="/profile"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive("/profile")
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <FiUser className="w-4 h-4" />
                <span className="font-medium">Profile</span>
              </Link>
              <Link
                href="/"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-500 transition-all duration-200"
              >
                <FiLogOut className="w-4 h-4" />
                <span className="font-medium">Logout</span>
              </Link>
              {/* User Avatar */}
              <div className="ml-2 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200">
                U
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200 font-medium"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
