import AdminData from "./Component/AdminData";
import SearchBar from "./Component/SearchBar";
import Pagination from "./Component/Pagination";
import { useAdminData } from "./utils/useAdminData";
import Modal from "./Component/Modal";
import { useState } from "react";

function App() {
  const {
    handleChange,
    handleSearch,
    pageData,
    pageLength,
    currentPage,
    setCurrentPage,
    handleAllChange,
    selectedCheckbox,
    handleSelect,
    deleteSelected,
    deleteSingleData,
  } = useAdminData();

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-[70%] mt-4 mx-auto font-mono relative">
      <div className={showModal && "opacity-[0.5]"}>
        <SearchBar handleSearch={handleSearch} />
        <AdminData
          adminData={pageData}
          handleChange={handleChange}
          handleAllChange={handleAllChange}
          selectedCheckbox={selectedCheckbox}
          handleSelect={handleSelect}
          deleteSingleData={deleteSingleData}
          setShowModal = {setShowModal}
        />
        <Pagination
          pagesLength={pageLength}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          deleteSelected={deleteSelected}
        />
      </div>
      {showModal && <Modal setShowModal={setShowModal}/>}
    </div>
  );
}

export default App;
