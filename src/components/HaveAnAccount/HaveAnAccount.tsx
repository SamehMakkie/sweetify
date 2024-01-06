import Link from "next/link";
import React from "react";

interface IProps {
  msg: string;
  linkMsg: string;
  linkPath: string;
}

const HaveAnAccount: React.FC<IProps> = ({ msg, linkMsg, linkPath }) => {
  return (
    <div className="w-full flex justify-center">
      <p className="text-card-text text-md">{msg}&nbsp;</p>
      <Link href={linkPath}>
        <div className="flex flex-col gap-1">
          <p className="text-card-text text-md">{linkMsg}</p>
          <div className="w-full bg-primary h-[2px]"></div>
        </div>
      </Link>
    </div>
  );
};

export default HaveAnAccount;
