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
            <Link to="/dashboard/update-car/1" className="text-red-600">
              Click Me
            </Link>
          </>
        )}
        <Outlet />
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;
