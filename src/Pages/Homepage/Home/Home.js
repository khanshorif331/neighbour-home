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
import { DarkModeContext } from "../../../App";
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Home = () => {

  return (
    <div>
      <Banner />
      <Guide />
      <Cards />
      <Statistics />
      <Engineers />
      <Notice />
      <Testimonials />
      <Reviews />
      <AboutUs></AboutUs>
      <Contact />
      <NewsLetter />
      <MessengerCustomerChat
        pageId="106349278843956"
        appId="795027431626775"
      />
    </div>
  );
};

export default Home;
