"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  Sprout,
} from "lucide-react";

const languages = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto px-4 pt-4">
          <div
            className={`mx-auto max-w-6xl rounded-full px-6 py-3 transition-all duration-500 ${
              scrolled
                ? "bg-white/85 backdrop-blur-xl shadow-xl shadow-[#62419F]/[0.08] border border-white/80"
                : "bg-white/55 backdrop-blur-md border border-white/50"
            }`}
          >
            <div className="flex items-center justify-between">
              {/* Logo / YUMO Emblem & Wordmark */}
              <div className="shrink-0">
                <Link href="/" className="flex items-center gap-2 group">
                  <Image
                    src="/assets/yumo-logo-purple.png"
                    alt="YUMO - The Body Whisperer"
                    width={150}
                    height={124}
                    className="h-10 sm:h-11 w-auto object-contain group-hover:scale-105 transition-transform"
                    priority
                  />
                </Link>
              </div>

              {/* Desktop Nav Links */}
              <div className="hidden lg:flex items-center justify-center gap-1 xl:gap-2 mx-4 shrink-0">
                <Link
                  href="/features"
                  className="transition-colors text-sm px-3.5 py-1.5 whitespace-nowrap text-neutral-700 hover:text-[#62419F] font-medium"
                >
                  Features
                </Link>
                <Link
                  href="/clinic"
                  className="transition-colors text-sm px-3.5 py-1.5 whitespace-nowrap text-neutral-700 hover:text-[#62419F] font-medium"
                >
                  Clinic & Telehealth
                </Link>
                <Link
                  href="/phases"
                  className="transition-colors text-sm px-3.5 py-1.5 whitespace-nowrap text-neutral-700 hover:text-[#62419F] font-medium"
                >
                  Hormonal Phases
                </Link>
                <Link
                  href="/pricing"
                  className="transition-colors text-sm px-3.5 py-1.5 whitespace-nowrap text-neutral-700 hover:text-[#62419F] font-medium"
                >
                  Pricing
                </Link>
                <Link
                  href="/story"
                  className="transition-colors text-sm px-3.5 py-1.5 whitespace-nowrap text-neutral-700 hover:text-[#62419F] font-medium"
                >
                  Our Story
                </Link>
              </div>

              {/* Right Side: Lang, Download */}
              <div className="hidden lg:flex items-center justify-end gap-3 shrink-0">
                {/* Language Picker */}
                <div className="relative" ref={langRef}>
                  <button
                    onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                    className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-all cursor-pointer"
                    aria-label="Change language"
                  >
                    <Globe className="w-4 h-4" />
                  </button>
                  <div
                    className={`absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl border border-neutral-200 py-1.5 min-w-[140px] z-50 transition-all duration-200 origin-top-right ${
                      langDropdownOpen
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => setLangDropdownOpen(false)}
                        className={`w-full flex items-center gap-2.5 px-3 py-1.5 text-xs hover:bg-neutral-50 transition-colors cursor-pointer ${
                          l.code === "en" ? "text-[#62419F] font-semibold" : "text-neutral-800"
                        }`}
                      >
                        <span className="text-sm leading-none">{l.flag}</span>
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="w-px h-4 bg-neutral-200" />

                {/* Download CTA Button */}
                <Link
                  href="/pricing"
                  style={{ background: "var(--yumo-primary-background)" }}
                  className="text-white px-5 py-2 rounded-full transition-all text-xs font-semibold shadow-md shadow-[#62419F]/30 hover:opacity-95 hover:scale-105 inline-block"
                >
                  Get Yumocare
                </Link>
              </div>

              {/* Mobile Header Right */}
              <div className="flex lg:hidden items-center gap-2">
                <Link
                  href="/pricing"
                  style={{ background: "var(--yumo-primary-background)" }}
                  className="text-white px-3.5 py-1.5 rounded-full transition-colors text-xs font-semibold"
                >
                  Get App
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 text-neutral-800 hover:text-black rounded-full transition-all relative z-[60] cursor-pointer"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-out ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[#FAF7FD]" />

        <div className="absolute inset-0 flex flex-col justify-start overflow-y-auto px-8 pt-24 pb-8">
          <nav className="space-y-5">
            <Link
              href="/features"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-3xl font-heading font-normal text-neutral-900 hover:text-[#62419F]"
            >
              Features
            </Link>
            <Link
              href="/clinic"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-3xl font-heading font-normal text-neutral-900 hover:text-[#62419F]"
            >
              Clinic & Telehealth
            </Link>
            <Link
              href="/phases"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-3xl font-heading font-normal text-neutral-900 hover:text-[#62419F]"
            >
              Hormonal Phases
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-3xl font-heading font-normal text-neutral-900 hover:text-[#62419F]"
            >
              Pricing
            </Link>
            <Link
              href="/story"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-3xl font-heading font-normal text-neutral-900 hover:text-[#62419F]"
            >
              Our Story
            </Link>
            <Link
              href="/privacy-hub"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-2xl font-body font-normal text-neutral-600 hover:text-[#62419F] pt-4"
            >
              Privacy & Security
            </Link>
            <Link
              href="/support"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-2xl font-body font-normal text-neutral-600 hover:text-[#62419F]"
            >
              Help & FAQ
            </Link>
          </nav>

          <div className="mt-8 pt-8 border-t border-neutral-200">
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              style={{ background: "var(--yumo-primary-background)" }}
              className="block w-full py-3.5 rounded-full text-white text-center font-semibold text-sm shadow-md"
            >
              Get Yumocare App
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
