"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function PricingSection() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <ScrollReveal>
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE7F6] text-[#62419F] text-sm font-semibold border border-[#62419F]/15">
            <Sparkles className="w-4 h-4" />
            <span>Straightforward Membership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-normal text-neutral-900">
            Plans Built for Continuous Care
          </h2>
          <p className="text-neutral-600 max-w-xl mx-auto font-[450] text-sm sm:text-base">
            Try Yumocare Premium free for 7 days. Cancel anytime with a single click.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
        {/* Plus Plan */}
        <div className="bg-white rounded-3xl p-8 border border-[#EFE9F6] shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-heading font-normal text-neutral-900">Plus</h3>
              <div className="text-right">
                <span className="text-3xl font-bold text-neutral-900">₹199</span>
                <span className="text-xs text-neutral-500 block">/ month</span>
              </div>
            </div>
            <p className="text-xs text-neutral-500 mb-6 font-[450]">
              Enhanced tracking and smart recommendations
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2.5 text-xs text-neutral-700">
                <Check className="w-4 h-4 text-[#10B981] stroke-[2.5]" />
                <span>Cycle & symptom tracking</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-700">
                <Check className="w-4 h-4 text-[#10B981] stroke-[2.5]" />
                <span>Smart predictions & alerts</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-700">
                <Check className="w-4 h-4 text-[#10B981] stroke-[2.5]" />
                <span>Lifestyle recommendations</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-700">
                <Check className="w-4 h-4 text-[#10B981] stroke-[2.5]" />
                <span>Email support</span>
              </div>
            </div>
          </div>

          <Link
            href="/pricing"
            className="block w-full py-3 rounded-full text-center text-xs font-semibold bg-neutral-900 hover:bg-neutral-800 text-white transition-all"
          >
            Get Started with Plus
          </Link>
        </div>

        {/* Premium Plan (YUMO Signature Gradient Styling) */}
        <div className="bg-gradient-to-b from-white via-[#FAF7FD] to-[#F5F0FB] rounded-3xl p-8 border-2 border-[#62419F] shadow-2xl shadow-[#62419F]/20 flex flex-col justify-between relative">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#62419F] to-[#8B6EBF] text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
            Most Popular
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-heading font-normal text-neutral-900">Premium</h3>
              <div className="text-right">
                <span className="text-3xl font-bold text-neutral-900">₹299</span>
                <span className="text-xs text-neutral-500 block">/ month</span>
              </div>
            </div>
            <p className="text-xs text-neutral-500 mb-4 font-[450]">
              Advanced insights, personalized plans and care
            </p>

            <div className="mb-6 p-2.5 rounded-xl bg-[#EDE7F6] border border-[#62419F]/20 text-[11px] font-semibold text-[#62419F]">
              ★ Try Premium free for 7 days! Cancel anytime.
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-2.5 text-xs text-neutral-700">
                <Check className="w-4 h-4 text-[#62419F] stroke-[2.5]" />
                <span>Advanced cycle & symptom insights</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-700">
                <Check className="w-4 h-4 text-[#62419F] stroke-[2.5]" />
                <span>Personalized diet & workout plans</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-700">
                <Check className="w-4 h-4 text-[#62419F] stroke-[2.5]" />
                <span>Glycemic load & insulin dip AI</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-700">
                <Check className="w-4 h-4 text-[#62419F] stroke-[2.5]" />
                <span>AI lab report biomarker scanner</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-700">
                <Check className="w-4 h-4 text-[#62419F] stroke-[2.5]" />
                <span>Export clinical reports & priority care</span>
              </div>
            </div>
          </div>

          <Link
            href="/pricing"
            className="block w-full py-3 rounded-full text-center text-xs font-semibold bg-gradient-to-r from-[#62419F] to-[#8B6EBF] hover:from-[#52318E] hover:to-[#7B54BA] text-white transition-all shadow-md shadow-[#62419F]/20"
          >
            Start 7-Day Free Trial
          </Link>
        </div>
      </div>

      {/* 4 Trust Badges from Screen 82 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        <div className="text-center p-3.5 bg-white rounded-2xl border border-[#EFE9F6] shadow-sm">
          <span className="block text-xs font-bold text-neutral-900 tracking-wider">SECURE PAYMENTS</span>
          <span className="text-[10px] text-neutral-500">256-Bit SSL</span>
        </div>
        <div className="text-center p-3.5 bg-white rounded-2xl border border-[#EFE9F6] shadow-sm">
          <span className="block text-xs font-bold text-neutral-900 tracking-wider">CANCEL ANYTIME</span>
          <span className="text-[10px] text-neutral-500">No lock-in</span>
        </div>
        <div className="text-center p-3.5 bg-white rounded-2xl border border-[#EFE9F6] shadow-sm">
          <span className="block text-xs font-bold text-neutral-900 tracking-wider">100% DATA PRIVACY</span>
          <span className="text-[10px] text-neutral-500">Never sold to ads</span>
        </div>
        <div className="text-center p-3.5 bg-white rounded-2xl border border-[#EFE9F6] shadow-sm">
          <span className="block text-xs font-bold text-neutral-900 tracking-wider">24/7 SUPPORT</span>
          <span className="text-[10px] text-neutral-500">Care team ready</span>
        </div>
      </div>
    </section>
  );
}
