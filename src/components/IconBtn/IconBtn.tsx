import React from "react";

interface IconProps {
  size: number;
}

interface IProps {
  Icon: React.FC<IconProps>;
  size?: number;
}

const IconBtn: React.FC<IProps> = ({ Icon, size = 24 }) => {
  return (
    <div className="p-2 rounded-full bg-dark-secondary hover:bg-lighter-dark-secondary text-white cursor-pointer">
      <Icon size={size} />
    </div>
  );
};

export default IconBtn;
