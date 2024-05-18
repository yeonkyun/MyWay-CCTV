import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom"; // useNavigate 삭제
import { signIn } from "../auth";
import LoginForm from "./LoginForm";
import LogoutButton from "./LogoutButton";
import styles from "./Login.module.css";
import SignUp from "./SignUp"; // SignUp 컴포넌트 import
import SurchId from "./SurchId";

function Login() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ email, password }) => {
    setUser(signIn({ email, password }));
    // 로그인 후 홈페이지로 리디렉션
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
          </>
        )}
      </header>
      <hr />
      <main className={styles.main}>
        <Routes>
          <Route path="/회원가입" element={<SignUp SignUp={SignUp} />} />
          <Route path="/login" element={<LoginForm login={login} />} />
          <Route path="아이디찾기" element={<SurchId SurchId={SurchId} />} />
          {/* <Route path="비밀번호찾기" element={<SurchPw SurchPw={SurchPw} />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default Login;
