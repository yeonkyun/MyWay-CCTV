import React from "react";
import { Outlet } from "react-router-dom";
import styles from "../Styles/Home.module.css"; // 필요한 스타일 가져오기
import Btn_menu from "./Btn_menu"; // Btn_menu 경로가 올바른지 확인
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className={styles.mainContainer}>
      <header className={styles.menubar}>
        <h1 className={styles.logo_box}>
          <a href="/">
            <img
              className={styles.home_icon}
              src="image/baseline_home_black_24dp.jpg"
              alt="logo"
            />
          </a>
        </h1>
        <ul className={styles.list_navbar}>
          <li>
            <Btn_menu
              img_src={"image/baseline_search_black_24dp.jpg"}
              alt_text="search"
            />
          </li>
          <li>
            <Btn_menu
              img_src={"image/baseline_star_black_24dp.jpg"}
              alt_text="star"
            />
          </li>
          <li className={styles.li_login}>
            <Link to="/login" className={styles.login}>
              <Btn_menu img_src={"image/user.png"} alt_text="로그인" />
            </Link>
          </li>
          <li>
            <Link to="/공지사항" className={styles.add_icon}>
              <Btn_menu
                img_src={"image/baseline_more_horiz_black_24dp.jpg"}
                alt_text="더보기"
              />
            </Link>
          </li>
        </ul>
      </header>
      <Outlet /> {/* This is where the nested routes will render */}
    </div>
  );
};

export default Layout;
