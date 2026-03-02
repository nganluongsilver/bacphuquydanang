"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Clock, Facebook, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1a2644]">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#2a3d6e_0%,_#1a2644_50%,_#111b35_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-white/30" />
          <span className="text-white/60 text-[10px] tracking-[0.4em] uppercase font-medium">
            Vàng Bạc Ngân Lượng · Đà Nẵng
          </span>
          <div className="h-px w-12 bg-white/30" />
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4 tracking-tight leading-none">
          <span className="block font-extralight text-white/50 text-2xl sm:text-3xl md:text-4xl mb-3 tracking-widest uppercase">
            Đại Lý Bạc Uy Tín
          </span>
          <span className="block font-semibold text-white">
            Bạc Phú Quý
          </span>
          <span className="block font-light text-white/80">
            Đà Nẵng
          </span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/30" />
          <div className="w-1.5 h-1.5 rotate-45 bg-white/60" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/30" />
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-white/40 max-w-xl mx-auto mb-10 leading-relaxed font-light tracking-wide">
          Bạc miếng · Bạc thỏi · Tích trữ cao cấp
          <br />
          <span className="text-white/30 text-sm">Chứng nhận chất lượng 999.9 từ Phú Quý</span>
        </p>

        {/* Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 text-white/40 text-xs tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-white/60 flex-shrink-0" />
            <span>197 Nguyễn Văn Linh, Hải Châu, Đà Nẵng</span>
          </div>
          <div className="hidden sm:block h-3 w-px bg-white/20" />
          <div className="flex items-center gap-2 text-white/40 text-xs tracking-wider">
            <Clock className="w-3.5 h-3.5 text-white/60 flex-shrink-0" />
            <span>8:00–18:30 (T2–T7) · 8:00–17:00 (CN)</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Button
            size="lg"
            className="px-10 py-3 bg-white hover:bg-white/90 text-[#1a2644] text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 rounded-none shadow-lg shadow-black/20 hover:shadow-black/30"
            onClick={() => window.open("https://www.facebook.com/bacphuquydanang", "_blank")}
          >
            <Facebook className="w-4 h-4 mr-2" />
            Liên Hệ Fanpage
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-10 py-3 border border-white/30 text-white/70 text-xs tracking-[0.2em] uppercase font-medium hover:border-white hover:text-white hover:bg-white/5 transition-all duration-300 rounded-none bg-transparent"
            onClick={() => window.open("tel:0763600889", "_self")}
          >
            Gọi 0763 600 889
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
          {[
            { value: "999.9", label: "Độ tinh khiết" },
            { value: "1+", label: "Năm kinh nghiệm" },
            { value: "100%", label: "Chất lượng" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-semibold text-white mb-1">{stat.value}</div>
              <div className="text-[10px] text-white/40 tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  )
}
