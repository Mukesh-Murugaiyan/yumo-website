"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Sparkles, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import IPhoneScreen from "@/components/IPhoneScreen";

const figmaExploreModules = [
  {
    id: "cycle-ai",
    title: "Smart Cycle Intelligence",
    tagline: "Adaptive predictions calibrated for regular & irregular PCOS cycles",
    desc: "Predicts periods, ovulatory windows, and hormonal phases dynamically based on your personal history rather than rigid 28-day templates.",
    screen: "/assets/figma-screens/iPhone 13 & 14 - 65.png",
    metric: "Day 6 of 28",
    badge: "Follicular Phase",
  },
  {
    id: "metabolic",
    title: "Metabolic Balance Tracker",
    tagline: "Track weight, waist, and BMI without luteal panic",
    desc: "Distinguish between permanent changes and temporary 1-2 kg water retention before periods, with 4-week trend analyses.",
    screen: "/assets/figma-screens/iPhone 13 & 14 - 32.png",
    metric: "62.0 kg",
    badge: "Steady Trend",
  },
  {
    id: "craving",
    title: "Craving Control & Insulin Interventions",
    tagline: "Identify emotional vs insulin dip triggers with healthy swaps",
    desc: "Log sweet, salty, or carb cravings, spot insulin dips, and receive actionable food swaps like magnesium-rich dark chocolate.",
    screen: "/assets/figma-screens/iPhone 13 & 14 - 33.png",
    metric: "Insulin Dip",
    badge: "Smart Food Swaps",
  },
  {
    id: "meals",
    title: "Cycle-Synced Meal Planner",
    tagline: "Daily macros & low-glycemic load tailored to each phase",
    desc: "Follicular iron replenishment, luteal magnesium focus, and clear Glycemic Load (GL) indicators per breakfast, lunch, and dinner.",
    screen: "/assets/figma-screens/iPhone 13 & 14 - 68.png",
    metric: "GL 6 - 8",
    badge: "Low Glycemic",
  },
  {
    id: "workouts",
    title: "Phase-Adaptive Workout Plans",
    tagline: "Exercise in sync with your cortisol and hormonal energy",
    desc: "From energizing morning cardio in follicular phase to restorative yoga and full-body sculpt routines.",
    screen: "/assets/figma-screens/iPhone 13 & 14 - 34.png",
    metric: "20 - 45 min",
    badge: "Cortisol-Friendly",
  },
  {
    id: "symptoms",
    title: "Symptom Pattern Recognition",
    tagline: "Spot recurring cramps, bloating, fatigue, and headaches",
    desc: "Log severity with one tap and let Yumocare uncover multi-cycle patterns like luteal bloating and early follicular cramps.",
    screen: "/assets/figma-screens/iPhone 13 & 14 - 38.png",
    metric: "4-Week Correl.",
    badge: "Automated Pattern AI",
  },
  {
    id: "treatments",
    title: "My Treatments & Supplement Regimens",
    tagline: "Track Inositol, Vitamin D, Spearmint & clinical prescriptions",
    desc: "Build consistency with adherence streaks, timed reminders, and clinical insights showing real symptom reduction.",
    screen: "/assets/figma-screens/iPhone 13 & 14 - 88.png",
    metric: "84% Adherence",
    badge: "12-Day Streak",
  },
  {
    id: "habits",
    title: "Habit Tracker & Weekly Insights",
    tagline: "Hydration, sleep, 10k steps, and mindfulness streaks",
    desc: "Track foundational health metrics and discover data-driven insights like how regular workouts boost your sleep duration by 45 mins.",
    screen: "/assets/figma-screens/iPhone 13 & 14 - 85.png",
    metric: "7.2k Avg Steps",
    badge: "Sleep & Hydration",
  },
  {
    id: "telehealth",
    title: "Clinic & Telehealth Consultations",
    tagline: "Certified Endocrinologists & Gynecologists on demand",
    desc: "Book direct video consultations with women's hormonal specialists, upload scans, and receive personalized medical care.",
    screen: "/assets/figma-screens/iPhone 13 & 14 - 41.png",
    metric: "Dr. Priya Sharma",
    badge: "Certified Specialist",
  },
  {
    id: "lab-scanner",
    title: "AI Lab Report Biomarker Scanner",
    tagline: "Extract glucose, insulin, testosterone & vitamin D from PDFs",
    desc: "Upload blood tests to automatically visualize biomarkers against clinical reference ranges and share them securely with your care team.",
    screen: "/assets/figma-screens/iPhone 13 & 14 - 86.png",
    metric: "4 Key Markers",
    badge: "OCR Biomarker Engine",
  },
];

export default function FeaturesCarouselSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-[#FAF7FD] via-[#F4F0FA] to-[#FAF7FD] border-y border-[#EFE9F6] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE7F6] text-[#62419F] text-sm font-semibold border border-[#62419F]/15">
              <Sparkles className="w-4 h-4" />
              <span>The Complete Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-normal text-neutral-900">
              10 Integrated Engines for Total Well-Being
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto font-[450] text-base">
              Derived directly from the verified Yumocare architecture. Everything you need to manage your cycle, metabolism, nutrition, and clinical care.
            </p>
          </div>
        </ScrollReveal>

        {/* Carousel Arrows */}
        <div className="flex justify-end gap-3 mb-4">
          <button
            onClick={() => scrollCarousel("left")}
            className="w-10 h-10 rounded-full bg-white shadow-md border border-[#DACFE9] flex items-center justify-center text-neutral-700 hover:text-[#62419F] hover:border-[#62419F] transition-all cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollCarousel("right")}
            className="w-10 h-10 rounded-full bg-white shadow-md border border-[#DACFE9] flex items-center justify-center text-neutral-700 hover:text-[#62419F] hover:border-[#62419F] transition-all cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Horizontal Scrolling Cards with IPhoneScreen Component */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth py-4 px-2"
        >
          {figmaExploreModules.map((item) => (
            <div
              key={item.id}
              className="group relative shrink-0 w-[290px] sm:w-[330px] bg-white rounded-3xl p-6 border border-[#EFE9F6] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-[#EDE7F6] text-[#62419F] text-xs font-semibold">
                    {item.badge}
                  </span>
                  <span className="text-xs font-bold text-neutral-900 bg-[#FAF7FD] px-2.5 py-1 rounded-full border border-[#DACFE9]">
                    {item.metric}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-normal text-neutral-900 mb-2 group-hover:text-[#62419F] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-neutral-700 mb-2">
                  {item.tagline}
                </p>
                <p className="text-xs text-neutral-500 font-[450] leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="flex flex-col items-center">
                {/* Reusable iPhone Screen Mockup with controlled viewport */}
                <div className="mb-4 w-full flex justify-center">
                  <IPhoneScreen
                    src={item.screen}
                    alt={item.title}
                    size="sm"
                    maxHeight={260}
                  />
                </div>

                <Link
                  href={`/features#${item.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#62419F] hover:text-[#52318E] transition-colors"
                >
                  Learn more about this engine
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#62419F] to-[#8B6EBF] hover:from-[#52318E] hover:to-[#7B54BA] text-white font-medium text-sm transition-all shadow-md shadow-[#62419F]/25 hover:scale-105"
          >
            View Full Feature Documentation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
