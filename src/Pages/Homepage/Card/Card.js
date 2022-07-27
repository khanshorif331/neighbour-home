import React, { useContext } from "react";
import { DarkModeContext } from "../../../App";

const Card = ({ course }) => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext)

  const { title, picture, description } = course;
  return (
    <div>
      <div className={ `${darkMode ? "bg-teal-600 border-none" : "bg-white border-white border"} max-w-sm  px-6 pt-6 pb-2  shadow-lg transform hover:scale-105 transition duration-500 h-[480px]`}>
        <div className="relative">
          <img className="w-full h-52" src={picture} alt="Colors" />
          {/* <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
            {price}
          </p> */}
          {/* <p className="absolute top-0 right-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-tr-lg rounded-bl-lg">
            {discount}
          </p> */}
        </div>
        <h1 className={`${darkMode ? "text-0" : "text-gray-800"} mt-4  text-2xl font-bold cursor-pointer`}>
          {title}
        </h1>
        <p>
          {description}
        </p>
        <div className="my-4">
          <button className={`${darkMode ? "bg-[#09aa9d] text-black" : "bg-[#0D9488] text-white"} mt-4 text-xl w-full   py-2 rounded shadow-lg`}>
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
