import { FiHeart, FiMail, FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-auto overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
              WabiSabi
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Cùng bạn chinh phục tiếng Nhật với phương pháp học hiện đại và hiệu quả nhất.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Liên kết</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Khóa học
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Giảng viên
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Hỗ trợ</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Trung tâm trợ giúp
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Điều khoản
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Chính sách
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <FiMail className="w-4 h-4 mr-2" />
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 WabiSabi. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <FiHeart className="mx-1.5 text-pink-500 animate-pulse" /> in Vietnam
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
