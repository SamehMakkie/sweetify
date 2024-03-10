"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchFilter from "@/views/Search/SearchFilter/SearchFilter";
import SearchResults from "@/views/Search/SearchResults/SearchResults";
import searchRecipes from "@/services/searchRecipes";

const decodeSearchString = (str: string) => {
  // Decode special characters
  let decoded = decodeURIComponent(str);

  // Replace hyphens with spaces
  decoded = decoded.replace(/-/g, " ");

  return decoded;
};

const Page = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("searchString") || "";
  const duration = Number(searchParams.get("maxDuration") || "180");
  const [searchString, setSearchString] = useState(search);
  const [maxDuration, setMaxDuration] = useState(duration);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const searchResults = await searchRecipes({
        searchString: search,
        prepTime: duration,
        pageNum: 1,
      });
      setSearchResults(searchResults);
    };

    let search = searchParams.get("searchString") || "";
    search = decodeSearchString(search);
    let duration = Number(searchParams.get("maxDuration") || "180");

    // Check if duration is not a number
    if (isNaN(duration)) {
      duration = 180;
    }

    setSearchString(search);
    setMaxDuration(duration);

    fetchData();
  }, [searchParams]);

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-between gap-10">
      <SearchFilter currentSearchString={searchString} />
      <SearchResults searchString={searchString} data={searchResults} />
    </section>
  );
};

export default Page;
