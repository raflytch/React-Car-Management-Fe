import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/Users/HomePage";
import Dashboard from "./pages/Superadmin/Dashboard";
import { AuthRoleProvider } from "./contexts/AuthRoleContext";
import UpdateCar from "./pages/Superadmin/UpdateCar";
import NotFoundPage from "./pages/NotFoundPage";
import UserList from "./pages/Superadmin/Users";

function App() {
  return (
    <Router>
      <AuthRoleProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="update-car/:id" element={<UpdateCar />} />
            <Route path="users" element={<UserList />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthRoleProvider>
    </Router>
  );
}

export default App;
