import React from "react";

interface IProps {
  title: string;
  ingredients: string[];
}

const RecipeDetailsSection: React.FC<IProps> = ({
  title,
  ingredients,
}) => {
  return (
    <div className="flex flex-col gap-3 md:p-14 p-14 rounded-2xl text-white bg-dark-secondary">
      <h2 className="text-xl text-primary">{title}</h2>
      <ul className="flex flex-col gap-3">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="text-body-text">
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetailsSection;
