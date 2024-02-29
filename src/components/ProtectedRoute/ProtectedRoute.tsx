"use client";
import React, { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

interface IProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<IProps> = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  return (
    <>
      {user ? (
        children
      ) : (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-10">
          <div className="toast toast-top toast-end">
            <div className="alert alert-error">
              <span>Unauthorized. Redirecting to login...</span>
            </div>
          </div>
          <span className="loading loading-infinity loading-lg text-primary"></span>
        </div>
      )}
    </>
  );
};

export default ProtectedRoute;
