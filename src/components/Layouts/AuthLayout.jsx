import { Link } from "react-router-dom";

const AuthLayout = ({ children, title, type }) => {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-md text-center text-slate-600 ">
            Hello, welcome back. please enter your details
          </p>
          {children}
          {type === "login" && (
            <p className="text-center text-slate-600">
              Don't have an account?{" "}
              <Link to="/register" className="text-indigo-600 hover:underline">
                Sign Up
              </Link>
            </p>
          )}
          {type === "register" && (
            <p className="text-center text-slate-600">
              Already have an account?{" "}
              <Link to="/login" className="text-indigo-600 hover:underline">
                Sign In
              </Link>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
