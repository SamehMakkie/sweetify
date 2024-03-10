"use client";
import React from "react";

interface IProps {
    placeholder: string;
    name: string;
}

const DashboardAddRecipeInput: React.FC<IProps> = ({placeholder, name}) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <div
        className={
          "flex w-full px-4 py-3 justify-center items-center gap-2 rounded-full bg-secondary hover:bg-lighter-dark-secondary "
        }>
        <input
          id={name}
          type="text"
          name={name}
          className="w-full text-md bg-transparent outline-none placeholder:text-card-text text-white"
          placeholder={placeholder}
        />
      </div>      
    </div>
  );
};

export default DashboardAddRecipeInput;
