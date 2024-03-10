"use client";
import React, { useEffect } from "react";
import ListSection from "@/views/ListSection/ListSection";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import getMyLikedList from "@/services/getMyLikedList";
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
      const recipes = await getMyLikedList({ idToken });
      setRecipes(recipes);
    };
    fetchMyList();
  }, []);

  return (
    <ProtectedRoute>
      <ListSection
        title={"Liked list"}
        recipes={recipes}
        showHeartIcon={true}
      />
    </ProtectedRoute>
  );
};

export default page;
