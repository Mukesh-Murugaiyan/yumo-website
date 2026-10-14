"use client";

import React from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function CtaBannerSection() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <ScrollReveal>
        <div
          style={{ background: "var(--yumo-primary-background)" }}
          className="rounded-3xl p-10 sm:p-16 text-center text-white relative overflow-hidden shadow-2xl border border-white/20"
        >
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-[#DACFE9] text-xs font-bold uppercase tracking-wider">
              Start Your Wellness Journey
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-normal">
              Take Charge of Your Hormones with Yumocare.
            </h2>
            <p className="text-neutral-200 text-sm sm:text-base font-[450] leading-relaxed">
              Experience the power of evidence-based cycle syncing, metabolic tracking, and dedicated clinical support right in your pocket.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/pricing"
                className="bg-white text-[#62419F] hover:bg-[#FAF7FD] px-8 py-3.5 rounded-full font-semibold text-sm transition-all shadow-lg hover:scale-105"
              >
                Start 7-Day Free Trial
              </Link>
              <Link
                href="/clinic"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/25 px-8 py-3.5 rounded-full font-semibold text-sm transition-all"
              >
                Meet Our Doctors
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
