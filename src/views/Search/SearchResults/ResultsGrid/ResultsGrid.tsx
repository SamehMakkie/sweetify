import DashboardRecipeCard from "@/components/RecipeCard/DashboardRecipeCard/DashboardRecipeCard";
import RecipeCard from "@/components/RecipeCard/RecipeCard";
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
    if (mode === "client-search")
      return data.map((recipe) => <RecipeCard key={recipe.id} {...recipe} />);
    else
      return data.map((recipe) => (
        <DashboardRecipeCard key={recipe.id} {...recipe} />
      ));
  };

  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-7 gap-y-14">
      {renderCard()}
    </section>
  );
};

export default ResultsGrid;
