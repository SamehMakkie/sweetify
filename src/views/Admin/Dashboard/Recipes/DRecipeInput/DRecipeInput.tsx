import React from "react";
import { MdOutlineTimer } from "react-icons/md";

interface IProps {
  mode: "prepTime" | "normal";
  name: string;
  label?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Beta Dashboard Recipe Input
const DRecipeInput: React.FC<IProps> = ({
  mode,
  name,
  label = "",
  placeholder,
  value,
  onChange,
}) => {
  const maxW = mode === "prepTime" ? "max-w-28" : "";
  return (
    <div className="w-full flex flex-col gap-3">
      {label && <label className="text-body-text">{label}</label>}
      <div className="flex flex-col w-full gap-2">
        <div
          className={
            "flex px-4 py-3 justify-center items-center gap-2 rounded-full bg-secondary hover:bg-lighter-dark-secondary " +
            maxW
          }>
          {mode === "prepTime" && (
            <MdOutlineTimer className="text-white" size={24} />
          )}
          <input
            type={mode === "prepTime" ? "number" : "text"}
            name={name}
            value={value ? value : ""}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full number-input text-md bg-transparent outline-none placeholder:text-card-text text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default DRecipeInput;
