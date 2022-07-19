import React from "react";

const Card = ({ course }) => {
  const { title, type, picture} = course;
  return (
    <div>
      <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
        <h3 class="mb-3 text-xl font-bold text-indigo-600">{type}</h3>
        <div class="relative">
          <img class="w-full h-52 rounded-xl" src={picture} alt="Colors" />
          {/* <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
            {price}
          </p>
          <p class="absolute top-0 right-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-tr-lg rounded-bl-lg">
            {discount}
          </p> */}
        </div>
        <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
          {title}
        </h1>
        <div class="my-4">
          <button class="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
