import DashboardRecipeCard from "@/components/RecipeCard/DashboardRecipeCard/DashboardRecipeCard";
import RecipeCard from "@/components/RecipeCard/RecipeCard";
import Skeleton from "@/components/RecipeCard/Skeleton/Skeleton";
import React from "react";

interface recipe {
  id: string;
  name: string;
  imageSrc: string;
  description: string;
  preparationTime: number;
}

interface IProps {
  mode?: "client-search" | "dashboard";
  data: recipe[];
}

const ResultsGrid: React.FC<IProps> = ({ mode = "client-search", data }) => {
  const renderCard = () => {
    if (mode === "client-search" && data.length === 0) {
      return (
        <div className="w-full col-span-1 sm:col-span-2 xl:col-span-3 flex ">
          <h1 className="px-7 text-2xl text-card-text">No recipes found</h1>
        </div>
      );
    }
    if (mode === "client-search")
      return data.map((recipe) => <RecipeCard key={recipe.id} {...recipe} />);
    else
      return data.map((recipe) => (
        <DashboardRecipeCard key={recipe.id} {...recipe} />
      ));
  };

  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-7 gap-y-14">
      {data ? renderCard() : <Skeleton />}
    </section>
  );
};

export default ResultsGrid;
