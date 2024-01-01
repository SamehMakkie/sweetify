import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";

const SocialIcons = () => {
  return (
    <div className="h-full col-span-1 flex flex-col gap-4">
      <p className="text-white">Social</p>
      <div className="h-min flex gap-3">
        <Link href="">
          <FaFacebook size={20} className="text-body-text hover:text-primary" />
        </Link>
        <Link href="">
          <RiInstagramFill
            size={20}
            className="text-body-text hover:text-primary"
          />
        </Link>
        <Link href="">
          <BsTwitterX size={20} className="text-body-text hover:text-primary" />
        </Link>
      </div>
    </div>
  );
};

export default SocialIcons;
