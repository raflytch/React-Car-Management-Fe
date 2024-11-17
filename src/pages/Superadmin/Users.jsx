import React, { useEffect, useState } from "react";
import axios from "axios";
import axiosInstance from "../../api/axiosInstance";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axiosInstance.get("/users");
        console.log(response);
        if (response.data.isSuccess) {
          setUsers(response.data.data.users);
        } else {
          setError("Failed to fetch users");
        }
      } catch (err) {
        console.error("Error fetching users:", err);
        setError(err.response?.data?.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error)
    return <p className="text-red-500 text-center font-semibold">{error}</p>;

  if (users.length === 0) {
    return (
      <p className="text-gray-500 text-center font-medium">No users found.</p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">User List</h1>
      <ul className="space-y-6">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex items-center gap-6 p-6 bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          >
            <img
              src={user.fotoProfil}
              alt={`${user.firstName} ${user.lastName}`}
              className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
            />
            <div>
              <p className="text-xl font-semibold text-gray-700">{`${user.firstName} ${user.lastName}`}</p>
              <p className="text-gray-500">{user.email}</p>
              <p className="text-sm text-gray-400 capitalize">
                Role: {user.role}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-12 bg-gray-100 p-8 rounded-xl">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Our Team</h2>
          <p className="text-gray-600 mt-2">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>

        <ul
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {users.map((user) => (
            <li key={user.id} className="text-center">
              <img
                src={user.fotoProfil}
                alt={`${user.firstName} ${user.lastName}`}
                className="w-24 h-24 rounded-full object-cover border-2 border-blue-500 mx-auto"
              />
              <p className="text-lg font-semibold mt-4 text-gray-700">{`${user.firstName} ${user.lastName}`}</p>
              <p className="text-gray-500">{user.email}</p>
              <p className="text-sm text-gray-400 capitalize mt-2">
                Role: {user.role}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
