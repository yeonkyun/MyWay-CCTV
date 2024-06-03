import styles from "../Styles/SearchId.module.css";
import React, { useState } from "react";

function SurchId() {
  const [form, setForm] = useState({
    email: "",
  });
  const [userId, setUserId] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/searchId", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: form.email }),
      });
      const data = await response.json();
      setUserId(data.userId); // 서버에서 전달받은 사용자 ID를 설정
    } catch (error) {
      console.error("Error fetching user ID:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.Z3r0F1ag}>Z3r0F1ag</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className={styles.emailbox}>Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={styles.searchid}>
          Search ID
        </button>
      </form>
      {userId && (
        <div className={styles.result}>
          <h2>Found User ID:</h2>
          <p>{userId}</p>
        </div>
      )}
    </div>
  );
}

export default SurchId;