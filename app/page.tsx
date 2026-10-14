"use client";

import React from "react";
import {
  HeroSection,
  FeaturesCarouselSection,
  HealthScoreSection,
  ClinicalTelehealthSection,
  PricingSection,
  FaqSection,
  CtaBannerSection,
} from "./home/components";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* SECTION 1: HERO */}
      <HeroSection />

      {/* SECTION 2: 10 CORE WELLNESS & CLINICAL ENGINES */}
      <FeaturesCarouselSection />

      {/* SECTION 3: HOLISTIC HEALTH SCORE */}
      <HealthScoreSection />

      {/* SECTION 4: CLINICAL TELEHEALTH & LAB EXTRACTION */}
      <ClinicalTelehealthSection />

      {/* SECTION 5: TRANSPARENT PRICING & TRUST BADGES */}
      <PricingSection />

      {/* SECTION 6: FAQS */}
      <FaqSection />

      {/* SECTION 7: FINAL CALL TO ACTION */}
      <CtaBannerSection />
    </div>
  );
}
