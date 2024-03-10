import React from "react";
import DeleteUserModal from "@/components/Modal/DeleteUserModal/DeleteUserModal";
import { MdDeleteOutline } from "react-icons/md";

interface IProps {
  uid: string;
  identifier: string;
  createdAt: string;
  lastSignedIn: string;
}

const TableRow: React.FC<IProps> = ({
  uid,
  identifier,
  createdAt,
  lastSignedIn,
}) => {
  const handleDeleteIconClick = () => {
    (
      document.getElementById(`delete-user-${uid}-modal`) as HTMLDialogElement
    )?.showModal();
  };

  return (
    <tr className="hover:bg-lighter-dark-secondary hover:text-white border-none">
      <td className="rounded-tl-3xl rounded-bl-3xl">{uid}</td>
      <td>{identifier}</td>
      <td>{createdAt}</td>
      <td>{lastSignedIn}</td>
      <DeleteUserModal uid={uid} userIdentifier={identifier} />
      <td className="rounded-tr-3xl rounded-br-3xl">
        <div
          className="flex w-fit p-2 rounded-full text-error hover:bg-dark-secondary cursor-pointer"
          onClick={handleDeleteIconClick}>
          <MdDeleteOutline size="24" />
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
