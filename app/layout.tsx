import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  metadataBase: new URL("https://nevilsonani.vercel.app"),
  title: "Nevil Sonani — Full Stack AI & Systems Studio",
  description:
    "Engineering autonomous AI agents, enterprise automation, custom Shopify infrastructure, scalable Python/Django backends, and ERP systems for ambitious companies.",
  keywords: [
    "Full Stack AI Studio",
    "AI Systems Architect",
    "Autonomous AI Agents",
    "Shopify Custom Apps",
    "Django Backend Developer",
    "Enterprise ERP Systems",
    "Microservices Architect",
    "Nevil Sonani",
  ],
  authors: [{ name: "Nevil Sonani", url: "https://nevilsonani.vercel.app" }],
  openGraph: {
    title: "Nevil Sonani — Full Stack AI & Systems Studio",
    description:
      "Engineering autonomous AI agents, enterprise automation, custom Shopify infrastructure, and scalable backends for ambitious companies.",
    url: "https://nevilsonani.vercel.app",
    siteName: "Nevil Sonani Studio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Nevil Sonani - Full Stack AI & Systems Studio",
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
      <body className={`${geist.className} ${geistMono.variable} bg-[#08090e] text-foreground antialiased selection:bg-sky-500/20 selection:text-sky-400`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

