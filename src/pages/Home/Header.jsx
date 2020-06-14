import React from "react";
import Logo from "../../img/logo.png";
import "../../style/Header.scss";

export default function Header() {
  return (
    <div className="header">
      <figure className="header__logo">
        <img src={Logo} alt="" />
      </figure>

      <nav className="header__nav">
        <ul className="header__nav_list">
          <li className="header__nav_list-item">SHOP FOR DOG</li>
          <li className="header__nav_list-item">SHOP FOR CAT</li>
          <li className="header__nav_list-item">OUR STORY</li>
          <li className="header__nav_list-item">CONTACT US</li>
        </ul>
      </nav>
    </div>
  );
}
