import React from "react";
import EditIcon from "../assets/images/editing.png";
import DeleteIcon from "../assets/images/trash.png";
import TableData from "./TableData";

const AdminData = ({
  adminData,
  filteredData,
  handleChange,
}) => {
  const data =
    filteredData === null
      ? null
      : filteredData.length > 0
      ? filteredData
      : adminData;
  return (
    <>
      <div className="mt-[10px] w-full h-[400px]">
        <table>
          <tbody>
            <tr className="border-b-[1px] border-gray-300 w-full">
              <td className="pr-[100px]">
                <input type="checkbox" />
              </td>
              <td className="pr-[70px] py-[2px]">Name</td>
              <td className="pr-[70px] py-[2px]">Email</td>
              <td className="pr-[70px] py-[2px]">Role</td>
              <td className="pr-[100px] py-[2px]">Actions</td>
            </tr>
            {data !== null ? (
              data.map(({ name, id, email, role }) => (
                <TableData
                  name={name}
                  id={id}
                  email={email}
                  role={role}
                  EditIcon={EditIcon}
                  DeleteIcon={DeleteIcon}
                  handleChange={handleChange}
                />
              ))
            ) : (
              <div>No Data Found</div>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminData;