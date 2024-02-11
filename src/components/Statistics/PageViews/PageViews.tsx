import React from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

interface IProps {
  title: string;
  value: number;
  enableArrow?: boolean;
  isIncreasing?: boolean;
  description?: string;
}

const PageViews: React.FC<IProps> = ({
  title,
  value,
  enableArrow = false,
  isIncreasing = false,
  description = ""
}) => {
  return (
    <div className="flex flex-col h-64 gap-3 rounded-2xl justify-center items-center bg-dark-secondary drop-shadow-2xl">
      <div className="text-xl text-body-text">{title}</div>
      <div className="flex gap-1 justify-center items-center text-5xl text-white">
        {enableArrow &&
          (isIncreasing ? (
            <TiArrowSortedUp className="text-success" />
          ) : (
            <TiArrowSortedDown className="text-error" />
          ))}
        {value}
      </div>
      <div className="text-lg text-body-text text-center">{description}</div>
    </div>
  );
};

export default PageViews;
