import React from "react";
import Marquee from "react-fast-marquee";

const Notice = () => {
  return (
    <div className="flex items-center justify-start my-7 bg-gray-100 py-5">
      {/* <h2 className="uppercase text-2xl bg-green-600 p-2 text-white font-bold w-32">
        Notice :
      </h2> */}
      <Marquee className="" speed={50}>
        <p className="text-2xl">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione odit
          placeat facilis dolores odio error repellendus facere. Quasi
          voluptatum aperiam voluptates minus accusantium veniam quia ipsum
          consequatur, dignissimos veritatis doloribus?
        </p>
      </Marquee>
    </div>
  );
};

export default Notice;
