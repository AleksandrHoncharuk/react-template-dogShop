import React from "react";
import "../../style/BreedsSection.scss";

import breedsDog from "../../img/breedsSection-dog.png";

export default function Breeds() {
  return (
    <div className="breeds">
      <div className="breeds__search">
        <h3>Learn More About Dog Breeds</h3>

        <div className="breeds__search_input-wrapper">
          <input type="text" placeholder="Search breeds" />
          <div className="search-icon_ellipse"></div>
          <div className="search-icon_shape"></div>
        </div>

        <button className="btn">View All Dog Breeds </button>
      </div>

      <img src={breedsDog} alt="dog" />

      <div className="breeds__text">
        <h3 className="breeds__text_title">Thinking of getting a dog?</h3>
        <span>
          There are many things you need to know before getting a dog.
        </span>
        <button className="btn">Learn more</button>
      </div>
    </div>
  );
}
