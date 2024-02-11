import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Stats",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
