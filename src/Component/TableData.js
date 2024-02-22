import React from "react";
import EditIcon from "../assets/images/editing.png";
import DeleteIcon from "../assets/images/trash.png";

const TableData = ({ data, tableDataProps, selectedCheckbox }) => {
  const { name, email, role, id } = data;
  const { handleSelect, deleteSingleData, handleEdit, setShowModal } =
    tableDataProps;

  return (
    <tr className="border-b-[1px] border-gray-300 pb-1 w-full" key={id}>
      <td className="pr-[100px] py-[2px]">
        <input
          type="checkbox"
          checked={selectedCheckbox}
          onChange={() => {
            handleSelect(id);
          }}
        />
      </td>
      <td className="pr-[70px] py-[5px]">{name}</td>
      <td className="pr-[70px] py-[2px]">{email}</td>
      <td className="pr-[70px] py-[2px]">{role}</td>
      <td className="pr-[100px] flex justify-center items-center gap-2 pt-[5px]">
        <button className="edit">
          <img
            src={EditIcon}
            alt="edit"
            width="18px"
            onClick={() => {
              handleEdit(id);
              setShowModal(true);
            }}
          />
        </button>
        <button className="delete">
          <img
            src={DeleteIcon}
            alt="delete"
            width="18px"
            onClick={() => {
              deleteSingleData(id);
            }}
          />
        </button>
      </td>
    </tr>
  );
};

export default TableData;
