import React from "react";
import { MdOutlineTimer } from "react-icons/md";

interface IProps {
  time: Number;
}

const PrepTime: React.FC<IProps> = ({ time }) => {
  return (
    <div className="w-fit flex p-5 gap-3 rounded-2xl bg-dark-secondary drop-shadow-2xl">
      <MdOutlineTimer className="text-primary" size={24} />
      <p className="text-body-text">{time + " min"}</p>
    </div>
  );
};

export default PrepTime;
