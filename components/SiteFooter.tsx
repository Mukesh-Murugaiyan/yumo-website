"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Lock, Sparkles } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="relative bg-white border-t border-[#EFE9F6] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-block group">
              <Image
                src="/assets/yumo-logo-purple.png"
                alt="YUMO - The Body Whisperer"
                width={170}
                height={140}
                className="h-14 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-sm font-[450]">
              The intelligent women's health platform for PCOS symptom tracking, metabolic balance, cycle-synced nutrition, and endocrinology telehealth.
            </p>
            <div>
              <a
                href="mailto:support@yumocare.com"
                className="text-neutral-600 hover:text-[#62419F] text-sm font-medium transition-colors"
              >
                support@yumocare.com
              </a>
            </div>

            {/* App Store Download Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
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
                  style={{ width: "auto" }}
                  className="h-10 rounded-lg w-auto"
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
                  style={{ width: "auto" }}
                  className="h-10 rounded-lg w-auto"
                />
              </a>
            </div>
          </div>

          {/* Links Columns (3 Columns, NO Calculators) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-10 lg:pl-8">
            {/* Platform */}
            <div className="space-y-4">
              <h4 className="text-base font-normal text-neutral-900 font-heading">Platform</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/features"
                    className="text-neutral-600 hover:text-[#62419F] text-sm transition-colors font-[450]"
                  >
                    All Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/clinic"
                    className="text-neutral-600 hover:text-[#62419F] text-sm transition-colors font-[450]"
                  >
                    Clinic & Telehealth
                  </Link>
                </li>
                <li>
                  <Link
                    href="/phases"
                    className="text-neutral-600 hover:text-[#62419F] text-sm transition-colors font-[450]"
                  >
                    Hormonal Phases
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-neutral-600 hover:text-[#62419F] text-sm transition-colors font-[450]"
                  >
                    Pricing & Plans
                  </Link>
                </li>
              </ul>
            </div>

            {/* Health Engines */}
            <div className="space-y-4">
              <h4 className="text-base font-normal text-neutral-900 font-heading">Care Engines</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/features#cycle-intelligence"
                    className="text-neutral-600 hover:text-[#62419F] text-sm transition-colors font-[450]"
                  >
                    Cycle Intelligence
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features#metabolic-tracking"
                    className="text-neutral-600 hover:text-[#62419F] text-sm transition-colors font-[450]"
                  >
                    Metabolic Tracker
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features#craving-control"
                    className="text-neutral-600 hover:text-[#62419F] text-sm transition-colors font-[450]"
                  >
                    Craving Control AI
                  </Link>
                </li>
                <li>
                  <Link
                    href="/clinic"
                    className="text-neutral-600 hover:text-[#62419F] text-sm transition-colors font-[450]"
                  >
                    AI Lab Values Scanner
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company & Trust */}
            <div className="space-y-4">
              <h4 className="text-base font-normal text-neutral-900 font-heading">Company & Trust</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/story"
                    className="text-neutral-600 hover:text-[#62419F] text-sm transition-colors font-[450]"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-hub"
                    className="text-neutral-600 hover:text-[#62419F] text-sm transition-colors font-[450]"
                  >
                    Privacy Hub
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-neutral-600 hover:text-[#62419F] text-sm transition-colors font-[450]"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-conditions"
                    className="text-neutral-600 hover:text-[#62419F] text-sm transition-colors font-[450]"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="text-neutral-600 hover:text-[#62419F] text-sm transition-colors font-[450]"
                  >
                    Help & FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-neutral-600 hover:text-[#62419F] text-sm transition-colors font-[450]"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Clinical Disclaimer Banner */}
        <div className="pt-8 border-t border-[#EFE9F6] mb-8">
          <p className="text-xs text-neutral-400 leading-relaxed font-[450]">
            <strong>Medical Notice:</strong> Yumocare is a health tracking and educational platform designed to support hormonal and metabolic wellness. The information, scores, predictions, and AI-extracted values provided on this website and in the mobile app are for informational purposes and are not intended as a substitute for professional medical advice, clinical diagnosis, or treatment. Always seek the advice of a qualified physician or healthcare provider with any questions you may have regarding a medical condition.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-[450]">
          <div>
            © 2026 Yumocare Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-neutral-500">
              <Lock className="w-3.5 h-3.5 text-[#62419F]" />
              256-Bit Encrypted Data
            </span>
            <span className="flex items-center gap-1.5 text-neutral-500">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Zero Ad Data Sharing
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
