"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ArrowRight,
  Play,
  CalendarDays,
} from "lucide-react";
import IPhoneScreen from "@/components/IPhoneScreen";
import heroGirlPurple from "@/public/assets/hero-girl-purple-new.jpg";
import {
  floatingFeatureCards,
  DesktopFloatingFeatureCard,
  MobileFeatureCard,
} from "./FloatingFeatureCard";

/* ====================================================================== */
/*  HOW THIS WORKS                                                        */
/*  The desktop hero is drawn on a fixed 1672 x 941 "design stage" (the   */
/*  exact size of the reference image). Every element is placed with the  */
/*  reference's own pixel coordinates and scaled by one CSS variable      */
/*  (--u = 1 design pixel). So it matches the reference at any desktop    */
/*  size and always fits in exactly one screen (100vh).                   */
/*  Below 1100px a normal stacked responsive layout is used instead.      */
/* ====================================================================== */

const DW = 1672;
const DH = 941;

/** n design-pixels -> real size */
const u = (n: number) => `calc(var(--u) * ${n})`;

/** absolute box in design-pixels */
const at = (
  x: number,
  y: number,
  w?: number,
  h?: number
): React.CSSProperties => ({
  position: "absolute",
  left: u(x),
  top: u(y),
  ...(w !== undefined ? { width: u(w) } : {}),
  ...(h !== undefined ? { height: u(h) } : {}),
});

/* ---- Tuning knobs (change these if you want to nudge things) --------- */
const PHOTO = {
  x: 486, // left edge of the photo layer on the stage
  top: 1, // vertical offset of the photo
  w: 1321, // rendered width of the photo (height follows 3:2)
};
const HEADLINE_SIZE = 76; // px on the 1672 stage
/* ---------------------------------------------------------------------- */

type IconType = React.ComponentType<{
  className?: string;
  style?: React.CSSProperties;
  strokeWidth?: number;
}>;

function UsersThreeIcon({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <circle cx="24" cy="14" r="6.5" />
      <path d="M11.5 39c0-7 5.5-12 12.5-12s12.5 5 12.5 12z" />
      <circle cx="9" cy="22" r="4.2" />
      <path d="M3 36c0-4.5 2.8-7.5 7-7.8" />
      <circle cx="39" cy="22" r="4.2" />
      <path d="M45 36c0-4.5-2.8-7.5-7-7.8" />
    </svg>
  );
}

function RisingBarsIcon({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <rect x="4" y="34" width="5" height="8" rx="1.5" />
      <rect x="13" y="28" width="5" height="14" rx="1.5" />
      <rect x="22" y="22" width="5" height="20" rx="1.5" />
      <rect x="31" y="15" width="5" height="27" rx="1.5" />
      <rect x="40" y="6" width="5" height="36" rx="1.5" />
    </svg>
  );
}

/* ---------------------------------------------------------------------- */
/* Data                                                                    */
/* ---------------------------------------------------------------------- */


const highlightCols: {
  x: number; // circle left
  tx: number; // text left
  icon: IconType;
  title: string;
  lines: string[];
}[] = [
    {
      x: 88,
      tx: 205,
      icon: CalendarDays,
      title: "Track Everything",
      lines: ["Cycle, symptoms, mood,", "cravings, sleep, weight & more"],
    },
    {
      x: 483,
      tx: 598,
      icon: UsersThreeIcon,
      title: "Expert Support",
      lines: ["Dietitian, yoga, gynecologist", "and care coordinator"],
    },
    {
      x: 867,
      tx: 982,
      icon: RisingBarsIcon,
      title: "Personalized Insights",
      lines: ["Understand your body", "and see real progress"],
    },
    {
      x: 1253,
      tx: 1370,
      icon: Heart,
      title: "A Community That Cares",
      lines: ["You're not alone in", "this journey"],
    },
  ];

const memberAvatars = [
  "/assets/avatar-doctor.jpg",
  "/assets/avatar-dietitian.jpg",
  "/assets/avatar-yoga.jpg",
  "/assets/avatar-support.jpg",
  "/assets/avatar-mindfulness.jpg",
];

const PHOTO_MASK =
  "linear-gradient(to right, transparent 0%, #000 20%), linear-gradient(to bottom, #000 80%, transparent 100%)";

/* ---------------------------------------------------------------------- */
/* Component                                                               */
/* ---------------------------------------------------------------------- */

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden min-[1100px]:h-[calc(var(--u)*941)] text-[#1E1135]"
      style={
        {
          containerType: "inline-size",
          "--u": `calc(100cqw / ${DW})`,
          background:
            "linear-gradient(180deg,#FCFAFF 0%,#F8F3FE 62%,#FEFDFF 100%)",
        } as React.CSSProperties
      }
    >
      <DesktopStage />
      <MobileLayout />
    </section>
  );
}

/* ====================================================================== */
/*  DESKTOP: pixel-matched stage                                           */
/* ====================================================================== */

function DesktopStage() {
  return (
    <div
      className="hidden min-[1100px]:block absolute left-0 top-0 w-full select-none"
      style={{ height: u(DH) }}
    >
      {/* ---------- z0: lavender waves + left blobs ---------- */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
        viewBox={`0 0 ${DW} ${DH}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="yumo-wave-a" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#E7DBF9" />
            <stop offset="1" stopColor="#F5EFFD" />
          </linearGradient>
          <linearGradient id="yumo-blob" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#E9DDFB" />
            <stop offset="1" stopColor="#F1E8FC" />
          </linearGradient>
        </defs>
        {/* faint arc behind the logo */}
        <path
          d="M0,0 L135,0 C178,48 186,98 150,150 C118,192 58,200 0,186 Z"
          fill="#EDE3FB"
          fillOpacity="0.55"
        />
        {/* blob on the left edge */}
        <path
          d="M0,172 C42,180 74,214 62,262 C52,300 30,322 0,336 Z"
          fill="url(#yumo-blob)"
        />
        {/* big wave behind the photo's bottom */}
        <path
          d="M0,628 C70,640 150,690 330,712 C560,740 800,735 1100,722 C1350,712 1530,690 1672,668 L1672,941 L0,941 Z"
          fill="url(#yumo-wave-a)"
        />
      </svg>

      {/* ---------- z1: girl photo (fades left + bottom) ---------- */}
      <div
        style={{
          ...at(PHOTO.x, 0, DW - PHOTO.x, 780),
          zIndex: 1,
          overflow: "hidden",
          WebkitMaskImage: PHOTO_MASK,
          maskImage: PHOTO_MASK,
          WebkitMaskComposite: "source-in",
          maskComposite: "intersect",
          animation: "heroImageSmoothFade 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both",
        }}
      >
        <Image
          src={heroGirlPurple}
          alt="Woman in purple sweater feeling radiant with YUMO"
          width={1536}
          height={1024}
          priority
          sizes="80vw"
          className="absolute max-w-none"
          style={{
            left: 0,
            top: u(PHOTO.top),
            width: u(PHOTO.w),
            height: u((PHOTO.w * 1024) / 1536),
          }}
        />
      </div>

      {/* ---------- z2: white bar wave + bottom-corner accents ---------- */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 2 }}
        viewBox={`0 0 ${DW} ${DH}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,764 C230,734 480,728 770,744 C1060,760 1390,730 1672,712 L1672,941 L0,941 Z"
          fill="#F0E7FC"
          fillOpacity="0.9"
        />
        <path
          d="M0,776 C220,748 470,742 760,756 C1050,770 1380,742 1672,724 L1672,941 L0,941 Z"
          fill="#FEFDFF"
        />
        <path
          d="M940,941 C1130,908 1420,918 1672,884 L1672,941 Z"
          fill="#EFE6FB"
        />
        <path d="M0,941 L0,915 C80,925 200,935 300,941 Z" fill="#F1E9FC" />
      </svg>

      {/* ================= LEFT: copy ================= */}

      {/* Badge */}
      <div
        className="flex items-center"
        style={{
          ...at(92, 192, 302, 42),
          zIndex: 6,
          borderRadius: u(30),
          background: "#F1E8FB",
          paddingLeft: u(17),
          gap: u(9),
          boxShadow: `0 ${u(2)} ${u(10)} ${u(-4)} rgba(88,44,158,0.25)`,
          animation: "heroFadeUp 1.0s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both",
        }}
      >
        <Heart
          className="shrink-0"
          style={{ width: u(22), height: u(22), color: "#6B2FD6" }}
          fill="#6B2FD6"
          strokeWidth={0}
        />
        <span
          style={{
            fontSize: u(17.5),
            fontWeight: 500,
            color: "#3A2670",
            whiteSpace: "nowrap",
          }}
        >
          Built for PCOS/PCOD Women
        </span>
      </div>

      {/* Headline */}
      <h1
        className="font-heading"
        style={{
          ...at(90, 264),
          zIndex: 6,
          fontSize: u(HEADLINE_SIZE),
          lineHeight: u(80),
          fontWeight: 800,
          letterSpacing: "-0.04em",
          whiteSpace: "nowrap",
          animation: "heroFadeUp 1.05s cubic-bezier(0.16, 1, 0.3, 1) 0.28s both",
        }}
      >
        <span className="block" style={{ color: "#12092B" }}>
          PCOS care,
        </span>
        <span
          className="block"
          style={{
            background:
              "linear-gradient(90deg,#4A2299 0%,#6A2FD0 60%,#7C34E0 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
            paddingBottom: u(16),
            marginBottom: u(-16),
          }}
        >
          finally in one place.
        </span>
      </h1>

      {/* Paragraph */}
      <p
        style={{
          ...at(92, 437),
          zIndex: 6,
          fontSize: u(21.5),
          lineHeight: u(32.5),
          color: "#4A4458",
          whiteSpace: "nowrap",
          animation: "heroFadeUp 1.05s cubic-bezier(0.16, 1, 0.3, 1) 0.48s both",
        }}
      >
        Track your cycle, symptoms, cravings, sleep, weight
        <br />
        and progress — while getting personalized support
        <br />
        from dietitians, yoga professionals and gynecologists.
      </p>

      {/* Explore YUMO */}
      <Link
        href="/contact"
        className="flex items-center justify-center text-white transition-[filter] hover:brightness-110"
        style={{
          ...at(92, 560, 269, 60),
          zIndex: 6,
          borderRadius: u(40),
          gap: u(14),
          fontSize: u(21),
          fontWeight: 500,
          background: "linear-gradient(90deg,#4B2799 0%,#5A32B2 100%)",
          boxShadow: `0 ${u(10)} ${u(24)} ${u(-8)} rgba(79,42,163,0.5)`,
          animation: "heroFadeUp 0.95s cubic-bezier(0.16, 1, 0.3, 1) 0.68s both",
        }}
      >
        <span>Explore YUMO</span>
        <ArrowRight style={{ width: u(21), height: u(21) }} strokeWidth={2} />
      </Link>

      {/* Watch Video */}
      <button
        type="button"
        className="flex items-center transition-colors hover:bg-[#F6F0FE]"
        style={{
          ...at(382, 560, 249, 60),
          zIndex: 6,
          borderRadius: u(40),
          paddingLeft: u(39),
          gap: u(15),
          fontSize: u(21),
          fontWeight: 500,
          color: "#1B1237",
          background: "rgba(255,255,255,0.92)",
          border: `${u(1.6)} solid #6C49D6`,
          animation: "heroFadeUp 0.95s cubic-bezier(0.16, 1, 0.3, 1) 0.78s both",
        }}
      >
        <span
          className="flex items-center justify-center shrink-0"
          style={{
            width: u(36),
            height: u(36),
            borderRadius: "9999px",
            background: "#4F2AA3",
          }}
        >
          <Play
            fill="#fff"
            strokeWidth={0}
            style={{
              width: u(14),
              height: u(14),
              color: "#fff",
              marginLeft: u(2),
            }}
          />
        </span>
        <span>Watch Video</span>
      </button>

      {/* Avatars */}
      {memberAvatars.map((src, i) => (
        <div
          key={i}
          className="overflow-hidden"
          style={{
            ...at(94 + i * 40, 652, 50, 50),
            zIndex: 6 + i * 0,
            borderRadius: "9999px",
            boxShadow: `0 0 0 ${u(2.5)} #fff, 0 ${u(3)} ${u(8)} rgba(60,30,120,0.15)`,
            animation: `heroFadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.88 + i * 0.05}s both`,
          }}
        >
          <Image
            src={src}
            alt="PCOS member"
            fill
            sizes="60px"
            className="object-cover"
          />
        </div>
      ))}

      {/* Social-proof text */}
      <div
        style={{
          ...at(318, 653),
          zIndex: 6,
          whiteSpace: "nowrap",
          animation: "heroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.95s both",
        }}
      >
        <div
          style={{
            fontSize: u(19),
            lineHeight: u(24),
            fontWeight: 600,
            color: "#1E1135",
          }}
        >
          10,000+ women
        </div>
        <div
          style={{
            fontSize: u(17),
            lineHeight: u(24),
            color: "#6F6782",
          }}
        >
          are on their PCOS journey with YUMO
        </div>
      </div>

      {/* ================= RIGHT: decorations ================= */}

      {/* Handwritten note */}
      <div
        className="font-caveat"
        style={{
          ...at(728, 193, 135, 118),
          zIndex: 4,
          fontSize: u(28),
          lineHeight: u(23.5),
          fontWeight: 600,
          color: "#4A1FA0",
          whiteSpace: "nowrap",
          animation: "heroNoteSmoothReveal 1.0s cubic-bezier(0.16, 1, 0.3, 1) 2.75s both",
        }}
      >
        Understand
        <br />
        your body.
        <br />
        Take control.
        <br />
        Feel better.
        <br />
        With YUMO
        <svg
          viewBox="0 0 24 22"
          style={{
            display: "inline-block",
            width: u(20),
            height: u(18),
            marginLeft: u(5),
            verticalAlign: "middle",
          }}
          aria-hidden="true"
        >
          <path
            d="M12 21C5 15.5 1 12 1 7.2 1 3.9 3.6 1.5 6.6 1.5c2.2 0 4 1.2 5.4 3.2 1.4-2 3.2-3.2 5.4-3.2 3 0 5.6 2.4 5.6 5.7C23 12 19 15.5 12 21z"
            fill="#A855F7"
          />
        </svg>
      </div>

      {/* Curved arrow under the note */}
      <svg
        viewBox="0 0 26 42"
        fill="none"
        stroke="#4A1FA0"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          ...at(779, 326, 26, 42),
          zIndex: 4,
          animation: "heroArrowSmoothReveal 0.85s cubic-bezier(0.16, 1, 0.3, 1) 3.0s both",
        }}
        aria-hidden="true"
      >
        <path d="M4 2 C3 14 8 27 17 37 M9 34 L18 38 L19 28" />
      </svg>

      {/* Spark strokes */}
      <svg
        viewBox="0 0 76 64"
        fill="none"
        stroke="#4A1FA0"
        strokeWidth="2.4"
        style={{
          ...at(984, 218, 76, 64),
          zIndex: 4,
          overflow: "visible",
        }}
        aria-hidden="true"
      >
        <g
          style={{
            transformOrigin: "15px 22px",
            animation:
              "heroSparkSmoothReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) 3.2s both",
          }}
        >
          <ellipse cx="15" cy="22" rx="4" ry="13.5" transform="rotate(12 15 22)" />
        </g>
        <g
          style={{
            transformOrigin: "42px 32px",
            animation:
              "heroSparkSmoothReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) 3.38s both",
          }}
        >
          <ellipse cx="42" cy="32" rx="3.8" ry="12.5" transform="rotate(42 42 32)" />
        </g>
        <g
          style={{
            transformOrigin: "63px 46px",
            animation:
              "heroSparkSmoothReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) 3.56s both",
          }}
        >
          <ellipse cx="63" cy="46" rx="3.5" ry="11.5" transform="rotate(68 63 46)" />
        </g>
      </svg>

      {/* Phone */}
      <div
        style={{
          ...at(1102, 165, 265, 536),
          zIndex: 8,
          filter: `drop-shadow(0 ${u(26)} ${u(34)} rgba(60,30,120,0.30))`,
          animation: "heroPhoneSmoothReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1.35s both",
        }}
      >
        <IPhoneScreen
          src="/assets/figma-screens/iPhone 13 & 14 - 63.png"
          alt="YUMO daily dashboard: Good Morning Riya"
          priority={true}
          size="md"
          className="w-full"
        />
      </div>

      {/* Floating feature cards (same uniform size on desktop, reusable component) */}
      {floatingFeatureCards.map((card, idx) => (
        <DesktopFloatingFeatureCard
          key={idx}
          card={card}
          u={u}
          style={{
            ...at(card.box!.x, card.box!.y, card.box!.w, card.box!.h),
            animation: `heroCardStaggerDesktop 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${1.85 + idx * 0.2
              }s both`,
          }}
        />
      ))}

      {/* ================= BOTTOM: 4 highlights ================= */}

      {/* dividers */}
      {[452, 835, 1213].map((x) => (
        <div
          key={x}
          style={{
            ...at(x, 798, 1.5, 72),
            zIndex: 6,
            background: "#E6DDF3",
            animation: "heroFadeIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) 1.1s both",
          }}
        />
      ))}

      {highlightCols.map((col, idx) => {
        const Icon = col.icon;
        return (
          <React.Fragment key={idx}>
            <div
              className="flex items-center justify-center"
              style={{
                ...at(col.x, 782, 88, 88),
                zIndex: 6,
                borderRadius: "9999px",
                background: "linear-gradient(145deg,#F2EAFD,#EADFFB)",
                color: "#5B2FB0",
                animation: `heroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${1.15 + idx * 0.08
                  }s both`,
              }}
            >
              <Icon
                strokeWidth={1.7 as never}
                style={{ width: u(40), height: u(40) }}
              />
            </div>
            <div
              style={{
                ...at(col.tx, 797),
                zIndex: 6,
                whiteSpace: "nowrap",
                animation: `heroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${1.18 + idx * 0.08
                  }s both`,
              }}
            >
              <div
                style={{
                  fontSize: u(18.5),
                  lineHeight: u(24),
                  fontWeight: 700,
                  color: "#1E1135",
                  marginBottom: u(3),
                  letterSpacing: "-0.01em",
                }}
              >
                {col.title}
              </div>
              {col.lines.map((l) => (
                <div
                  key={l}
                  style={{
                    fontSize: u(15.5),
                    lineHeight: u(22),
                    color: "#6F6782",
                  }}
                >
                  {l}
                </div>
              ))}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

/* ====================================================================== */
/*  MOBILE / TABLET (< 1100px): normal stacked layout                      */
/* ====================================================================== */

function MobileLayout() {
  const mobileHighlights: { icon: IconType; title: string; text: string }[] = [
    {
      icon: CalendarDays,
      title: "Track Everything",
      text: "Cycle, symptoms, mood, cravings, sleep, weight & more",
    },
    {
      icon: UsersThreeIcon,
      title: "Expert Support",
      text: "Dietitian, yoga, gynecologist and care coordinator",
    },
    {
      icon: RisingBarsIcon,
      title: "Personalized Insights",
      text: "Understand your body and see real progress",
    },
    {
      icon: Heart,
      title: "A Community That Cares",
      text: "You're not alone in this journey",
    },
  ];

  return (
    <div className="min-[1100px]:hidden relative px-5 sm:px-8 pt-28 pb-10">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
        <div
          className="inline-flex items-center gap-2 bg-[#F1E8FB] rounded-full pl-3 pr-4 py-2 mb-6 text-[#3A2670] text-sm font-medium"
          style={{ animation: "heroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both" }}
        >
          <Heart className="w-4 h-4 fill-[#6B2FD6] text-[#6B2FD6]" />
          <span>Built for PCOS/PCOD Women</span>
        </div>

        <h1
          className="font-heading font-extrabold tracking-[-0.04em] leading-[1.02] text-[44px] sm:text-6xl mb-5"
          style={{ animation: "heroFadeUp 1.0s cubic-bezier(0.16, 1, 0.3, 1) 0.28s both" }}
        >
          <span className="block text-[#12092B]">PCOS care,</span>
          <span className="block pb-1 bg-gradient-to-r from-[#4A2299] to-[#7C34E0] bg-clip-text text-transparent">
            finally in one place.
          </span>
        </h1>

        <p
          className="text-base sm:text-lg text-[#4A4458] leading-relaxed max-w-lg mb-7"
          style={{ animation: "heroFadeUp 1.0s cubic-bezier(0.16, 1, 0.3, 1) 0.48s both" }}
        >
          Track your cycle, symptoms, cravings, sleep, weight and progress —
          while getting personalized support from dietitians, yoga
          professionals and gynecologists.
        </p>

        <div
          className="flex flex-wrap items-center justify-center gap-3 mb-7"
          style={{ animation: "heroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.68s both" }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-white font-medium text-base shadow-lg shadow-purple-900/20"
            style={{ background: "linear-gradient(90deg,#4B2799,#5A32B2)" }}
          >
            Explore YUMO <ArrowRight className="w-5 h-5" />
          </Link>
          <button
            type="button"
            className="inline-flex items-center gap-3 pl-5 pr-6 py-3.5 rounded-full bg-white/90 border-[1.5px] border-[#6C49D6] text-[#1B1237] font-medium text-base"
          >
            <span className="w-8 h-8 rounded-full bg-[#4F2AA3] flex items-center justify-center">
              <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
            </span>
            Watch Video
          </button>
        </div>

        <div
          className="flex items-center gap-3 mb-8"
          style={{ animation: "heroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.88s both" }}
        >
          <div className="flex -space-x-2">
            {memberAvatars.map((src, i) => (
              <div
                key={i}
                className="relative w-10 h-10 rounded-full ring-2 ring-white overflow-hidden"
              >
                <Image
                  src={src}
                  alt="PCOS member"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-left leading-snug">
            <div className="text-sm font-semibold">10,000+ women</div>
            <div className="text-xs text-[#6F6782]">
              are on their PCOS journey with YUMO
            </div>
          </div>
        </div>

        {/* photo + phone */}
        <div
          className="relative w-full h-[440px] rounded-3xl overflow-hidden mb-5"
          style={{ animation: "heroImageSmoothFade 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both" }}
        >
          <Image
            src={heroGirlPurple}
            alt="Woman in purple sweater feeling radiant with YUMO"
            fill
            sizes="100vw"
            className="object-cover object-[20%_40%]"
          />
          <div
            className="absolute inset-y-0 right-4 sm:right-10 flex items-center"
            style={{ animation: "heroPhoneSmoothReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1.35s both" }}
          >
            <div className="w-[148px] sm:w-[172px] drop-shadow-2xl">
              <IPhoneScreen
                src="/assets/figma-screens/iPhone 13 & 14 - 63.png"
                alt="YUMO daily dashboard: Good Morning Riya"
                size="md"
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 w-full mb-8">
          {floatingFeatureCards.map((card, idx) => (
            <div
              key={idx}
              style={{
                animation: `heroCardStaggerMobile 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${1.85 + idx * 0.15
                  }s both`,
              }}
            >
              <MobileFeatureCard card={card} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
          {mobileHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4"
                style={{
                  animation: `heroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${1.1 + idx * 0.08
                    }s both`,
                }}
              >
                <div className="w-16 h-16 rounded-full bg-[#F0E7FB] text-[#5B2FB0] flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-base font-bold text-[#1E1135]">
                    {item.title}
                  </div>
                  <div className="text-sm text-[#6F6782] leading-snug">
                    {item.text}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}