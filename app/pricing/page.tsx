"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Sparkles,
  ShieldCheck,
  CreditCard,
  RotateCcw,
  Headphones,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import IPhoneScreen from "@/components/IPhoneScreen";

const plans = [
  {
    id: "plus",
    name: "Plus",
    tagline: "Enhanced tracking and smart recommendations",
    price: "199",
    currency: "₹",
    period: "/ month",
    popular: false,
    cta: "Get Started with Plus",
    features: [
      "Cycle & symptom tracking",
      "Smart predictions & alerts",
      "Lifestyle recommendations",
      "Email support",
      "Daily water & steps tracking",
      "Standard notification reminders",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Advanced insights, personalized plans and expert care",
    price: "299",
    currency: "₹",
    period: "/ month",
    popular: true,
    trialBadge: "Try Premium free for 7 days! No charges for 7 days. Cancel anytime.",
    cta: "Start 7-Day Free Trial",
    features: [
      "Everything in Plus, plus:",
      "Advanced cycle & symptom insights",
      "Personalized diet & workout plans",
      "Cycle-synced meal plans with Glycemic Load",
      "Craving control & insulin dip pattern AI",
      "Expert recommended daily tips",
      "AI Lab Report scanner & biomarker timeline",
      "Export clinical PDF reports for doctors",
      "Priority clinical support",
    ],
  },
];

const comparisonMatrix = [
  { feature: "Smart Cycle & Symptom Tracking", plus: true, premium: true },
  { feature: "Adaptive Period & Ovulation Forecasts", plus: true, premium: true },
  { feature: "Daily Habit Streaks (Water, Steps, Sleep)", plus: true, premium: true },
  { feature: "General Lifestyle Recommendations", plus: true, premium: true },
  { feature: "7-Day Free Trial", plus: false, premium: true },
  { feature: "Personalized Low-Glycemic Meal Plans", plus: false, premium: true },
  { feature: "Phase-Adaptive Workout Routines", plus: false, premium: true },
  { feature: "Craving Control & Insulin Interventions", plus: false, premium: true },
  { feature: "Treatment & Supplement Adherence Tracker", plus: false, premium: true },
  { feature: "AI Lab Report Extraction & Analysis", plus: false, premium: true },
  { feature: "Doctor-Ready PDF Clinical Export", plus: false, premium: true },
  { feature: "Priority 24/7 Clinical Support", plus: false, premium: true },
];

export default function PricingPage() {
  return (
    <div className="pt-28 pb-20 overflow-hidden bg-yumo-primary-bg min-h-screen">
      {/* Hero Header */}
      <section className="px-6 max-w-5xl mx-auto text-center mb-16">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Transparent & Flexible Membership</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-normal text-white leading-tight mb-6">
            Invest in Your Hormonal Health <br />
            <span className="font-body text-[#DACFE9]">
              With Zero Hidden Fees.
            </span>
          </h1>
          <p className="text-lg text-[#DACFE9] max-w-2xl mx-auto font-[450] leading-relaxed">
            Choose the level of clinical intelligence and personalized care that fits your lifestyle. Start with our 7-day risk-free trial on Premium.
          </p>
        </ScrollReveal>
      </section>

      {/* Pricing Cards Grid */}
      <section className="px-6 max-w-5xl mx-auto mb-20">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all ${
                plan.popular
                  ? "bg-gradient-to-b from-white via-[#FAF7FD] to-[#F5F0FB] border-2 border-[#62419F] shadow-2xl shadow-[#62419F]/20"
                  : "bg-white border border-[#EFE9F6] shadow-md hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#62419F] to-[#8B6EBF] text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-heading font-normal text-neutral-900">{plan.name}</h3>
                  <div className="text-right">
                    <span className="text-3xl sm:text-4xl font-bold text-neutral-900">
                      {plan.currency}{plan.price}
                    </span>
                    <span className="text-xs text-neutral-500 font-medium block">{plan.period}</span>
                  </div>
                </div>

                <p className="text-sm text-neutral-600 mb-6 font-[450]">{plan.tagline}</p>

                {plan.trialBadge && (
                  <div className="mb-6 p-3 rounded-xl bg-[#EDE7F6] border border-[#62419F]/20 text-xs font-semibold text-[#62419F]">
                    ★ {plan.trialBadge}
                  </div>
                )}

                <div className="w-full h-px bg-neutral-100 mb-6" />

                <div className="space-y-3.5 mb-8">
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
                    What's included:
                  </span>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-sm text-neutral-700 font-[450]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href="https://apps.apple.com/US/app/id6447674634"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3.5 rounded-full text-center text-sm font-semibold transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#62419F] to-[#8B6EBF] hover:from-[#52318E] hover:to-[#7B54BA] text-white shadow-lg shadow-[#62419F]/25 hover:scale-[1.02]"
                      : "bg-neutral-900 hover:bg-neutral-800 text-white"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges - Exact 4 Badges from Figma Screen 82 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-[#EFE9F6] shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#EDE7F6] text-[#62419F] flex items-center justify-center shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-neutral-900 tracking-wide block">SECURE PAYMENTS</span>
              <span className="text-[11px] text-neutral-500">256-bit encryption</span>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-[#EFE9F6] shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#EDE7F6] text-[#62419F] flex items-center justify-center shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-neutral-900 tracking-wide block">CANCEL ANYTIME</span>
              <span className="text-[11px] text-neutral-500">Instant in 1 click</span>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-[#EFE9F6] shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#EDE7F6] text-[#62419F] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-neutral-900 tracking-wide block">100% DATA PRIVACY</span>
              <span className="text-[11px] text-neutral-500">Never sold to ads</span>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-[#EFE9F6] shadow-sm">
            <div className="w-10 h-10 rounded-full bg-[#EDE7F6] text-[#62419F] flex items-center justify-center shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-neutral-900 tracking-wide block">24/7 SUPPORT</span>
              <span className="text-[11px] text-neutral-500">Dedicated care team</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Matrix */}
      <section className="px-6 max-w-4xl mx-auto mb-20">
        <ScrollReveal>
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EFE9F6] shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-heading font-normal text-neutral-900 text-center mb-8">
              Compare Plan Capabilities
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="py-4 text-sm font-semibold text-neutral-600">Feature</th>
                    <th className="py-4 text-center text-sm font-semibold text-neutral-900 w-28">Plus</th>
                    <th className="py-4 text-center text-sm font-semibold text-[#62419F] w-28">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {comparisonMatrix.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-neutral-50/70 transition-colors">
                      <td className="py-3.5 text-sm text-neutral-700 font-[450]">{row.feature}</td>
                      <td className="py-3.5 text-center">
                        {row.plus ? (
                          <Check className="w-4 h-4 text-[#10B981] mx-auto stroke-[2.5]" />
                        ) : (
                          <span className="text-neutral-300">—</span>
                        )}
                      </td>
                      <td className="py-3.5 text-center">
                        {row.premium ? (
                          <Check className="w-4 h-4 text-[#62419F] mx-auto stroke-[2.5]" />
                        ) : (
                          <span className="text-neutral-300">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Figma Visual Reference Showcase With Reusable IPhoneScreen */}
      <section className="px-6 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <div className="inline-block p-6 bg-gradient-to-br from-white via-[#FAF7FD] to-[#F5F0FB] rounded-3xl border border-[#DACFE9]/70 shadow-lg">
            <IPhoneScreen
              src="/assets/figma-screens/iPhone 13 & 14 - 82.png"
              alt="Yumocare Figma Subscription Screen Reference"
              size="md"
              badge="Screen 82"
              caption="Membership Plans & Trust Guarantees"
            />
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
