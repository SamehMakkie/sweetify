"use client";
import React from "react";
import { RiTimerLine } from "react-icons/ri";
import { MdDeleteOutline, MdOutlineCake } from "react-icons/md";
import DeleteRecipeModal from "@/components/Modal/DeleteRecipeModal/DeleteRecipeModal";
import { useRouter } from "next/navigation";

interface Recipe {
  id: string;
  name: string;
  imageSrc: string;
  description: string;
  preparationTime: number;
}

const DashboardRecipeCard: React.FC<Recipe> = ({
  id,
  name,
  imageSrc,
  description,
  preparationTime,
}) => {
  const [isEditModalDisabled, setIsEditModalDisabled] = React.useState(false);
  const router = useRouter();

  const handleEnableEditModal = () => {
    setIsEditModalDisabled(false);
  };

  const handleDeleteModalDisplay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEditModalDisabled(true);
    e.nativeEvent.preventDefault();
    (
      document.getElementById(`delete-recipe-modal-${id}`) as HTMLDialogElement
    )?.showModal();
  };

  const handleEditModalDisplay = () => {
    if (!isEditModalDisabled) {
      router.push(`/admin/dashboard/recipes/edit/${id}`);
    }
  };

  return (
    <div
      className="flex justify-center items-center cursor-pointer"
      onClick={handleEditModalDisplay}>
      <div className="max-w-sm rounded-2xl bg-dark-secondary drop-shadow-2xl">
        <div
          tabIndex={0}
          role="button"
          onClick={handleDeleteModalDisplay}
          className="absolute right-[-20px] top-[-20px] p-2 rounded-full bg-dark-secondary hover:bg-lighter-dark-secondary text-white cursor-pointer drop-shadow-2xl">
          <MdDeleteOutline
            size={24}
          />
        </div>
        <DeleteRecipeModal id={id} recipeName={name} handleEnableEditModal={handleEnableEditModal} />
        <img src={imageSrc} className="w-full rounded-t-2xl bg-cover" />
        <div className="flex p-10 flex-col gap-5 ">
          <h3 className="text-2xl text-primary line-clamp-2">{name}</h3>
          <p className="text-card-text line-clamp-3">{description}</p>
          <div className="flex gap-3 items-center text-primary">
            <MdOutlineCake />
            <RiTimerLine />
            <p>{preparationTime} min</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardRecipeCard;
