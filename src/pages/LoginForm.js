import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./LoginForm.module.css";

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
    <div className={styles.div}>
      <h1 className={styles.Z3r0F1ag}>Z3r0F1ag</h1>
      <input
        className={styles.email}
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
        type="text"
        placeholder="email"
      />
      <input
        className={styles.password}
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        type="password"
        placeholder="password"
      />
      <button onClick={handleClick} className={styles.Loginbtn}>
        Login
      </button>
    </div>
  );
}

export default LoginForm;
