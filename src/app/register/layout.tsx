import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register Account- Sweetify",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
