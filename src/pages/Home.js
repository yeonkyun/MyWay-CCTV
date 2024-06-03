import React, { useState } from "react";
import styles from "../Styles/Home.module.css"; // 대소문자를 맞춰서 경로 수정
import Cctv from "../components/Cctv.js";
import Kakao from "../components/Kakao.js";

function Home() {
  const [showCctv, setShowCctv] = useState(false); // 초기값을 false로 설정
  const [cctvCount, setCctvCount] = useState(5); // 초기 CCTV 개수를 설정

  const toggleCctvVisibility = () => {
    setShowCctv(!showCctv);
  };

  return (
    <div className={styles.container}>
      <div className={styles.map_wrap}>
        <Kakao />
      </div>
      <button onClick={toggleCctvVisibility} className={styles.toggleButton}>
        {showCctv ? "Hide CCTV" : "Show CCTV"}
      </button>
      {showCctv && (
        <div className={styles.cctvContainer}>
          {cctvCount > 0 && (
            <div className={cctvCount > 1 ? styles.cctvGrid : styles.largeCctv}>
              {Array.from({ length: cctvCount }).map((_, index) => (
                <Cctv key={index} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;