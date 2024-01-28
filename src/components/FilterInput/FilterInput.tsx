import React, { ReactNode, RefObject } from "react";

interface IProps {
  type?: string;
  placeholder: string;
  leftIcon: ReactNode;
  handleEnter: () => void;
  inputRef?: RefObject<HTMLInputElement>;
}

const FilterInput: React.FC<IProps> = ({
  type = "text",
  placeholder,
  leftIcon,
  handleEnter,
  inputRef,
}) => {
  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      handleEnter();
    }
  };
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex max-w-28 px-4 py-3 justify-center items-center gap-2 rounded-full bg-secondary hover:bg-lighter-dark-secondary ">
        {leftIcon}
        <input
          ref={inputRef}
          type={type}
          placeholder={placeholder}
          onKeyDown={handleEnterKey}
          className="w-full number-input text-md bg-transparent outline-none placeholder:text-card-text text-white"
        />
      </div>
    </div>
  );
};

export default FilterInput;
