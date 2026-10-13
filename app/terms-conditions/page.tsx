import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Yumocare",
  description: "End User License Agreement and Terms of Service for Yumocare.",
};

export default function TermsConditionsPage() {
  return (
    <div className="pt-32 pb-24 px-6 bg-yumo-primary-bg min-h-screen">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="space-y-4 border-b border-white/20 pb-8 text-white">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#DACFE9]">Legal</span>
          <h1 className="text-4xl sm:text-5xl font-heading font-normal text-white">
            End User License Agreement
          </h1>
          <p className="text-sm text-[#DACFE9]">Last modified: October 2026</p>
        </div>

        {/* Medical Notice Box */}
        <div className="p-6 rounded-2xl bg-white/95 border border-white/30 text-neutral-800 text-sm leading-relaxed font-[450] space-y-2 shadow-lg">
          <p className="font-semibold text-neutral-900 uppercase text-xs tracking-wider">
            Important Medical Disclaimer
          </p>
          <p>
            Yumocare does not provide medical advice, diagnosis, or treatment. All content, cycle phase
            calculations, symptom patterns, and suggestions are provided for general educational purposes only and are
            not a substitute for professional clinical medical advice. Never disregard professional medical advice or
            delay seeking it because of something you have read in the Application.
          </p>
        </div>

        {/* EULA Body */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white shadow-xl border border-white/20 space-y-8 text-sm sm:text-base text-neutral-700 leading-relaxed font-[450]">
          <section className="space-y-3">
            <h2 className="text-xl font-heading font-normal text-neutral-900">1. License Grant</h2>
            <p>
              Subject to the terms of this Agreement, Yumocare grants you a limited, non-exclusive, and
              nontransferable license to download, install, and use the Application for your personal, non-commercial use
              on mobile devices owned or controlled by you.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-normal text-neutral-900">2. License Restrictions</h2>
            <p>
              You shall not: (a) copy the Application, except as expressly permitted by this license; (b) modify,
              translate, adapt, or create derivative works; (c) reverse engineer, disassemble, decompile, or decode the
              Application; (d) rent, lease, lend, sell, sublicense, or assign the Application to any third party.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-normal text-neutral-900">
              3. Subscriptions &amp; In-App Purchases
            </h2>
            <p>
              Certain premium features require an active paid subscription. Subscriptions automatically renew unless
              canceled at least 24 hours prior to the end of the current billing period through your Apple App Store or
              Google Play account settings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-normal text-neutral-900">4. Disclaimer of Warranties</h2>
            <p>
              The Application is provided to you &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; with all faults and
              defects without warranty of any kind. To the maximum extent permitted under applicable law, Company
              expressly disclaims all warranties, whether express, implied, statutory, or otherwise.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-normal text-neutral-900">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, in no event will Yumocare or its affiliates be
              liable for any indirect, incidental, consequential, special, or punitive damages arising out of or related
              to your use of or inability to use the application.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-normal text-neutral-900">6. Governing Law</h2>
            <p>
              This Agreement is governed by and construed in accordance with applicable laws, without giving effect to any choice or conflict of law provision or rule.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
