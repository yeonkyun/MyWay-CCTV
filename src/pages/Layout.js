import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "../Styles/Layout.module.css"; // layout 스타일 가져오기
import Btn_menu from "./Btn_menu"; // Btn_menu 경로가 올바른지 확인

const Layout = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleSearch = () => {
    console.log("Start:", startLocation);
    console.log("End:", endLocation);
    // 검색 로직 추가
  };

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
          <li
            className={activeButton === "search" ? styles.btn_menu_active : ""}
          >
            <Btn_menu
              img_src={"image/baseline_search_black_24dp.jpg"}
              alt_text="search"
              onClick={() => {
                toggleSearch();
                handleButtonClick("search");
              }}
            />
          </li>
          <li className={activeButton === "star" ? styles.btn_menu_active : ""}>
            <Btn_menu
              img_src={"image/baseline_star_black_24dp.jpg"}
              alt_text="star"
              onClick={() => handleButtonClick("star")}
            />
          </li>
          <li
            className={`${styles.li_login} ${
              activeButton === "login" ? styles.btn_menu_active : ""
            }`}
          >
            <Link
              to="/login"
              className={styles.login}
              onClick={() => handleButtonClick("login")}
            >
              <Btn_menu img_src={"image/user.png"} alt_text="로그인" />
            </Link>
          </li>
          <li className={activeButton === "more" ? styles.btn_menu_active : ""}>
            <Link
              to="/공지사항"
              className={styles.add_icon}
              onClick={() => handleButtonClick("more")}
            >
              <Btn_menu
                img_src={"image/baseline_more_horiz_black_24dp.jpg"}
                alt_text="더보기"
              />
            </Link>
          </li>
        </ul>
      </header>
      {showSearch && (
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Start location"
            value={startLocation}
            onChange={(e) => setStartLocation(e.target.value)}
            className={styles.searchInput}
          />
          <input
            type="text"
            placeholder="End location"
            value={endLocation}
            onChange={(e) => setEndLocation(e.target.value)}
            className={styles.searchInput}
          />
          <button onClick={handleSearch} className={styles.searchButton}>
            Search
          </button>
          <div onClick={toggleSearch} className={styles.closeButton}></div>
        </div>
      )}
      <Outlet /> {/* This is where the nested routes will render */}
    </div>
  );
};

export default Layout;
