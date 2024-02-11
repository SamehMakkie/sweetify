import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Recipes",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
