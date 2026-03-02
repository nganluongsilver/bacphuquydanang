import { Phone, Mail, MapPin, Clock, Facebook, Youtube, Instagram } from "lucide-react"
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-[#111b35] text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-1 ring-white/20">
                <Image src="/images/favicon.ico" alt="logo" width={40} height={40} className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="text-sm font-bold tracking-[0.2em] text-white uppercase">Ngân Lượng</div>
                <div className="text-[10px] tracking-[0.35em] text-white/50 uppercase">Vàng Bạc</div>
              </div>
            </div>
            <p className="text-white/40 text-xs leading-relaxed mb-5 max-w-xs">
              Chuyên cung cấp bạc mỹ nghệ cao cấp, uy tín và chất lượng hàng đầu Việt Nam.
            </p>
            <div className="text-[11px] text-white/30 space-y-1">
              <div className="font-semibold text-white/40 tracking-wide">CÔNG TY TNHH MTV VÀNG BẠC NGÂN LƯỢNG</div>
              <div>Mã số thuế: 0402287923</div>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/40 mb-5">Điều Hướng</h4>
            <ul className="space-y-3 text-xs text-white/40">
              {[
                { label: "Trang chủ", href: "#" },
                { label: "Điểm bán", href: "https://www.nganluongsilver.com/diem-ban" },
                { label: "Liên hệ", href: "#lien-he" },
                { label: "Sản phẩm", href: "https://www.nganluongsilver.com/" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white transition-colors duration-200">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/40 mb-5">Dịch Vụ</h4>
            <ul className="space-y-3 text-xs text-white/40">
              {[
                { label: "Mua bán bạc", href: "https://www.nganluongsilver.com/" },
                { label: "Tư vấn đầu tư", href: "#lien-he" },
                { label: "Giá bạc hôm nay", href: "https://www.nganluongsilver.com/gia-bac-hom-nay" },
                { label: "Chính sách bảo hành", href: "https://www.nganluongsilver.com/" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white transition-colors duration-200">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/40 mb-5">Liên Hệ</h4>
            <div className="space-y-3 text-xs text-white/40">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-white/40 mt-0.5 flex-shrink-0" />
                <span>197 Nguyễn Văn Linh, Hải Châu, Đà Nẵng</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-white/40 flex-shrink-0" />
                <a href="tel:0763600889" className="hover:text-white transition-colors">0763 600 889</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-white/40 flex-shrink-0" />
                <a href="mailto:nganluong@gmail.com" className="hover:text-white transition-colors">nganluong@gmail.com</a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-white/40 mt-0.5 flex-shrink-0" />
                <div>
                  <div>8:00 – 18:30 (T2 – T7)</div>
                  <div>8:00 – 17:00 (Chủ Nhật)</div>
                </div>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <a href="https://www.facebook.com/bacphuquydanang" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-4 h-4 text-white/30 hover:text-white transition-colors" />
                </a>
                <Youtube className="w-4 h-4 text-white/30 hover:text-white transition-colors cursor-pointer" />
                <Instagram className="w-4 h-4 text-white/30 hover:text-white transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/25 tracking-wide">
            &copy; 2025 Vàng Bạc Ngân Lượng. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex items-center gap-1">
            <div className="h-px w-8 bg-white/15" />
            <div className="w-1 h-1 rotate-45 bg-white/25" />
            <div className="h-px w-8 bg-white/15" />
          </div>
        </div>
      </div>
    </footer>
  )
}
