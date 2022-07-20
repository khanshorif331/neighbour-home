import React from "react";
import Marquee from "react-fast-marquee";

const Notice = () => {
  return (
    <div className="flex items-center justify-start my-7 bg-gray-100 mt-28">
      <h2 className="uppercase lg:text-2xl text-xl bg-[#0D9488] px-2 py-5 text-white font-bold w-32 ">
        Notice :
      </h2>
      <Marquee gradient={false} speed={50} gradientWidth={0}>
          {" "}
          <blockquote className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            odit placeat facilis dolores odio error repellendus facere. 
          </blockquote>
      </Marquee>
    </div>
  );
};

export default Notice;
