import React from "react";

const Pagination = ({
  pagesLength,
  setCurrentPage,
  currentPage,
  deleteSelected,
}) => {
  return pagesLength === 0 ? (
    <div className="mt-4 flex items-center">
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
    <div className="mt-4 flex items-center">
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

        {[...Array(pagesLength).keys()].map((_, index) => (
          <button
            className="bg-blue-600 rounded px-4 text-white"
            onClick={() => {
              setCurrentPage(index + 1);
            }}
          >
            {index + 1}
          </button>
        ))}
        {currentPage !== pagesLength && (
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
                setCurrentPage(pagesLength);
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
