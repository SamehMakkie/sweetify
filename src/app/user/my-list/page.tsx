"use client";
import React, { useEffect } from "react";
import ListSection from "@/views/ListSection/ListSection";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import getMyList from "@/services/getMyList";
import { useAuth } from "@/context/AuthContext";

interface IRecipe {
  id: string;
  name: string;
  imageSrc: string;
  description: string;
  preparationTime: number;
}

const page = () => {
  const [recipes, setRecipes] = React.useState<IRecipe[]>([]);
  const { idToken } = useAuth();

  useEffect(() => {
    const fetchMyList = async () => {
      const { data } = await getMyList({ idToken });
      setRecipes(data);
    };
    fetchMyList();
  }, []);

  return (
    <ProtectedRoute>
      <ListSection title={"My list"} recipes={recipes} />
    </ProtectedRoute>
  );
};

export default page;
