import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/Users/HomePage";
import Dashboard from "./pages/Superadmin/Dashboard";
import { AuthRoleProvider } from "./contexts/AuthRoleContext";
import UpdateCar from "./pages/Superadmin/UpdateCar";
import NotFoundPage from "./pages/NotFoundPage";
import UpdateUserAdmin from "./pages/Superadmin/UpdateUserAdmin";
import UpdateUser from "./pages/Users/UpdateUser";
import UserList from "./pages/Superadmin/Users";
import CarDataFetcher from "./components/Fragments/CarDataFetcher";
import DetailsCar from "./pages/Superadmin/DetailsCar";

function App() {
  return (
    <Router>
      <AuthRoleProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="car" element={<CarDataFetcher />} />
          <Route path="/update-user/:id" element={<UpdateUser />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="cars/:id" element={<DetailsCar />} />
            <Route path="update-car/:id" element={<UpdateCar />} />
            <Route path="update-user/:id" element={<UpdateUserAdmin />} />
            <Route path="users" element={<UserList />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthRoleProvider>
    </Router>
  );
}

export default App;
