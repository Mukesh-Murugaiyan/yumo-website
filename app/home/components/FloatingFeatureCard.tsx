"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export interface FeatureCardData {
  avatar: string;
  line1: string;
  line2: string;
  box?: {
    x: number;
    y: number;
    w: number;
    h: number;
  };
}

/* Same uniform size for all desktop floating feature cards: 218w x 96h */
export const CARD_WIDTH = 218;
export const CARD_HEIGHT = 96;

export const floatingFeatureCards: FeatureCardData[] = [
  {
    avatar: "/assets/avatar-doctor.jpg",
    line1: "Gynecologist",
    line2: "Guidance",
    box: { x: 1378, y: 236, w: CARD_WIDTH, h: CARD_HEIGHT },
  },
  {
    avatar: "/assets/avatar-dietitian.jpg",
    line1: "Personalized",
    line2: "Diet Plans",
    box: { x: 1378, y: 340, w: CARD_WIDTH, h: CARD_HEIGHT },
  },
  {
    avatar: "/assets/avatar-yoga.jpg",
    line1: "Live Yoga",
    line2: "in Small Groups",
    box: { x: 1378, y: 444, w: CARD_WIDTH, h: CARD_HEIGHT },
  },
  {
    avatar: "/assets/avatar-support.jpg",
    line1: "Care",
    line2: "Coordinator",
    box: { x: 1378, y: 548, w: CARD_WIDTH, h: CARD_HEIGHT },
  },
];

export interface DesktopFloatingFeatureCardProps {
  card: FeatureCardData;
  style?: React.CSSProperties;
  u?: (n: number) => string;
}

/**
 * Reusable desktop floating feature card with perspective tilt,
 * backdrop blur, rounded corners and interactive hover state.
 */
export function DesktopFloatingFeatureCard({
  card,
  style,
  u = (n: number) => `${n}px`,
}: DesktopFloatingFeatureCardProps) {
  return (
    <div
      className="group flex items-center cursor-pointer transition-shadow"
      style={{
        zIndex: 9,
        padding: u(7),
        gap: u(11),
        borderRadius: u(22),
        background: "rgba(255,255,255,0.92)",
        border: "1px solid rgba(255,255,255,0.9)",
        boxShadow: `0 ${u(10)} ${u(24)} ${u(-8)} rgba(88,44,158,0.26)`,
        transform: `perspective(${u(1100)}) rotateY(7deg)`,
        transformOrigin: "left center",
        ...style,
      }}
    >
      <div
        className="relative shrink-0 overflow-hidden"
        style={{
          width: u(64),
          height: "100%",
          borderRadius: u(12),
        }}
      >
        <Image
          src={card.avatar}
          alt={`${card.line1} ${card.line2}`}
          fill
          sizes="90px"
          className="object-cover"
        />
      </div>
      <div
        style={{
          fontSize: u(14.2),
          lineHeight: u(18.5),
          fontWeight: 700,
          color: "#1E1135",
          letterSpacing: "-0.01em",
          whiteSpace: "nowrap",
        }}
      >
        <div>{card.line1}</div>
        <div>{card.line2}</div>
      </div>
      <ChevronRight
        className="ml-auto shrink-0 transition-transform group-hover:translate-x-0.5"
        strokeWidth={2.5}
        style={{
          width: u(18),
          height: u(18),
          color: "#582C9E",
          marginRight: u(6),
        }}
      />
    </div>
  );
}

/**
 * Reusable mobile / tablet feature card for grid displays.
 */
export function MobileFeatureCard({ card }: { card: FeatureCardData }) {
  return (
    <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white shadow-sm border border-purple-100 text-left">
      <div className="relative w-10 h-11 rounded-lg overflow-hidden shrink-0">
        <Image
          src={card.avatar}
          alt={`${card.line1} ${card.line2}`}
          fill
          sizes="44px"
          className="object-cover"
        />
      </div>
      <div className="text-[12px] font-bold leading-tight text-[#1E1135]">
        {card.line1}
        <br />
        {card.line2}
      </div>
    </div>
  );
}

export default DesktopFloatingFeatureCard;
