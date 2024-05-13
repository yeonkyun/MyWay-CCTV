import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function LoginForm({ authenticated, login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    try {
      login({ email, password });
    } catch (e) {
      alert("Failed to login");
      setEmail("");
      setPassword("");
    }
  };

  const { from } = location.state || { from: { pathname: "/" } };
  if (authenticated) return navigate(from);

  return (
    <>
      <h1>Login</h1>
      <input
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
        type="text"
        placeholder="email"
      />
      <input
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        type="password"
        placeholder="password"
      />
      <button onClick={handleClick}>Login</button>
    </>
  );
}

export default LoginForm;
