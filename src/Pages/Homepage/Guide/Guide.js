import React, { useContext } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../../App";

const Guide = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  return (
    <div className="flex items-center flex-col sm:flex-row sm:px-28 py-10">
      <Fade right duration="1500">
        <div className="w-full sm:w-5/12">
          <img
            className="w-7/12 mx-auto"
            src="https://e-builder.net/wp-content/uploads/Ultimate-Guides.png"
            alt=""
          />
        </div>
      </Fade>
      <Fade left duration="1500">
        <div className="w-10/12 sm:w-7/12 text-center sm:text-left">
          <p className={`${darkMode ? "text-white" : "text-gray-500"}`}>
            Overcome top challenges faced by capital program managers and owners
            with
          </p>
          <p
            style={{ color: `${darkMode ? "#297bbe" : "#0e416c"}` }}
            className="font-semibold"
          >
            The Ultimate Construction Management Guide Collection.
          </p>
          <Link to="guides">
            <button
              className={`${
                darkMode
                  ? "hover:bg-white bg-teal-900 text-white border border-teal-900 hover:text-teal-900"
                  : "hover:bg-teal-800 bg-white text-teal-900 border border-teal-900 hover:text-white"
              } sm:px-7 px-5 transition py-1.5 sm:py-2.5 rounded-[3px] mt-5 uppercase `}
            >
              Download The Guides
            </button>
          </Link>
        </div>
      </Fade>
    </div>
  );
};

export default Guide;
