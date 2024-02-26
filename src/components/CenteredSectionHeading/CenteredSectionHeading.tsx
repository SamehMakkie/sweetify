import React from "react";

interface IProps {
  title: string;
}

const CenteredSectionHeading: React.FC<IProps> = ({ title }) => {
  return (
    <section className="flex flex-col p-5 rounded-2xl bg-dark-secondary drop-shadow-2xl">
      <h1 className="text-5xl text-primary text-center">{title}</h1>
    </section>
  );
};

export default CenteredSectionHeading;
