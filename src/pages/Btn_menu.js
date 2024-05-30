import React from "react";

function Btn_menu({ img_src, alt_text, onClick }) {
  return (
    <li onClick={onClick}>
      <img src={img_src} alt={alt_text} />
    </li>
  );
}

export default Btn_menu;
