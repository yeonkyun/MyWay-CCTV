import React, { useState } from "react";
import styles from "../Styles/Home.module.css";
import Cctv from "../components/Cctv.js";
import Smallcctv from "../components/Smallcctv.js"; // 사용되지 않음
import Kakao from "../components/Kakao.js";

function Home() {
  const [showCctv, setShowCctv] = useState(false); // 초기값을 false로 설정
  const [cctvCount, setCctvCount] = useState(0); // CCTV 개수를 저장하는 상태 변수

  const toggleCctvVisibility = () => {
    setShowCctv(!showCctv);
  };

  const addCctv = () => {
    setCctvCount(cctvCount + 1);
  };

  console.log("Show CCTV:", showCctv);
  console.log("CCTV Count:", cctvCount);

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
            <div
              className={cctvCount === 1 ? styles.largeCctv : styles.cctvGrid}
            >
              {[...Array(cctvCount)].map((_, index) => (
                <Cctv key={index} />
              ))}
            </div>
          )}
          <button onClick={addCctv} className={styles.addButton}>
            Add CCTV
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
