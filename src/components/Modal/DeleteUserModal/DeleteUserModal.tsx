import React from "react";

interface IProps {
  uid: string;
  userIdentifier: string;
}

const DeleteUserModal: React.FC<IProps> = ({ uid, userIdentifier }) => {
  const handleDelete = () => {
    console.log("User " + userIdentifier + " deleted");
    (
      document.getElementById(`delete-user-${uid}-modal`) as HTMLDialogElement
    )?.close();
  };

  return (
    <dialog id={`delete-user-${uid}-modal`} className="modal">
      <div className="modal-box flex justify-center items-center bg-dark-secondary gap-7">
        <h2 className="text-primary text-2xl text-center">Delete Recipe</h2>
        <p className="py-4 text-body-text">
          Are you sure you want to delete{" "}
          <span className="text-error">{userIdentifier}</span>
        </p>
        <form method="dialog" className="flex gap-2">
          <button className="btn rounded-xl btn-secondary text-white">
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
        <button>close</button>
      </form>
    </dialog>
  );
};

export default DeleteUserModal;
