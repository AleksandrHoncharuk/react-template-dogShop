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
          <li className="navigation__nav_list-item">SHOP FOR DOG</li>
          <li className="navigation__nav_list-item">SHOP FOR CAT</li>
          <li className="navigation__nav_list-item">OUR STORY</li>
          <li className="navigation__nav_list-item">CONTACT US</li>
        </ul>
      </nav>
    </div>
  );
}
