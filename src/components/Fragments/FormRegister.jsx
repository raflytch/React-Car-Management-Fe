import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Buttons/Button";
import InputForm from "../Elements/Input/InputForm";
import { useNavigate } from "react-router-dom";
import { Register } from "../../services/auth.service";
const FormRegister = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const nameRef = useRef(null);

  const handleRegister = async (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !phoneNumber || !email || !password) {
      setErrorMessage("All fields are required");
      return;
    }

    const data = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      phoneNumber: phoneNumber.trim(),
      email: email.trim(),
      password: password,
    };

    Register(data, (status, response) => {
      if (status === "Success") {
        console.log("Login successful:", response);
        navigate("/login");
      } else {
        navigate("/register");
        setErrorMessage(response);
      }
    });
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <>
      <div>
        <form onSubmit={handleRegister}>
          <InputForm
            label="First Name"
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            ref={nameRef}
          />
          <InputForm
            label="Last Name"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
          />
          <InputForm
            label="Phone Number"
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number"
          />
          <InputForm
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
          <InputForm
            label="Password"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
          <Button type="submit" color="red">
            Login
          </Button>
        </form>
      </div>
    </>
  );
};

export default FormRegister;
