import { useEffect, useState } from "react";
import { FETCH_ADMIN_DATA_URL } from "../Constant/fetchUrl";

export const useAdminData = () => {
  const [initialData, setInitialData] = useState([]);
  const [searchFilterData, setSearchFilterData] = useState([]);
  const [selectedCheckbox, setSelectedCheckbox] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const pageItems = currentPage * itemsPerPage;
  const itemPerPage = pageItems - itemsPerPage;
  const pageData =
    searchFilterData.length !== 0
      ? searchFilterData.slice(itemPerPage, pageItems)
      : initialData.slice(itemPerPage, pageItems);
  const pageLength =
    searchFilterData.length !== 0
      ? Math.ceil(searchFilterData.length / itemsPerPage)
      : Math.ceil(initialData.length / itemsPerPage);

  const fetchInitialData = async () => {
    const response = await fetch(FETCH_ADMIN_DATA_URL);
    const data = await response.json();
    setInitialData(data);
  };

  const handleChange = (event) => {};

  const handleSelect = (id) => {
    console.log(id);
    console.log(selectedCheckbox);
    setSelectedCheckbox((prev) => {
      if (prev.includes(id)) {
        return prev.filter((prevIds) => prevIds !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleAllChange = () => {
    const selectAllCheckbox = pageData.map((adminData) => adminData.id);
    setSelectedCheckbox(
      selectedCheckbox.length === selectAllCheckbox.length
        ? []
        : selectAllCheckbox
    );
  };

  const deleteSelected = () => {
    const updatedData = initialData.filter(
      (item) => !selectedCheckbox.includes(item.id)
    );
    setInitialData(updatedData);
    setCurrentPage(1)
    setSelectedCheckbox([]);
  };

  const deleteSingleData = (id) => {
    const updatedData = initialData.filter((item) => item.id !== id);
    setInitialData(updatedData);
  };

  const handleSearch = (event) => {
    const { value } = event.target;
    const filterData = initialData.filter(
      (data) =>
        data.name.includes(value) ||
        data.email.includes(value) ||
        data.role.includes(value)
    );
    setSearchFilterData(filterData);
  };
  useEffect(() => {
    fetchInitialData();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchFilterData]);

  return {
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
  };
};
