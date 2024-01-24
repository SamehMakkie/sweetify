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
  data: recipe[];
}

const ResultsGrid: React.FC<IProps> = ({data}) => {
  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-7 gap-y-14">
      {data.map((recipe) => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </section>
  );
};

export default ResultsGrid;
