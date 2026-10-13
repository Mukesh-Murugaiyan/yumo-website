import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Center & FAQ | Yumocare",
  description:
    "Get help with Yumocare. Find answers to frequently asked questions about cycle tracking, subscriptions, privacy, and more.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
