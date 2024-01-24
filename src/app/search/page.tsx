"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchFilter from "@/views/Search/SearchFilter/SearchFilter";
import SearchResults from "@/views/Search/SearchResults/SearchResults";

const dumbData = [
  {
    id: "1",
    name: "Carrot Cake with Cream Cheese Frosting",
    imageSrc: "/cake2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preparationTime: 10,
  },
  {
    id: "2",
    name: "Chocolate Chip Cookie Dough Brownies",
    imageSrc: "/cake2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preparationTime: 20,
  },
  {
    id: "3",
    name: "Strawberry Cheesecake Ice Cream",
    imageSrc: "/cake2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preparationTime: 30,
  },
  {
    id: "4",
    name: "Lemon Blueberry Layer Cake",
    imageSrc: "/cake2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preparationTime: 40,
  },
  {
    id: "5",
    name: "Lemon Blueberry Layer Cake",
    imageSrc: "/cake2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preparationTime: 40,
  },
  {
    id: "6",
    name: "Lemon Blueberry Layer Cake",
    imageSrc: "/cake2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preparationTime: 40,
  },
  {
    id: "7",
    name: "Lemon Blueberry Layer Cake",
    imageSrc: "/cake2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preparationTime: 40,
  },
  {
    id: "8",
    name: "Lemon Blueberry Layer Cake",
    imageSrc: "/cake2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preparationTime: 40,
  },
  {
    id: "9",
    name: "Lemon Blueberry Layer Cake",
    imageSrc: "/cake2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preparationTime: 40,
  },
];

const Page = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("searchString") || "";
  const duration = Number(searchParams.get("maxDuration") || "30");
  const [searchString, setSearchString] = useState(search);
  const [maxDuration, setMaxDuration] = useState(duration);

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-between gap-10">
      <SearchFilter />
      <SearchResults searchString={searchString} data={dumbData} />
    </section>
  );
};

export default Page;
