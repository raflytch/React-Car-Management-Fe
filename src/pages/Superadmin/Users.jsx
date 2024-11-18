import React from "react";
import useFetchedUsers from "../../hooks/useFetchedUsers";
import Loading from "../../components/Elements/Loading/Loading";

const UserList = () => {
  const { users, loading, pagination, getUsers } = useFetchedUsers();

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      getUsers(newPage);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg">
      <div className="bg-white p-4 rounded-lg">
        {loading && <Loading />}
        {!loading && (
          <>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">User List</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {users.length === 0 ? (
                <p className="col-span-full text-gray-500 text-center">
                  No users found.
                </p>
              ) : (
                users.map((user) => (
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
                ))
              )}
            </ul>

            {pagination.totalPages > 1 && (
              <>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <button
                    onClick={() => handlePageChange(pagination.currentPage - 1)}
                    disabled={pagination.currentPage === 1}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>

                  <div className="flex items-center gap-1">
                    {[...Array(pagination.totalPages)].map((_, index) => (
                      <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 text-sm font-medium rounded-md ${
                          pagination.currentPage === index + 1
                            ? "bg-blue-600 text-white"
                            : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => handlePageChange(pagination.currentPage + 1)}
                    disabled={pagination.currentPage === pagination.totalPages}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>

                <div className="text-center text-sm text-gray-500 mt-2">
                  Page {pagination.currentPage} of {pagination.totalPages} (
                  {pagination.totalData} total users)
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default UserList;
