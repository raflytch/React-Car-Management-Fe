import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("/api/v1/users");
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
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul className="space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex items-center gap-4 p-4 bg-gray-100 rounded-md shadow-sm hover:shadow-lg transition-shadow duration-200"
          >
            <img
              src={user.fotoProfil}
              alt={`${user.firstName} ${user.lastName}`}
              className="w-16 h-16 rounded-full object-cover border"
            />
            <div>
              <p className="text-lg font-semibold">{`${user.firstName} ${user.lastName}`}</p>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-500 capitalize">
                Role: {user.role}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
