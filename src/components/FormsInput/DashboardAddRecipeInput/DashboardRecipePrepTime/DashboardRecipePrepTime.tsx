import React from "react";
import { MdOutlineTimer } from "react-icons/md";

interface IProps {
  label: string;
  inputName: string;
  placeholder: string;
}

const DashboardRecipePrepTime: React.FC<IProps> = ({
  label,
  inputName,
  placeholder,
}) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <label className="text-body-text">{label}</label>
      <div className="flex flex-col w-full gap-2">
        <div className="flex max-w-28 px-4 py-3 justify-center items-center gap-2 rounded-full bg-secondary hover:bg-lighter-dark-secondary ">
          <MdOutlineTimer className="text-white" size={24} />
          <input
            type="number"
            name={inputName}
            placeholder={placeholder}
            className="w-full number-input text-md bg-transparent outline-none placeholder:text-card-text text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardRecipePrepTime;
