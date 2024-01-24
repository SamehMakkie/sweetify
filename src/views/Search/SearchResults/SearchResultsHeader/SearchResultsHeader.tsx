import React from "react";

interface IProps {
  searchString: string;
}

const SearchResultsHeader: React.FC<IProps> = ({ searchString }) => {
  return (
    <section className="w-full flex flex-col px-7 py-10 gap-2 rounded-2xl drop-shadow-2xl bg-dark-secondary">
      <h1 className="text-4xl text-primary">Search results</h1>
      <hr className="max-w-[232px] h-px bg-primary border-none" />
      <p className="text-3xl text-card-text">{searchString}</p>
    </section>
  );
};

export default SearchResultsHeader;
