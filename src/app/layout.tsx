import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageLoader } from "@/components/layout/PageLoader";
import { FloatingWidgets } from "@/components/chat/FloatingWidgets";
import { siteConfig } from "@/lib/data";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Build · Innovate · Transform`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "custom software development",
    "website development company",
    "mobile app development",
    "cloud solutions",
    "business automation",
    "cybersecurity services",
    "IT consulting",
    "UI/UX design agency",
    "digital transformation",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  icons: {
    icon: "/assets/logo/icon-full-color.png",
    apple: "/assets/logo/icon-full-color.png",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.name} | Build · Innovate · Transform`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: "/assets/illustrations/hero.png", width: 1672, height: 941, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Build · Innovate · Transform`,
    description: siteConfig.description,
    images: ["/assets/illustrations/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-text">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to main content
        </a>
        <PageLoader />
        <SmoothScrollProvider>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
        <FloatingWidgets />
      </body>
    </html>
  );
}
