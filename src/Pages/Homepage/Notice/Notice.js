import React from "react";
import Marquee from "react-fast-marquee";

const Notice = () => {
  return (
    <div className="flex items-center justify-start my-7 bg-gray-100 mt-28">
      <h2
        style={{ fontFamily: "'Rajdhani', sans-serif" }}
        className="uppercase lg:text-2xl text-xl bg-[#0D9488] px-2 py-5 text-white font-bold w-32 "
      >
        Notice :
      </h2>
      <Marquee gradient={false} speed={50} gradientWidth={0}>
        {" "}
        <blockquote
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
          className="text-2xl"
        >
          Construction notices are one of the most underrated tools in the
          industry. Communication is, unfortunately, a big problem on
          construction projects; and notices are a great way to start fixing it.
        </blockquote>
      </Marquee>
    </div>
  );
};

export default Notice;
