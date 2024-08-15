import React from "react";
import Banner from "../Banner/Banner";
import About from "../AboutUs/AboutUs";
import Service from "../Service/Service";
import CallToAction from "../CallToAction/CallToAction";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Service />
      <CallToAction />
    </div>
  );
};

export default Home;
