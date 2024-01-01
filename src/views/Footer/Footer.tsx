import FooterPagesLinks from "@/components/FooterLinks/FooterPagesLinks";
import SocialIcons from "@/components/FooterLinks/SocialIcons";
import Logo from "@/components/Logo/Logo";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-10 px-5 sm:px-0 justify-center items-center w-full min-h-[60vh] bg-dark-secondary">
      <div className="grid grid-cols-3 justify-center items-center gap-10 lg:gap-0">
        <Logo textSize="text-6xl sm:text-8xl" colSpan="col-span-3 lg:col-span-2" />
        <div className="w-full col-span-3 lg:col-span-1 grid grid-cols-2 gap-14 sm:gap-20 justify-center items-center">
          <FooterPagesLinks />
          <SocialIcons />
        </div>
      </div>
        <p className="text-body-text text-center text-sm col-span-3">
          © 2021 Sweetify. All rights reserved
        </p>
    </footer>
  );
};

export default Footer;
