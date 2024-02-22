import { useCallback, useEffect, useState } from "react";
import { FETCH_ADMIN_DATA_URL } from "../Constant/fetchUrl";

export const useAdminData = () => {
  const [adminData, setAdminData] = useState({
    initialData: [],
    searchFilterData: [],
    pageData: [],
    editData: {},
    showModal: false,
    currentPage: 1,
  });
  const [selectedCheckbox, setSelectedCheckbox] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const pageItems = currentPage * itemsPerPage;
  const itemPerPage = pageItems - itemsPerPage;
  const pageLength =
    adminData.searchFilterData !== null
      ? adminData.searchFilterData.length > 0
        ? Math.ceil(adminData.searchFilterData.length / itemsPerPage)
        : Math.ceil(adminData.initialData.length / itemsPerPage)
      : 0;

  const fetchInitialData = useCallback(async () => {
    const response = await fetch(FETCH_ADMIN_DATA_URL);
    const data = await response.json();
    setAdminData((prev) => ({
      ...prev,
      initialData: data,
      pageData: data.slice(itemPerPage, pageItems),
    }));
  }, [itemPerPage,pageItems]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    setAdminData((prev) => ({
      ...prev,
      editData: { ...prev.editData, [name]: value },
    }));
  };

  const updatingData = useCallback(
    (updatedData) => {
      setAdminData((prev) => ({
        ...prev,
        initialData: updatedData,
        searchFilterData: updatedData,
        pageData: updatedData.slice(itemPerPage, pageItems),
      }));
    },
    [itemPerPage, pageItems]
  );

  const handleSaveEditData = (e) => {
    e.preventDefault();
    const updateData = adminData.initialData.map((data) =>
      data.id === adminData.editData.id ? adminData.editData : data
    );
    updatingData(updateData);
    setAdminData((prev) => ({ ...prev, editData: {} }));
  };

  const handleEdit = (id) => {
    console.log(id);
    const [edit] = adminData.initialData.filter((data) => data.id === id);
    setAdminData((prev) => ({ ...prev, editData: edit }));
  };

  const handleSelect = (id) => {
    setSelectedCheckbox((prev) =>
      prev.includes(id)
        ? prev.filter((prevIds) => prevIds !== id)
        : [...prev, id]
    );
  };

  const handleAllChange = () => {
    const selectAllCheckbox = adminData.pageData.map(
      (adminData) => adminData.id
    );
    setSelectedCheckbox((prev) =>
      prev.length === selectAllCheckbox.length ? [] : selectAllCheckbox
    );
  };

  const deleteSelected = () => {
    const updatedData = adminData.initialData.filter(
      (item) => !selectedCheckbox.includes(item.id)
    );
    updatingData(updatedData);
    setCurrentPage(1);
    setSelectedCheckbox([]);
  };

  const deleteSingleData = (id) => {
    const updatedData = adminData.initialData.filter((item) => item.id !== id);
    updatingData(updatedData);
  };

  const handleSearch = (event) => {
    const { value } = event.target;
    const filterData = adminData.initialData.filter(
      (data) =>
        data.name.includes(value) ||
        data.email.includes(value) ||
        data.role.includes(value)
    );
    setAdminData((prev) => ({
      ...prev,
      searchFilterData: filterData.length > 0 ? filterData : null,
      pageData: filterData.slice(itemPerPage, pageItems),
    }));
  };
  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  useEffect(() => {
    setCurrentPage(1);
  }, [adminData.searchFilterData]);

  useEffect(() => {
    const data =
      adminData.searchFilterData === null
        ? null
        : adminData.searchFilterData.length > 0
        ? adminData.searchFilterData.slice(itemPerPage, pageItems)
        : adminData.initialData.slice(itemPerPage, pageItems);
    setAdminData((prev) => ({ ...prev, pageData: data }));
  }, [
    adminData.searchFilterData,
    itemPerPage,
    pageItems,
    adminData.initialData,
    selectedCheckbox,
  ]);

  return {
    handleChange,
    handleSearch,
    pageData: adminData.pageData,
    pageLength,
    currentPage,
    setCurrentPage,
    handleAllChange,
    selectedCheckbox,
    handleSelect,
    deleteSelected,
    deleteSingleData,
    handleEdit,
    showModal: adminData.showModal,
    setShowModal: (showValue) =>
      setAdminData((prev) => ({ ...prev, showModal: showValue })),
    editData: adminData.editData,
    handleSaveEditData,
  };
};
