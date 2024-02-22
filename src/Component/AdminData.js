import React from "react";
import TableData from "./TableData";

const AdminData = ({
  pageData,
  handleAllSelect,
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
                  onChange={handleAllSelect}
                  checked={
                    pageData !== null &&
                    selectedCheckbox.length === pageData.length
                  }
                />
              </td>
              <td className="pr-[70px] py-[2px]">Name</td>
              <td className="pr-[70px] py-[2px]">Email</td>
              <td className="pr-[70px] py-[2px]">Role</td>
              <td className="pr-[100px] py-[2px]">Actions</td>
            </tr>
            {pageData !== null && pageData.length > 0 ? (
              pageData.map((data) => (
                <TableData
                  data={data}
                  tableDataProps={{
                    handleSelect,
                    handleEdit,
                    deleteSingleData,
                    setShowModal,
                  }}
                  selectedCheckbox={selectedCheckbox.includes(data.id)}
                  key={data.id}
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
