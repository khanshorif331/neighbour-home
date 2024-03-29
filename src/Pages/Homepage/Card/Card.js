import React from "react";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { DarkModeContext } from "../../../App";
const Card = ({ service }) => {
  const { title, picture, _id, description } = service;
  const [darkMode, setDarkMode] = useContext(DarkModeContext)
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
          <Link to={`/details/${_id}`} className='d-block'>
            <button className='mt-4 text-xl w-full text-white bg-[#0D9488] py-2 rounded shadow-lg'>Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;