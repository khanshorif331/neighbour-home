import React from "react";

const Card = ({ course }) => {
  const { title, picture, description } = course;
  return (
    <div>
      <div className="max-w-sm bg-white px-6 pt-6 pb-2 border shadow-lg transform hover:scale-105 transition duration-500">
        <div className="relative">
          <img className="w-full h-52" src={picture} alt="Colors" />
          {/* <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
            {price}
          </p> */}
          {/* <p className="absolute top-0 right-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-tr-lg rounded-bl-lg">
            {discount}
          </p> */}
        </div>
        <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
          {title}
        </h1>
        <p>
          {description}
        </p>
        <div className="my-4">
          <button className="mt-4 text-xl w-full text-white bg-[#0D9488] py-2 rounded shadow-lg">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
