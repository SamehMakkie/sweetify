import React from "react";
import SearchResultsHeader from "./SearchResultsHeader/SearchResultsHeader";
import ResultsGrid from "./ResultsGrid/ResultsGrid";

interface recipe {
  id: string;
  name: string;
  imageSrc: string;
  description: string;
  preparationTime: number;
}

interface IProps {
  mode?: "client-search" | "dashboard";
  searchString: string;
  data: recipe[];
}

const SearchResults: React.FC<IProps> = ({
  mode = "client-search",
  searchString,
  data,
}) => {
  return (
    <main className="w-full col-span-1 md:col-span-2 lg:col-span-3 flex flex-col gap-10">
      <SearchResultsHeader searchString={searchString} />
      <ResultsGrid mode={mode} data={data} />
    </main>
  );
};

export default SearchResults;
