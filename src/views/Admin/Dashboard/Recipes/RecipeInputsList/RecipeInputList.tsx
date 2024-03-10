import React from "react";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import BDRInput from "../DRecipeInput/DRecipeInput";

interface IProps {
  label: string;
  inputBaseName: 'ingredients' | 'steps';
  placeholder: string;
  list: string[];
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    name: 'ingredients' | 'steps'
  ) => void;
  handleAddInput: (name: 'ingredients' | 'steps') => void;
  handleDeleteInput: (index: number, name: 'ingredients' | 'steps') => void;
}

const RecipeInputsList: React.FC<IProps> = ({
  label,
  inputBaseName,
  placeholder,
  list,
  handleInputChange,
  handleAddInput,
  handleDeleteInput,
}) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <label className="text-body-text">{label}</label>

      {list.map((value, index) => {
        return (
          <div key={index} className="flex w-full gap-3">
            <BDRInput
              mode="normal"
              name={inputBaseName + '-' + index}
              placeholder={placeholder}
              value={value}
              onChange={(e) => {
                handleInputChange(e, index, inputBaseName);
              }}
            />
            {list.length > 1 && (
              <button
                type="button"
                className="w-fit p-2 rounded-full bg-red-700 hover:bg-red-800 text-white cursor-pointer"
                onClick={() => {
                  handleDeleteInput(index, inputBaseName);
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
          onClick={() => {handleAddInput(inputBaseName)}}>
          <IoMdAdd size={24} />
        </button>
      </div>
    </div>
  );
};

export default RecipeInputsList;
