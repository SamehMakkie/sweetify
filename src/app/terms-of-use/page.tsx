import React from "react";
import Footer from "@/views/Footer/Footer";
import Navbar from "@/views/Navbar/Navbar";
import CenteredSectionHeading from "@/components/CenteredSectionHeading/CenteredSectionHeading";

const privacyPolicy = [
  {
    isHeading: false,
    text: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
  {
    isHeading: true,
    text: "Heading 1",
  },
  {
    isHeading: false,
    text: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
  {
    isHeading: true,
    text: "Heading 2",
  },
  {
    isHeading: false,
    text: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
  {
    isHeading: true,
    text: "Heading 3",
  },
  {
    isHeading: false,
    text: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
  {
    isHeading: true,
    text: "Heading 4",
  },
  {
    isHeading: false,
    text: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
  {
    isHeading: true,
    text: "Heading 5",
  },
  {
    isHeading: false,
    text: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
];

const TermsOfUse = () => {
  return (
    <div className="flex flex-col w-full min-h-screen items-center">
      <Navbar />
      <section className="flex flex-col w-full py-16  items-center">
        <main className="flex flex-col w-full max-w-3xl gap-5">
          <CenteredSectionHeading title="Terms of use" />
          <section className="flex flex-col p-10 gap-5 rounded-3xl bg-dark-secondary">
            {privacyPolicy.map((item, index) => {
              if (item.isHeading) {
                return (
                  <h2 key={index} className="text-3xl text-primary">
                    {item.text}
                  </h2>
                );
              } else {
                return (
                  <p key={index} className="text-body-text">
                    {item.text}
                  </p>
                );
              }
            })}
          </section>
        </main>
      </section>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
