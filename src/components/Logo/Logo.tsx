import Link from "next/link";
import React from "react";

interface IProps {
  textSize?: string;
  colSpan?: string;
}

const Logo: React.FC<IProps> = ({
  textSize = "text-4xl",
  colSpan = "col-span-3 md:col-span-1",
}) => {
  return (
    <Link href={"/"} className={"w-full " + colSpan}>
      <p className={"w-full text-primary text-center md:text-left " + textSize}>
        Sweetify
      </p>
    </Link>
  );
};

export default Logo;
