import { Crown, Phone, Mail, MapPin, Clock, Facebook, Youtube, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-[#001e5e] dark:bg-gray-800 text-white py-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white via-[#001e5e] to-white dark:from-gray-600 dark:via-gray-800 dark:to-gray-600"></div>

      <div className="relative container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white dark:bg-gray-200 rounded-xl flex items-center justify-center shadow-lg">
                <Crown className="w-6 h-6 text-[#001e5e] dark:text-gray-800" />
              </div>
              <div>
                <div className="text-lg font-bold text-white dark:text-gray-100">NGÂN LƯỢNG</div>
                <div className="text-sm text-white/80 dark:text-gray-300">Silver</div>
              </div>
            </div>
            <p className="text-sm text-white/80 dark:text-gray-300 leading-relaxed mb-4">
              Chuyên cung cấp bạc mỹ nghệ cao cấp, uy tín và chất lượng hàng đầu Việt Nam.
            </p>
            <div className="text-xs text-white/70 dark:text-gray-400">
              <div className="font-semibold mb-1">CÔNG TY TNHH MTV VÀNG BẠC NGÂN LƯỢNG</div>
              <div>Mã số thuế: 0402287923</div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-base mb-4 text-white dark:text-gray-100">Điều hướng</h4>
            <ul className="space-y-2 text-sm text-white/80 dark:text-gray-300">
              <li className="hover:text-white dark:hover:text-gray-100 transition-colors cursor-pointer">Trang chủ</li>
              <li className="hover:text-white dark:hover:text-gray-100 transition-colors cursor-pointer">Điểm bán</li>
              <li className="hover:text-white dark:hover:text-gray-100 transition-colors cursor-pointer">Liên hệ</li>
              <li className="hover:text-white dark:hover:text-gray-100 transition-colors cursor-pointer">Giỏ hàng</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base mb-4 text-white dark:text-gray-100">Dịch vụ</h4>
            <ul className="space-y-2 text-sm text-white/80 dark:text-gray-300">
              <li className="hover:text-white dark:hover:text-gray-100 transition-colors cursor-pointer">
                Mua bán bạc
              </li>
              <li className="hover:text-white dark:hover:text-gray-100 transition-colors cursor-pointer">
                Tư vấn đầu tư
              </li>
              <li className="hover:text-white dark:hover:text-gray-100 transition-colors cursor-pointer">
                Giá bạc hôm nay
              </li>
              <li className="hover:text-white dark:hover:text-gray-100 transition-colors cursor-pointer">
                Chính sách bảo hành
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base mb-4 text-white dark:text-gray-100">Chính sách</h4>
            <ul className="space-y-2 text-sm text-white/80 dark:text-gray-300">
              <li className="hover:text-white dark:hover:text-gray-100 transition-colors cursor-pointer">
                Chính sách bảo hành
              </li>
              <li className="hover:text-white dark:hover:text-gray-100 transition-colors cursor-pointer">
                Chính sách bảo mật thông tin
              </li>
              <li className="hover:text-white dark:hover:text-gray-100 transition-colors cursor-pointer">
                Chính sách xử lý dữ liệu cá nhân
              </li>
              <li className="hover:text-white dark:hover:text-gray-100 transition-colors cursor-pointer">
                Điều khoản sử dụng
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base mb-4 text-white dark:text-gray-100">Liên hệ</h4>
            <div className="space-y-3 text-sm text-white/80 dark:text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-white dark:text-gray-200 mt-0.5 flex-shrink-0" />
                <span>45 Bàu Hạc 8, Thanh Khê, Đà Nẵng</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-white dark:text-gray-200" />
                <span>0763 600 889</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-white dark:text-gray-200" />
                <span>nganluongsilver@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-white dark:text-gray-200 mt-0.5 flex-shrink-0" />
                <div>
                  <div>8:00 - 18:30 (Thứ 2 - Thứ 7),</div>
                  <div>8:00 - 17:00 (Chủ Nhật)</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 pt-2">
                <Facebook className="w-5 h-5 text-blue-400 hover:text-blue-300 cursor-pointer transition-colors" />
                <Youtube className="w-5 h-5 text-red-400 hover:text-red-300 cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-pink-400 hover:text-pink-300 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 dark:border-gray-600 pt-8 text-center">
          <p className="text-white/60 dark:text-gray-400 text-sm">
            &copy; 2025 Ngân Lượng Silver. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  )
}
