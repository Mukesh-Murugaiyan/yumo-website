import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Data and Privacy Choices | Yumocare",
  description:
    "Learn how Yumocare uses and protects health information, how to manage your data, and where to find the full Privacy Policy.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
