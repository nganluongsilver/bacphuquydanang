import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Bạc Phú Quý Đà Nẵng",
  description: "Chuyên cung cấp dịch vụ đầu tư bạc tích trữ uy tín, an toàn hàng đầu tại Đà Nẵng. Hotline: 0763600889 | Địa Chỉ: 197 Nguyễn Văn Linh, Hải Châu, Đà Nẵng",
  url: "https://bacphuquydanang.vn",
  telephone: "+84763600889",
  address: {
    "@type": "PostalAddress",
    streetAddress: "197 Nguyễn Văn Linh, Hải Châu, Đà Nẵng",
    addressLocality: "Đà Nẵng",
    addressRegion: "Đà Nẵng",
    postalCode: "550000",
    addressCountry: "VN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 16.0544,
    longitude: 108.2022,
  },
  openingHours: "Mo-Sa 08:00-18:00",
  priceRange: "$$",
  image: "/cover fanpage nls phu quy 2.png",
  sameAs: ["https://facebook.com/bacphuquydanang", "https://zalo.me/0763600889"],
  serviceType: "Đầu tư bạc tích trữ",
  areaServed: {
    "@type": "City",
    name: "Đà Nẵng",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dịch vụ đầu tư bạc",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tư vấn đầu tư bạc miếng",
          description: "Tư vấn chuyên nghiệp về đầu tư bạc miếng an toàn",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mua bán bạc thỏi",
          description: "Dịch vụ mua bán bạc thỏi chất lượng cao",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tích trữ bạc an toàn",
          description: "Dịch vụ tích trữ bạc an toàn, bảo mật",
        },
      },
    ],
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#1a2644] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <main>
        <HeroSection />

        {/* Why Choose Us - minimal strip */}
        <section className="py-20 bg-[#111b35] border-y border-white/[0.06]">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="h-px w-10 bg-white/20" />
              <span className="text-white/50 text-[10px] tracking-[0.4em] uppercase">Vì Sao Chọn Chúng Tôi</span>
              <div className="h-px w-10 bg-white/20" />
            </div>
            <div className="grid md:grid-cols-3 gap-0 max-w-4xl mx-auto divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
              {[
                {
                  title: "Đại Lý Uy Tín",
                  desc: "Được hàng nghìn khách hàng tin tưởng, chuyên cung cấp bạc miếng, bạc thỏi chính hãng chất lượng cao.",
                },
                {
                  title: "Giá Cả Minh Bạch",
                  desc: "Bảng giá bạc Phú Quý Đà Nẵng luôn cập nhật liên tục, cam kết giá tốt nhất, không phí ẩn.",
                },
                {
                  title: "Tư Vấn Chuyên Nghiệp",
                  desc: "Đội ngũ chuyên gia tư vấn tận tâm, hỗ trợ khách hàng đầu tư bạc an toàn và hiệu quả.",
                },
              ].map((item, i) => (
                <div key={i} className="px-8 py-6 text-center">
                  <div className="w-1.5 h-1.5 rotate-45 bg-white/30 mx-auto mb-4" />
                  <h3 className="text-sm font-semibold text-white/80 mb-3 tracking-wide">{item.title}</h3>
                  <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServicesSection />
        <AboutSection />

        {/* FAQ Section */}
        <section className="py-20 bg-[#1a2644]">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-10">
                <div className="h-px w-10 bg-white/20" />
                <span className="text-white/50 text-[10px] tracking-[0.4em] uppercase">Câu Hỏi Thường Gặp</span>
                <div className="h-px w-10 bg-white/20" />
              </div>
              <div className="space-y-6">
                {[
                  {
                    q: "Bạc Phú Quý Đà Nẵng là gì?",
                    a: "Bạc Phú Quý Đà Nẵng là đại lý chuyên cung cấp bạc miếng, bạc thỏi, trang sức bạc, dịch vụ đầu tư bạc uy tín tại Đà Nẵng.",
                  },
                  {
                    q: "Tại sao nên đầu tư bạc tại đây?",
                    a: "Chúng tôi cam kết chất lượng bạc 999.9, giá cả minh bạch, dịch vụ tư vấn đầu tư bạc chuyên nghiệp, bảo mật tuyệt đối.",
                  },
                  {
                    q: "Địa chỉ showroom ở đâu?",
                    a: "197 Nguyễn Văn Linh, Hải Châu, Đà Nẵng. Hotline: 0763 600 889. Phục vụ toàn TP Đà Nẵng và khu vực lân cận.",
                  },
                  {
                    q: "Có thể mua bạc online không?",
                    a: "Khách hàng có thể liên hệ fanpage hoặc hotline để được tư vấn và đặt mua bạc miếng, bạc thỏi chính hãng, giao hàng tận nơi.",
                  },
                ].map((faq, i) => (
                  <div key={i} className="border-b border-white/[0.06] pb-6">
                    <h3 className="text-sm font-semibold text-white/70 mb-2 tracking-wide">{faq.q}</h3>
                    <p className="text-xs text-white/40 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection />
        <ContactSection />

        {/* Final CTA */}
        <section className="py-20 bg-[#111b35] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1a2644_0%,_#111b35_70%)]" />
          <div className="relative container mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-white/20" />
              <div className="w-1.5 h-1.5 rotate-45 bg-white/50" />
              <div className="h-px w-12 bg-white/20" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-4 tracking-tight">
              Đăng Ký{" "}
              <span className="font-semibold text-white">Nhận Tư Vấn</span>
            </h2>
            <p className="text-sm text-white/40 mb-10 max-w-md mx-auto leading-relaxed">
              Liên hệ ngay với đại lý bạc Phú Quý Đà Nẵng để được tư vấn đầu tư bạc miễn phí, an toàn và hiệu quả nhất.
            </p>
            <a
              href="https://www.facebook.com/bacphuquydanang"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-4 bg-white hover:bg-white/90 text-[#1a2644] text-xs tracking-[0.25em] uppercase font-semibold transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-black/30"
            >
              Liên Hệ Tư Vấn Ngay
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
