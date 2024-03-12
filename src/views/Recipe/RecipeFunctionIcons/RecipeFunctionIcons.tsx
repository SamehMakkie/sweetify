"use client";
import { useAuth } from "@/context/AuthContext";
import addRemoveRecipeToMyList from "@/services/addRemoveRecipeToMyList";
import likeUnlikeRecipe from "@/services/likeRecipe";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdLibraryAddCheck, MdOutlineLibraryAdd } from "react-icons/md";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";
import { toast } from "react-toastify";

interface IProps {
  id: string;
}

const RecipeFunctionIcons: React.FC<IProps> = ({ id }) => {
  const [liked, setLiked] = useState(false);
  const [addedToList, setAddedToList] = useState(false);
  const { user, idToken } = useAuth();
  const router = useRouter();

  const handleLikeBtnClick = async () => {
    if (!user) {
      toast.error("You need to be logged in to like a recipe");
      router.push("/login");
      return;
    }
    try {
      await likeUnlikeRecipe({ idToken: idToken, recipeID: id });
      setLiked(!liked);
    } catch (error) {
      toast.error(
        "An error occurred while liking recipe. Please try again later."
      );
      console.error(error);
    }
  };
  const handleAddToListBtnClick = async () => {
    if (!user) {
      toast.error("You need to be logged in to add a recipe to your list");
      router.push("/login");
      return;
    }
    try {
      await addRemoveRecipeToMyList({ idToken: idToken, recipeID: id });
      setAddedToList(!addedToList);
    } catch (error) {
      toast.error(
        "An error occurred while adding recipe to list. Please try again later."
      );
      console.error(error);
    }
  };
  return (
    <div className="flex gap-3">
      <div
        className="flex p-5 rounded-full drop-shadow-2xl text-white bg-dark-secondary cursor-pointer hover:scale-110 transition duration-100"
        onClick={handleLikeBtnClick}>
        {liked ? (
          <RiHeart3Fill size={20} className="text-error" />
        ) : (
          <RiHeart3Line size={20} className="" />
        )}
      </div>
      <div
        className="flex p-5 rounded-full drop-shadow-2xl text-white bg-dark-secondary cursor-pointer hover:scale-110 transition duration-100"
        onClick={handleAddToListBtnClick}>
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
