import { Phone, Mail, MapPin } from "lucide-react"

const contacts = [
  {
    icon: Phone,
    title: "Hotline VIP",
    value: "0763 600 889",
    sub: "Hỗ trợ 24/7",
    href: "tel:0763600889",
  },
  {
    icon: Mail,
    title: "Email",
    value: "nganluong@gmail.com",
    sub: "Phản hồi trong 30 phút",
    href: "mailto:nganluong@gmail.com",
  },
  {
    icon: MapPin,
    title: "Showroom",
    value: "197 Nguyễn Văn Linh",
    sub: "Hải Châu, Đà Nẵng",
    href: "https://maps.google.com/?q=197+Nguyễn+Văn+Linh+Hải+Châu+Đà+Nẵng",
  },
]

export function ContactSection() {
  return (
    <section id="lien-he" className="py-24 bg-[#1a2644] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-white/20" />
            <span className="text-white/50 text-[10px] tracking-[0.4em] uppercase">Liên Hệ</span>
            <div className="h-px w-10 bg-white/20" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-4 tracking-tight">
            Tư Vấn{" "}
            <span className="font-semibold">Miễn Phí</span>
          </h2>
          <p className="text-white/40 text-sm max-w-md mx-auto leading-relaxed">
            Đội ngũ chuyên gia sẵn sàng tư vấn cho bạn mọi lúc
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {contacts.map((c, i) => (
            <a
              key={i}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/30 transition-all duration-500 p-8 text-center block"
            >
              <div className="w-12 h-12 border border-white/15 group-hover:border-white/40 flex items-center justify-center mx-auto mb-5 transition-all duration-300">
                <c.icon className="w-5 h-5 text-white/40 group-hover:text-white/80 transition-colors duration-300" />
              </div>
              <h3 className="text-xs font-semibold text-white/50 tracking-[0.2em] uppercase mb-3">{c.title}</h3>
              <p className="text-sm font-semibold text-white/80 mb-1">{c.value}</p>
              <p className="text-[11px] text-white/40">{c.sub}</p>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.facebook.com/bacphuquydanang"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-white hover:bg-white/90 text-[#1a2644] text-xs tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-lg shadow-black/20"
          >
            Liên Hệ Tư Vấn Ngay
          </a>
        </div>
      </div>
    </section>
  )
}
