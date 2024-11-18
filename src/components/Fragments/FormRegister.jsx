import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import InputForm from "../Elements/Input/InputForm";
import Button from "../Elements/Buttons/Button";
import useRegister from "../../hooks/useRegister";
import Loading from "../Elements/Loading/Loading";

const FormRegister = () => {
  const { register, loading } = useRegister();
  const {
    register: registerForm,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm();

  const nameRef = useRef(null);

  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);

  const handleRegister = async (data) => {
    register(data);
  };

  return (
    <div className="flex justify-center items-center px-4 py-6">
      <div className="w-full sm:w-full bg-white p-4 rounded-lg">
        {loading && <Loading />}
        <form onSubmit={handleSubmit(handleRegister)}>
          <InputForm
            label="First Name"
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            ref={nameRef}
            {...registerForm("firstName", {
              required: "First name is required",
            })}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mb-4">
              {errors.firstName.message}
            </p>
          )}

          <InputForm
            label="Last Name"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            {...registerForm("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm  mb-4">
              {errors.lastName.message}
            </p>
          )}

          <InputForm
            label="Phone Number"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            {...registerForm("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]+$/,
                message: "Phone number must contain only numbers",
              },
            })}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mb-4">{errors.phone.message}</p>
          )}

          <InputForm
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            {...registerForm("email", {
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
            {...registerForm("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mb-4">
              {errors.password.message}
            </p>
          )}

          <Button type="submit" color="red">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FormRegister;
