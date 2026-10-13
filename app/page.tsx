"use client";

import React, { useState, useRef } from "react";
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
  ChevronLeft,
  ChevronRight,
  Star,
  Stethoscope,
  ShieldCheck,
  ArrowRight,
  Check,
  Zap,
  Lock,
  FileText,
  Clock,
  Layers,
  Flame,
} from "lucide-react";
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

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-hidden">
      {/* SECTION 1: HERO (Global Primary Background Token) */}
      <section
        style={{ background: "var(--yumo-primary-background)" }}
        className="pt-32 pb-20 px-6 relative overflow-hidden text-white"
      >
        {/* Subtle Celestial Twinkling Star Accents */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-24 left-[15%] w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          <div className="absolute top-40 right-[20%] w-1 h-1 bg-white rounded-full animate-ping" />
          <div className="absolute top-64 left-[35%] w-2 h-2 bg-[#DACFE9] rounded-full opacity-60" />
          <div className="absolute top-32 right-[40%] w-1 h-1 bg-white rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-10 items-center">
            {/* Left Column: Text & Badges */}
            <div className="lg:col-span-5 xl:col-span-5 text-center lg:text-left z-20 relative pt-4 flex flex-col items-center lg:items-start">
              {/* Rating Pill */}
              <div
                className="inline-flex flex-row items-center gap-2.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-1.5 mb-6 shadow-sm opacity-0 animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="flex -space-x-1.5">
                  <div className="w-6 h-6 rounded-full bg-white text-[#62419F] flex items-center justify-center text-[10px] font-bold">
                    Y
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#DACFE9] text-[#62419F] flex items-center justify-center text-[10px] font-bold">
                    C
                  </div>
                </div>
                <span className="text-xs sm:text-sm text-white font-medium flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300 inline -mt-0.5" />
                  <span className="font-semibold text-white">4.9</span> on iOS & Android • The Body Whisperer
                </span>
              </div>

              {/* Headline */}
              <h1
                className="text-[2.6rem] sm:text-[3.5rem] lg:text-[3.6rem] xl:text-[4rem] leading-[1.08] mb-6 tracking-tight font-heading text-white font-normal opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Hormonal Clarity & <br />
                <span className="font-body text-[#DACFE9] font-medium">
                  Holistic PCOS Care.
                </span>
              </h1>

              {/* Subtitle */}
              <p
                className="text-base sm:text-lg text-white/90 mb-8 max-w-xl font-[450] leading-relaxed opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                Connect smart cycle predictions, insulin-dip craving interventions, metabolic tracking, supplement protocols, and video consultations with expert endocrinologists in one integrated ecosystem.
              </p>

              {/* App Store Download Badges */}
              <div
                className="flex flex-wrap gap-3.5 justify-center lg:justify-start mb-8 opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <a
                  href="https://apps.apple.com/US/app/id6447674634"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <Image
                    src="/appstore.svg"
                    alt="Download Yumocare on the App Store"
                    width={132}
                    height={44}
                    priority
                    style={{ width: "auto" }}
                    className="h-11 rounded-lg w-auto"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.app.lively_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <Image
                    src="/google-play.svg"
                    alt="Get Yumocare on Google Play"
                    width={132}
                    height={44}
                    priority
                    style={{ width: "auto" }}
                    className="h-11 rounded-lg w-auto"
                  />
                </a>
                <Link
                  href="/features"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#62419F] font-semibold text-sm hover:bg-[#FAF7FD] transition-all shadow-md"
                >
                  Explore All 10 Engines
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Quick Trust Highlights */}
              <div
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-white/85 font-medium opacity-0 animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
              >
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#10B981] stroke-[2.5]" />
                  Calibrated for Irregular Cycles
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#10B981] stroke-[2.5]" />
                  Endocrinologist Telehealth
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#10B981] stroke-[2.5]" />
                  256-Bit Data Privacy
                </span>
              </div>
            </div>

            {/* Right Column: Hero Three Screen Trio Showcase */}
            <div className="lg:col-span-7 xl:col-span-7 relative flex justify-center items-center mt-12 lg:mt-0">
              <div className="relative w-full max-w-[305px] sm:max-w-[360px] md:max-w-[410px] lg:max-w-[465px] xl:max-w-[510px] flex justify-center items-center py-4 sm:py-6 lg:py-8 select-none">
                {/* Ambient Lavender/Violet Multi-layer Radial Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#62419F]/35 via-[#8B6EBF]/25 to-[#DACFE9]/30 rounded-full blur-3xl pointer-events-none transform -rotate-3" />

                {/* SCREEN 1: Left Wing - Screen 60 (Cycle Overview & Explore Calendar) */}
                <div className="absolute left-1/2 -translate-x-[102%] sm:-translate-x-[103%] lg:-translate-x-[105%] xl:-translate-x-[106%] -top-1.5 sm:-top-4 lg:-top-5 z-10 origin-bottom-right rotate-[-4deg] lg:rotate-[-5deg] transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-30">
                  <div
                    className="opacity-0 animate-hero-screen"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <IPhoneScreen
                      src="/assets/figma-screens/iPhone 13 & 14 - 60.png"
                      alt="Yumocare Cycle Overview & Calendar"
                      size="xs"
                      badge="Cycle Intelligence"
                      className="w-[120px] sm:w-[145px] md:w-[160px] lg:w-[180px] xl:w-[190px]"
                    />
                  </div>
                </div>

                {/* SCREEN 2: Center Stage - Screen 63 (Daily Dashboard Hero) */}
                <div className="relative z-20 origin-center transition-all duration-500 hover:scale-[1.02]">
                  <div
                    className="opacity-0 animate-hero-screen"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <IPhoneScreen
                      src="/assets/figma-screens/iPhone 13 & 14 - 63.png"
                      alt="Yumocare Daily Dashboard: Good Morning Riya, PCOS Score 75/100"
                      priority={true}
                      size="sm"
                      badge="Daily Dashboard"
                      className="w-[155px] sm:w-[185px] md:w-[210px] lg:w-[225px] xl:w-[240px]"
                    />

                    {/* Floating Health Score Badge */}
                    <div className="absolute -bottom-3 sm:-bottom-3.5 left-1/2 -translate-x-1/2 z-30 bg-white/95 backdrop-blur-xl px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-2xl border border-[#DACFE9] shadow-2xl min-w-[135px] sm:min-w-[145px] text-center hidden sm:block">
                      <div className="flex items-center justify-center gap-1.5 mb-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                        <span className="text-[8px] sm:text-[9px] font-bold text-neutral-900 uppercase tracking-wider">
                          Health Score
                        </span>
                      </div>
                      <div className="text-base sm:text-lg font-bold text-[#62419F]">75 / 100</div>
                      <span className="text-[8px] sm:text-[9px] text-neutral-500 leading-tight block mt-0.5">
                        Improving • +2 days streak
                      </span>
                    </div>
                  </div>
                </div>

                {/* SCREEN 3: Right Wing - Screen 42 (Clinic & Telehealth Consultations) */}
                <div className="absolute left-1/2 translate-x-[2%] sm:translate-x-[3%] lg:translate-x-[5%] xl:translate-x-[6%] top-3 sm:top-5 lg:top-5 z-10 origin-bottom-left rotate-[4deg] lg:rotate-[5deg] transition-all duration-500 hover:rotate-0 hover:scale-105 hover:z-30">
                  <div
                    className="opacity-0 animate-hero-screen"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <IPhoneScreen
                      src="/assets/figma-screens/iPhone 13 & 14 - 42.png"
                      alt="Yumocare Clinic & Telehealth Consultations"
                      size="xs"
                      badge="Clinical Care"
                      className="w-[120px] sm:w-[145px] md:w-[160px] lg:w-[180px] xl:w-[190px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 10 CORE WELLNESS & CLINICAL ENGINES (Lavender-Toned Background from Screen 60) */}
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

      {/* SECTION 3: HOLISTIC HEALTH SCORE (Derived from Screen 64 Mint & Lavender Tones) */}
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
                  <span className="font-body text-[#62419F]">5 Dimensions of Real Progress.</span>
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

      {/* SECTION 4: CLINICAL TELEHEALTH & LAB EXTRACTION (Derived from Screen 42 & 86 Ice-Blue/Clean White) */}
      <section className="py-20 bg-gradient-to-b from-white via-[#F4F6FC] to-white border-t border-[#EFE9F6]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Reusable IPhoneScreen Showcase */}
              <div className="lg:col-span-5 flex justify-center gap-4">
                <IPhoneScreen
                  src="/assets/figma-screens/iPhone 13 & 14 - 42.png"
                  alt="Clinic Hub"
                  size="sm"
                  badge="Clinic Hub"
                />
                <IPhoneScreen
                  src="/assets/figma-screens/iPhone 13 & 14 - 86.png"
                  alt="Lab Values OCR"
                  size="sm"
                  badge="AI Lab OCR"
                />
              </div>

              {/* Right Column: Text & Features */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EDE7F6] text-[#62419F] text-xs font-semibold uppercase tracking-wider border border-[#62419F]/15">
                  Clinical Telehealth & Lab Extraction
                </div>
                <h2 className="text-3xl sm:text-4xl font-heading font-normal text-neutral-900 leading-tight">
                  Bridging Daily Wellness with <br />
                  <span className="font-body text-[#62419F]">Licensed Medical Experts.</span>
                </h2>
                <p className="text-neutral-600 font-[450] leading-relaxed text-sm sm:text-base">
                  Yumocare doesn't stop at tracking. Connect seamlessly with verified endocrinologists and gynecologists for virtual or in-person visits, upload medical documents, and let our AI scanner parse biomarkers automatically.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white border border-[#EFE9F6] shadow-sm">
                    <Stethoscope className="w-5 h-5 text-[#62419F] mb-2" />
                    <h3 className="font-semibold text-neutral-900 text-sm">Specialist Consults</h3>
                    <p className="text-xs text-neutral-500 mt-1">
                      Book Dr. Priya Sharma, Dr. Sarah Jenkins, and other verified reproductive endocrinologists.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-[#EFE9F6] shadow-sm">
                    <Sparkles className="w-5 h-5 text-[#10B981] mb-2" />
                    <h3 className="font-semibold text-neutral-900 text-sm">Biomarker OCR</h3>
                    <p className="text-xs text-neutral-500 mt-1">
                      Extract Fasting Glucose, Insulin, Testosterone, and Vitamin D straight from lab PDFs.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/clinic"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#62419F] hover:bg-[#52318E] text-white font-semibold text-xs transition-all shadow-md shadow-[#62419F]/20"
                  >
                    Meet Our Doctors & Explore Telehealth
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 5: TRANSPARENT PRICING & TRUST BADGES (Derived from Screen 82 Purple/Lavender Theme) */}
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

      {/* SECTION 6: FAQS (Warm Lilac Mist Background from Screen 50) */}
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

      {/* SECTION 7: FINAL CALL TO ACTION (Global Primary Background Token) */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <ScrollReveal>
          <div
            style={{ background: "var(--yumo-primary-background)" }}
            className="rounded-3xl p-10 sm:p-16 text-center text-white relative overflow-hidden shadow-2xl border border-white/20"
          >
            {/* Subtle Stars in Night Atmosphere */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
              <div className="absolute top-8 left-[20%] w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              <div className="absolute top-20 right-[25%] w-1 h-1 bg-[#DACFE9] rounded-full animate-ping" />
              <div className="absolute bottom-12 left-[30%] w-1.5 h-1.5 bg-white rounded-full" />
            </div>

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
    </div>
  );
}
