import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import InputForm from "../Elements/Input/InputForm";
import Button from "../Elements/Buttons/Button";
import useLogin from "../../hooks/useLogin";
import Loading from "../Elements/Loading/Loading";

const FormLogin = () => {
  const { login, loading } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm();

  const inputRef = useRef(null);

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  const handleLogin = async (data) => {
    const { email, password } = data;
    login(email, password);
  };

  return (
    <div className="flex justify-center items-center px-4 py-6">
      <div className="w-full sm:w-full bg-white p-4 rounded-lg">
        {loading && <Loading />}
        <form onSubmit={handleSubmit(handleLogin)}>
          <InputForm
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="example@gmail.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mb-4">{errors.email.message}</p>
          )}

          <InputForm
            label="Password"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mb-4">
              {errors.password.message}
            </p>
          )}

          <Button type="submit" color="red" width="full">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
