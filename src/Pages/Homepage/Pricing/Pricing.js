import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../../App";
import PricingCard from "./PricingCard";

const Pricing = () => {
  const [darkMode] = useContext(DarkModeContext);
  const [pricing, setPricing] = useState([]);
  useEffect(() => {
    fetch("https://neighbour-home--server.herokuapp.com/pricing")
      .then((res) => res.json())
      .then((data) => setPricing(data));
  }, []);
  return (
    <div>
      <section className="py-20 mt-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <h2
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
              className={`${
                darkMode && "text-white"
              } uppercase  font-bold text-3xl py-3 text-center`}
            >
              Choose your best plan
            </h2>
            <div className="flex justify-center">
              <div className=" rounded-md w-32 h-1 bg-[#0D9488]"></div>
              <div className=" rounded-md w-4 h-1 mx-2 bg-[#0D9488]"></div>
              <div className=" rounded-md w-2 h-1 bg-[#0D9488]"></div>
            </div>
          </div>
          <div className="flex flex-wrap items-stretch -mx-4">
            {pricing?.map((pricings) => (
              <PricingCard pricings={pricings} key={pricings._id}></PricingCard>
            ))}

            {/* <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0 transform hover:scale-105 transition duration-500">
              <div
                className={` ${
                  darkMode && "bg-sky-400 text-gray-900"
                } flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-sky-600 text-gray-50`}
              >
                <div className={` ${darkMode && "text-gray-900"} space-y-2`}>
                  <h4 className="text-2xl font-bold">Pro</h4>
                  <span className="text-6xl font-bold">
                    $199
                    <span className="text-sm tracking-wide">/month</span>
                  </span>
                </div>
                <p
                  className={` ${darkMode && "text-gray-900"} leading-relaxed`}
                >
                  This package is use for mid-level business company. For large
                  scale company you can go our <b>"Business"</b> package.
                </p>
                <ul
                  className={` ${darkMode && "text-gray-900"} flex-1 space-y-2`}
                >
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Everything in Free</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Phasellus tellus</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Praesent faucibus</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Aenean et lectus blandit</span>
                  </li>
                </ul>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className={` ${
                    darkMode && "bg-gray-900"
                  } inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded bg-gray-100 text-sky-600`}
                >
                  Get Started
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
