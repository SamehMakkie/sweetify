import React, { ReactNode } from "react";

interface IProps {
  type?: string;
  placeholder: string;
  leftIcon: ReactNode;
  handleEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const FilterInput: React.FC<IProps> = ({
  type = "text",
  placeholder,
  leftIcon,
  handleEnter,
}) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex max-w-28 px-4 py-3 justify-center items-center gap-2 rounded-full bg-secondary hover:bg-lighter-dark-secondary ">
        {leftIcon}
        <input
          type={type}
          onKeyDown={handleEnter}
          className="w-full number-input text-md bg-transparent outline-none placeholder:text-card-text text-white"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default FilterInput;
