"use client";

import React from "react";
import Link from "next/link";
import { Stethoscope, Sparkles, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import IPhoneScreen from "@/components/IPhoneScreen";

export default function ClinicalTelehealthSection() {
  return (
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
                <span className="font-heading text-[#62419F] font-semibold">Licensed Medical Experts.</span>
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
  );
}
