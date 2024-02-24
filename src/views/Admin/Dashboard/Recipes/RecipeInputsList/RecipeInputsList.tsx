"use client";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import DashboardAddRecipeInput from "@/components/FormsInput/DashboardAddRecipeInput/DashboardAddRecipeInput";
import { MdDeleteOutline } from "react-icons/md";

interface IProps {
  label: string;
  inputName: string;
  placeholder: string;
  inputNames: string[];
  setInputNames: React.Dispatch<React.SetStateAction<string[]>>;
}

const RecipeInputsList: React.FC<IProps> = ({
  label,
  inputName,
  placeholder,
  inputNames,
  setInputNames,
}) => {
  const handleAddInput = () => {
    const lastInput = inputNames[inputNames.length - 1];
    const lastInputNumber = parseInt(lastInput.split("-")[1]);
    setInputNames([...inputNames, `${inputName}-${lastInputNumber + 1}`]);
  };

  const handleDeleteInput = (name: string) => {
    setInputNames(inputNames.filter((input) => input !== name));
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <label className="text-body-text">{label}</label>

      {inputNames.map((name, index) => {
        return (
          <div key={name} className="flex w-full gap-3">
            <DashboardAddRecipeInput name={name} placeholder={placeholder} />
            {inputNames.length > 1 && (
              <button
                type="button"
                className="w-fit p-2 rounded-full bg-red-700 hover:bg-red-800 text-white cursor-pointer"
                onClick={() => {
                  handleDeleteInput(name);
                }}>
                <MdDeleteOutline size={24} />
              </button>
            )}
          </div>
        );
      })}

      <div className="w-full flex justify-center">
        <button
          type="button"
          className="w-fit p-2 rounded-full bg-secondary hover:bg-lighter-dark-secondary text-white cursor-pointer"
          onClick={handleAddInput}>
          <IoMdAdd size={24} />
        </button>
      </div>
    </div>
  );
};

export default RecipeInputsList;
