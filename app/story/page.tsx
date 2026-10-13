import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Sparkles, Heart, Stethoscope, ShieldCheck, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Mission: Transforming Hormonal & PCOS Health | Yumocare",
  description:
    "Yumocare was founded to bridge the gap between everyday hormonal symptoms and specialized clinical endocrinology care.",
};

export default function StoryPage() {
  return (
    <div className="pt-32 pb-20 overflow-hidden bg-yumo-primary-bg min-h-screen">
      {/* Hero section */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-sm font-semibold mb-6">
            <Heart className="w-4 h-4" />
            <span>Our Clinical & Personal Mission</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-normal text-white mb-6">
            Empowering Every Woman <br />
            <span className="font-body text-[#DACFE9]">Through Hormonal Clarity.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-heading font-normal leading-relaxed max-w-2xl mx-auto">
            “For millions of women with PCOS and hormonal irregularities, traditional care feels fragmented between generic calendar apps and hurried doctor visits. We built Yumocare to unite them.”
          </p>
        </ScrollReveal>
      </div>

      {/* Main Narrative & Photo Gallery */}
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {/* Paragraph 1 with 3 photos */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4 text-base md:text-lg text-neutral-600 leading-relaxed font-[450]">
              <p>
                Hormones dictate your energy, metabolism, mood, and sleep. Yet most women are left to navigate complex conditions like PCOS, insulin resistance, and cycle irregularities in isolation.
              </p>
              <p>
                Yumocare was built to replace guessing with clinical clarity. By correlating daily habits, basal body markers, food glycemic load, and medical lab reports, Yumocare transforms confusing symptoms into an actionable daily roadmap.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-3 gap-4">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md group">
                <Image
                  src="/assets/story-tennis.png"
                  alt="Active lifestyle"
                  width={300}
                  height={375}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md group mt-6">
                <Image
                  src="/assets/story-watch.png"
                  alt="Consistent routine"
                  width={300}
                  height={375}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-md group">
                <Image
                  src="/assets/story-vegetables.png"
                  alt="Nourishing whole foods"
                  width={300}
                  height={375}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Clinical Mission Card */}
        <ScrollReveal delay={200}>
          <div className="p-8 sm:p-12 rounded-3xl bg-white shadow-md border border-[#EFE9F6] max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-[#EDE7F6] text-[#62419F] flex items-center justify-center shrink-0 border-2 border-[#8B6EBF]">
              <Stethoscope className="w-8 h-8" />
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-xl font-heading font-normal text-neutral-900">The Yumocare Care Philosophy</div>
              <div className="text-xs text-[#62419F] font-bold uppercase tracking-wider">Clinical Rigor Meets Daily Empathy</div>
              <p className="text-sm text-neutral-600 pt-2 font-[450] leading-relaxed">
                “We believe that true healing begins when clinical knowledge is placed directly in the patient's hands—supported by certified Endocrinologists, low-glycemic dietary planning, and transparent data privacy.”
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Core Pillars */}
        <ScrollReveal delay={300}>
          <div className="grid sm:grid-cols-3 gap-6 pt-6">
            <div className="p-6 rounded-2xl bg-white border border-[#EFE9F6] shadow-sm text-center space-y-2">
              <span className="text-2xl font-bold text-[#62419F]">100%</span>
              <h3 className="font-semibold text-neutral-900 text-sm">Evidence-Grounded</h3>
              <p className="text-xs text-neutral-500 font-[450]">
                Every suggestion is calibrated against peer-reviewed endocrine science and verified clinical guidelines.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#EFE9F6] shadow-sm text-center space-y-2">
              <span className="text-2xl font-bold text-[#10B981]">256-Bit</span>
              <h3 className="font-semibold text-neutral-900 text-sm">HIPAA & GDPR Privacy</h3>
              <p className="text-xs text-neutral-500 font-[450]">
                Your health data is sacred. We never sell, rent, or share personal logs with advertisers.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#EFE9F6] shadow-sm text-center space-y-2">
              <span className="text-2xl font-bold text-[#F59E0B]">7-Day</span>
              <h3 className="font-semibold text-neutral-900 text-sm">Risk-Free Exploration</h3>
              <p className="text-xs text-neutral-500 font-[450]">
                Experience our full suite of premium metabolic and cycle tools with zero commitment.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom CTA */}
        <ScrollReveal delay={400}>
          <div className="text-center pt-10 border-t border-[#EFE9F6] space-y-6">
            <h2 className="text-3xl sm:text-4xl font-heading font-normal text-neutral-900">
              Join the Yumocare Community
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/pricing"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#62419F] to-[#8B6EBF] hover:from-[#52318E] hover:to-[#7A5DAE] text-white font-semibold text-sm transition-all shadow-md shadow-[#62419F]/25 hover:scale-105"
              >
                Start Your Free Trial
              </Link>
              <Link
                href="/clinic"
                className="px-8 py-3.5 rounded-full bg-white border border-[#EFE9F6] text-neutral-800 hover:border-[#8B6EBF] hover:text-[#62419F] font-semibold text-sm transition-all"
              >
                Meet Our Medical Team
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
