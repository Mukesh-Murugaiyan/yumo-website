"use client";

import React from "react";
import { Flame } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import IPhoneScreen from "@/components/IPhoneScreen";

export default function HealthScoreSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="bg-gradient-to-br from-[#FAF7FD] via-[#F2FBF6] to-[#FAF7FD] rounded-3xl p-8 sm:p-14 border border-[#10B981]/20 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECFDF5] text-[#10B981] text-xs font-semibold uppercase tracking-wider border border-[#10B981]/20">
                Proprietary Health Index
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-normal text-neutral-900 leading-tight">
                Your Health Score: <br />
                <span className="font-heading text-[#62419F] font-semibold">5 Dimensions of Real Progress.</span>
              </h2>
              <p className="text-neutral-600 font-[450] leading-relaxed text-sm sm:text-base">
                Rather than reducing your wellness to a single number, Yumocare monitors five interconnected physiological markers to provide you with a transparent 75/100 score:
              </p>

              {/* 5 Sub-scores from Screen 64 */}
              <div className="space-y-3 pt-2">
                <div className="bg-white p-3.5 rounded-xl border border-neutral-200/80 shadow-sm flex items-center justify-between">
                  <span className="text-sm font-semibold text-neutral-900">Cycle Regularity Trend</span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 sm:w-36 h-2 bg-neutral-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#62419F] rounded-full" style={{ width: "70%" }} />
                    </div>
                    <span className="text-xs font-bold text-neutral-900 w-8 text-right">7/10</span>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-neutral-200/80 shadow-sm flex items-center justify-between">
                  <span className="text-sm font-semibold text-neutral-900">Symptom Severity Trend</span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 sm:w-36 h-2 bg-neutral-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#10B981] rounded-full" style={{ width: "80%" }} />
                    </div>
                    <span className="text-xs font-bold text-neutral-900 w-8 text-right">8/10</span>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-neutral-200/80 shadow-sm flex items-center justify-between">
                  <span className="text-sm font-semibold text-neutral-900">Supplement Consistency (Inositol, Vit D)</span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 sm:w-36 h-2 bg-neutral-100 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: "60%" }} />
                    </div>
                    <span className="text-xs font-bold text-neutral-900 w-8 text-right">6/10</span>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-neutral-200/80 shadow-sm flex items-center justify-between">
                  <span className="text-sm font-semibold text-neutral-900">Insulin Indicators & Glycemic Load</span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 sm:w-36 h-2 bg-neutral-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#7153A8] rounded-full" style={{ width: "70%" }} />
                    </div>
                    <span className="text-xs font-bold text-neutral-900 w-8 text-right">7/10</span>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-neutral-200/80 shadow-sm flex items-center justify-between">
                  <span className="text-sm font-semibold text-neutral-900">Lifestyle Habits (Sleep, Steps, Hydration)</span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 sm:w-36 h-2 bg-neutral-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#10B981] rounded-full" style={{ width: "80%" }} />
                    </div>
                    <span className="text-xs font-bold text-neutral-900 w-8 text-right">8/10</span>
                  </div>
                </div>
              </div>

              {/* Actionable Tip callout */}
              <div className="p-4 rounded-xl bg-white border border-[#10B981]/25 flex items-start gap-3">
                <Flame className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <p className="text-xs text-neutral-700 leading-relaxed font-[450]">
                  <strong>Actionable Tip:</strong> Add a 15-minute post-meal walk and take your evening Inositol to boost your score to 82/100 this week.
                </p>
              </div>
            </div>

            {/* Right Column: Screen 64 in Reusable IPhoneScreen */}
            <div className="lg:col-span-5 flex justify-center">
              <IPhoneScreen
                src="/assets/figma-screens/iPhone 13 & 14 - 64.png"
                alt="Yumocare Health Score Breakdown Screen"
                size="md"
                badge="Screen 64"
                caption="Health Score & Breakdown Metrics"
              />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
