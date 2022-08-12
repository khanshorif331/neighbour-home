import React, { useContext } from "react";
import { DarkModeContext } from "../../../App";

const PricingCard = ({ pricings }) => {
  const { tag, price, period, description, benefit } = pricings;
  const [darkMode] = useContext(DarkModeContext);
  return (
    <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0 transform hover:scale-105 transition duration-500">
      <div
        className={`${
          darkMode && "dark:bg-gray-900 text-gray-50"
        } flex flex-col p-6 space-y-6 rounded shadow sm:p-8 text-gray-900`}
      >
        <div className="space-y-2">
          <h4 className={` text-2xl font-bold`}>{tag}</h4>
          <span className={`text-6xl font-bold`}>
            {price}
            <span className="text-sm tracking-wide">/{period}</span>
          </span>
        </div>
        <p className="mt-3 leading-relaxed text-gray-600">{description}</p>
        <ul className="flex-1 mb-6 text-gray-600">
          {Object.values(benefit).map((value) => (
            <li className="flex mb-2 space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-shrink-0 w-6 h-6 text-sky-600"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>{value}</span>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={`${
            darkMode && "dark:bg-sky-400 dark:text-gray-900"
          } inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-sky-600 text-gray-50`}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
