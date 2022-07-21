import React from "react";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import Contact from "../Contact/Contact";
import Engineers from "../Engineers/Engineers";
import Notice from "../Notice/Notice";
import Guide from "../Guide/Guide";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Guide />
      <Cards />
      <Engineers />
      <Notice />
      <Testimonials></Testimonials>
      <Contact />
    </div>
  );
};

export default Home;
