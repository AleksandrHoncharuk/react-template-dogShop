import React from "react";
import "../../style/AllProductsSection.scss";

import Package from "../../img/allProductsSection-package.png";

export default function AllProducts() {
  return (
    <div className="all-products">
      <img src={Package} alt="package" />

      <div className="all-products-text">
        <h3>Find the right food for your dog</h3>

        <span>
          Each formula has been created to deliver nutrition tailored to your
          dog's health needs whatever their size, breed, age, or lifestyle.
        </span>

        <button className="btn">view all products</button>
      </div>
    </div>
  );
}
