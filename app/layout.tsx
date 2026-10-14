import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Caveat } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading-family",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body-family",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yumocare | The Holistic Women's Health & PCOS Intelligence Platform",
  description:
    "Yumocare combines smart cycle prediction, PCOS symptom tracking, metabolic balance, cycle-synced nutrition, supplement regimens, and telehealth with endocrinologists.",
  keywords: [
    "PCOS management",
    "Cycle tracking",
    "Metabolic balance",
    "Craving control",
    "Cycle syncing",
    "Women's health telehealth",
    "Endocrinologist consultation",
    "Hormone health",
    "Lab report extraction",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased scroll-smooth no-scrollbar ${plusJakartaSans.variable} ${inter.variable} ${caveat.variable}`}
      style={{ ["--yumo-primary-background" as any]: "linear-gradient(to right, #62419F, #8B6EBF)" }}
    >
      <body
        style={{ background: "var(--yumo-primary-background)", backgroundAttachment: "fixed" }}
        className="min-h-full flex flex-col font-body text-neutral-900 no-scrollbar"
      >
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
