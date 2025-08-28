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
  description: "Chuyên cung cấp dịch vụ đầu tư bạc tích trữ uy tín, an toàn hàng đầu tại Đà Nẵng. Hotline: 0763600889 | Địa Chỉ: 45 Bàu Hạc 8, Thanh Khê, Đà Nẵng",
  url: "https://bacphuquydanang.vn",
  telephone: "+84763600889",
  address: {
    "@type": "PostalAddress",
    streetAddress: "45 Bàu Hạc 8, Thanh Khê, Đà Nẵng",
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
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <main className="pt-12">
        <HeroSection />
        <section className="py-10 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#001e5e] dark:text-yellow-400 mb-4 text-center">
              Lý Do Chọn Đại Lý Bạc Phú Quý Đà Nẵng
            </h2>
            <ul className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <li className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-left">
                <h3 className="font-semibold text-lg mb-2 text-[#001e5e] dark:text-yellow-400">Đại lý bạc uy tín tại Đà Nẵng</h3>
                <p>Chúng tôi là <strong>đại lý bạc phú quý Đà Nẵng</strong> được hàng nghìn khách hàng tin tưởng, chuyên cung cấp bạc miếng, bạc thỏi, bạc tích trữ chính hãng, chất lượng cao.</p>
              </li>
              <li className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-left">
                <h3 className="font-semibold text-lg mb-2 text-[#001e5e] dark:text-yellow-400">Giá cả minh bạch, cạnh tranh</h3>
                <p>Bảng giá <strong>bạc phú quý Đà Nẵng</strong> luôn được cập nhật liên tục, cam kết giá tốt nhất, không phí ẩn, hỗ trợ tư vấn đầu tư bạc miễn phí.</p>
              </li>
              <li className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-left">
                <h3 className="font-semibold text-lg mb-2 text-[#001e5e] dark:text-yellow-400">Dịch vụ đầu tư bạc chuyên nghiệp</h3>
                <p>Đội ngũ chuyên gia <strong>phú quý Đà Nẵng</strong> tư vấn tận tâm, hỗ trợ khách hàng đầu tư bạc an toàn, tích trữ tài sản hiệu quả, bảo mật tuyệt đối.</p>
              </li>
            </ul>
          </div>
        </section>
        <ServicesSection />
        <AboutSection />
        <section className="py-10 bg-white dark:bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#001e5e] dark:text-yellow-400 mb-4 text-center">
              Câu Hỏi Thường Gặp về Bạc Phú Quý Đà Nẵng
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-[#001e5e] dark:text-yellow-400">Bạc Phú Quý Đà Nẵng là gì?</h3>
                <p><strong>Bạc Phú Quý Đà Nẵng</strong> là đại lý chuyên cung cấp bạc miếng, bạc thỏi, trang sức bạc, dịch vụ đầu tư bạc uy tín tại Đà Nẵng.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-[#001e5e] dark:text-yellow-400">Tại sao nên đầu tư bạc tại đại lý bạc Phú Quý Đà Nẵng?</h3>
                <p>Chúng tôi cam kết chất lượng bạc 999.9, giá cả minh bạch, dịch vụ tư vấn đầu tư bạc chuyên nghiệp, bảo mật tuyệt đối cho khách hàng tại Đà Nẵng.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-[#001e5e] dark:text-yellow-400">Địa chỉ đại lý bạc Phú Quý Đà Nẵng ở đâu?</h3>
                <p>Địa chỉ: 45 Bàu Hạc 8, Thanh Khê, Đà Nẵng. Hotline: 0763 600 889. Chúng tôi phục vụ khách hàng toàn thành phố Đà Nẵng và khu vực lân cận.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-[#001e5e] dark:text-yellow-400">Có thể mua bạc online tại Phú Quý Đà Nẵng không?</h3>
                <p>Khách hàng có thể liên hệ fanpage hoặc hotline để được tư vấn và đặt mua bạc miếng, bạc thỏi, trang sức bạc chính hãng, giao hàng tận nơi tại Đà Nẵng.</p>
              </div>
            </div>
          </div>
        </section>
        <TestimonialsSection />
        <ContactSection />
        <section className="py-10 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#001e5e] dark:text-yellow-400 mb-4">
              Đăng Ký Nhận Tư Vấn Đầu Tư Bạc Phú Quý Đà Nẵng
            </h2>
            <p className="text-lg text-[#001e5e]/80 dark:text-gray-200 mb-6">
              Để lại thông tin hoặc liên hệ ngay với <strong>đại lý bạc Phú Quý Đà Nẵng</strong> để được tư vấn đầu tư bạc, mua bán bạc, tích trữ bạc an toàn, hiệu quả nhất tại Đà Nẵng.
            </p>
            <a href="https://www.facebook.com/bacphuquydanang" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#001e5e] text-white rounded-lg font-semibold shadow hover:bg-[#002a7a] transition">
              Liên hệ tư vấn ngay
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
