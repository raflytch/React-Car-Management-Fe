import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import Loading from "../../components/Elements/Loading/Loading";
import Swal from "sweetalert2";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/users");
        console.log(response);
        if (response.data.isSuccess) {
          setUsers(response.data.data.users);
        } else {
          Swal.fire({
            title: "Error",
            text: "Failed to fetch users",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      } catch (err) {
        console.error("Error fetching users:", err);
        Swal.fire({
          title: "Error",
          text: err.response?.data?.message || "An error occurred",
          icon: "error",
          confirmButtonText: "Ok",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-4 bg-white rounded-lg">
      <div className="bg-white p-4 rounded-lg">
        {loading && <Loading />}
        {!loading && (
          <>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">User List</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {users.length === 0 && (
                <p className="col-span-full text-gray-500 text-center">
                  No users found.
                </p>
              )}
              {users.map((user) => (
                <li
                  key={user.id}
                  className="flex flex-col items-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition duration-200"
                >
                  <img
                    src={user.fotoProfil}
                    alt={`${user.firstName} ${user.lastName}`}
                    className="w-20 h-20 rounded-full object-cover mb-3 border border-gray-300"
                  />
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-700">
                      {`${user.firstName} ${user.lastName}`}
                    </p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                    <p className="text-sm text-gray-400 capitalize mt-1">
                      Role: {user.role}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default UserList;
