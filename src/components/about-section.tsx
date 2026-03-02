"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Image from 'next/image'

const images = [
  { src: "/images/4.jpg", alt: "Văn phòng tư vấn đầu tư bạc tại Đà Nẵng" },
  { src: "/images/9.jpg", alt: "Trưng bày bạc thỏi và xu bạc chất lượng cao" },
  { src: "/images/6.jpg", alt: "Tư vấn khách hàng tại trung tâm đầu tư bạc" },
  { src: "/images/5.1.jpg", alt: "Kho bảo quản bạc hiện đại và an toàn" },
  { src: "/images/8.jpg", alt: "Chứng nhận đầu tư bạc chính thức" },
]

const highlights = [
  { title: "Uy Tín Hàng Đầu", desc: "Được hàng nghìn khách hàng tin tưởng tại Đà Nẵng" },
  { title: "Giá Cả Minh Bạch", desc: "Cập nhật giá theo thời gian thực, không phí ẩn" },
  { title: "Chất Lượng Đảm Bảo", desc: "100% bạc nguyên chất, chứng nhận từ Phú Quý" },
]

export function AboutSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isDragging])

  const handleDragStart = (clientX: number) => { setIsDragging(true); setStartX(clientX); setDragOffset(0) }
  const handleDragMove = (clientX: number) => { if (!isDragging) return; setDragOffset(clientX - startX) }
  const handleDragEnd = () => {
    if (!isDragging) return
    if (Math.abs(dragOffset) > 50) {
      if (dragOffset > 0) setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
      else setCurrentImage((prev) => (prev + 1) % images.length)
    }
    setIsDragging(false); setDragOffset(0)
  }

  return (
    <section id="gioi-thieu" className="py-24 bg-[#1a2644]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-white/20" />
              <span className="text-white/50 text-[10px] tracking-[0.4em] uppercase">Về Chúng Tôi</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-light text-white mb-6 leading-tight tracking-tight">
              Tại Sao Chọn{" "}
              <span className="font-semibold">Bạc Phú Quý</span>
              <br />Đà Nẵng?
            </h2>

            <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-md">
              Với nhiều năm kinh nghiệm trong lĩnh vực đầu tư kim loại quý, chúng tôi tự hào là đơn vị uy tín hàng đầu tại Đà Nẵng, được hàng nghìn khách hàng lựa chọn.
            </p>

            <div className="space-y-6">
              {highlights.map((h, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 border border-white/20 group-hover:border-white/60 flex items-center justify-center transition-colors duration-300">
                      <div className="w-1.5 h-1.5 bg-white/40 group-hover:bg-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white/80 mb-1 tracking-wide">{h.title}</h4>
                    <p className="text-white/40 text-xs leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Carousel */}
          <div className="relative">
            <div
              className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none border border-white/10"
              ref={carouselRef}
              onMouseDown={(e) => { e.preventDefault(); handleDragStart(e.clientX) }}
              onMouseMove={(e) => handleDragMove(e.clientX)}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
              onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
              onTouchEnd={handleDragEnd}
            >
              <div
                className="flex"
                style={{
                  transform: `translateX(-${currentImage * 100}%) translateX(${isDragging ? dragOffset : 0}px)`,
                  transition: isDragging ? 'none' : 'transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
              >
                {images.map((image, index) => (
                  <Image
                    key={index}
                    src={image.src || "/nls_logo_root.jpg"}
                    alt={image.alt}
                    className="w-full h-72 md:h-96 object-cover flex-shrink-0 pointer-events-none"
                    draggable={false}
                    width={800}
                    height={384}
                    priority={index === 0}
                  />
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2644]/50 to-transparent pointer-events-none" />
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`transition-all duration-300 ${
                    index === currentImage ? "w-6 h-1 bg-white" : "w-1 h-1 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
