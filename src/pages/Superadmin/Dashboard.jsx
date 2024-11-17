import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import ProtectedRoute from "../../components/ProtectedRoute";

const Dashboard = () => {
  const location = useLocation();
  const isDashboardRoute = location.pathname === "/dashboard";

  return (
    <ProtectedRoute>
      <div>
        {isDashboardRoute && (
          <>
            <h1 className="text-3xl font-bold">Hello From Dashboard</h1>
            <nav>
              <Link
                to="/dashboard/update-car/:id"
                className="text-red-600 mr-4"
              >
                Update Car
              </Link>
              <Link to="/dashboard/users" className="text-blue-600">
                Users List
              </Link>
            </nav>
          </>
        )}
        <Outlet />
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
