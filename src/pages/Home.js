import styles from "../Styles/Home.module.css";
import Cctv from "../components/Cctv.js";
import Smallcctv from "../components/Smallcctv.js";
import Kakao from "../components/Kakao.js";
import Btn_menu from "../components/sidebar/Btn_menu.js";

function Home() {
  return (
    <div className={styles.mainContainer}>
      <header className={styles.menubar}>
        <h1 className={styles.logo_box}>
          <a href="http://localhost:3000/">
            <img
              className={styles.home_icon}
              src="image\baseline_home_black_24dp.jpg"
              alt="logo"
            />
          </a>
        </h1>
        <ul className={styles.list_navbar}>
          <Btn_menu
            img_src={"image/baseline_search_black_24dp.jpg"}
            alt_text="search"
          />
          <Btn_menu
            img_src={"image/baseline_star_black_24dp.jpg"}
            alt_text="star"
          />
          <Btn_menu
            img_src={"image/baseline_more_horiz_black_24dp.jpg"}
            alt_text="더보기"
          />
        </ul>
      </header>
      <div className={styles.container}>
        <div className={styles.map_wrap}>
          <Kakao />
        </div>
        <div className={styles.cctvzone}>
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
        </div>
      </div>
    </div>
  );
}

export default Home;
