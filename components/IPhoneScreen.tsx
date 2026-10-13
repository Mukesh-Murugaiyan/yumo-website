"use client";

import React from "react";
import Image from "next/image";

interface IPhoneScreenProps {
  src: string;
  alt: string;
  priority?: boolean;
  caption?: string;
  badge?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  maxHeight?: number;
  className?: string;
}

export default function IPhoneScreen({
  src,
  alt,
  priority = false,
  caption,
  badge,
  size = "md",
  maxHeight,
  className = "",
}: IPhoneScreenProps) {
  // Proportional sizing presets when no explicit width/maxHeight overrides
  const sizeClasses = {
    xs: "w-full max-w-[170px] sm:max-w-[190px]",
    sm: "w-full max-w-[230px] sm:max-w-[260px] md:max-w-[280px]",
    md: "w-full max-w-[290px] sm:max-w-[320px] md:max-w-[350px]",
    lg: "w-full max-w-[340px] sm:max-w-[380px] md:max-w-[400px]",
    xl: "w-full max-w-[380px] sm:max-w-[420px] md:max-w-[450px]",
  }[size];

  // Dynamic automatic scale adjustments:
  // If maxHeight is passed, calculate proportional width (aspect ratio 390/844)
  const computedMaxWidth = maxHeight ? Math.round(maxHeight * (390 / 844)) : undefined;

  // Determine scale tier for bezel, corner radii, buttons, and dynamic island
  const isCompact = (maxHeight !== undefined && maxHeight <= 300) || size === "xs";
  const isSmall = (maxHeight !== undefined && maxHeight <= 420) || size === "sm";
  const isLarge = size === "lg" || size === "xl";

  const chassisPadding = isCompact
    ? "p-[4px] sm:p-[5px]"
    : isSmall
    ? "p-[6px] sm:p-[7px]"
    : isLarge
    ? "p-[9px] sm:p-[11px]"
    : "p-[7px] sm:p-[9px]";

  const chassisRadius = isCompact
    ? "rounded-[24px]"
    : isSmall
    ? "rounded-[32px] sm:rounded-[36px]"
    : isLarge
    ? "rounded-[48px] sm:rounded-[54px]"
    : "rounded-[40px] sm:rounded-[46px]";

  const screenRadius = isCompact
    ? "rounded-[18px]"
    : isSmall
    ? "rounded-[25px] sm:rounded-[29px]"
    : isLarge
    ? "rounded-[38px] sm:rounded-[44px]"
    : "rounded-[32px] sm:rounded-[37px]";

  const dynamicIslandClass = isCompact
    ? "w-14 h-3 top-1 px-1.5"
    : isSmall
    ? "w-18 sm:w-20 h-3.5 sm:h-4 top-1.5 sm:top-2 px-2"
    : isLarge
    ? "w-24 sm:w-28 h-5 sm:h-5.5 top-2.5 sm:top-3 px-2.5"
    : "w-20 sm:w-24 h-4 sm:h-4.5 top-2 sm:top-2.5 px-2";

  const homeBarClass = isCompact
    ? "w-12 h-0.5 bottom-1"
    : isSmall
    ? "w-16 sm:w-20 h-0.5 sm:h-1 bottom-1.5"
    : isLarge
    ? "w-28 sm:w-32 h-1 sm:h-1.5 bottom-2 sm:bottom-2.5"
    : "w-22 sm:w-26 h-1 bottom-1.5 sm:bottom-2";

  const buttonThickness = isCompact
    ? "w-[1.5px] -left-[1.5px]"
    : isSmall
    ? "w-[2px] -left-[2px]"
    : "w-[2.5px] sm:w-[3px] -left-[2.5px] sm:-left-[3px]";

  const rightButtonThickness = isCompact
    ? "w-[1.5px] -right-[1.5px]"
    : isSmall
    ? "w-[2px] -right-[2px]"
    : "w-[2.5px] sm:w-[3px] -right-[2.5px] sm:-right-[3px]";

  return (
    <div
      className={`flex flex-col items-center shrink-0 ${sizeClasses} ${className}`}
      style={{
        maxWidth: computedMaxWidth ? `${computedMaxWidth}px` : undefined,
        maxHeight: maxHeight ? `${maxHeight}px` : undefined,
      }}
    >
      {/* Outer Chassis */}
      <div
        className={`relative w-full ${chassisPadding} ${chassisRadius} bg-gradient-to-b from-[#382C4E] via-[#241A35] to-[#140D20] shadow-2xl shadow-[#62419F]/25 ring-1 ring-white/20 transition-all duration-300`}
      >
        {/* Hardware Buttons - Percentage-based positioning ensures perfect placement at any scale */}
        <div className={`absolute ${buttonThickness} top-[14%] h-[5%] bg-[#4D3B68] rounded-l-sm`} />
        <div className={`absolute ${buttonThickness} top-[22%] h-[8%] bg-[#4D3B68] rounded-l-sm`} />
        <div className={`absolute ${buttonThickness} top-[32%] h-[8%] bg-[#4D3B68] rounded-l-sm`} />
        <div className={`absolute ${rightButtonThickness} top-[22%] h-[11%] bg-[#4D3B68] rounded-r-sm`} />

        {/* Inner Screen Display (Fixed Single iPhone 13/14/15 Viewport Ratio 390:844) */}
        <div
          className={`relative w-full aspect-[390/844] ${screenRadius} overflow-hidden bg-black`}
        >
          {/* Dynamic Island Capsule */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 ${dynamicIslandClass} bg-black rounded-full z-30 flex items-center justify-between shadow-sm pointer-events-none ring-1 ring-black/80`}
          >
            <span className="w-2 h-2 rounded-full bg-[#181524] ring-1 ring-[#342A46]/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#121B30]" />
          </div>

          {/* Actual Screen Image */}
          <div className="absolute inset-0 w-full h-full overflow-hidden bg-white">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 640px) 290px, (max-width: 1024px) 380px, 460px"
              priority={priority}
              className="object-cover object-top select-none pointer-events-none block"
            />
          </div>

          {/* Home Bar Indicator */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 ${homeBarClass} bg-white/45 rounded-full z-30 pointer-events-none shadow-sm`}
          />

          {/* Gloss & Ambient Screen Glare */}
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent z-20 ${screenRadius}`}
          />
        </div>
      </div>

      {/* Optional Badge & Caption */}
      {(badge || caption) && (
        <div className="text-center mt-2.5 sm:mt-3.5 space-y-1 px-2">
          {badge && (
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#EDE7F6] text-[#62419F] border border-[#62419F]/15">
              {badge}
            </span>
          )}
          {caption && (
            <p className="text-xs text-neutral-600 font-medium leading-snug line-clamp-2">
              {caption}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
