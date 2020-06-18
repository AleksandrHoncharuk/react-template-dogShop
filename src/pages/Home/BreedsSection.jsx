import React from "react";
import "../../style/BreedsSection.scss";

export default function Breeds() {
  return (
    <div className="breeds">
      <div className="breeds__search">
        <h3>Learn More About Dog Breeds</h3>
        <input type="text" placeholder="Search breeds" />
        <button className="btn">View All Dog Breeds </button>
      </div>

      <img src="" alt="dog" />

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
