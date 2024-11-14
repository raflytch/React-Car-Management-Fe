import { useEffect, useRef } from "react";
import Button from "../Elements/Buttons/Button";
import InputForm from "../Elements/Input/InputForm";

const FormRegister = () => {
  const nameRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <>
      <div>
        <form>
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
          <Button type="submit">Login</Button>
        </form>
      </div>
    </>
  );
};

export default FormRegister;
