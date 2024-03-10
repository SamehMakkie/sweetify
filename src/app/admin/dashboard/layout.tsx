import ProtectedAdminRoute from "@/components/ProtectedRoute/ProtectedAdminRoute";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProtectedRoute>
        <ProtectedAdminRoute>{children}</ProtectedAdminRoute>
      </ProtectedRoute>
    </>
  );
}
