import React, { useContext } from "react";
import { DarkModeContext } from "../../../App";

const Pricing = () => {
  const [darkMode] = useContext(DarkModeContext);
  return (
    <div>
      <section className="py-20  text-gray-800">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <h2
              className={`${
                darkMode && "text-gray-50"
              }text-4xl font-bold lg:text-5xl text-gray-900`}
            >
              Choose your best plan
            </h2>
          </div>
          <div className="flex flex-wrap items-stretch -mx-4">
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div
                className={`${
                  darkMode && "dark:bg-gray-900 text-gray-50"
                } flex flex-col p-6 space-y-6 rounded shadow sm:p-8 text-gray-900`}
              >
                <div className="space-y-2">
                  <h4 className={` text-2xl font-bold`}>Beginner</h4>
                  <span className={`text-6xl font-bold`}>Free</span>
                </div>
                <p className="mt-3 leading-relaxed text-gray-600">
                  Etiam ac convallis enim, eget euismod dolor.
                </p>
                <ul className="flex-1 mb-6 text-gray-600">
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
                    <span>Aenean quis</span>
                  </li>
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
                    <span>Morbi semper</span>
                  </li>
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
                    <span>Tristique enim nec</span>
                  </li>
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
            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div
                className={`${
                  darkMode && "dark:bg-sky-400"
                }flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-sky-600 text-gray-50`}
              >
                <div className={`${darkMode && "text-gray-900"} space-y-2`}>
                  <h4 className="text-2xl font-bold">Pro</h4>
                  <span className="text-6xl font-bold">
                    $24
                    <span className="text-sm tracking-wide">/month</span>
                  </span>
                </div>
                <p className={`${darkMode && "text-gray-900"} leading-relaxed`}>
                  Morbi cursus ut sapien sit amet consectetur.
                </p>
                <ul className="flex-1 space-y-2">
                  <li
                    className={`${
                      darkMode && "text-gray-900"
                    } text-gray-100 flex items-center space-x-2`}
                  >
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
                  <li
                    className={`${
                      darkMode && "text-gray-900"
                    } text-gray-100 flex items-center space-x-2`}
                  >
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
                  <li
                    className={`${
                      darkMode && "text-gray-900"
                    } text-gray-100 flex items-center space-x-2`}
                  >
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
                  <li
                    className={`${
                      darkMode && "text-gray-900"
                    } text-gray-100 flex items-center space-x-2`}
                  >
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
                  rel="noopener referrer"
                  href="#"
                  className={`${
                    darkMode && "dark:bg-gray-800 dark:text-sky-400"
                  } inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded bg-gray-100 text-sky-600 bottom-0`}
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
              <div
                className={`${
                  darkMode && "dark:bg-gray-900 text-gray-50"
                } flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-50`}
              >
                <div className="space-y-2">
                  <h4 className={`text-2xl font-bold`}>Team</h4>
                  <span className={`text-6xl font-bold`}>
                    $72
                    <span className="text-sm tracking-wide">/month</span>
                  </span>
                </div>
                <p className="leading-relaxed text-gray-600">
                  Phasellus ultrices bibendum nibh in vehicula.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
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
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-start space-x-2">
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
                    <span>Fusce sem ligula</span>
                  </li>
                  <li className="flex items-start space-x-2">
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
                    <span>Curabitur dictum</span>
                  </li>
                  <li className="flex items-start space-x-2">
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
                    <span>Duis odio eros</span>
                  </li>
                  <li className="flex items-start space-x-2">
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
                    <span>Vivamus ut lectus ex</span>
                  </li>
                </ul>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className={`${
                    darkMode && "dark:bg-sky-400 dark:text-gray-900"
                  } inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-sky-600 text-gray-50`}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
