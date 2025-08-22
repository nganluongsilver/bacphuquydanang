"use client"
import { Crown, Search, Moon, Sun, Monitor, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    console.log("[v0] Current theme:", theme)
    let newTheme: string

    if (theme === "system") {
      newTheme = "light"
    } else if (theme === "light") {
      newTheme = "dark"
    } else {
      newTheme = "system"
    }

    console.log("[v0] Setting theme to:", newTheme)
    setTheme(newTheme)
  }

  const getThemeIcon = () => {
    if (theme === "dark") {
      return <Sun className="w-4 h-4 text-white" />
    } else if (theme === "light") {
      return <Moon className="w-4 h-4 text-white" />
    } else {
      return <Monitor className="w-4 h-4 text-white" />
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#001e5e] text-white shadow-lg border-b border-white/10 backdrop-blur-md">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Crown className="w-5 h-5 text-[#001e5e]" />
              </div>
              <div>
                <h1 className="text-sm font-bold text-white">NGÂN LƯỢNG</h1>
                <p className="text-xs opacity-80 text-white">Silver</p>
              </div>
            </div>
            <div className="w-6 h-6"></div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#001e5e] dark:bg-gray-900 text-white shadow-lg border-b border-white/10 backdrop-blur-md">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Crown className="w-5 h-5 text-[#001e5e]" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-white">NGÂN LƯỢNG</h1>
              <p className="text-xs opacity-80 text-white">Silver</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#" className="text-sm hover:text-white/80 transition-colors text-white">
              Trang chủ
            </a>
            <a
              href="https://www.nganluongsilver.com/"
              className="text-sm hover:text-white/80 transition-colors text-white"
            >
              Sản phẩm
            </a>
            <a
              href="https://www.nganluongsilver.com/gia-bac-hom-nay"
              className="text-sm hover:text-white/80 transition-colors text-white"
            >
              Giá bạc hôm nay
            </a>
            <a
              href="https://www.nganluongsilver.com/diem-ban"
              className="text-sm hover:text-white/80 transition-colors text-white"
            >
              Điểm bán
            </a>
            <a href="#lien-he" className="text-sm hover:text-white/80 transition-colors text-white">
              Liên hệ
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            {/* Search box */}
            <div className="hidden md:flex items-center bg-white/10 rounded-lg px-3 py-1.5">
              <Search className="w-4 h-4 text-white/60 mr-2" />
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="bg-transparent text-sm text-white placeholder-white/60 border-none outline-none w-40"
              />
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
              aria-label={`Switch theme (current: ${theme})`}
            >
              {getThemeIcon()}
            </button>

            {/* Mobile menu */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-1.5 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#001e5e] dark:bg-gray-900">
          <nav className="py-4 space-y-2">
            <a href="#" className="block px-4 py-2 text-sm hover:bg-white/10 transition-colors text-white">
              Trang chủ
            </a>
            <a
              href="https://www.nganluongsilver.com/"
              className="block px-4 py-2 text-sm hover:bg-white/10 transition-colors text-white"
            >
              Sản phẩm
            </a>
            <a
              href="https://www.nganluongsilver.com/gia-bac-hom-nay"
              className="block px-4 py-2 text-sm hover:bg-white/10 transition-colors text-white"
            >
              Giá bạc hôm nay
            </a>
            <a
              href="https://www.nganluongsilver.com/diem-ban"
              className="block px-4 py-2 text-sm hover:bg-white/10 transition-colors text-white"
            >
              Điểm bán
            </a>
            <a href="#lien-he" className="block px-4 py-2 text-sm hover:bg-white/10 transition-colors text-white">
              Liên hệ
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
