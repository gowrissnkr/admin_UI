import AdminData from "./Component/AdminData";
import SearchBar from "./Component/SearchBar";
import Pagination from "./Component/Pagination";
import { useAdminData } from "./utils/useAdminData";
import Modal from "./Component/Modal";

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
    handleEdit,
    setShowModal,
    showModal,
    editData,
    handleSaveEditData,
  } = useAdminData();

  return (
    <div className="w-[70%] mt-4 mx-auto font-mono relative">
      <div className={showModal ? "opacity-[0.5]" : "opacity-100"}>
        <SearchBar handleSearch={handleSearch} />
        <AdminData
          adminData={pageData}
          handleChange={handleChange}
          handleAllChange={handleAllChange}
          selectedCheckbox={selectedCheckbox}
          handleSelect={handleSelect}
          deleteSingleData={deleteSingleData}
          setShowModal={setShowModal}
          handleEdit={handleEdit}
        />
        <Pagination
          pagesLength={pageLength}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          deleteSelected={deleteSelected}
        />
      </div>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          editData={editData}
          handleChange={handleChange}
          handleSaveEditData={handleSaveEditData}
        />
      )}
    </div>
  );
}

export default App;
