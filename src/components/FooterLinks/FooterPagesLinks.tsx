import Link from "next/link";
import React from "react";

const links = [
  {
    href: "/about",
    text: "About",
  },
  {
    href: "/privacy-policy",
    text: "Privacy Policy",
  },
  {
    href: "/terms-of-use",
    text: "Terms of use",
  },
];

const FooterPagesLinks = () => {
  return (
    <div className="col-span-1 flex flex-col gap-4">
      <p className="text-white">Pages</p>
      <div className="flex flex-col gap-2">
        {links.map((link, index) => (
          <Link href={link.href} key={index}>
            <p className="text-body-text hover:text-primary">{link.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterPagesLinks;
