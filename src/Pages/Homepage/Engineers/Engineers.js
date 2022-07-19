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
      <div className="grid lg:grid-cols-3 ">
        {engineers.map((engineer) => (
          <Engineer engineer={engineer} key={engineer._id}></Engineer>
        ))}
      </div>
    </div>
  );
};

export default Engineers;
