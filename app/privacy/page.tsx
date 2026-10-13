import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Yumocare",
  description: "Yumocare Privacy Policy. Learn how we safeguard and respect your personal health data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 px-6 bg-yumo-primary-bg min-h-screen">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="space-y-4 border-b border-white/20 pb-8 text-white">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#DACFE9]">Legal</span>
          <h1 className="text-4xl sm:text-5xl font-heading font-normal text-white">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#DACFE9]">Last modified: October 2, 2026</p>
        </div>

        {/* Highlight Callout */}
        <div className="p-6 rounded-2xl bg-white/95 border border-white/30 text-neutral-800 text-sm leading-relaxed font-[450] space-y-2 shadow-lg">
          <p className="font-semibold text-neutral-900 uppercase text-xs tracking-wider">
            Zero-Sale Guarantee
          </p>
          <p>
            <strong>WE DO NOT SELL, TRADE, OR RENT</strong> your personal information to anyone, under any circumstances.
            Our use of your information is solely for the purpose of providing and improving our services to you. You
            remain the owner of your data and may delete or export it at any time.
          </p>
          <p className="text-xs text-neutral-500">
            PLEASE NOTE that we do not provide medical advice. For more details, see our{" "}
            <Link href="/terms-conditions" className="text-[#62419F] font-semibold underline">
              Terms &amp; Conditions
            </Link>
            .
          </p>
        </div>

        {/* Legal Sections */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white shadow-xl border border-white/20 space-y-8 text-sm sm:text-base text-neutral-700 leading-relaxed font-[450]">
          <section className="space-y-3">
            <h2 className="text-xl font-heading font-normal text-neutral-900">1. Introduction</h2>
            <p>
              Yumocare (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your
              privacy and is committed to protecting it through compliance with this policy. This policy describes the
              types of information we may collect from you or that you may provide when you download, install, access, or
              use the Yumocare mobile application or website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-normal text-neutral-900">2. No Sale of Personal Data</h2>
            <p>
              We firmly reject data-brokerage monetization models. We never sell, exchange, rent, or lease identifiable or
              de-identified user records to data aggregators, advertising exchanges, or commercial third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-normal text-neutral-900">
              3. Protection of Minors Under 16
            </h2>
            <p>
              The Application is not intended for children under 16 years of age. We do not knowingly collect personal
              information from children under 16. If we learn we have collected personal data from a child under 16 without
              verified parental consent, we will delete that information immediately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-normal text-neutral-900">
              4. Information We Collect and How We Collect It
            </h2>
            <p>
              We collect information directly from you when you provide it to us, including period dates, flow intensity,
              symptoms, basal temperatures, mood notes, and optional demographic details during onboarding.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-normal text-neutral-900">5. Partner Syncing</h2>
            <p>
              Partner Syncing allows you to share selected cycle phase estimates with an authorized partner. This feature
              is strictly opt-in and requires your explicit invitation. You can revoke partner access at any time within the
              application settings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-normal text-neutral-900">6. Data Security</h2>
            <p>
              We have implemented robust administrative, technical, and physical security measures designed to secure
              your personal information from accidental loss and unauthorized access, alteration, and disclosure. All
              data in transit is encrypted using TLS 1.3, and databases at rest are encrypted with AES-256.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-normal text-neutral-900">7. Your State and Regional Rights</h2>
            <p>
              Depending on where you reside (including California, Colorado, Connecticut, Utah, Virginia, or the European
              Economic Area / UK), you may have the right to request access to, correction of, or deletion of the personal
              information that we hold about you. Contact support@yumocare.com to exercise these rights.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
