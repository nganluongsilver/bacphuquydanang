import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, TrendingUp, Award } from "lucide-react"

export function ServicesSection() {
  return (
    <section id="dich-vu" className="py-16 relative bg-white dark:bg-black">
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-3 px-3 py-1 bg-[#001e5e] text-white dark:bg-yellow-400 dark:text-black text-xs">
            <Shield className="w-3 h-3 mr-1" />
            Dịch Vụ Chuyên Nghiệp
          </Badge>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#001e5e] dark:text-white mb-4">
            Dịch Vụ Đầu Tư Bạc
            <span className="block text-[#001e5e] dark:text-white">Chất Lượng Cao Cấp</span>
          </h2>
          <p className="text-sm sm:text-base text-[#001e5e]/70 dark:text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Chúng tôi cung cấp đầy đủ các dịch vụ đầu tư bạc từ tư vấn chuyên sâu đến mua bán và bảo quản an toàn
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white dark:bg-gray-900 border border-[#001e5e]/10 dark:border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group">
            <CardHeader className="text-center pb-3">
              <div className="w-16 h-16 bg-[#001e5e] dark:bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white dark:text-black" />
              </div>
              <CardTitle className="text-base sm:text-lg font-bold text-[#001e5e] dark:text-white">
                Bạc Miếng Chính Hãng
              </CardTitle>
              <CardDescription className="text-sm sm:text-base text-[#001e5e]/70 dark:text-gray-200">
                Bạc miếng 999.9 từ các thương hiệu uy tín lớn trong nước
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-[#001e5e]/70 dark:text-gray-300 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#001e5e] dark:bg-gray-400 rounded-full mr-3"></div>
                  Chứng nhận chất lượng đảm bảo từ Phú Quý
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#001e5e] dark:bg-gray-400 rounded-full mr-3"></div>
                  Giá cả minh bạch, cạnh tranh
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#001e5e] dark:bg-gray-400 rounded-full mr-3"></div>
                  Bảo hành chính hãng trọn đời
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border border-[#001e5e]/10 dark:border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group">
            <CardHeader className="text-center pb-3">
              <div className="w-16 h-16 bg-[#001e5e] dark:bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white dark:text-black" />
              </div>
              <CardTitle className="text-base sm:text-lg font-bold text-[#001e5e] dark:text-white">
                Tư Vấn Đầu Tư
              </CardTitle>
              <CardDescription className="text-sm sm:text-base text-[#001e5e]/70 dark:text-gray-200">
                Hỗ trợ tư vấn chiến lược đầu tư bạc chuyên nghiệp
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-[#001e5e]/70 dark:text-gray-300 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#001e5e] dark:bg-gray-400 rounded-full mr-3"></div>
                  Phân tích thị trường chuyên sâu
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#001e5e] dark:bg-gray-400 rounded-full mr-3"></div>
                  Tư vấn thời điểm mua bán tối ưu
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#001e5e] dark:bg-gray-400 rounded-full mr-3"></div>
                  Hỗ trợ 24/7
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border border-[#001e5e]/10 dark:border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group">
            <CardHeader className="text-center pb-3">
              <div className="w-16 h-16 bg-[#001e5e] dark:bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white dark:text-black" />
              </div>
              <CardTitle className="text-base sm:text-lg font-bold text-[#001e5e] dark:text-white">
                Bảo Quản An Toàn
              </CardTitle>
              <CardDescription className="text-sm sm:text-base text-[#001e5e]/70 dark:text-gray-200">
                Bảo quản bạc chuyên nghiệp và bảo mật tuyệt đối
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-[#001e5e]/70 dark:text-gray-300 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#001e5e] dark:bg-gray-400 rounded-full mr-3"></div>
                  Nơi bảo quản tiêu chuẩn theo chính hãng
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#001e5e] dark:bg-gray-400 rounded-full mr-3"></div>
                  Đảm đảm an toàn cực cao
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#001e5e] dark:bg-gray-400 rounded-full mr-3"></div>
                  Kiểm tra và báo cáo định kỳ
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
