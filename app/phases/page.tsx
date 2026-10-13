import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Sparkles, Calendar, Zap, Heart, Moon, ArrowRight, Check } from "lucide-react";
import IPhoneScreen from "@/components/IPhoneScreen";

export const metadata: Metadata = {
  title: "Menstrual Cycle Phases & Hormonal Syncing | Yumocare",
  description:
    "Master your 4 hormonal phases: Menstrual (Day 1-5), Follicular (Day 6-13), Ovulation (Day 14-16), and Luteal (Day 17-28) with cycle-synced nutrition, workouts, and symptom management.",
};

const phasesData = [
  {
    phase: "Phase 1",
    days: "Days 1 – 5",
    name: "Menstrual Phase",
    color: "bg-[#EDE7F6] border-[#DACFE9] text-[#62419F]",
    dotColor: "bg-[#62419F]",
    icon: Moon,
    description:
      "Your period initiates a new cycle as progesterone and estrogen hit baseline levels. Your body requires restful rejuvenation and gentle circulation.",
    nutritionalTip: "Focus on warm, iron-rich and mineral-dense foods (spinach, lentils, bone broth) to replenish iron lost during menses.",
    movementTip: "Gentle walks, light pelvic stretching, and restorative yoga. Avoid high-intensity cortisol spikes.",
    symptoms: ["Cramps (usually Days 1-4)", "Low baseline energy", "Mild fatigue"],
  },
  {
    phase: "Phase 2",
    days: "Days 6 – 13",
    name: "Follicular Phase",
    color: "bg-[#F3EFFF] border-[#C3AFE0] text-[#7153A8]",
    dotColor: "bg-[#7153A8]",
    icon: Zap,
    description:
      "Estrogen begins its steady ascent as follicles develop. This is your biological peak for cognitive stamina, creativity, and fresh physical vitality.",
    nutritionalTip: "Complex carbohydrates, vibrant salads, and fermented foods to assist healthy estrogen metabolism.",
    movementTip: "Cardio boosts, HIIT, and strength building. Take advantage of high stamina and rapid muscle recovery.",
    symptoms: ["More energy", "Better cognitive focus", "High motivation", "Clearer skin", "Improved mood"],
  },
  {
    phase: "Phase 3",
    days: "Days 14 – 16",
    name: "Ovulation Phase",
    color: "bg-emerald-50 border-emerald-200 text-emerald-800",
    dotColor: "bg-[#10B981]",
    icon: Sparkles,
    description:
      "A surge in Luteinizing Hormone (LH) triggers egg release. Estrogen and testosterone reach their peak, boosting verbal fluency and social charisma.",
    nutritionalTip: "Fiber-rich cruciferous vegetables (broccoli, Brussels sprouts) and antioxidants to support liver estrogen clearance.",
    movementTip: "Peak strength training, running, and dynamic athletic workouts while physical power is at its apex.",
    symptoms: ["Heightened energy", "Peak libido", "Mild mid-cycle twinge", "Confidence surge"],
  },
  {
    phase: "Phase 4",
    days: "Days 17 – 28",
    name: "Luteal Phase",
    color: "bg-amber-50 border-amber-200 text-amber-900",
    dotColor: "bg-[#F59E0B]",
    icon: Heart,
    description:
      "Progesterone dominates to prepare the endometrial lining. Basal metabolic rate increases by ~100-300 kcal, often triggering insulin dips and cravings.",
    nutritionalTip: "Magnesium-rich foods (dark chocolate, pumpkin seeds) and healthy fats. Pair carbohydrates with protein to avoid sugar spikes.",
    movementTip: "Strength sculpting, Pilates, and grounding yoga flows. Keep workouts moderate to avoid adrenal fatigue.",
    symptoms: ["Bloating (usually Days 20-25)", "Carb/sweet cravings", "Breast tenderness", "Fluid retention"],
  },
];

export default function PhasesPage() {
  return (
    <div className="pt-32 pb-24 px-6 overflow-hidden bg-yumo-primary-bg min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-sm font-semibold">
            <Calendar className="w-4 h-4" />
            <span>Hormonal Roadmap from Yumocare Screen 65</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-normal text-white leading-tight">
            Sync With Your 4 Cycle Phases
          </h1>
          <p className="text-lg text-[#DACFE9] max-w-2xl mx-auto font-[450] leading-relaxed">
            Harness the power of your natural hormonal rhythms. Know what to eat, how to move, and how to conquer cravings across every day of your 28 to 35-day cycle.
          </p>
        </header>

        {/* Phase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {phasesData.map((item) => (
            <div
              key={item.name}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[#EFE9F6] shadow-md flex flex-col justify-between hover:shadow-xl transition-all"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#62419F]">
                      {item.phase}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-600">
                      {item.days}
                    </span>
                  </div>
                  <div className={`w-3.5 h-3.5 rounded-full ${item.dotColor}`} />
                </div>

                <h2 className="text-2xl sm:text-3xl font-heading font-normal text-neutral-900">
                  {item.name}
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-[450]">
                  {item.description}
                </p>

                {/* Expected Symptoms */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                    Expected Hormonal Signals
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.symptoms.map((sym, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md bg-[#EDE7F6] text-[#62419F] text-xs font-medium"
                      >
                        {sym}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100 space-y-3">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                    Nutrition Focus
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-[450]">
                    {item.nutritionalTip}
                  </p>
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                    Movement Focus
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-[450]">
                    {item.movementTip}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Proof Section with Reusable IPhoneScreen Component */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white via-[#FAF7FD] to-[#F5F0FB] border border-[#DACFE9]/70 shadow-xl mb-20">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#62419F]">
                Real App Implementation
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-normal text-neutral-900">
                How Yumocare Visualizes Your Cycle Status
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 font-[450] leading-relaxed">
                As seen on Screen 65 of the mobile application, Yumocare dynamically tracks your current day (e.g. Day 6 of 28 Follicular Phase), projects your upcoming ovulation in 8 days, predicts your next period in 16 days, and summarizes the positive hormonal superpowers you can leverage right now.
              </p>
              <div className="pt-2">
                <Link
                  href="/features#cycle-intelligence"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#62419F] hover:text-[#52318E]"
                >
                  Explore Smart Cycle Intelligence
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <IPhoneScreen
                src="/assets/figma-screens/iPhone 13 & 14 - 65.png"
                alt="Cycle Status Breakdown from Figma"
                size="md"
                badge="Screen 65"
                caption="Cycle Status Breakdown & Symptoms"
              />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8 border-t border-[#EFE9F6] space-y-6">
          <h2 className="text-3xl sm:text-4xl font-heading font-normal text-neutral-900">
            Start Syncing Your Life with Yumocare
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#62419F] to-[#8B6EBF] hover:from-[#52318E] hover:to-[#7B54BA] text-white font-semibold text-sm transition-all shadow-md shadow-[#62419F]/25 hover:scale-105"
            >
              Get Started with 7-Day Free Trial
            </Link>
            <Link
              href="/features#cycle-intelligence"
              className="px-8 py-3.5 rounded-full bg-white border border-[#DACFE9] text-neutral-800 hover:border-[#62419F] hover:text-[#62419F] font-semibold text-sm transition-all"
            >
              Explore Smart Cycle Intelligence
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
