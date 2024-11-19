import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthRole } from "../../contexts/AuthRoleContext";
import Button from "../Elements/Buttons/Button";

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuthRole();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateToLogin = () => navigate("/login");

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-red-600 font-bold text-lg">
            MyBrand
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link
              to="/"
              className="text-gray-500 transition hover:text-gray-700"
            >
              Why Us
            </Link>
            <Link
              to="/"
              className="text-gray-500 transition hover:text-gray-700"
            >
              Services
            </Link>
            <Link
              to="/"
              className="text-gray-500 transition hover:text-gray-700"
            >
              Projects
            </Link>
            <Link
              to="/car"
              className="text-gray-500 transition hover:text-gray-700"
            >
              Products
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="hidden sm:block text-gray-800 font-semibold text-sm">
                  Hello,
                  <span className="hover:underline">
                    <Link to={`/update-user/${user.id}`}>{user.firstName}</Link>
                  </span>
                </span>
                <Button color="red" onAction={logout} width="auto">
                  Logout
                </Button>
              </>
            ) : (
              <Button color="gray" width="auto" onAction={navigateToLogin}>
                Login
              </Button>
            )}
          </div>

          <button
            onClick={toggleMenu}
            className="block md:hidden rounded bg-gray-100 p-2 text-gray-600 hover:text-gray-700 z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`absolute top-16 left-0 w-full bg-white shadow-lg md:hidden transition-transform duration-300 ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-start space-y-2 p-4">
          <Link
            to="/"
            className="block text-gray-700 hover:text-gray-900 w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            Why Us
          </Link>
          <Link
            to="/"
            className="block text-gray-700 hover:text-gray-900 w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/"
            className="block text-gray-700 hover:text-gray-900 w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/car"
            className="block text-gray-700 hover:text-gray-900 w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            Product
          </Link>
        </nav>

        {isAuthenticated && (
          <div className="p-4">
            <Button color="red" onAction={logout} width="full">
              Logout
            </Button>
          </div>
        )}
        {!isAuthenticated && (
          <div className="p-4">
            <Button color="gray" onAction={navigateToLogin} width="full">
              Login
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
