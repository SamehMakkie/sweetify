import React from "react";

interface IconProps {
  size: number;
}

interface IProps {
  Icon: React.FC<IconProps>;
  size?: number;
  isSelected?: boolean;
  isLogout?: boolean;
  onClick?: () => void;
}

const RoundedRectangularIconBtn: React.FC<IProps> = ({ Icon, size = 24, isLogout = false, isSelected= false, onClick = () => {} }) => {
  const hoverBgColor = isLogout ? "hover:bg-error" : "hover:bg-lighter-dark-secondary";
  const bgColor = isSelected ? "bg-lighter-dark-secondary " : " ";
  return (
    <div className={"p-3 rounded-2xl text-white cursor-pointer " + bgColor + hoverBgColor} onClick={onClick}>
      <Icon size={size} />
    </div>
  );
};

export default RoundedRectangularIconBtn;
