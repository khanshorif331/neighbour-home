import React, { useContext } from "react";
import { DarkModeContext } from "../../../App";
import Engineer from "../Engineer/Engineer";

const Engineers = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext)

  return (
    <div className="pt-20">
      <h2 style={{fontFamily:"'Rajdhani', sans-serif"}} className={`${darkMode && "text-white"} uppercase text-3xl font-bold text-center py-3`}>
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
