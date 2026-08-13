import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  metadataBase: new URL("https://nevilsonani.vercel.app"),
  title: "Nevil Sonani — Full Stack AI Engineer & Systems Architect",
  description:
    "Production Full Stack AI Engineer building intelligent agents, scalable microservices, Django backends, enterprise ERPs, and high-performance SaaS applications.",
  keywords: [
    "Full Stack AI Engineer",
    "AI Systems Architect",
    "GPT-4 Function Calling",
    "Django Backend Developer",
    "Next.js Developer",
    "ERP Systems Developer",
    "Microservices Architect",
    "Nevil Sonani",
  ],
  authors: [{ name: "Nevil Sonani", url: "https://nevilsonani.vercel.app" }],
  openGraph: {
    title: "Nevil Sonani — Full Stack AI Engineer",
    description:
      "Production Full Stack AI Engineer building intelligent agents, scalable microservices, Django backends, and enterprise systems.",
    url: "https://nevilsonani.vercel.app",
    siteName: "Nevil Sonani Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Nevil Sonani - Full Stack AI Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
    <html lang="en" className="dark scroll-smooth">
      <body className={`${geist.className} ${geistMono.variable} bg-[#07080c] text-foreground antialiased selection:bg-sky-500/20 selection:text-sky-400`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

