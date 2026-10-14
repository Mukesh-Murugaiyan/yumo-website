"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  {
    q: "How does Yumocare differ from generic period trackers?",
    a: "Standard calendar apps assume a rigid 28-day cycle and only track bleeding days. Yumocare is a clinical & metabolic platform designed specifically for women with PCOS and irregular cycles. It tracks insulin dips, cravings, basal body metrics, supplement protocols (such as Inositol), and provides direct telehealth access to certified Endocrinologists.",
  },
  {
    q: "Can I use Yumocare if my cycles are irregular?",
    a: "Yes. Screen 84 of the Yumocare app specifically features an 'Irregular Cycle' calibration mode that estimates next periods and fertile windows using rolling 3-month variance rather than fixed calendar mathematics.",
  },
  {
    q: "How does the AI Lab Report Scanner work?",
    a: "You can upload a PDF, JPG, or PNG of your blood work. Yumocare's OCR engine extracts key biomarkers—including Fasting Glucose, Fasting Insulin, Total Testosterone, and 25-OH Vitamin D—and plots them against standard clinical reference ranges so you can review trends with your doctor.",
  },
  {
    q: "How do the telehealth consultations work?",
    a: "You can browse verified Endocrinologists and Gynecologists (such as Dr. Priya Sharma and Dr. Sarah Jenkins), select an open 30-minute slot, fill in your health profile, and attend an encrypted video consultation directly from your device.",
  },
  {
    q: "Is my personal and health data secure?",
    a: "Yes. Yumocare uses 256-bit encryption for all stored records, supports Two-Factor Authentication (2FA), enables you to toggle anonymous data sharing, and strictly never sells health records to third-party advertisers.",
  },
];

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAF7FD] to-white border-t border-[#EFE9F6]">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE7F6] text-[#62419F] text-xs font-semibold border border-[#62419F]/15">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-normal text-neutral-900">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-500 text-sm font-[450]">
              Everything you need to know about the Yumocare platform, clinical privacy, and pricing.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#EFE9F6] bg-white overflow-hidden transition-all shadow-sm"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-neutral-900 text-sm sm:text-base cursor-pointer hover:text-[#62419F]"
              >
                <span>{faq.q}</span>
                <span className="text-[#8B6EBF] font-bold text-lg">
                  {openFaq === idx ? "−" : "+"}
                </span>
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 font-[450] leading-relaxed border-t border-[#EFE9F6]/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-6 rounded-2xl bg-[#EDE7F6]/60 border border-[#62419F]/15">
          <h3 className="text-base font-semibold text-neutral-900 mb-1">Still have questions?</h3>
          <p className="text-xs text-neutral-600 mb-4 font-[450]">
            Our specialized women's health support team is here to assist you anytime.
          </p>
          <Link
            href="/support"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#62419F] hover:bg-[#52318E] text-white text-xs font-semibold shadow-sm transition-all"
          >
            Chat with Support
          </Link>
        </div>
      </div>
    </section>
  );
}
