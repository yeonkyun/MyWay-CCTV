import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { signIn } from "../auth";
import LoginForm from "./LoginForm";
import LogoutButton from "./LogoutButton";
import styles from "./Login.module.css";
// import Home from "./Home";

function Login() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;
  const navigate = useNavigate();

  const login = ({ email, password }) => {
    setUser(signIn({ email, password }));
    navigate("/"); // 로그인 후 홈페이지로 리디렉션
  };
  const logout = () => setUser(null);

  return (
    <div>
      <header className={styles.header}>
        <Link to="/home" className={styles.Z3r0F1agLink}>
          Z3r0F1ag
        </Link>
        {authenticated ? (
          <LogoutButton logout={logout} />
        ) : (
          <>
            <Link to="/login" className={styles.LoginLink}>
              Login
            </Link>
            <Link to="/signup" className={styles.SignupLink}>
              Sign up
            </Link>
          </>
        )}
      </header>
      <hr />
      <main className={styles.main}>
        <Routes>
          {/* <Route path="/home" element={<Home home={home} />} /> */}
          <Route path="/login" element={<LoginForm login={login} />} />
        </Routes>
      </main>
    </div>
  );
}

export default Login;
