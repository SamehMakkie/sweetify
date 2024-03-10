import Link from "next/link";
import React from "react";
import { MdOutlineCake } from "react-icons/md";
import { RiTimerLine } from "react-icons/ri";

interface Recipe {
  id: string;
  name: string;
  imageSrc: string;
  description: string;
  preparationTime: number;
}

const RecipeCard: React.FC<Recipe> = ({
  id,
  name,
  imageSrc,
  description,
  preparationTime,
}) => {
  return (
    <Link href={`/recipes/${id}`} className="flex justify-center items-center">
      <div className="max-w-sm overflow-hidden rounded-2xl bg-dark-secondary drop-shadow-2xl transform transition-transform duration-200 hover:scale-110 active:scale-90">
        <img src={imageSrc} className="w-full rounded-t-2xl bg-cover" />
        <div className="flex p-10 flex-col gap-5 ">
          <h3 className="text-2xl text-primary line-clamp-2">{name}</h3>
          <p className="text-card-text line-clamp-3">{description}</p>
          <div className="flex gap-3 items-center text-primary">
            <MdOutlineCake />
            <RiTimerLine />
            <p>{preparationTime} min</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
