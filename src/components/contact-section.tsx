import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="lien-he" className="py-24 relative bg-white dark:bg-gray-900">
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-20">
          <Badge className="mb-4 px-4 py-2 bg-[#001e5e] text-white dark:bg-gray-700 dark:text-gray-100">
            <Phone className="w-4 h-4 mr-2" />
            Liên Hệ Ngay
          </Badge>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#001e5e] dark:text-gray-100 mb-6">
            Tư Vấn Miễn Phí
            <span className="block text-[#001e5e] dark:text-gray-100">24/7</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#001e5e]/70 dark:text-gray-400 leading-relaxed">
            Nhân viên nhiều năm kinh nghiệm sẵn sàng tư vấn cho bạn
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white dark:bg-gray-800 border border-[#001e5e]/10 dark:border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 text-center group">
            <CardHeader>
              <div className="w-16 h-16 bg-[#001e5e] dark:bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl sm:text-2xl font-bold text-[#001e5e] dark:text-gray-100">
                Hotline VIP
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl sm:text-2xl font-bold text-[#001e5e] dark:text-gray-200 mb-2">0763 600 889</p>
              <p className="text-[#001e5e]/70 dark:text-gray-400">Hỗ trợ 24/7</p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border border-[#001e5e]/10 dark:border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 text-center group">
            <CardHeader>
              <div className="w-16 h-16 bg-[#001e5e] dark:bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl sm:text-2xl font-bold text-[#001e5e] dark:text-gray-100">
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base sm:text-lg font-semibold text-[#001e5e] dark:text-gray-200 mb-2">
                nganluongsilver@gmail.com
              </p>
              <p className="text-[#001e5e]/70 dark:text-gray-400">Phản hồi trong 30 phút</p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border border-[#001e5e]/10 dark:border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 text-center group">
            <CardHeader>
              <div className="w-16 h-16 bg-[#001e5e] dark:bg-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl sm:text-2xl font-bold text-[#001e5e] dark:text-gray-100">
                Showroom
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base sm:text-lg font-semibold text-[#001e5e] dark:text-gray-200 mb-2">
                45 Bàu Hạc 8, Thanh Khê, Đà Nẵng
              </p>
              <p className="text-[#001e5e]/70 dark:text-gray-400">Đà Nẵng, Việt Nam</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
