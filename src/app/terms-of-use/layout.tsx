import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for the website",
};

export default function TermsOfUse({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
