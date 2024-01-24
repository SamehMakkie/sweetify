import React from "react";

interface IProps {
  isHomePage?: boolean;
  children: React.ReactNode;
}

const PageSpacer: React.FC<IProps> = ({ isHomePage = false, children }) => {
  const py = isHomePage ? "py-40" : "py-10";
  return (
    <div className={"flex flex-col w-full px-5 sm:px-8 md:px-24 lg:px-36 gap-40 " + py}>
      {children}
    </div>
  );
};

export default PageSpacer;
