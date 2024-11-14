import React, { useEffect, useRef, useState } from "react";
import InputForm from "../Elements/Input/InputForm";
import Button from "../Elements/Buttons/Button";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Login } from "../../services/auth.service";

const FormLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const inputRef = useRef(null);

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setErrorMessage("Email and password are required");
      return;
    }

    const data = {
      email: email.trim(),
      password: password,
    };

    setLoading(true);
    setErrorMessage("");

    Login(data, (status, response) => {
      setLoading(false);

      if (status === "Success") {
        console.log("Login successful:", response);
        Cookies.set("token", response);
        navigate("/");
      } else {
        navigate("/login");
        setErrorMessage(response);
      }
    });
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div>
        <form onSubmit={handleLogin}>
          <InputForm
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="wahyuimut@gmail.com"
            ref={inputRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputForm
            label="Password"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <Button type="submit">Login</Button>
        </form>
      </div>
    </>
  );
};

export default FormLogin;
