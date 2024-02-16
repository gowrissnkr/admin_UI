import React from "react";

const TableData = ({
  name,
  handleChange,
  id,
  email,
  role,
  EditIcon,
  DeleteIcon,
}) => {
  return (
    <tr className="border-b-[1px] border-gray-300 pb-1 w-full" key={id}>
      <td className="pr-[100px] py-[2px]">
        <input type="checkbox" />
      </td>
      <td className="pr-[70px] py-[5px]">
        <input value={name} onChange={handleChange} />
      </td>
      <td className="pr-[70px] py-[2px]">{email}</td>
      <td className="pr-[70px] py-[2px]">{role}</td>
      <td className="pr-[100px] flex justify-center items-center gap-2 pt-[5px]">
        <img src={EditIcon} alt="edit" width="18px" />
        <img src={DeleteIcon} alt="delete" width="18px" />
      </td>
    </tr>
  );
};

export default TableData;
