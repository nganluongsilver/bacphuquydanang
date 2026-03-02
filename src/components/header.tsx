"use client"
import { Moon, Sun, Monitor, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Image from 'next/image'

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    if (theme === "system") setTheme("light")
    else if (theme === "light") setTheme("dark")
    else setTheme("system")
  }

  const getThemeIcon = () => {
    if (theme === "dark") return <Sun className="w-4 h-4" />
    if (theme === "light") return <Moon className="w-4 h-4" />
    return <Monitor className="w-4 h-4" />
  }

  const navLinks = [
    { label: "Trang chủ", href: "#" },
    { label: "Sản phẩm", href: "https://www.nganluongsilver.com/" },
    { label: "Giá bạc hôm nay", href: "https://www.nganluongsilver.com/gia-bac-hom-nay" },
    { label: "Điểm bán", href: "https://www.nganluongsilver.com/diem-ban" },
    { label: "Liên hệ", href: "#lien-he" },
  ]

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a2644] text-white">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/images/favicon.ico" alt="logo" width={28} height={28} className="object-contain" />
            <div>
              <span className="text-sm font-semibold tracking-widest text-white uppercase">Ngân Lượng</span>
              <span className="block text-[10px] tracking-[0.3em] text-white/60 uppercase">Vàng Bạc</span>
            </div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-[#1a2644]/98 backdrop-blur-xl shadow-2xl shadow-[#1a2644]/50'
        : 'bg-gradient-to-b from-[#1a2644]/80 to-transparent backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full overflow-hidden ring-1 ring-white/20 group-hover:ring-white/50 transition-all duration-300">
              <Image src="/images/favicon.ico" alt="logo" width={36} height={36} className="w-full h-full object-contain" />
            </div>
            <div className="leading-tight">
              <span className="block text-xs font-bold tracking-[0.25em] text-white uppercase">Ngân Lượng</span>
              <span className="block text-[9px] tracking-[0.4em] text-white/60 uppercase font-medium">Vàng Bạc</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs tracking-widest text-white/60 hover:text-white transition-colors duration-300 uppercase font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
              aria-label="Toggle theme"
            >
              {getThemeIcon()}
            </button>

            <a
              href="tel:0763600889"
              className="hidden md:flex items-center gap-2 px-4 py-1.5 border border-white/20 text-white text-xs tracking-widest uppercase hover:bg-white hover:text-[#1a2644] transition-all duration-300 rounded-sm"
            >
              0763 600 889
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#1a2644] border-t border-white/10">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs tracking-widest text-white/60 hover:text-white transition-colors uppercase font-medium py-2 border-b border-white/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:0763600889"
              className="mt-2 text-center px-4 py-3 border border-white/20 text-white text-xs tracking-widest uppercase hover:bg-white hover:text-[#1a2644] transition-all duration-300"
            >
              Gọi: 0763 600 889
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
