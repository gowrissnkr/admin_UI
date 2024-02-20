import React from "react";

const TableData = ({
  name,
  handleChange,
  id,
  email,
  role,
  EditIcon,
  DeleteIcon,
  selectedCheckbox,
  handleSelect,
  deleteSingleData,
  setShowModal,
}) => {
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
      <td className="pr-[70px] py-[5px]">
        <input value={name} onChange={handleChange} />
      </td>
      <td className="pr-[70px] py-[2px]">{email}</td>
      <td className="pr-[70px] py-[2px]">{role}</td>
      <td className="pr-[100px] flex justify-center items-center gap-2 pt-[5px]">
        <button className="edit">
          <img
            src={EditIcon}
            alt="edit"
            width="18px"
            onClick={() => setShowModal(true)}
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
