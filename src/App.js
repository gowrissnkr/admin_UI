import AdminData from "./Component/AdminData";
import SearchBar from "./Component/SearchBar";
import Pagination from "./Component/Pagination";
import { useAdminData } from "./utils/useAdminData";
import Modal from "./Component/Modal";

function App() {
  const {
    adminPageDataComponentProps,
    paginationComponentProps,
    modalComponentProps,
    handleSearch,
    showModal,
  } = useAdminData();

  const containerOpacity = showModal ? "opacity-[0.5]" : "opacity-100";

  return (
    <div className="w-[70%] mt-4 mx-auto font-mono relative">
      <div className={containerOpacity}>
        <SearchBar handleSearch={handleSearch} />
        <AdminData {...adminPageDataComponentProps} />
        <Pagination {...paginationComponentProps} />
      </div>
      {showModal && <Modal {...modalComponentProps} />}
    </div>
  );
}

export default App;
