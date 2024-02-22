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

  const opacity = showModal ? "opacity-[0.5]" : "opacity-100";

  return (
    <div className="w-[70%] mt-4 mx-auto font-mono relative">
      <div className={opacity}>
        <SearchBar handleSearch={handleSearch} />
        <AdminData
          {...{
            adminData: pageData ,
            handleAllChange,
            handleChange,
            handleSelect,
            deleteSingleData,
            setShowModal,
            handleEdit,
            selectedCheckbox,
          }}
        />
        <Pagination
          {...{
            pageLength,
            setCurrentPage,
            currentPage,
            deleteSelected,
          }}
        />
      </div>
      {showModal && (
        <Modal
          {...{
            editData,
            setShowModal,
            handleChange,
            handleSaveEditData,
          }}
        />
      )}
    </div>
  );
}

export default App;
