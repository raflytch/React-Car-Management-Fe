import React from "react";
import useProtected from "../../hooks/useProtected";

const Dashboard = () => {
  useProtected();
  return (
    <div>
      <h1 className="text-3xl font-bold">Hello From Dashboard</h1>
    </div>
  );
};

export default Dashboard;
