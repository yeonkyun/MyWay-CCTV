import styles from './Btn_menu.module.css';
function Btn_menu(img_src, alt_text) {
  img_src = img_src.img_src;
  alt_text = alt_text.alt_text;

  return (
    <li className={styles.btn_wrap}>
      <button className={styles.btn_side} >
        <img className={styles.btn_icon} src={img_src} alt={alt_text} />
      </button>
    </li>
  )
}

export default Btn_menu;