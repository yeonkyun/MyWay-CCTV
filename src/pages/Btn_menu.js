import React from "react";
import styles from "../Styles/Btn_menu.module.css";

const Btn_menu = ({ img_src, alt_text, text, onClick }) => {
  return (
    <button className={styles.btn_menu} onClick={onClick}>
      <img src={img_src} alt={alt_text} className={styles.icon} />
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default Btn_menu;
