import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Sweetify",
  description: "Sweetify Privacy Policy",
};

export default function PrivacyPolicy({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
