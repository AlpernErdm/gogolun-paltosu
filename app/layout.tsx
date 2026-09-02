import type { Metadata, Viewport } from "next"
import { EB_Garamond, Playfair_Display } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
})

const garamond = EB_Garamond({
  subsets: ["latin", "latin-ext"],
  variable: "--font-garamond",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Gogol'un Paltosu — Klasik Edebiyat",
  description:
    "Gogol'un Paltosu: klasikler, dünya edebiyatı ve okuma önerileriyle edebiyatın karanlık ve zarif dünyasını keşfedin.",
}

export const viewport: Viewport = {
  themeColor: "#1a120b",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${playfair.variable} ${garamond.variable} bg-background`}>
      <body className="antialiased">
        <div className="min-h-screen bg-background">
          <SiteHeader />
          <main className="mx-auto max-w-7xl px-4 pb-10 pt-4 md:px-6 md:pt-6">
            <div className="frame-border space-y-6 rounded-xl bg-popover/40 p-3 md:p-5">{children}</div>
          </main>
        </div>
      </body>
    </html>
  )
}
