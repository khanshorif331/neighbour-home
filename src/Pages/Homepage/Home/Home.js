import React, { useContext } from "react";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import Contact from "../Contact/Contact";
import Engineers from "../Engineers/Engineers";
import Notice from "../Notice/Notice";
import Guide from "../Guide/Guide";
import Testimonials from "../Testimonials/Testimonials";
import NewsLetter from "../NewsLetter/NewsLetter";
import Reviews from "../Reviews/Reviews";
import AboutUs from "../AboutUs/AboutUs";
import Statistics from "../Statistics/Statistics";
import Pricing from "../Pricing/Pricing";
import Projects from "../projects/Projects";

const Home = () => {
  return (
    <div>
      <Banner />
      <Guide />
      <Cards />
      <Statistics />
      <Engineers />
      <Projects />
      <Notice />
      <Testimonials />
      <Reviews />
      <AboutUs></AboutUs>
      <Contact />
      <NewsLetter />
    </div>
  );
};

export default Home;
