import React from "react";
import { useNavigate } from "react-router-dom";

function LogoutButton({ logout }) {
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate("/");
  };

  return <button onClick={handleClick}>Logout</button>;
}

export default LogoutButton;
