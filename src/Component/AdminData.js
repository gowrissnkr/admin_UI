import React from "react";
import EditIcon from "../assets/images/editing.png";
import DeleteIcon from "../assets/images/trash.png";
import TableData from "./TableData";

const AdminData = ({
  adminData,
  handleChange,
  handleAllChange,
  selectedCheckbox,
  handleSelect,
  deleteSingleData,
  setShowModal,
  handleEdit,
}) => {
  return (
    <>
      <div className="mt-[10px] w-full h-[400px]">
        <table>
          <tbody className="w-full">
            <tr className="border-b-[1px] border-gray-300 w-full">
              <td className="pr-[100px]">
                <input
                  type="checkbox"
                  onChange={handleAllChange}
                  checked={
                    adminData !== null &&
                    selectedCheckbox.length === adminData.length
                  }
                />
              </td>
              <td className="pr-[70px] py-[2px]">Name</td>
              <td className="pr-[70px] py-[2px]">Email</td>
              <td className="pr-[70px] py-[2px]">Role</td>
              <td className="pr-[100px] py-[2px]">Actions</td>
            </tr>
            {adminData !== null && adminData.length > 0 ? (
              adminData.map(({ name, id, email, role }) => (
                <TableData
                  name={name}
                  id={id}
                  email={email}
                  role={role}
                  EditIcon={EditIcon}
                  DeleteIcon={DeleteIcon}
                  handleChange={handleChange}
                  selectedCheckbox={selectedCheckbox.includes(id)}
                  handleSelect={handleSelect}
                  deleteSingleData={deleteSingleData}
                  setShowModal={setShowModal}
                  handleEdit={handleEdit}
                  key={id}
                />
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center">
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminData;
