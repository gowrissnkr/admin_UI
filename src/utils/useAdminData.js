import { useEffect, useState } from "react";
import { FETCH_ADMIN_DATA_URL } from "../Constant/fetchUrl";

export const useAdminData = () => {
  const [adminData, setAdminData] = useState([]);
  const [searchFilterData, setSearchFilterData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchAdminData = async () => {
    const response = await fetch(FETCH_ADMIN_DATA_URL);
    const data = await response.json();
    setAdminData(data);
  };

  const pageItems = currentPage * itemsPerPage;
  const itemPerPage = pageItems - itemsPerPage;
  const pageData = adminData.slice(itemPerPage, pageItems);
  const pagesLength = Math.round(adminData.length / itemsPerPage);

  const handleChange = () => {};

  const handlePageChange = (value) => {
    console.log(value);
  };

  const handleSearch = (event) => {
    const { value } = event.target;
    const filterData = adminData.filter(
      (data) =>
        data.name.includes(value) ||
        data.email.includes(value) ||
        data.role.includes(value)
    );
    const filteredData = filterData.slice(itemPerPage, pageItems);
    filterData.length > 0
      ? setSearchFilterData(filteredData)
      : setSearchFilterData(null);
  };
  useEffect(() => {
    fetchAdminData();
  }, []);
  return {
    pageData,
    handleChange,
    handlePageChange,
    handleSearch,
    pagesLength,
    setCurrentPage,
    currentPage,
    searchFilterData,
  };
};
