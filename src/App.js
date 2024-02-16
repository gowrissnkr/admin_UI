import AdminData from "./Component/AdminData";
import SearchBar from "./Component/SearchBar";
import Pagination from "./Component/Pagination";
import { useAdminData } from "./utils/useAdminData";

function App() {
  const {
    handleChange,
    handlePageChange,
    handleSearch,
    pageData,
    searchFilterData,
    pagesLength,
    setCurrentPage,
    currentPage,
  } = useAdminData();

  return (
    <div className="w-[70%] mt-4 mx-auto font-mono">
      <SearchBar handleSearch={handleSearch} />
      <AdminData
        adminData={pageData}
        filteredData={searchFilterData}
        handleChange={handleChange}
      />
      <Pagination
        pagesLength={pagesLength}
        handlePageChange={handlePageChange}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
