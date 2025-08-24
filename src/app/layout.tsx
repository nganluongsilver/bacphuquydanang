import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bacphuquydanang.vn'),
  title: "Bạc Phú Quý Đà Nẵng - Ngân Lượng Silver",
  description:
    "Bạc Phú Quý Đà Nẵng, Chuyên cung cấp dịch vụ đầu tư bạc tích trữ uy tín. Hotline: 0763600889 | Địa Chỉ: 45 Bàu Hạc 8, Thanh Khê, Đà Nẵng",
  keywords: [
    "bạc phú quý đà nẵng",
    "đại lý bạc phú quý đà nẵng",
    "phú quý bạc đà nẵng",
    "đại lý bạc đà nẵng",
    "phú quý đà nẵng",
    "mua bạc đà nẵng",
    "bạc phú quý tại đà nẵng",
    "đầu tư bạc đà nẵng",
    "bạc tích trữ đà nẵng",
    "bạc miếng đà nẵng",
    "đầu tư kim loại quý đà nẵng",
    "mua bán bạc đà nẵng",
    "bạc thỏi đà nẵng",
    "đầu tư an toàn đà nẵng",
    "tích trữ tài sản đà nẵng",
  ].join(", "),
  authors: [{ name: "Bạc Phú Quý Đà Nẵng" }],
  creator: "Bạc Phú Quý Đà Nẵng",
  publisher: "Bạc Phú Quý Đà Nẵng",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "/",
    siteName: "Bạc Phú Quý Đà Nẵng",
    title: "Bạc Phú Quý Đà Nẵng - Ngân Lượng Silver",
    description:
      "Bạc Phú Quý Đà Nẵng, Chuyên cung cấp dịch vụ đầu tư bạc tích trữ uy tín. Hotline: 0763600889 | Địa Chỉ: 45 Bàu Hạc 8, Thanh Khê, Đà Nẵng",
    images: [
      {
        url: "/cover fanpage nls phu quy 2.png",
        width: 1200,
        height: 630,
        alt: "Bạc Phú Quý Đà Nẵng - Ngân Lượng Silver",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bạc Phú Quý Đà Nẵng - Ngân Lượng Silver",
    description: "Bạc Phú Quý Đà Nẵng, Chuyên cung cấp dịch vụ đầu tư bạc tích trữ uy tín. Hotline: 0763600889 | Địa Chỉ: 45 Bàu Hạc 8, Thanh Khê, Đà Nẵng",
    images: [
      "/cover fanpage nls phu quy 2.png",
    ],
  },
  alternates: {
    canonical: "/",
  },
  category: "Đầu tư kim loại quý",
  classification: "Business",
  verification: {
    google: "your-google-verification-code", // Thay bằng code thực tế
  },
  other: {
    "geo.region": "VN-DN",
    "geo.placename": "Đà Nẵng",
    "geo.position": "16.0544;108.2022",
    ICBM: "16.0544, 108.2022",
    "theme-color": "#001e5e",
    "msapplication-TileColor": "#001e5e",
  },
  icons: {
    icon: "/images/favicon.ico",
    shortcut:
      "/images/favicon.ico",
    apple:
      "/images/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/images/favicon.ico" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#001e5e" />
        <meta name="msapplication-TileColor" content="#001e5e" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Bạc Phú Quý Đà Nẵng" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
