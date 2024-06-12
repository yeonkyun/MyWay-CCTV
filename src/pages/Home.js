import React, { useState } from "react";
import styles from "../Styles/Home.module.css";
import Cctv from "../components/Cctv.js";
import Kakao from "../components/Kakao.js";

function Home() {
  const [showCctv, setShowCctv] = useState(false);
  const [cctvCount, setCctvCount] = useState(9);

  const toggleCctvVisibility = () => {
    setShowCctv(!showCctv);
  };

  // 이미지 경로 배열
  const imagePaths = [
    "image/1.공단 삼거리.png",
    "image/2.개목삼거리.png",
    "image/3.고속철입구.png",
    "image/4.고속도로 입구 삼거리.png",
    "image/5.교보삼거리.png",
    "image/6.구 동방주유소 앞.png",
    "image/7.구상골 사거리.png",
    "image/8. 구정사거리.png",
    "image/9. 국지도 23호선.png",
  ];

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
          <div className={styles.cctvGrid}>
            {Array.from({ length: cctvCount }).map((_, index) => (
              <img
                key={index}
                className={styles.tempImage}
                src={imagePaths[index % imagePaths.length]} // 이미지 경로 설정
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
