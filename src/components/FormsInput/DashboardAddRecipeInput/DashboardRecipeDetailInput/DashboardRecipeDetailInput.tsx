import React from "react";

interface IProps {
  type: "text" | "number";
  label: string;
  maxW?: string;
  Icon?: React.ReactNode; 
  inputName: string;
  placeholder: string;
}

const DashboardRecipeDetailInput: React.FC<IProps> = ({
  type,
  label,
  maxW = "",
  Icon,
  inputName,
  placeholder,
}) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <label className="text-body-text">{label}</label>
      <div className="flex flex-col w-full gap-2">
        <div className={"flex px-4 py-3 justify-center items-center gap-2 rounded-full bg-secondary hover:bg-lighter-dark-secondary " + maxW}>
          {
            Icon && Icon
          }
          <input
            id={inputName}
            type={type}
            name={inputName}
            placeholder={placeholder}
            className="w-full number-input text-md bg-transparent outline-none placeholder:text-card-text text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardRecipeDetailInput;
