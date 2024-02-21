import { useEffect, useState } from "react";
import { FETCH_ADMIN_DATA_URL } from "../Constant/fetchUrl";

export const useAdminData = () => {
  const [initialData, setInitialData] = useState([]);
  const [searchFilterData, setSearchFilterData] = useState([]);
  const [selectedCheckbox, setSelectedCheckbox] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [editData, setEditData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const pageItems = currentPage * itemsPerPage;
  const itemPerPage = pageItems - itemsPerPage;
  const pageLength =
    searchFilterData.length !== 0
      ? Math.ceil(searchFilterData.length / itemsPerPage)
      : Math.ceil(initialData.length / itemsPerPage);

  const fetchInitialData = async () => {
    const response = await fetch(FETCH_ADMIN_DATA_URL);
    const data = await response.json();
    setInitialData(data);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveEditData = (e) => {
    e.preventDefault();
    console.log(editData);

    const updatingData = (data, setData) => {
      const updatedData = data.map((data) =>
        data.id === editData.id ? editData : data
      );
      setData(updatedData);
    };

    updatingData(initialData, setInitialData);

    if (searchFilterData.length > 0) {
      updatingData(searchFilterData, setSearchFilterData);
    }
    if (pageData.length > 0) {
      updatingData(pageData, setPageData);
    }
    setShowModal(false);
    setEditData({});
  };

  const handleEdit = (id) => {
    setShowModal(true);
    console.log(id);
    const edit = initialData.filter((data) => data.id === id);
    setEditData(...edit);
  };

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
    setPageData(updatedData.slice(itemPerPage, pageItems));
    setCurrentPage(1);
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

  useEffect(() => {
    const data =
      searchFilterData.length !== 0
        ? searchFilterData.slice(itemPerPage, pageItems)
        : initialData.slice(itemPerPage, pageItems);
    setPageData(data);
  }, [searchFilterData, itemPerPage, pageItems, initialData, selectedCheckbox]);

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
    handleEdit,
    showModal,
    setShowModal,
    editData,
    handleSaveEditData,
  };
};
