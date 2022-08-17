import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PricingPay = () => {
  const { _id } = useParams();
  const [pricing, setPricing] = useState([]);
  console.log(pricing);
  useEffect(() => {
    fetch(`http://localhost:5000/pricing/${_id}`)
      .then((res) => res.json())
      .then((data) => setPricing(data));
  }, []);
  return (
    <div className="mt-32">
      <h2 className="text-2xl text-center font-bold">Purchase Pricing</h2>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Purchase</button>
              </div>
            </div>
          </div>
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Get Premium Access</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPay;
