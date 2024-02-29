"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

interface IProps {
  children: React.ReactNode;
}

const ProtectedAdminRoute: React.FC<IProps> = ({ children }) => {
  const pathname = usePathname();
  const { user } = useAuth();
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchClaims = async () => {
      if (user && pathname.startsWith("/admin")) {
        const idTokenResult = await user.getIdTokenResult();
        if (!idTokenResult.claims.admin) {
          router.push("/login");
        } else {
          setIsAdmin(true);
        }
      } else {
        router.push("/login");
      }
    };

    fetchClaims();
  }, [user]);

  if (user && isAdmin) {
    return <>{children}</>;
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-10">
      <div className="toast toast-top toast-end">
        <div className="alert alert-error">
          <span>Unauthorized. Redirecting to login...</span>
        </div>
      </div>
      <span className="loading loading-infinity loading-lg text-primary"></span>
    </div>
  );
};

export default ProtectedAdminRoute;
