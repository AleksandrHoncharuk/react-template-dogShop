import React from "react";
import "../../style/IngredientSection.scss";
import dogImg from "../../img/ingredientSection-dog.png";

export default function IngredientSection() {
  return (
    <div className="ingredient">
      <div className="ingredient__wrapper-chicken">
        <h4 className="ingredient__wrapper-chicken_title">
          Our no. 1 ingredient: <br />
          <span>{`Real Chicken & Egg`}</span>
        </h4>

        <span className="ingredient__wrapper-chicken_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </span>
      </div>

      <div className="ingredient__about-product">
        <div className="ingredient__about-product_text">
          <h3>The perfect start to life</h3>

          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>

          <button className="btn ingredient__about-product_text-btn">
            Learn more
          </button>
        </div>

        <img src={dogImg} alt="dog" />
      </div>
    </div>
  );
}
