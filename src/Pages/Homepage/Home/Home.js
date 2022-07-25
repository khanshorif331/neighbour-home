import React from "react";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import Contact from "../Contact/Contact";
import Engineers from "../Engineers/Engineers";
import Notice from "../Notice/Notice";
import Guide from "../Guide/Guide";
import Testimonials from "../Testimonials/Testimonials";
import NewsLetter from "../NewsLetter/NewsLetter";

const Home = () => {
  return (
    <div>
      <Banner />
      <Guide />
      <Cards />
      <Engineers />
      <Notice />
      <Testimonials />
      <Contact />
      <NewsLetter />
    </div>
  );
};

export default Home;
