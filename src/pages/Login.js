import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { signIn } from "../user";
import LoginForm from "./LoginForm";
import LogoutButton from "./LogoutButton";
import styles from "../Styles/Login.module.css";
import SignUp from "./SignUp";
import SearchId from "./SearchId";
import Home from "./Home";
import Notice from "./Notice";
import Layout from "./Layout";
import SearchPw from "./SearchPw";

function Login() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ email, password }) => {
    setUser(signIn({ email, password }));
    // 로그인 후 홈페이지로 리디렉션
  };
  const logout = () => setUser(null);

  return (
    <div className={styles.div}>
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="회원가입" element={<SignUp />} />
            <Route path="login" element={<LoginForm login={login} />} />
            <Route path="아이디찾기" element={<SearchId />} />
            <Route path="공지사항" element={<Notice />} />
            <Route path="비밀번호찾기" element={<SearchPw />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default Login;
