import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Buttons/Button";
import InputForm from "../Elements/Input/InputForm";
import { useNavigate } from "react-router-dom";
import useRegister from "../../hooks/useRegister";
import Loading from "../Elements/Loading/Loading";

const FormRegister = () => {
  const navigate = useNavigate();
  const { register, loading } = useRegister();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });

  const nameRef = useRef(null);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevFormDatas) => ({ ...prevFormDatas, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    register(formData);
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center px-4 py-6">
        <div className="w-full sm:w-full bg-white p-4 rounded-lg">
          {loading && <Loading />}
          <form onSubmit={handleSubmit}>
            <InputForm
              label="First Name"
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              ref={nameRef}
              value={formData.firstName}
              onChange={handleChange}
            />
            <InputForm
              label="Last Name"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            <InputForm
              label="Phone Number"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            <InputForm
              label="Email"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputForm
              label="Password"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <Button type="submit" color="red">
              Login
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormRegister;
