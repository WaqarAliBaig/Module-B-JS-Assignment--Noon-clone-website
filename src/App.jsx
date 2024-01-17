import "./App.css";
import React from "react";
import Navbar from "./Componenets/Navbar";
import Menu_Bar from "./Componenets/Menu_Bar";
import Horizontal_Banner from "./Componenets/Horizontal_Banner";
import SwiperWave from "./Componenets/SwiperWave";
import Shop_Cards from "./Componenets/Shop_Cards";
import SwiperCarousel from "./Componenets/SwiperCarousel";
import BlackBanner from "./Componenets/Black-banner";
import Footer from "./Componenets/Footer";

const App = () => {
  return (
    <div className="conatiner">
      <Navbar />
      <Menu_Bar />
      <Horizontal_Banner />
      <SwiperWave />
      <SwiperCarousel />
      <Shop_Cards />
      <BlackBanner />
      <Footer />
    </div>
  );
};

export default App;
