import React from "react";
import "../../style/Header.scss";

import headerDog from "../../img/header-dog.png";
import headerPackage from "../../img/header-package.png";

export default function Header() {
  return (
    <div className="header">
      <img src={headerPackage} alt="package" className="header__package" />

      <div className="header__text">
        <h3 className="header__text-sub-title">
          Help your Dog Maintain <br /> a{" "}
          <span className="blue-text">Healthier Weight</span> with
        </h3>
        <h3 className="header__text-title">
          100% Organic <br /> Pet Food
        </h3>
      </div>

      <img src={headerDog} alt="dog" className="header__dog" />
    </div>
  );
}
