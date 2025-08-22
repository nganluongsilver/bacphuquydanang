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
  name: "Đại Lý Bạc Phú Quý Đà Nẵng",
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
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
