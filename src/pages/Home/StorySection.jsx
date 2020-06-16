import React from "react";
import "../../style/StorySection.scss";
import storyDog from "../../img/storySection-dog.png";
import storyPackage from "../../img/storySection-package.png";

export default function StorySection() {
  return (
    <div className="story">
      <img src={storyDog} alt="dog" className="story__img" />

      <h3 className="story__title">
        OUR <br />
        <span className="story__title-blue">Story</span>
      </h3>

      <div className="story__text">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          su spendisse ultrices gravida. Risus commodo viverra maec enas
          accumsan lacus vel facilisis.
        </span>
        <a href="">Read More</a>
      </div>

      <img src={storyPackage} alt="package" className="story__package" />
    </div>
  );
}
