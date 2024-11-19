import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthRole } from "../../contexts/AuthRoleContext";
import editIcon from "../../assets/edit.svg";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuthRole();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-slate-200 text-gray-800 z-40 transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 w-64`}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-gray-300 flex items-center justify-center">
          <h1 className="text-lg font-bold">Dashboard</h1>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-4">
            <li>
              <Link
                to="/dashboard/users"
                className="block py-2 px-4 rounded-lg hover:bg-gray-200"
              >
                Users
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/cars"
                className="block py-2 px-4 rounded-lg hover:bg-gray-200"
              >
                Cars
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/create-car"
                className="block py-2 px-4 rounded-lg hover:bg-gray-200"
              >
                Create Car
              </Link>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-300">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={user?.fotoProfil || "/default-profile.png"}
              alt={`${user?.firstName} ${user?.lastName}`}
              className="w-12 h-12 rounded-full object-cover border border-gray-400"
            />
            <div className="flex space-between gap-5">
              <p className="text-gray-800 font-semibold">
                {user?.firstName} {user?.lastName}
              </p>
              <Link to={`/dashboard/update-user/${user?.id}`}>
                <img src={editIcon} alt="Edit Profile" srcSet={editIcon} />
              </Link>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full py-2 px-4 bg-red-500 rounded-lg text-white hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
