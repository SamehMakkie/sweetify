import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Login - Sweetify",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
