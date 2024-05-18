import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { Link } from "react-router-dom";
// import SignUp from "./SignUp";

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
      <div className={styles.underbar}>
        <Link to="/아이디찾기" className={styles.IDfind}>
          아이디 찾기
        </Link>
        <h4>|</h4>
        <Link to="/비밀번호찾기" className={styles.PWfind}>
          비밀번호 찾기
        </Link>
        <h4>|</h4>
        <Link to="/회원가입" className={styles.signup}>
          회원가입
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
