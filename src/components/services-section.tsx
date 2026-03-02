import { Shield, TrendingUp, Award } from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "Bạc Miếng Chính Hãng",
    subtitle: "Bạc miếng 999.9 từ các thương hiệu uy tín",
    features: [
      "Chứng nhận chất lượng từ Phú Quý",
      "Giá cả minh bạch, cạnh tranh",
      "Bảo hành chính hãng trọn đời",
    ],
  },
  {
    icon: TrendingUp,
    title: "Tư Vấn Đầu Tư",
    subtitle: "Chiến lược đầu tư bạc chuyên nghiệp",
    features: [
      "Phân tích thị trường chuyên sâu",
      "Tư vấn thời điểm mua bán tối ưu",
      "Hỗ trợ 24/7",
    ],
  },
  {
    icon: Award,
    title: "Bảo Quản An Toàn",
    subtitle: "Bảo quản bạc tiêu chuẩn chính hãng",
    features: [
      "Tiêu chuẩn bảo quản theo chính hãng",
      "Bảo mật và an toàn tuyệt đối",
      "Kiểm tra và báo cáo định kỳ",
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="dich-vu" className="py-24 bg-[#111b35]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-white/20" />
            <span className="text-white/50 text-[10px] tracking-[0.4em] uppercase">Dịch Vụ</span>
            <div className="h-px w-10 bg-white/20" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-4 tracking-tight">
            Dịch Vụ{" "}
            <span className="font-semibold text-white">Chất Lượng Cao</span>
          </h2>
          <p className="text-white/40 text-sm max-w-lg mx-auto leading-relaxed tracking-wide">
            Đầy đủ các dịch vụ đầu tư bạc từ tư vấn chuyên sâu đến mua bán và bảo quản an toàn
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/25 transition-all duration-500 p-8"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-white/30 transition-all duration-500" />

              <div className="w-12 h-12 border border-white/20 group-hover:border-white/50 flex items-center justify-center mb-6 transition-all duration-300">
                <service.icon className="w-5 h-5 text-white/50 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-base font-semibold text-white mb-2 tracking-wide">{service.title}</h3>
              <p className="text-white/40 text-xs mb-6 leading-relaxed">{service.subtitle}</p>

              <ul className="space-y-3">
                {service.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3 text-white/40 text-xs tracking-wide">
                    <div className="w-px h-3 bg-white/30 mt-0.5 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
