import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ProtectedRoute from "../../components/ProtectedRoute";
import Sidebar from "../../components/Fragments/Sidebar";
import useProtectedAll from "../../hooks/useProtectedAll";

const Dashboard = () => {
  useProtectedAll(["admin", "superadmin"]);
  const location = useLocation();
  const isDashboardRoute = location.pathname === "/dashboard";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <main className="flex-1 ml-0 lg:ml-64 p-6 bg-gray-100 min-h-screen transition-all">
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {isDashboardRoute && (
          <div>
            <h1 className="text-3xl font-bold mb-6">Hello From Dashboard</h1>
            <p>Select an option from the sidebar to get started.</p>
          </div>
        )}
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
