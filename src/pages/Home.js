import React from "react";
import styles from "../Styles/Home.module.css";
import Cctv from "../components/Cctv.js";
import Smallcctv from "../components/Smallcctv.js";
import Kakao from "../components/Kakao.js";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.find_way}></div>
      <div className={styles.map_wrap}>
        <Kakao />
      </div>
      {/* <div className={styles.cctvzone}>
        <div className={styles.cctv_container}></div>
        <div className={styles.cctv_list}>
          <Cctv />
          <Cctv />
          <Cctv />
        </div>
        <div className={styles.smallContainer}>
          <Smallcctv />
          <Smallcctv />
          <Smallcctv />
          <Smallcctv />
          <Smallcctv />
          <Smallcctv />
          <Smallcctv />
        </div>
      </div> */}
    </div>
  );
}

export default Home;
