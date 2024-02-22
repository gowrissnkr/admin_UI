import React from "react";

const Pagination = ({
  pageLength,
  setCurrentPage,
  currentPage,
  deleteSelected,
}) => {
  const generatePageButtons = () => {
    const buttons = [];
    for (let i = 0; i < pageLength; i++) {
      buttons.push(
        <button
          className="bg-blue-600 rounded px-4 text-white"
          onClick={() => {
            setCurrentPage(i + 1);
          }}
          key={i}
        >
          {i + 1}
        </button>
      );
    }
    return buttons;
  };
  return pageLength === 0 ? (
    <div className="lg:mt-4 flex items-center lg:flex-row flex-col">
      <button
        className="bg-red-600 text-white font-bold py-1 px-4 rounded w-[20%]"
        onClick={deleteSelected}
      >
        Delete Selected
      </button>
      <div className="w-[80%] flex justify-center gap-4">
        <button className="bg-blue-600 rounded px-4 text-white">{1}</button>
      </div>
    </div>
  ) : (
    <div className="lg:mt-4 flex items-center lg:flex-row flex-col">
      <button
        className="bg-red-600 text-white font-bold py-1 px-4 rounded w-[20%]"
        onClick={deleteSelected}
      >
        Delete Selected
      </button>
      <div className="w-[80%] flex justify-center gap-4">
        {currentPage !== 1 && (
          <>
            {" "}
            <button
              className="bg-blue-600 rounded px-4 text-white first-page"
              onClick={() => {
                setCurrentPage(1);
              }}
            >
              {"<<"}
            </button>
            <button
              className="bg-blue-600 rounded px-4 text-white previous-page"
              onClick={() => {
                setCurrentPage(currentPage - 1);
              }}
            >
              {"<"}
            </button>
          </>
        )}
        {generatePageButtons()}
        {currentPage !== pageLength && (
          <>
            <button
              className="bg-blue-600 rounded px-4 text-white next-page"
              onClick={() => {
                setCurrentPage(currentPage + 1);
              }}
            >
              {">"}
            </button>
            <button
              className="bg-blue-600 rounded px-4 text-white last-page"
              onClick={() => {
                setCurrentPage(pageLength);
              }}
            >
              {">>"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Pagination;
