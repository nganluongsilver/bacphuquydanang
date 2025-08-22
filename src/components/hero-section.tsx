"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Gem, MapPin, Clock, Facebook } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-[#001e5e] via-[#001e5e]/90 to-[#001e5e]/80 dark:from-black dark:via-gray-900 dark:to-black"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-32 w-1 h-1 bg-white/30 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 right-20 w-2 h-2 bg-white/20 rounded-full animate-bounce"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-60 left-16 w-1 h-1 bg-white/30 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-32 right-1/4 w-1.5 h-1.5 bg-white/25 rounded-full animate-bounce"
          style={{ animationDelay: "0.8s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/3 w-1 h-1 bg-white/30 rounded-full animate-pulse"
          style={{ animationDelay: "1.2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-16 w-2 h-2 bg-white/20 rounded-full animate-bounce"
          style={{ animationDelay: "0.3s" }}
        ></div>
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 dark:bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 dark:bg-white/3 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative container mx-auto px-4 text-center text-white z-10">
        <Badge className="mb-6 px-4 py-2 text-sm font-semibold shadow-lg bg-white text-[#001e5e] dark:bg-yellow-400 dark:text-black animate-fade-in animate-pulse">
          <Gem className="w-4 h-4 mr-2" />
          Uy Tín Tại Đà Nẵng
        </Badge>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="block text-white dark:text-white">Trang Sức - Bạc Miếng - Bạc Thỏi</span>
        </h1>

        <div className="flex items-center justify-center gap-2 mb-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <MapPin className="w-5 h-5 text-yellow-400" />
          <p className="text-lg sm:text-xl font-semibold text-yellow-400 dark:text-gray-200">
            45 Bàu Hạc 8, Thanh Khê, Đà Nẵng
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Clock className="w-5 h-5 text-yellow-400" />
          <div className="text-base sm:text-lg text-yellow-400 dark:text-gray-200">
            <span className="font-medium">8:00 - 18:30</span>{" "}
            <span className="text-yellow-300 dark:text-gray-300">(Thứ 2 - Thứ 7)</span>
            <span className="mx-2">•</span>
            <span className="font-medium">8:00 - 17:00</span>{" "}
            <span className="text-yellow-300 dark:text-gray-300">(Chủ Nhật)</span>
          </div>
        </div>

        <p
          className="text-lg sm:text-xl md:text-2xl mb-4 max-w-4xl mx-auto leading-relaxed text-white dark:text-gray-100 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          Bộ sưu tập trang sức, bạc miếng, bạc thỏi cao cấp từ Đại Lý Bạc Phú Quý Đà Nẵng
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-4 text-base sm:text-lg font-semibold border-white text-white hover:bg-white/20 hover:scale-105 backdrop-blur-sm transition-all duration-300 bg-transparent dark:border-gray-300 dark:text-gray-200 dark:hover:bg-gray-300/20 transform hover:shadow-lg"
            onClick={() => window.open("https://www.facebook.com/bacphuquydanang", "_blank")}
          >
            <Facebook className="w-5 h-5 text-blue-400" />
            Liên Hệ Fanpage Tại Đây
          </Button>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        >
          <div className="text-center hover:scale-105 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-yellow-400 dark:text-yellow-300 mb-2">999</div>
            <div className="text-sm sm:text-base text-white/80 dark:text-gray-200">Độ Tinh Khiết</div>
          </div>
          <div className="text-center hover:scale-105 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-blue-400 dark:text-blue-300 mb-2">1+</div>
            <div className="text-sm sm:text-base text-white/80 dark:text-gray-200">Năm Kinh Nghiệm</div>
          </div>
          <div className="text-center hover:scale-105 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-purple-400 dark:text-purple-300 mb-2">100%</div>
            <div className="text-sm sm:text-base text-white/80 dark:text-gray-200">Chất Lượng Đảm Bảo</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
