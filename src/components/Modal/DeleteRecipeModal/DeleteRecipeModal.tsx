import React from "react";

interface IProps {
  id: string;
  recipeName: string;
  handleEnableEditModal: () => void;
}

const DeleteRecipeModal: React.FC<IProps> = ({
  id,
  recipeName,
  handleEnableEditModal,
}) => {
  const handleDelete = () => {
    console.log("delete " + recipeName);
    handleEnableEditModal();
  };

  return (
    <dialog id={`delete-recipe-modal-${id}`} className="modal">
      <div className="modal-box flex justify-center items-center bg-dark-secondary gap-7">
        <h2 className="text-primary text-2xl text-center">Delete Recipe</h2>
        <p className="py-4 text-body-text">
          Are you sure you want to delete{" "}
          <span className="text-error">{recipeName}</span>
        </p>
        <form method="dialog" className="flex gap-2">
          <button
            className="btn rounded-xl btn-secondary text-white"
            onClick={() => {
              handleEnableEditModal();
            }}>
            Cancel
          </button>
          <button
            className="btn rounded-xl btn-error text-white"
            onClick={handleDelete}>
            Delete
          </button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button
          onClick={() => {
            handleEnableEditModal();
          }}>
          close
        </button>
      </form>
    </dialog>
  );
};

export default DeleteRecipeModal;
