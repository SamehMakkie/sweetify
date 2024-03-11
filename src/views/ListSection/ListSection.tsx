import RecipeCard from "@/components/RecipeCard/RecipeCard";
import React from "react";
import { FaHeart } from "react-icons/fa6";

interface Recipe {
  id: string;
  name: string;
  imageSrc: string;
  description: string;
  preparationTime: number;
}

interface IProps {
  title: string;
  recipes: Recipe[];
  showHeartIcon?: boolean;
}

const ListSection: React.FC<IProps> = ({
  title,
  recipes,
  showHeartIcon = false,
}) => {
  return (
    <div className="flex flex-col w-full gap-y-5">
      <div className="w-full py-10 bg-dark-secondary rounded-2xl drop-shadow-2xl">
        <div className="flex flex-col gap-3 justify-center items-center">
          <div className="flex items-center gap-3">
            {showHeartIcon && (
              <FaHeart size={36} className="text-6xl text-error" />
            )}
            <h2 className="text-4xl text-center text-primary">{title}</h2>
          </div>
          <hr className="w-full max-w-xl border-primary" />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {recipes && recipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  );
};

export default ListSection;
