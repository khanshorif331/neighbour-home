import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";

export default function App() {
  let [user, loading, error] = useAuthState(auth);
  const [rating, setRating] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="text-center">
      <h2 className="text-3xl  font-bold inline-block pb-1 px-5">
        Add A Review
      </h2>
      <div className="flex justify-center mb-8">
        <div className=" rounded-md w-32 h-1 bg-[#0D9488]"></div>
        <div className=" rounded-md w-4 h-1 mx-2 bg-[#0D9488]"></div>
        <div className=" rounded-md w-2 h-1 bg-[#0D9488]"></div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input
          className="mb-3 text-center outline-none bg-white"
          placeholder="Your Name Here"
          disabled
          {...register("name", {
            required: {
              value: true,
              message: "Name is Required",
            },
          })}
          value={user?.displayName}
        />
        <div className="flex items-center justify-center mb-3">
          {
            <div className="star-rating">
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <button
                    type="button"
                    key={index}
                    className={index <= rating ? "on" : "off"}
                    onClick={() => setRating(index)}
                  >
                    <span className="star text-4xl">&#9733;</span>
                  </button>
                );
              })}
            </div>
          }
          <input
            className="ml-5 w-5 text-xl font-bold outline-none bg-white"
            width="20px"
            placeholder="Rating"
            value={rating}
            disabled
            {...register("rating", {
              required: {
                value: true,
                message: "Rating is Required",
              },

              maxLength: {
                value: 1,
                message: "please enter 1 number of rating",
              },
              max: {
                value: 5,
                message: "please rate 1 - 5",
              },
            })}
          />
        </div>
      <input type="submit" />
    </form>
    </div>
  );
}
