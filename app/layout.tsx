import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nevil Sonani | Full-Stack & AI Engineer",
  description:
    "Portfolio of Nevil Sonani, a Full-Stack & AI Engineer building modern, scalable web applications with clean UI and AI-powered solutions.",
  generator: "Next.js",
  icons: {
    icon: "/profile.jpg",
    apple: "/profile.jpg",
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
