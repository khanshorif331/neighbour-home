import React, { useContext, useState } from "react";
import { Fade } from "react-reveal";
import { Link, useParams } from "react-router-dom";
import { DarkModeContext } from "../../App";
import useServiceDetails from "../../hooks/useServiceDetails";

const ServiceDetails = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);
  const { title, picture, _id, price, duration, discount, description } =
    service;

        
  return (
    <section className={`${darkMode && "dark-theme"} bg-gray-200  duration-300 lg:px-16`}>
      <div
        class={`hero min-h-screen ${darkMode && "dark-theme"}`}
      >
        <div className={`hero-content ${darkMode ? 'bg-teal-600' : 'bg-white'} shadow-2xl py-12 lg:px-12 flex-col lg:flex-row mt-20`}>
          <Fade right duration="1500">
            <div className="">
              <img
                src={picture}
                className="lg:max-w-sm max-w-xs rounded-lg shadow-2xl"
                alt=""
              />
            </div>
          </Fade>
          <Fade left duration="1500">
            <div className={`lg:ml-8 ${darkMode ? "text-white" : "black"} pr-12 `}>
              <h1 className="text-3xl font-bold mb-4 pt-4">{title}</h1>
              <h1 className="text-sm font-semibold capitalize  my-1">
                PRICE: ${price}
              </h1>
              <h1 className="text-sm font-semibold capitalize">
                DURATION: {duration}
              </h1>
              <h1 className="text-sm font-semibold capitalize  my-1">
                DISCOUNT: {discount}
              </h1>
              <p className="py-4">{description}</p>
              <div className="flex">
                <Link to={`/engineers`}>
                  <button className="lg:px-8 px-4 py-3 border-2 border-teal-900 bg-teal-900 hover:bg-teal-100 hover:text-teal-900  duration-200 text-white rounded uppercase inline-block mt-4 sm:mt-8 font-semibold mr-2">
                    hire a engineer
                  </button>
                </Link>
                <Link to={`/workers`}>
                  <button className="px-8 py-3 border-2 border-teal-900 bg-teal-900 hover:bg-teal-100 hover:text-teal-900  duration-200 text-white rounded uppercase inline-block mt-4 sm:mt-8 font-semibold">
                    hire workers
                  </button>
                </Link>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
