"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { toast } from "react-toastify";

interface IProps {
  children: React.ReactNode;
}
let numOfShownToasts = 0;

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
          if (numOfShownToasts < 1) {
            numOfShownToasts++;
            toast.error("Unauthorized. Redirecting to login...");
          }
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
      <span className="loading loading-infinity loading-lg text-primary"></span>
    </div>
  );
};

export default ProtectedAdminRoute;
