import Link from "next/link";
import React from "react";

const LetterLogo = () => {
  return (
    <Link href={"/"}>
      <p className={"text-primary text-center sm:text-left text-4xl"}>
        S
      </p>
    </Link>
  );
};

export default LetterLogo;
