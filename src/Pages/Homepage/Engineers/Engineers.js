import React, { useEffect, useState } from "react";
import Engineer from "../Engineer/Engineer";

const Engineers = () => {
  const [engineers, setEngineers] = useState([]);
  useEffect(() => {
    fetch("engineers.json")
      .then((res) => res.json())
      .then((data) => setEngineers(data));
  }, []);
  return (
    <div>
      <h2 style={{fontFamily:"'Rajdhani', sans-serif"}} className="uppercase text-3xl font-bold text-center py-3">
        Our Engineers and Architecture's
      </h2>
      <div className="flex justify-center">
        <div className=" rounded-md w-32 h-1 bg-[#0D9488]"></div>
        <div className=" rounded-md w-4 h-1 mx-2 bg-[#0D9488]"></div>
        <div className=" rounded-md w-2 h-1 bg-[#0D9488]"></div>
      </div>
      <div className=" flex justify-center items-center mt-10">
        <div className=" md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          {engineers.map((engineer) => (
            <Engineer engineer={engineer} key={engineer._id}></Engineer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Engineers;
