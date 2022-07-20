import React from "react";
import Cards from "../Cards/Cards";
import Contact from "../Contact/Contact";
import Engineers from "../Engineers/Engineers";
import Notice from "../Notice/Notice";

const Home = () => {
  return (
    <div>
      This is Home!!!!
      <Contact />
      <Cards />
      <Engineers />
      <Notice />
    </div>
  );
};

export default Home;
