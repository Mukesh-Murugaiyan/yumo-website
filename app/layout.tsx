import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

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
      className="h-full antialiased scroll-smooth"
      style={{ ["--yumo-primary-background" as any]: "linear-gradient(to right, #62419F, #8B6EBF)" }}
    >
      <body
        style={{ background: "var(--yumo-primary-background)", backgroundAttachment: "fixed" }}
        className="min-h-full flex flex-col font-body text-neutral-900"
      >
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
