"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Stethoscope,
  Video,
  FileText,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  Upload,
  ArrowRight,
  Star,
  ShieldCheck,
  Check,
  Sparkles,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import IPhoneScreen from "@/components/IPhoneScreen";

const doctorsList = [
  {
    id: "dr-priya-sharma",
    name: "Dr. Priya Sharma",
    specialty: "Endocrinologist",
    clinic: "Endo Clinic",
    rating: 4.9,
    reviewsCount: 120,
    experience: "12+ years experience in hormonal & insulin disorders",
    availability: "Available Tomorrow • 09:00 AM – 11:30 AM",
    focus: ["PCOS & Insulin Resistance", "Thyroid Dysregulation", "Ovulatory Support"],
  },
  {
    id: "dr-sarah-jenkins",
    name: "Dr. Sarah Jenkins",
    specialty: "Endocrinologist",
    clinic: "Lumina Clinic",
    rating: 4.9,
    reviewsCount: 94,
    experience: "10+ years specializing in reproductive endocrinology",
    availability: "Available Wed • 10:30 AM",
    focus: ["Hyperandrogenism", "Metabolic Weight Management", "Lifestyle Endocrinology"],
  },
  {
    id: "dr-rani-sharma",
    name: "Dr. Rani Sharma",
    specialty: "Gynecology & Reproductive Health",
    clinic: "General Clinic",
    rating: 4.5,
    reviewsCount: 78,
    experience: "15+ years in adolescent & adult reproductive gynecology",
    availability: "Available Thursday • 02:00 PM",
    focus: ["Irregular Cycles & Amenorrhea", "Pelvic Ultrasound Correlation", "Contraceptive Counseling"],
  },
];

const labMarkersSample = [
  {
    name: "Fasting Glucose",
    value: "96",
    unit: "mg/dL",
    range: "70 - 99 mg/dL",
    status: "Normal",
    statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    note: "Normal fasting glycemic control",
  },
  {
    name: "Fasting Insulin",
    value: "18.6",
    unit: "pIU/mL",
    range: "2 - 25 pIU/mL",
    status: "Mid",
    statusColor: "bg-amber-50 text-amber-700 border-amber-200",
    note: "Elevated baseline indicates mild compensatory insulin secretion",
  },
  {
    name: "Testosterone",
    value: "68",
    unit: "ng/dL",
    range: "15 - 70 ng/dL",
    status: "High",
    statusColor: "bg-rose-50 text-rose-700 border-rose-200",
    note: "Upper normal threshold; correlates with androgenic symptoms",
  },
  {
    name: "Vitamin D (25-OH)",
    value: "24",
    unit: "ng/mL",
    range: "30 - 100 ng/mL",
    status: "Low",
    statusColor: "bg-rose-50 text-rose-700 border-rose-200",
    note: "Sub-optimal level common in PCOS; supplementation recommended",
  },
];

export default function ClinicPage() {
  const [selectedDoctor, setSelectedDoctor] = useState(doctorsList[0].id);
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");

  const filteredDoctors =
    selectedSpecialty === "All"
      ? doctorsList
      : doctorsList.filter((d) => d.specialty.includes(selectedSpecialty));

  return (
    <div className="pt-28 pb-20 overflow-hidden bg-yumo-primary-bg min-h-screen">
      {/* Hero Section */}
      <section className="px-6 max-w-5xl mx-auto text-center mb-16">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-sm font-semibold mb-6">
            <Stethoscope className="w-4 h-4" />
            <span>Yumocare Telehealth & Clinical Network</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-normal text-white leading-tight mb-6">
            Consult Experts. <br />
            <span className="font-body text-[#DACFE9]">
              Get Personalized Medical Care.
            </span>
          </h1>
          <p className="text-lg text-[#DACFE9] max-w-2xl mx-auto font-[450] leading-relaxed">
            Connect with certified Endocrinologists and Gynecologists through secure video consultations. Upload lab tests, receive AI marker interpretations, and build a unified medical treatment plan.
          </p>
        </ScrollReveal>

        {/* 4 Core Clinical Services */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          <div className="bg-white p-5 rounded-2xl border border-[#EFE9F6] shadow-sm text-center">
            <div className="w-10 h-10 rounded-full bg-[#EDE7F6] text-[#62419F] flex items-center justify-center mx-auto mb-3">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-neutral-900 text-sm">Book Appointments</h3>
            <p className="text-xs text-neutral-500 mt-1">Flexible in-person & video slots</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-[#EFE9F6] shadow-sm text-center">
            <div className="w-10 h-10 rounded-full bg-[#EDE7F6] text-[#62419F] flex items-center justify-center mx-auto mb-3">
              <Video className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-neutral-900 text-sm">Video Consultations</h3>
            <p className="text-xs text-neutral-500 mt-1">Encrypted telehealth sessions</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-[#EFE9F6] shadow-sm text-center">
            <div className="w-10 h-10 rounded-full bg-[#EDE7F6] text-[#62419F] flex items-center justify-center mx-auto mb-3">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-neutral-900 text-sm">Digital Prescriptions</h3>
            <p className="text-xs text-neutral-500 mt-1">Directly integrated into regimens</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-[#EFE9F6] shadow-sm text-center">
            <div className="w-10 h-10 rounded-full bg-[#EDE7F6] text-[#62419F] flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-neutral-900 text-sm">AI Lab Extraction</h3>
            <p className="text-xs text-neutral-500 mt-1">Automatic biomarker scanning</p>
          </div>
        </div>
      </section>

      {/* SECTION 1: Doctor Directory & Video Consult Flow */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Doctor Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
              <div>
                <h2 className="text-2xl sm:text-3xl font-heading font-normal text-neutral-900">
                  Certified Women's Health Specialists
                </h2>
                <p className="text-sm text-neutral-500 mt-1">
                  Experienced physicians dedicated to PCOS, insulin, and hormonal balance.
                </p>
              </div>
            </div>

            {/* Specialist Filter Tabs */}
            <div className="flex gap-2">
              {["All", "Endocrinologist", "Gynecology"].map((spec) => (
                <button
                  key={spec}
                  onClick={() => setSelectedSpecialty(spec)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    selectedSpecialty === spec
                      ? "bg-[#62419F] text-white shadow-sm"
                      : "bg-white border border-neutral-200 text-neutral-600 hover:bg-[#EDE7F6]"
                  }`}
                >
                  {spec}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {filteredDoctors.map((doc) => (
                <div
                  key={doc.id}
                  onClick={() => setSelectedDoctor(doc.id)}
                  className={`p-6 rounded-2xl bg-white border transition-all cursor-pointer ${
                    selectedDoctor === doc.id
                      ? "border-[#62419F] shadow-md ring-1 ring-[#62419F]/20"
                      : "border-[#EFE9F6] hover:border-neutral-300 shadow-sm"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#EDE7F6] text-[#62419F] flex items-center justify-center font-bold text-lg">
                          {doc.name.split(" ")[1][0]}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-neutral-900">{doc.name}</h3>
                          <p className="text-xs text-neutral-500 font-medium">
                            {doc.specialty} • {doc.clinic}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-3">
                        <div className="flex items-center text-amber-500 text-xs font-semibold">
                          <Star className="w-3.5 h-3.5 fill-amber-500 mr-1" />
                          {doc.rating}
                        </div>
                        <span className="text-xs text-neutral-400">({doc.reviewsCount} reviews)</span>
                        <span className="text-neutral-300">•</span>
                        <span className="text-xs text-emerald-700 font-medium">{doc.availability}</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {doc.focus.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-0.5 rounded-md bg-neutral-100 text-neutral-700 text-[11px] font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="sm:self-center shrink-0">
                      <button className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-gradient-to-r from-[#62419F] to-[#8B6EBF] hover:from-[#52318E] hover:to-[#7B54BA] text-white text-xs font-semibold transition-all shadow-sm">
                        Book Slot
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* How Telehealth Works 3-Step Guide */}
            <div className="bg-white p-6 rounded-2xl border border-[#EFE9F6] shadow-sm mt-6">
              <h4 className="text-sm font-semibold text-neutral-900 mb-4">How Video Consultation Works</h4>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#EDE7F6] text-[#62419F] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-neutral-900 block">Book a time slot</span>
                    <span className="text-[11px] text-neutral-500 leading-tight block">
                      Choose convenient 30-min window
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#EDE7F6] text-[#62419F] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-neutral-900 block">Get secure link</span>
                    <span className="text-[11px] text-neutral-500 leading-tight block">
                      Encrypted HIPAA-compliant room
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#EDE7F6] text-[#62419F] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-neutral-900 block">Join the call</span>
                    <span className="text-[11px] text-neutral-500 leading-tight block">
                      Direct consultation from device
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Reusable IPhoneScreen Component */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="flex gap-4 p-4 bg-gradient-to-br from-white via-[#FAF7FD] to-[#F5F0FB] rounded-3xl border border-[#DACFE9]/60 shadow-xl max-w-[440px]">
              <IPhoneScreen
                src="/assets/figma-screens/iPhone 13 & 14 - 41.png"
                alt="Video Consultation Booking Flow"
                size="sm"
                badge="Video Booking"
                maxHeight={380}
              />
              <IPhoneScreen
                src="/assets/figma-screens/iPhone 13 & 14 - 43.png"
                alt="Appointment Confirmation & Checklist"
                size="sm"
                badge="Care Checklist"
                maxHeight={380}
              />
            </div>
            <p className="text-xs text-neutral-500 text-center mt-3 font-medium">
              Figma Design Reference: Video Booking & Pre-Consultation Checklist
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: AI Lab Report Extraction & Document Sharing */}
      <section className="px-6 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="bg-gradient-to-br from-white via-[#FAF7FD] to-[#F5F0FB] p-8 sm:p-12 rounded-3xl border border-[#DACFE9]/70 shadow-xl">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Explainer and Extracted Markers */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] text-xs font-semibold uppercase tracking-wider border border-[#10B981]/20">
                  Automated Clinical AI
                </div>
                <h2 className="text-3xl sm:text-4xl font-heading font-normal text-neutral-900 leading-snug">
                  AI Lab Report Scanner & Biomarker Interpretation
                </h2>
                <p className="text-neutral-600 font-[450] leading-relaxed text-sm sm:text-base">
                  Upload your blood tests, metabolic panels, and ultrasound reports in PDF, JPG, or PNG format. Yumocare's secure OCR parses key biomarkers—such as Fasting Glucose, Fasting Insulin, Total Testosterone, and Vitamin D—and plots them against clinical reference ranges.
                </p>

                {/* Lab Values Table / Cards */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between text-xs text-neutral-500 font-semibold px-2">
                    <span>BIOMARKER & VALUE</span>
                    <span>REFERENCE RANGE & STATUS</span>
                  </div>
                  {labMarkersSample.map((marker, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-4 rounded-xl bg-white border border-[#EFE9F6] shadow-sm flex items-center justify-between gap-4"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-neutral-900 text-sm">{marker.name}</span>
                          <span className="text-xs font-bold text-[#62419F]">
                            {marker.value} {marker.unit}
                          </span>
                        </div>
                        <span className="text-xs text-neutral-500 block mt-0.5">{marker.note}</span>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-xs text-neutral-400 block font-mono mb-1">{marker.range}</span>
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${marker.statusColor}`}
                        >
                          {marker.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* AI Disclaimer Callout */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-600">
                  <AlertCircle className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Clinical Notice:</strong> Values are parsed using AI to help track your timeline and prepare for appointments. Always confirm with your physician. Yumocare is not a diagnostic medical lab.
                  </span>
                </div>
              </div>

              {/* Right Column: Reusable IPhoneScreen Showcase */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="flex gap-4 p-4 bg-white rounded-3xl border border-[#EFE9F6] shadow-lg max-w-[440px]">
                  <IPhoneScreen
                    src="/assets/figma-screens/iPhone 13 & 14 - 87.png"
                    alt="Upload Report Hub"
                    size="sm"
                    badge="Upload Scans"
                    maxHeight={380}
                  />
                  <IPhoneScreen
                    src="/assets/figma-screens/iPhone 13 & 14 - 86.png"
                    alt="Extracted Lab Values Screen"
                    size="sm"
                    badge="Biomarker OCR"
                    maxHeight={380}
                  />
                </div>
                <p className="text-xs text-neutral-500 text-center mt-3 font-medium">
                  Figma Design Reference: Upload Report & AI Extracted Lab Values
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
