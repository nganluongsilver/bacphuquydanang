import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Anh Minh",
    role: "Doanh Nhân",
    content: "Tôi đã đầu tư bạc tại đây được 3 năm. Dịch vụ chuyên nghiệp, giá cả hợp lý và luôn được tư vấn tận tình. Lợi nhuận ổn định qua các năm.",
  },
  {
    name: "Chị Lan",
    role: "Giáo Viên",
    content: "Bạc Phú Quý giúp tôi hiểu rõ về đầu tư bạc từ A-Z. Tôi cảm thấy hoàn toàn an tâm khi gửi gắm tài sản tại đây.",
  },
  {
    name: "Ông Hùng",
    role: "Kỹ Sư",
    content: "Chất lượng bạc xuất sắc, đội ngũ tư vấn rất chuyên nghiệp. Tôi sẽ tiếp tục đầu tư dài hạn và giới thiệu bạn bè.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="danh-gia" className="py-24 bg-[#111b35] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a2644_0%,_#111b35_70%)] opacity-70" />

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-white/20" />
            <span className="text-white/50 text-[10px] tracking-[0.4em] uppercase">Khách Hàng</span>
            <div className="h-px w-10 bg-white/20" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
            Hàng Nghìn Khách Hàng{" "}
            <span className="font-semibold">Tin Tưởng</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/25 transition-all duration-500 p-8"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-white/60 text-white/60" />
                ))}
              </div>

              <p className="text-white/50 text-sm leading-relaxed mb-8 italic">
                &ldquo;{t.content}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-8 h-8 bg-white/10 border border-white/20 flex items-center justify-center text-white/70 text-xs font-semibold">
                  {t.name.charAt(t.name.lastIndexOf(' ') + 1)}
                </div>
                <div>
                  <div className="text-xs font-semibold text-white/80 tracking-wide">{t.name}</div>
                  <div className="text-[10px] text-white/40 tracking-widest uppercase">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
