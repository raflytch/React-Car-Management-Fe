import { useEffect, useRef, useState } from "react";
import InputForm from "../Elements/Input/InputForm";
import Button from "../Elements/Buttons/Button";
import useLogin from "../../hooks/useLogin";
import useProtected from "../../hooks/useProtected";

const FormLogin = () => {
  useProtected();

  const { login, loading, errorMessage } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputRef = useRef(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    login(email, password);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div>
        {loading && <p>Loading...</p>}
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
