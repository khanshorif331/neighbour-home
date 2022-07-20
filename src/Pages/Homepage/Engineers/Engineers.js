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
      <h2 className="uppercase text-3xl font-bold text-center my-10 text-green-600">
        Our Engineers and Architecture's
      </h2>
      <div className="  flex justify-center items-center py-20">
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
