import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import { signIn } from "../Auth";
import LoginForm from "./LoginForm";
import LogoutButton from "./LogoutButton";

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
    <Router>
      <header>
        {authenticated ? (
          <LogoutButton logout={logout} />
        ) : (
          <Link to="/login">Login</Link>
        )}
      </header>
      <hr />
      <main>
        <Routes>
          <Route path="/login" element={<LoginForm login={login} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default Login;
