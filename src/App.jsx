import React from "react";
import Navigation from "./pages/Home/Navigation";
import Header from "./pages/Home/Header";
import StorySection from "./pages/Home/StorySection";
import IngredientSection from "./pages/Home/IngredientSection";
import Breeds from "./pages/Home/BreedsSection";
import AllProducts from "./pages/Home/AllProductsSection";
import Footer from "./pages/Home/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <StorySection />
      <IngredientSection />
      <Breeds />
      <AllProducts />
      <Footer />
    </div>
  );
}

export default App;
