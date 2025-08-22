import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section id="danh-gia" className="py-24 relative overflow-hidden bg-white dark:bg-black">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#001e5e] via-white to-[#001e5e] dark:from-yellow-400 dark:via-yellow-600 dark:to-yellow-400"></div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-20">
          <Badge className="mb-4 px-4 py-2 bg-[#001e5e] text-white dark:bg-yellow-400 dark:text-black">
            <Star className="w-4 h-4 mr-2" />
            Khách Hàng Tin Tưởng
          </Badge>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#001e5e] mb-6 dark:text-white">
            Hàng Nghìn Khách Hàng
            <span className="block text-[#001e5e] dark:text-white">Đã Tin Tưởng Chúng Tôi</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white dark:bg-gray-900 border border-[#001e5e]/10 dark:border-yellow-400/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#001e5e] text-[#001e5e] dark:fill-yellow-400 dark:text-yellow-400"
                  />
                ))}
              </div>
              <CardTitle className="text-lg sm:text-xl font-bold text-[#001e5e] dark:text-yellow-400">
                Anh Minh - Doanh Nhân
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#001e5e]/70 dark:text-gray-200 leading-relaxed">
                "Tôi đã đầu tư bạc tại đây được 3 năm. Dịch vụ chuyên nghiệp, giá cả hợp lý và luôn được tư vấn tận
                tình. Lợi nhuận ổn định qua các năm."
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border border-[#001e5e]/10 dark:border-yellow-400/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#001e5e] text-[#001e5e] dark:fill-yellow-400 dark:text-yellow-400"
                  />
                ))}
              </div>
              <CardTitle className="text-lg sm:text-xl font-bold text-[#001e5e] dark:text-yellow-400">
                Chị Lan - Giáo Viên
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#001e5e]/70 dark:text-gray-200 leading-relaxed">
                "Bạc Phú Quý giúp tôi hiểu rõ về đầu tư bạc từ A-Z. Tôi cảm thấy hoàn toàn an tâm khi gửi gắm tài sản
                tại đây."
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border border-[#001e5e]/10 dark:border-yellow-400/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#001e5e] text-[#001e5e] dark:fill-yellow-400 dark:text-yellow-400"
                  />
                ))}
              </div>
              <CardTitle className="text-lg sm:text-xl font-bold text-[#001e5e] dark:text-yellow-400">
                Ông Hùng - Kỹ Sư
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#001e5e]/70 dark:text-gray-200 leading-relaxed">
                "Chất lượng bạc xuất sắc, đội ngũ tư vấn rất chuyên nghiệp. Tôi sẽ tiếp tục đầu tư dài hạn và giới thiệu
                bạn bè."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
