"use client";
import React, { useState } from "react";
import { MdLibraryAddCheck, MdOutlineLibraryAdd } from "react-icons/md";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";

interface IProps {
  id: string;
}

const RecipeFunctionIcons: React.FC<IProps> = ({ id }) => {
  const [liked, setLiked] = useState(false);
  const [addedToList, setAddedToList] = useState(false);

  const handleLike = () => {
    console.log("like");
    setLiked(!liked);
  };
  const handleAddToList = () => {
    console.log("add to list");
    setAddedToList(!addedToList);
  };
  return (
    <div className="flex gap-3">
      <div
        className="flex p-5 rounded-full drop-shadow-2xl text-white bg-dark-secondary cursor-pointer hover:scale-110 transition duration-100"
        onClick={handleLike}>
        {liked ? (
          <RiHeart3Fill size={20} className="text-error" />
        ) : (
          <RiHeart3Line size={20} className="" />
        )}
      </div>
      <div
        className="flex p-5 rounded-full drop-shadow-2xl text-white bg-dark-secondary cursor-pointer hover:scale-110 transition duration-100"
        onClick={handleAddToList}>
        {addedToList ? (
          <MdLibraryAddCheck size={20} className="" />
        ) : (
          <MdOutlineLibraryAdd size={20} className="" />
        )}
      </div>
    </div>
  );
};

export default RecipeFunctionIcons;
