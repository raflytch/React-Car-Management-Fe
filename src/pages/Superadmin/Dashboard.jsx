import React from "react";
import useProtected from "../../hooks/useProtected";
import { Link, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  useProtected();
  const location = useLocation();

  const isDashboardRoute = location.pathname === "/dashboard";
  return (
    <div>
      {isDashboardRoute && (
        <>
          <h1 className="text-3xl font-bold">Hello From Dashboard</h1>
          <Link to={"/dashboard/update-car/1"} className="text-red-600">
            Click Me
          </Link>
        </>
      )}

      <Outlet />
    </div>
  );
};

export default Dashboard;
