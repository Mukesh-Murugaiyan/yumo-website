"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown, Mail, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface FAQItem {
  category: string;
  q: string;
  a: string;
}

const allFaqs: FAQItem[] = [
  {
    category: "General",
    q: "How do I track my daily water intake?",
    a: "Navigate to the Home screen and tap the '+' icon on the hydration card. You can quickly add standard amounts like a glass (250ml) or bottle (500ml), or enter a custom volume.",
  },
  {
    category: "General",
    q: "Can I sync data with Apple Health or Google Fit?",
    a: "Yes. In the Yumocare app, navigate to Profile > Privacy & Security > Device Permissions and toggle 'Health Sync' to ON. Steps, sleep hours, and workouts will sync seamlessly.",
  },
  {
    category: "Product",
    q: "How does the AI Lab Report Scanner work?",
    a: "Under the Clinic tab, tap 'Upload Reports' and upload your blood work in PDF, JPG, or PNG. Yumocare's secure OCR engine automatically extracts Fasting Glucose, Fasting Insulin, Total Testosterone, and Vitamin D, plotting them against reference ranges.",
  },
  {
    category: "Product",
    q: "What is the Craving Control engine and how does it detect insulin dips?",
    a: "Sudden sugar or carb cravings are frequently biological responses to rapid drops in blood glucose. When you log a craving and trigger, Yumocare's pattern detection flags potential insulin dips and recommends healthy swaps (like magnesium-rich dark chocolate) to steady glucose without energy crashes.",
  },
  {
    category: "Product",
    q: "How does Yumocare calculate my PCOS Health Score?",
    a: "Your score (out of 100) is synthesized from 5 key dimensions: Cycle Regularity Trend, Symptom Severity Trend, Supplement Consistency, Insulin Indicators, and Lifestyle Habits (sleep, steps, hydration).",
  },
  {
    category: "Telehealth",
    q: "How do video consultations with doctors work?",
    a: "Browse verified Endocrinologists and Gynecologists in the Clinic directory, select an open 30-minute slot, and confirm your booking. You'll receive a secure, encrypted video link to join from your phone or tablet.",
  },
  {
    category: "Subscription",
    q: "What are the subscription options and is there a free trial?",
    a: "Yumocare offers the Plus plan at ₹199/month and the Premium plan at ₹299/month. Premium includes a 7-day risk-free trial with full access to personalized meal plans, workout routines, lab report scanning, and priority support. You can cancel anytime.",
  },
  {
    category: "Subscription",
    q: "How do I cancel my subscription or free trial?",
    a: "You can cancel anytime in 1 click through your Apple App Store or Google Play Store subscription management screen, or within the app under Profile > Subscription.",
  },
  {
    category: "Tracking",
    q: "Can I use Yumocare if I have irregular cycles?",
    a: "Yes! Yumocare was purposefully built for PCOS and irregular cycles. Screen 84 features an 'Irregular Cycle' calibration setting that estimates your next period and fertile window using rolling 3-month variance rather than fixed 28-day assumptions.",
  },
  {
    category: "Privacy",
    q: "Is my personal and medical data safe?",
    a: "100%. All personal health data is encrypted in transit and at rest using 256-bit encryption. We enforce a zero ad-sharing policy and strictly never sell your records to insurance companies or third-party advertisers.",
  },
  {
    category: "Privacy",
    q: "How do I delete my Yumocare account and data?",
    a: "Navigate to Profile > Privacy & Security > Download My Data or Delete Account. Choosing delete permanently purges your records from our systems.",
  },
];

const categories = ["All", "General", "Product", "Telehealth", "Subscription", "Tracking", "Privacy"];

export default function SupportPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredFaqs = allFaqs.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesQuery =
      searchQuery.trim() === "" ||
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="pt-32 pb-24 px-6 overflow-hidden bg-yumo-primary-bg min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Yumocare Help & Knowledge Base</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-normal text-white">
              How can we help you today?
            </h1>
            <p className="text-base sm:text-lg text-[#DACFE9] font-[450] leading-relaxed">
              Find answers regarding cycle tracking, telehealth appointments, AI lab scans, and data privacy.
            </p>

            {/* Search Box */}
            <div className="relative max-w-xl mx-auto mt-6">
              <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search help topics or questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-[#EFE9F6] focus:outline-none focus:ring-2 focus:ring-[#8B6EBF] text-neutral-800 shadow-sm"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Filter Pills */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[#62419F] to-[#8B6EBF] text-white shadow-md shadow-[#62419F]/20"
                    : "bg-white border border-[#EFE9F6] text-neutral-700 hover:bg-[#EDE7F6]/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* FAQ Accordion List */}
        <ScrollReveal delay={200}>
          <div className="space-y-3">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl bg-white border border-[#EFE9F6] overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between font-medium text-neutral-900 hover:text-[#62419F] cursor-pointer"
                  >
                    <span className="text-base font-normal">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#62419F] mr-2">
                        [{faq.category}]
                      </span>
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform ${
                        openFaq === idx ? "rotate-180 text-[#62419F]" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-5 text-sm text-neutral-600 leading-relaxed font-[450] border-t border-neutral-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-neutral-500">
                No articles found matching &quot;{searchQuery}&quot;. Try another term.
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* Still Have Questions Box */}
        <ScrollReveal delay={300}>
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EFE9F6] shadow-md text-center space-y-4 max-w-xl mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-[#EDE7F6] text-[#62419F] flex items-center justify-center mx-auto">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-heading font-normal text-neutral-900">Still have questions?</h2>
            <p className="text-sm text-neutral-600 font-[450] leading-relaxed">
              Our specialized women's health team is here to assist you with any questions.
            </p>
            <a
              href="mailto:support@yumocare.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#62419F] to-[#8B6EBF] hover:from-[#52318E] hover:to-[#7A5DAE] text-white text-sm font-semibold transition-all shadow-md shadow-[#62419F]/20"
            >
              Email support@yumocare.com
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
