"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Lock, UserCheck, EyeOff, ChevronDown, Key } from "lucide-react";
import IPhoneScreen from "@/components/IPhoneScreen";
import ScrollReveal from "@/components/ScrollReveal";

export default function PrivacyHubPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who can access my health records and cycle data?",
      a: "Only you. All logs, biomarkers, and symptoms are stored securely with 256-bit encryption. If you choose to share a lab report with an endocrinologist via our Clinic module, only that specific provider receives access for the duration of your consultation.",
    },
    {
      q: "How does Yumocare protect data at rest and in transit?",
      a: "We implement AES-256 for all stored database records and TLS 1.3 for all data in transit. Sensitive endocrine and biomarker markers are segregated into HIPAA-grade secure vaults.",
    },
    {
      q: "Do you sell or monetize personal health data?",
      a: "No. Never. Yumocare has a strict zero-ad monetization policy. We do not sell, license, trade, or monetize your health information with advertisers, pharmaceutical sponsors, or data brokers.",
    },
    {
      q: "What privacy controls do I have inside the mobile app?",
      a: "As seen in Screen 54 of the Yumocare app (Privacy & Security), you have direct toggles to: 1. Enable/Disable Two-Factor Auth via SMS, 2. Manage Active Sessions across devices, 3. Toggle Anonymous Data Sharing, 4. Control Personalized AI Recommendations, and 5. Download your complete raw data archive in one tap.",
    },
    {
      q: "How do I permanently delete my account?",
      a: "You can request immediate and permanent account deletion under Profile > Privacy & Security. All personal records, uploaded scans, and cycle histories are irreversibly scrubbed from our systems.",
    },
  ];

  return (
    <div className="pt-32 pb-24 px-6 overflow-hidden bg-yumo-primary-bg min-h-screen">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-sm font-semibold">
              <Lock className="w-4 h-4" />
              <span>Privacy & Security Architecture</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-normal text-white">
              Your Health Data. Your Control.
            </h1>
            <p className="text-base sm:text-lg text-[#DACFE9] font-[450] leading-relaxed">
              Women's health data deserves the highest standards of confidentiality. Here is how Yumocare protects your records, enforces encryption, and gives you total transparency.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Core Pillars */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#EFE9F6] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EDE7F6] text-[#62419F] flex items-center justify-center">
                <UserCheck className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-heading font-normal text-neutral-900">Download & Delete Anytime</h2>
              <p className="text-sm text-neutral-600 leading-relaxed font-[450]">
                Export your full history in machine-readable formats whenever you choose. If you leave, purge your account with zero residual retention.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#EFE9F6] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EDE7F6] text-[#62419F] flex items-center justify-center">
                <Key className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-heading font-normal text-neutral-900">Two-Factor Authentication (2FA)</h2>
              <p className="text-sm text-neutral-600 leading-relaxed font-[450]">
                Protect sensitive symptoms and clinical lab reports with multi-factor authentication via SMS and device biometrics (FaceID/TouchID).
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#EFE9F6] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EDE7F6] text-[#62419F] flex items-center justify-center">
                <EyeOff className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-heading font-normal text-neutral-900">Zero Ad-Tracker Sharing</h2>
              <p className="text-sm text-neutral-600 leading-relaxed font-[450]">
                We do not integrate third-party ad retargeting pixels or sell reproductive data to data brokers. Your biological journey remains confidential.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#EFE9F6] shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EDE7F6] text-[#62419F] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-heading font-normal text-neutral-900">HIPAA & GDPR Standards</h2>
              <p className="text-sm text-neutral-600 leading-relaxed font-[450]">
                End-to-end encryption for telehealth sessions and document transfers between you and certified physicians.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Figma Reference Showcase: Screen 54 with IPhoneScreen */}
        <ScrollReveal delay={200}>
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white via-[#FAF7FD] to-[#EDE7F6]/60 border border-[#8B6EBF]/20 shadow-xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#62419F]">
                  Native App Settings (Screen 54)
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-normal text-neutral-900">
                  Granular Privacy Controls in Your Hands
                </h3>
                <p className="text-sm text-neutral-600 font-[450] leading-relaxed">
                  As designed in the Yumocare mobile application, you have active toggles for Password Security, 2FA, Active Device Sessions, Anonymous Data Sharing, Personalized Recommendations, and Device Permissions (Camera, Notifications, Health Sync).
                </p>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <IPhoneScreen
                  src="/assets/figma-screens/iPhone 13 & 14 - 54.png"
                  alt="Privacy & Security Settings Screen"
                  size="sm"
                  maxHeight={380}
                  badge="Screen 54 • Settings"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* FAQ Accordion */}
        <ScrollReveal delay={300}>
          <div className="space-y-3">
            <h2 className="text-2xl font-heading font-normal text-neutral-900 mb-4">
              Security & Privacy Questions
            </h2>
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-2xl bg-white border border-[#EFE9F6] overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between font-medium text-neutral-900 hover:text-[#62419F] cursor-pointer"
                >
                  <span className="text-base font-normal">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform ${
                      openFaq === idx ? "rotate-180 text-[#62419F]" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 text-sm text-neutral-600 leading-relaxed font-[450] border-t border-neutral-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
