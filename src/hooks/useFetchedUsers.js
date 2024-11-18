import { useEffect, useState } from "react";
import { fetchUsers } from "../services/users.service";
import Swal from "sweetalert2";

const useFetchedUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalData: 0,
  });

  const getUsers = async (page = 1) => {
    try {
      setLoading(true);
      const response = await fetchUsers(page);

      if (response.success && response.data) {
        setUsers(response.data.users || []);
        setPagination({
          currentPage: parseInt(response.data.page),
          totalPages: parseInt(response.data.totalPages),
          totalData: parseInt(response.data.totalData),
        });
      } else {
        Swal.fire({
          title: "Error",
          text: response.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message || "Failed to fetch users",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers(1);
  }, []);

  return { users, loading, pagination, getUsers };
};

export default useFetchedUsers;
