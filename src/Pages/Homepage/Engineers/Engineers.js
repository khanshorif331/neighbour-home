import React, { useEffect, useState } from "react";
import Engineer from "../Engineer/Engineer";

const Engineers = () => {
  
  return (
    <div>
      <h2 className="uppercase text-3xl font-bold text-center py-4">
        Our Engineers and Architecture's
      </h2>
      <div className="flex justify-center">
        <div className=" rounded-md w-32 h-1 bg-[#0D9488]"></div>
        <div className=" rounded-md w-4 h-1 mx-2 bg-[#0D9488]"></div>
        <div className=" rounded-md w-2 h-1 bg-[#0D9488]"></div>
      </div>
      <Engineer/>
    </div>
  );
};

export default Engineers;
