"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from 'next/image'

export function AboutSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const images = [
    {
      src: "/images/4.jpg",
      alt: "Văn phòng tư vấn đầu tư bạc chuyên nghiệp tại Đà Nẵng",
    },
    {
      src: "/images/9.jpg",
      alt: "Trưng bày các sản phẩm bạc thỏi và xu bạc chất lượng cao",
    },
    {
      src: "/images/6.jpg",
      alt: "Tư vấn khách hàng tại trung tâm đầu tư bạc",
    },
    {
      src: "/images/5.1.jpg",
      alt: "Kho bảo quản bạc hiện đại và an toàn",
    },
    {
      src: "/images/8.jpg",
      alt: "Chứng nhận và giấy tờ đầu tư bạc chính thức",
    },
  ]

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentImage((prev) => (prev + 1) % images.length)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length, isDragging])

  const handleDragStart = (clientX: number) => {
    setIsDragging(true)
    setStartX(clientX)
    setDragOffset(0)
  }

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return
    const diff = clientX - startX
    setDragOffset(diff)
  }

  const handleDragEnd = () => {
    if (!isDragging) return

    const threshold = 50 // Minimum drag distance to trigger slide change

    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        // Dragged right - go to previous image
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
      } else {
        // Dragged left - go to next image
        setCurrentImage((prev) => (prev + 1) % images.length)
      }
    }

    setIsDragging(false)
    setDragOffset(0)
  }

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    handleDragStart(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX)
  }

  const handleMouseUp = () => {
    handleDragEnd()
  }

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    handleDragEnd()
  }

  return (
    <section id="gioi-thieu" className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#001e5e] dark:text-yellow-400 mb-4">
              Tại Sao Chọn Đại Lý Bạc Phú Quý Đà Nẵng?
            </h2>
            <p className="text-sm sm:text-base text-[#001e5e]/70 dark:text-gray-300 mb-4">
              Với nhiều năm kinh nghiệm trong lĩnh vực đầu tư kim loại quý, chúng tôi tự hào là đơn vị uy tín hàng đầu
              tại Đà Nẵng.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-[#001e5e] dark:bg-yellow-400 rounded-full flex items-center justify-center mt-1">
                  <span className="text-xs text-white dark:text-black font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#001e5e] dark:text-white text-sm">Uy Tín Hàng Đầu</h4>
                  <p className="text-[#001e5e]/70 dark:text-gray-300 text-xs">Được hàng nghìn khách hàng tin tưởng</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-[#001e5e] dark:bg-yellow-400 rounded-full flex items-center justify-center mt-1">
                  <span className="text-xs text-white dark:text-black font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#001e5e] dark:text-white text-sm">Giá Cả Minh Bạch</h4>
                  <p className="text-[#001e5e]/70 dark:text-gray-300 text-xs">
                    Không phí ẩn, cập nhật giá theo thời gian thực
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-[#001e5e] dark:bg-yellow-400 rounded-full flex items-center justify-center mt-1">
                  <span className="text-xs text-white dark:text-black font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#001e5e] dark:text-white text-sm">Chất Lượng Đảm Bảo</h4>
                  <p className="text-[#001e5e]/70 dark:text-gray-300 text-xs">
                    100% bạc nguyên chất với chứng nhận đảm bảo từ Phú Quý
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className="overflow-hidden rounded-lg shadow-xl cursor-grab active:cursor-grabbing select-none"
              ref={carouselRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentImage * 100}%) translateX(${isDragging ? dragOffset : 0}px)`,
                  transitionDuration: isDragging ? "0ms" : "500ms",
                }}
              >
                {images.map((image, index) => (
                  <Image
                    key={index}
                    src={image.src || "/nls_logo_root.jpg"}
                    alt={image.alt}
                    className="w-full h-64 md:h-80 object-cover flex-shrink-0 pointer-events-none"
                    draggable={false}
                    width={800}
                    height={320}
                    priority={index === 0}
                  />
                ))}
              </div>
            </div>

            {/* Carousel indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImage ? "bg-[#001e5e] dark:bg-yellow-400" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
