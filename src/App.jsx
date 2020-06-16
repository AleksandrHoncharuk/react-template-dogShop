import React from "react";
import Navigation from "./pages/Home/Navigation";
import Header from "./pages/Home/Header";
import StorySection from "./pages/Home/StorySection";
import IngredientSection from "./pages/Home/IngredientSection";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <StorySection />
      <IngredientSection />
    </div>
  );
}

export default App;
