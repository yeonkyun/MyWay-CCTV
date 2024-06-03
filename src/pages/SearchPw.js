import React, { useState } from "react";
import styles from "../Styles/SearchPw.module.css";

function SearchPw() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 비밀번호 재설정 요청 로직 추가 (예: API 호출)
    // 여기에 실제 비밀번호 재설정 로직을 구현할 수 있습니다.
    setMessage("비밀번호 재설정 링크가 이메일로 전송되었습니다.");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.Z3r0F1ag}>Z3r0F1ag</h1>
      <h1 className={styles.h1pw}>비밀번호 찾기</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="email" className={styles.label}>
          이메일 주소
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>
          비밀번호 재설정
        </button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
}

export default SearchPw;
