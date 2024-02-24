"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

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

interface recipe {
  id: string;
  name: string;
  imageSrc: string;
  description: string;
  preparationTime: number;
}

interface IProps {
  searchString: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
  setSearchResults: React.Dispatch<React.SetStateAction<recipe[]>>;
}

const DashboardSearchInput: React.FC<IProps> = ({
  searchString,
  setSearchString,
  setSearchResults,
}) => {
  const handleSearchStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
    if (e.target.value !== "") {
      // get search results
      const searchResults = dumbData.filter((recipe) => {
        return recipe.name.toLowerCase().includes(searchString.toLowerCase());
      });
      setSearchResults(searchResults)
    }
  };

  return (
    <div className="flex w-full px-7 py-5 col-span-2 sm:col-span-1 justify-center items-center gap-2 rounded-3xl bg-dark-secondary hover:bg-lighter-dark-secondary">
      <IoIosSearch className="text-white" size={24} />
      <input
        className="w-full text-md bg-transparent outline-none text-white"
        placeholder="Search by recipe name or ingredient"
        value={searchString}
        onChange={handleSearchStringChange}
      />
    </div>
  );
};

export default DashboardSearchInput;
