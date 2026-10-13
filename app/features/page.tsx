"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Activity,
  Heart,
  TrendingUp,
  Apple,
  Dumbbell,
  Sparkles,
  Pill,
  Bell,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Flame,
  Check,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import IPhoneScreen from "@/components/IPhoneScreen";

const featureEngines = [
  {
    id: "cycle-intelligence",
    category: "Cycle & Hormones",
    title: "Smart Cycle Intelligence",
    tagline: "Adaptive predictions calibrated for regular and irregular PCOS cycles",
    desc: "Unlike standard calendar apps that assume a 28-day cycle, Yumocare dynamically analyzes your past 3 cycles, logged symptoms, and follicular/luteal variations to give you precision timing.",
    screens: [
      {
        src: "/assets/figma-screens/iPhone 13 & 14 - 65.png",
        caption: "Phase Breakdown & Hormonal Signals",
      },
      {
        src: "/assets/figma-screens/iPhone 13 & 14 - 56.png",
        caption: "Cycle Intelligence & Symptom Frequency",
      },
      {
        src: "/assets/figma-screens/iPhone 13 & 14 - 84.png",
        caption: "Cycle Settings & Irregular Calibrations",
      },
    ],
    highlights: [
      "Dynamic countdown to next period, ovulation, and fertile window",
      "Specific support for irregular cycles with estimation confidence intervals",
      "Phase-by-phase symptom forecasts (Menstrual, Follicular, Ovulation, Luteal)",
      "Cycle duration and period length calibrations with 4-month history",
    ],
    metric: "29 Days",
    metricLabel: "Average cycle length calculated dynamically",
  },
  {
    id: "metabolic-tracking",
    category: "Metabolism & Weight",
    title: "Metabolic Balance & Body Metrics",
    tagline: "Track weight, waist, and BMI with cycle-aware contextualization",
    desc: "Weight fluctuations are natural across your menstrual cycle. Yumocare helps you distinguish between true fat loss/gain and temporary luteal water retention, keeping your progress steady without anxiety.",
    screens: [
      {
        src: "/assets/figma-screens/iPhone 13 & 14 - 32.png",
        caption: "Metabolic Tracker & 4-Week Trend Analysis",
      },
      {
        src: "/assets/figma-screens/iPhone 13 & 14 - 40.png",
        caption: "Longitudinal Weight Trends & Cycle Correlation",
      },
    ],
    highlights: [
      "Target goal ranges (e.g. Maintain 60-63 kg) with delta indicators",
      "Waist circumference logging to monitor visceral adiposity and insulin sensitivity",
      "4-week, 1-month, 3-month, and 6-month historical trend graphs",
      "Cycle-connection callouts: Explaining the 1-2 kg pre-period weight shift",
    ],
    metric: "62.0 kg",
    metricLabel: "Real-time metric logging with delta markers",
  },
  {
    id: "craving-control",
    category: "Nutrition & Metabolism",
    title: "Craving Control & Insulin Dip AI",
    tagline: "Decode sudden cravings, pinpoint triggers, and find smart swaps",
    desc: "Intense cravings in PCOS often stem from rapid insulin dips rather than lack of willpower. Log your cravings, identify emotional or physiological triggers, and receive healthy swaps that stabilize glucose.",
    screens: [
      {
        src: "/assets/figma-screens/iPhone 13 & 14 - 33.png",
        caption: "Craving Selection, Trigger Logging & Healthy Swaps",
      },
    ],
    highlights: [
      "Categorized logging: Sweet, Salty, Spicy, Caffeine, Carbs, Chocolate, Fatty",
      "Intensity slider and trigger tagging (Stress, Boredom, Visual triggers)",
      "Pattern detection AI: Recognizing insulin dips and recommending protein pairings",
      "Healthy swaps database: Dark chocolate (magnesium-rich), air-popped popcorn",
    ],
    metric: "Insulin Dip Alert",
    metricLabel: "Automated trigger & macronutrient intervention",
  },
  {
    id: "meal-planner",
    category: "Nutrition & Lifestyle",
    title: "Cycle-Synced Meal Planner & Glycemic Load",
    tagline: "Fuel your hormonal phases with low-glycemic, macro-balanced nutrition",
    desc: "Each cycle phase has unique metabolic demands. In your follicular phase, Yumocare prioritizes iron-rich foods for energy; in your luteal phase, it emphasizes complex carbs and healthy fats to ease PMS.",
    screens: [
      {
        src: "/assets/figma-screens/iPhone 13 & 14 - 68.png",
        caption: "Daily Macros, Glycemic Load & Follicular Nutrition Tip",
      },
    ],
    highlights: [
      "Phase-specific dietary guidance (e.g. Follicular iron replenishment)",
      "Daily macro targets: Calories, Protein (g), Carbohydrates (g), and Fats (g)",
      "Glycemic Load (GL) ratings for breakfast, lunch, snacks, and dinner",
      "Blood-sugar friendly meal ideas tailored for insulin resistance",
    ],
    metric: "GL 6 - 8",
    metricLabel: "Controlled glycemic impact per recommended meal",
  },
  {
    id: "workout-plans",
    category: "Fitness & Energy",
    title: "Phase-Adaptive Workout Plans",
    tagline: "Exercise in harmony with your hormonal energy curves",
    desc: "High-intensity training during your luteal or menstrual phase can elevate cortisol and aggravate PCOS symptoms. Yumocare curates workouts—from energizing morning cardio to restorative core flows—matched to your current energy.",
    screens: [
      {
        src: "/assets/figma-screens/iPhone 13 & 14 - 34.png",
        caption: "Curated Workouts: Cardio, Yoga Flow & Full Body Sculpt",
      },
    ],
    highlights: [
      "Tiered programs: Cardio Beginner, Yoga Intermediate, Strength Advanced",
      "Exercise previews with durations (20 min, 35 min, 45 min) and exercise counts",
      "Movement intensity scaled according to follicular, ovulation, and luteal phases",
      "Cortisol-conscious strength and mobility training",
    ],
    metric: "20 - 45 min",
    metricLabel: "Targeted cycle-aligned routines",
  },
  {
    id: "symptom-management",
    category: "Symptom Tracking",
    title: "Symptom Tracking & Pattern Recognition",
    tagline: "Uncover which symptoms return across your cycles and when",
    desc: "Log cramps, bloating, fatigue, headaches, nausea, and mood swings in seconds. Yumocare correlates your entries against cycle days to build your personalized symptom profile.",
    screens: [
      {
        src: "/assets/figma-screens/iPhone 13 & 14 - 35.png",
        caption: "Symptom Logging with 3-Level Severity & Notes",
      },
      {
        src: "/assets/figma-screens/iPhone 13 & 14 - 38.png",
        caption: "4-Week Symptom Trends & Cycle Phase Distribution",
      },
      {
        src: "/assets/figma-screens/iPhone 13 & 14 - 39.png",
        caption: "Holistic Health Trends Overview",
      },
    ],
    highlights: [
      "One-tap logging for 10+ common PCOS and hormonal symptoms",
      "3-tier severity calibration: Low, Moderate, Severe with notes",
      "Automated pattern recognition: 'Bloating usually Day 20-25, Cramps Day 1-4'",
      "Longitudinal 4-week bar charts showing symptom recurrence frequency",
    ],
    metric: "4-Week Correlation",
    metricLabel: "Symptom frequency plotted by cycle phase",
  },
  {
    id: "treatment-protocols",
    category: "Treatments & Supplements",
    title: "My Treatments & Supplement Adherence",
    tagline: "Track Inositol, Vitamin D, Spearmint, and clinical prescriptions",
    desc: "Consistency is critical for managing PCOS and hormone balance. Track your daily supplement doses, maintain adherence streaks, and read evidence-based insights on how your regimen is impacting your symptoms.",
    screens: [
      {
        src: "/assets/figma-screens/iPhone 13 & 14 - 88.png",
        caption: "Regimen Adherence Score (84%), Streaks & Clinical Insights",
      },
      {
        src: "/assets/figma-screens/iPhone 13 & 14 - 89.png",
        caption: "Add Supplement Protocol with Dosages & Timing",
      },
    ],
    highlights: [
      "Adherence percentage tracking with active daily streaks",
      "Built-in support for PCOS staples: Myo-Inositol, Vitamin D3, Spearmint tea/capsules",
      "Time-of-day scheduling: Morning, Afternoon, Night with food instructions",
      "Treatment insights: Evidence showing reduced bloating with consistent Inositol use",
    ],
    metric: "84% Adherence",
    metricLabel: "Average user routine consistency",
  },
  {
    id: "habit-tracker",
    category: "Habits & Routines",
    title: "Habit Tracker & Weekly Wellness Insights",
    tagline: "Build foundational routines for hydration, sleep, steps, and mindfulness",
    desc: "Hormone health starts with daily baseline habits. Monitor your water intake, sleep quality, daily 10k steps, and meditation. Yumocare's AI discovers hidden correlations between your habits and your symptoms.",
    screens: [
      {
        src: "/assets/figma-screens/iPhone 13 & 14 - 85.png",
        caption: "Daily Habit Checklist with Streaks & Cycle Tips",
      },
      {
        src: "/assets/figma-screens/iPhone 13 & 14 - 67.png",
        caption: "Weekly Insights & Discovered Behavioral Patterns",
      },
      {
        src: "/assets/figma-screens/iPhone 13 & 14 - 61.png",
        caption: "Daily Steps Tracker with 7-Day Bar Chart",
      },
    ],
    highlights: [
      "Core habits tracking: 8 Glasses of Water, 7h Sleep, 10k Steps, Meditation",
      "Streak counters (e.g. 12-day water streak) to maintain positive momentum",
      "Discovered patterns: 'Exercise boosts sleep quality by 45 minutes'",
      "Targeted focus tips: Setting hydration reminders to counter mid-week dips",
    ],
    metric: "12-Day Streak",
    metricLabel: "Habit momentum and positive reinforcement",
  },
  {
    id: "health-score",
    category: "Intelligence & Scoring",
    title: "PCOS Health Score & Daily Progress",
    tagline: "A unified, holistic health index that reflects your true wellness",
    desc: "Yumocare synthesizes five distinct health pillars into a single transparent score out of 100, giving you clear visibility into what is improving and where you can focus next.",
    screens: [
      {
        src: "/assets/figma-screens/iPhone 13 & 14 - 63.png",
        caption: "Daily Dashboard with PCOS Score & Progress Metrics",
      },
      {
        src: "/assets/figma-screens/iPhone 13 & 14 - 64.png",
        caption: "Health Score Sub-Factor Breakdown & Next Steps",
      },
      {
        src: "/assets/figma-screens/iPhone 13 & 14 - 37.png",
        caption: "Long-Term Progress Hub & Habit Consistency",
      },
    ],
    highlights: [
      "Proprietary composite index calibrated specifically for women's endocrine health",
      "Clear sub-scores: Cycle Regularity (7/10), Symptom Severity (8/10), Supplement Consistency (6/10), Insulin Indicators (7/10), Lifestyle Habits (8/10)",
      "Actionable micro-recommendations to immediately boost your score",
      "Track improvement over 7-day, 30-day, and quarterly intervals",
    ],
    metric: "75 / 100",
    metricLabel: "Transparent, multidimensional health scoring",
  },
  {
    id: "reminders-notifications",
    category: "Adherence & Alerts",
    title: "Smart Reminders & Proactive Care Alerts",
    tagline: "Never miss a supplement, appointment, or fertile window",
    desc: "Manage your personalized notifications for medication, hydration, bedtime routines, upcoming period forecasts, and clinic consultations with granular controls.",
    screens: [
      {
        src: "/assets/figma-screens/iPhone 13 & 14 - 91.png",
        caption: "Reminders Hub with Active Schedules",
      },
      {
        src: "/assets/figma-screens/iPhone 13 & 14 - 49.png",
        caption: "Granular Notification Preference Controls",
      },
      {
        src: "/assets/figma-screens/iPhone 13 & 14 - 31.png",
        caption: "Activity & Alert Notifications Feed",
      },
    ],
    highlights: [
      "Separate categories: Health, Cycle, Clinic, and Custom Reminders",
      "Supplements & medicine alerts with customizable repeat intervals",
      "Bedtime routine prompts and mid-day hydration reminders",
      "Full privacy controls: Toggle anonymous data sharing and notifications",
    ],
    metric: "100% Control",
    metricLabel: "Configurable alert schedules & notifications",
  },
];

export default function FeaturesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Cycle & Hormones",
    "Metabolism & Weight",
    "Nutrition & Metabolism",
    "Fitness & Energy",
    "Symptom Tracking",
    "Treatments & Supplements",
    "Habits & Routines",
    "Intelligence & Scoring",
  ];

  const filteredEngines =
    activeCategory === "All"
      ? featureEngines
      : featureEngines.filter((f) => f.category === activeCategory);

  return (
    <div className="pt-28 pb-20 overflow-hidden bg-yumo-primary-bg min-h-screen">
      {/* Header Banner with Global Primary Background */}
      <section className="px-6 max-w-5xl mx-auto text-center mb-16">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>The Yumocare Platform Architecture</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-normal text-white leading-tight mb-6">
            Intelligent Health Engines, <br />
            <span className="font-body text-[#DACFE9]">
              Built for Real Women.
            </span>
          </h1>
          <p className="text-lg text-[#DACFE9] max-w-2xl mx-auto font-[450] leading-relaxed">
            Every feature in Yumocare is designed around the biological reality of hormonal fluctuations, insulin sensitivity, and everyday adherence.
          </p>
        </ScrollReveal>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-white text-[#62419F] font-semibold shadow-md"
                  : "bg-white/20 border border-white/30 text-white hover:bg-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Feature Engines Grid */}
      <section className="px-6 max-w-7xl mx-auto space-y-24">
        {filteredEngines.map((engine, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={engine.id}
              id={engine.id}
              className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#DACFE9]/40 grid lg:grid-cols-12 gap-12 items-center"
            >
              {/* Text Column */}
              <div
                className={`lg:col-span-6 space-y-6 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE7F6] text-[#62419F] text-xs font-semibold tracking-wide uppercase border border-[#62419F]/15">
                  {engine.category}
                </div>
                <h2 className="text-3xl sm:text-4xl font-heading font-normal text-neutral-900 leading-snug">
                  {engine.title}
                </h2>
                <p className="text-base font-medium text-neutral-800">
                  {engine.tagline}
                </p>
                <p className="text-neutral-600 font-[450] leading-relaxed text-sm sm:text-base">
                  {engine.desc}
                </p>

                {/* Highlights List */}
                <div className="space-y-3 pt-2">
                  {engine.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-sm text-neutral-700 font-[450]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Metric Badge */}
                <div className="pt-4 flex items-center gap-4">
                  <div className="bg-white border border-[#EFE9F6] rounded-2xl px-5 py-3 shadow-sm">
                    <span className="block text-xl font-bold text-[#62419F]">
                      {engine.metric}
                    </span>
                    <span className="block text-xs text-neutral-500 font-medium">
                      {engine.metricLabel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Screens Showcase Column Using Reusable IPhoneScreen Component */}
              <div
                className={`lg:col-span-6 flex justify-center items-center ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="flex flex-wrap sm:flex-nowrap justify-center gap-4 p-4 bg-gradient-to-br from-white via-[#FAF7FD] to-[#F5F0FB] rounded-3xl border border-[#DACFE9]/60 shadow-xl shadow-[#62419F]/5">
                  {engine.screens.map((screen, sIdx) => (
                    <IPhoneScreen
                      key={sIdx}
                      src={screen.src}
                      alt={screen.caption}
                      caption={screen.caption}
                      size="sm"
                      maxHeight={360}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA Section (Midnight YUMO Violet) */}
      <section className="mt-28 px-6 max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="bg-gradient-to-br from-[#2D1B4E] via-[#43236F] to-[#62419F] rounded-3xl p-10 sm:p-14 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-[#DACFE9] text-xs font-semibold uppercase tracking-wider">
                Experience the Full Ecosystem
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-normal">
                Take Charge of Your Hormonal Health Today
              </h2>
              <p className="text-neutral-200 text-base font-[450] leading-relaxed">
                Join thousands of women who use Yumocare to decode symptoms, balance insulin, track treatments, and consult expert endocrinologists.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Link
                  href="/pricing"
                  className="bg-white text-[#62419F] hover:bg-[#FAF7FD] px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg hover:scale-105"
                >
                  Explore Pricing & Plans
                </Link>
                <Link
                  href="/clinic"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-full font-semibold transition-all"
                >
                  Meet Our Specialists
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
