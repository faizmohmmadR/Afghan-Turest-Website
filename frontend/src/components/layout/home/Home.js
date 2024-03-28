import React from "react";
import Header from "../header/Header";
import Cards from "../cards/Cards";
import TrendingPlaces from "../trendingPlaces/TrendingPlaces";
import Parks from "../parks/Parks";
import Hospitals from "../hospitals/Hospitals";
import Province from "../province/Province";
import Foods from "../foods/Foods";

const Home = () => {
  return (
    <>
      <Header />
      <Province />
      <Cards />
      <TrendingPlaces />
      <Parks />
      <Hospitals />
      <Foods />
    </>
  );
};

export default Home;
