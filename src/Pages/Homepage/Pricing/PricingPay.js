import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";

const PricingPay = () => {
  const { _id } = useParams();
  const [pricing, setPricing] = useState({});
  const [loading, setLoading] = useState(false);
  const { tag, price, period, description } = pricing;

  useEffect(() => {
    fetch(`https://neighbour-home--server.herokuapp.com/pricing/${_id}`)
      .then((res) => res?.json())
      .then((data) => {
        if (!data && data.benefit === undefined) {
          setLoading(true);
        } else {
          setPricing(data);
          setLoading(false);
        }
      });
  }, [_id]);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="mt-32">
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div className="flex w-full mb-8 sm:px-4 md:w-1/2  lg:mb-0 ">
            <div className={`flex flex-col p-6 space-y-6 sm:p-8 text-gray-900`}>
              <div className="space-y-2">
                <h4 className={` text-2xl font-bold`}>{tag}</h4>
                <span className={`text-6xl font-bold`}>
                  ${price}
                  <span className="text-sm tracking-wide">/{period}</span>
                </span>
              </div>
              <p className="mt-3 leading-relaxed text-gray-600">
                {description}
              </p>
              <ul className="flex-1 mb-6 text-gray-600">
                {pricing.benefit === undefined
                  ? setLoading(true)
                  : Object.values(pricing.benefit).map((value, key) => (
                      <li key={key} className="flex mb-2 space-x-2">
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
            </div>
          </div>

          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Get Premium Access</h1>
            <p class="py-6">
              One Subscription Unlimited Access Get Premium access to all our
              properties apps with one subscription.
            </p>
            <label for="_id" className="btn p-3 bg-slate-600 text-white">
              Continue to ${price}
            </label>
            {/* this is modal */}
            <input type="checkbox" id="_id" class="modal-toggle" />
            <div class="modal">
              <div class="modal-box w-11/12 max-w-5xl">
                <h3 class="font-bold text-lg">
                  Congratulations random Internet user!
                </h3>
                <p class="py-4">
                  You've been selected for a chance to get one year of
                  subscription to use Wikipedia for free!
                </p>
                <div class="modal-action">
                  <label for="_id" class="btn">
                    Continue
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPay;
