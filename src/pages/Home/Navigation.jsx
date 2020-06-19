import React from "react";
import Logo from "../../img/logo.png";
import "../../style/Navigation.scss";

export default function Navigation() {
  return (
    <div className="navigation">
      <figure className="navigation__logo">
        <img src={Logo} alt="" />
      </figure>

      <nav className="navigation__nav">
        <ul className="navigation__nav_list">
          <li className="navigation__nav_list-item">
            <a href="">SHOP FOR DOG</a>
          </li>

          <li className="navigation__nav_list-item">
            <a href="">SHOP FOR CAT</a>
          </li>

          <li className="navigation__nav_list-item">
            <a href="">OUR STORY</a>
          </li>

          <li className="navigation__nav_list-item">
            <a href="">CONTACT US</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
