import React from "react";
import "../../style/Footer.scss";

import Dog from "../../img/footer-dog.png";
import Ellipse from "../../img/footer-ellipse.png";
import Instagram from "../../img/footer-icon-instagram.png";
import Facebook from "../../img/footer-icon-facebook.png";
import Twitter from "../../img/footer-icon-twitter.png";
import WhatsApp from "../../img/footer-icon-whatsApp.png";

export default function Footer() {
  return (
    <div className="footer">
      <img src={Dog} alt="dog" />

      <div className="footer__content">
        <img src={Ellipse} alt="ellipse" />

        <ul className="footer__content_navigation_list">
          <li className="footer__content_navigation_list-item">
            <a href="">SHOP FOR DOG</a>
          </li>

          <li className="footer__content_navigation_list-item">
            <a href="">SHOP FOR CAT</a>
          </li>

          <li className="footer__content_navigation_list-item">
            <a href="">OUR STORY</a>
          </li>

          <li className="footer__content_navigation_list-item">
            <a href="">CONTACT US</a>
          </li>
        </ul>

        <span>© Company Name 2020. All rights reserved.</span>
      </div>

      <div className="social-icons">
        <img src={Instagram} alt="icon-instagram" />
        <img src={Facebook} alt="icon-facebook" />
        <img src={Twitter} alt="icon-twitter" />
        <img src={WhatsApp} alt="icon-whatsApp" />
      </div>
    </div>
  );
}
