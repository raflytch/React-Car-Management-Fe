import { useEffect, useRef, useState } from "react";
import InputForm from "../Elements/Input/InputForm";
import Button from "../Elements/Buttons/Button";
import useLogin from "../../hooks/useLogin";
import useProtected from "../../hooks/useProtected";
import Loading from "../Elements/Loading/Loading";

const FormLogin = () => {
  useProtected();

  const { login, loading } = useLogin();
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
      <div className="flex justify-center items-center px-4 py-6">
        <div className="w-full sm:w-96 bg-white p-6 rounded-lg shadow-md">
          {loading && <Loading />}
          <form onSubmit={handleLogin}>
            <InputForm
              label="Email"
              type="email"
              id="email"
              name="email"
              placeholder="example@gmail.com"
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
            <Button type="submit">Login</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormLogin;
