import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sohwaz.com"),
  title: {
    default: "Sohwaz Financial Consultants",
    template: "%s | Sohwaz Financial Consultants",
  },
  description:
    "Strategic financial and investment advisory for corporates, investors, and institutions across the Middle East and Pakistan.",
  openGraph: {
    title: "Sohwaz Financial Consultants",
    description:
      "Strategic financial and investment advisory for corporates, investors, and institutions across the Middle East and Pakistan.",
    images: [{ url: "/assets/og-image.jpg", width: 1200, height: 630, alt: "Sohwaz Financial Consultants" }],
    siteName: "Sohwaz Financial Consultants",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
