import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "../Styles/Layout.module.css"; // layout 스타일 가져오기
import Btn_menu from "./Btn_menu"; // Btn_menu 경로가 올바른지 확인
import CCTV from "../components/Cctv"; // CCTV 컴포넌트 가져오기

const Layout = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [showCCTV, setShowCCTV] = useState(false);
  const [showBookmark, setShowBookmark] = useState(false);

  const toggleSearch = () => {
    setShowSearch((prev) => {
      if (!prev) {
        setShowBookmark(false);
        setShowCCTV(false);
      }
      return !prev;
    });
  };

  const toggleBookmark = () => {
    setShowBookmark((prev) => {
      if (!prev) {
        setShowSearch(false);
        setShowCCTV(false);
      }
      return !prev;
    });
  };

  const toggleCCTV = () => {
    setShowCCTV((prev) => {
      if (!prev) {
        setShowSearch(false);
        setShowBookmark(false);
      }
      return !prev;
    });
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleSearch = () => {
    console.log("Start:", startLocation);
    console.log("End:", endLocation);
  };

  const handleLoginClick = () => {
    setShowSearch(false);
    setShowBookmark(false);
    setShowCCTV(false);
  };

  const handleNoticeClick = () => {
    setShowSearch(false);
    setShowBookmark(false);
    setShowCCTV(false);
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
              style={{ width: "48px", height: "48px" }} // 이미지 크기 조정
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
                setActiveButton("search");
              }}
            />
          </li>
          <li className={activeButton === "star" ? styles.btn_menu_active : ""}>
            <Btn_menu
              img_src={"image/baseline_star_black_24dp.jpg"}
              alt_text="star"
              onClick={() => {
                toggleBookmark();
                setActiveButton("star");
              }}
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
              onClick={() => {
                handleButtonClick("login");
                handleLoginClick();
              }}
              style={{ textDecoration: "none" }} // 텍스트 밑줄 제거
            >
              <Btn_menu img_src={"image/user.png"} alt_text="로그인" />
            </Link>
          </li>
          <li className={activeButton === "more" ? styles.btn_menu_active : ""}>
            <Link
              to="/공지사항"
              className={styles.add_icon}
              onClick={() => {
                handleButtonClick("more");
                handleNoticeClick();
              }}
              style={{ textDecoration: "none" }} // 텍스트 밑줄 제거
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
            placeholder="출발지"
            value={startLocation}
            onChange={(e) => setStartLocation(e.target.value)}
            className={styles.searchInput}
          />
          <input
            type="text"
            placeholder="도착지"
            value={endLocation}
            onChange={(e) => setEndLocation(e.target.value)}
            className={styles.searchInput}
          />
          <button onClick={handleSearch} className={styles.searchButton}>
            Search
          </button>
          <div onClick={toggleSearch} className={styles.closeButton}>
            <img
              src="image/x.png"
              alt="닫기"
              style={{ width: "24px", height: "24px" }}
            />{" "}
            {/* 이미지 크기 조정 */}
          </div>
        </div>
      )}
      {showBookmark && (
        <div className={styles.bookmarkContainer}>
          <h2>북마크된 항목</h2>
          {/* 북마크된 항목 리스트를 추가하세요 */}
          <div onClick={toggleBookmark} className={styles.closeButton}>
            <img
              src="image/x.png"
              alt="닫기"
              style={{ width: "24px", height: "24px" }}
            />{" "}
            {/* 이미지 크기 조정 */}
          </div>
        </div>
      )}
      {showCCTV && <CCTV />}
      <Outlet /> {/* This is where the nested routes will render */}
    </div>
  );
};

export default Layout;
