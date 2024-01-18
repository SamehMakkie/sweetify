import Link from "next/link";
import React from "react";

interface IconProps {
  size: number;
  className: string;
}

interface IProps {
  href: string;
  Icon: React.FC<IconProps>;
  iconColor?: string;
  text: string;
  onClick?: () => void;
}

const NavMenuItems: React.FC<IProps> = ({
  href,
  Icon,
  iconColor = "",
  text,
  onClick = () => {},
}) => {
  return (
    <Link href={href}>
      <div className="flex w-full px-4 py-2 justify-between gap-5 rounded-full hover:bg-secondary" onClick={onClick}>
        <Icon size={24} className={iconColor} />
        <p className="grow">{text}</p>
      </div>
    </Link>
  );
};

export default NavMenuItems;
