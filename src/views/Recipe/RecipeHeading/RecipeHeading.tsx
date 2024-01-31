import HeadingLineGap from "@/components/HeadingLineGap/HeadingLineGap";
import React from "react";

interface IProps {
  title: string;
}

const RecipeHeading: React.FC<IProps> = ({ title }) => {
  return (
    <div className="flex flex-col p-5 rounded-2xl bg-dark-secondary drop-shadow-2xl">
      <h1 className="text-4xl text-primary">{title}</h1>
    </div>
  );
};

export default RecipeHeading;
