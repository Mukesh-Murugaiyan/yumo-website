import React from "react";
import Link from "next/link";
import { Mail, MessageCircle, Building2, HelpCircle, Stethoscope, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact Yumocare | Partnerships, Telehealth & Support",
  description: "Connect with the Yumocare clinical and member support teams.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-6 overflow-hidden bg-yumo-primary-bg min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12">
        <ScrollReveal>
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>We're Here For You</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-normal text-white">
              Get in Touch with Yumocare
            </h1>
            <p className="text-base sm:text-lg text-[#DACFE9] font-[450] leading-relaxed max-w-xl mx-auto">
              Whether you have questions about the app, clinical partnerships, or expert endocrinologist onboarding, we'd love to hear from you.
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Email Hero Card */}
        <ScrollReveal delay={100}>
          <div className="p-10 rounded-3xl bg-white border border-[#EFE9F6] shadow-md text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-[#EDE7F6] text-[#62419F] flex items-center justify-center mx-auto">
              <Mail className="w-8 h-8" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-2">
                Primary Member Care
              </div>
              <a
                href="mailto:support@yumocare.com"
                className="text-2xl sm:text-3xl font-heading font-normal text-[#62419F] hover:underline"
              >
                support@yumocare.com
              </a>
            </div>
            <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed font-[450]">
              Our care team responds within 24 hours. Monday through Friday, 9:00 AM – 6:00 PM.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Department Options */}
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#EFE9F6] shadow-sm text-center space-y-2">
              <HelpCircle className="w-6 h-6 text-[#62419F] mx-auto" />
              <h3 className="font-heading font-normal text-lg text-neutral-900">Member Support</h3>
              <p className="text-xs text-neutral-500 font-[450]">
                Account access, Plus/Premium subscriptions, or cycle syncing questions.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#EFE9F6] shadow-sm text-center space-y-2">
              <Stethoscope className="w-6 h-6 text-[#10B981] mx-auto" />
              <h3 className="font-heading font-normal text-lg text-neutral-900">Clinical Network</h3>
              <p className="text-xs text-neutral-500 font-[450]">
                Physicians, endocrinologists, and clinics wanting to join our telehealth network.
              </p>
              <a
                href="mailto:clinic@yumocare.com"
                className="text-xs font-semibold text-[#10B981] hover:underline inline-block pt-1"
              >
                clinic@yumocare.com
              </a>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#EFE9F6] shadow-sm text-center space-y-2">
              <Building2 className="w-6 h-6 text-[#F59E0B] mx-auto" />
              <h3 className="font-heading font-normal text-lg text-neutral-900">Partnerships</h3>
              <p className="text-xs text-neutral-500 font-[450]">
                Research institutions, diagnostic labs, and women's health organizations.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
