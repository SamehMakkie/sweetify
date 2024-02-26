import React from "react";
import TableRow from "./TableRow/TableRow";

interface TableRowProps {
  uid: string;
  identifier: string;
  createdAt: string;
  lastSignedIn: string;
}

interface dataProps {
  data: TableRowProps[];
}

const UsersTable: React.FC<dataProps> = ({ data }) => {
  return (
    <div className="w-full overflow-x-auto text-card-text">
      <table className="w-full table">
        <thead>
          <tr className="text-primary">
            <th>UID</th>
            <th>Identifier</th>
            <th>Created at</th>
            <th>Signed In</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((dataItem: TableRowProps) => (
            <TableRow key={dataItem.uid} {...dataItem} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
