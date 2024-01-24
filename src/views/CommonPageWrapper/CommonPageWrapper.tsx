import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import PageSpacer from "@/components/Spacer/PageSpacer";

interface IProps {
  children: React.ReactNode;
}

const CommonPageWrapper: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <PageSpacer>{children}</PageSpacer>
      <Footer />
    </>
  );
};

export default CommonPageWrapper;
