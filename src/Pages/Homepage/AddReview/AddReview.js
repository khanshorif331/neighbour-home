// import axios from "axios";
import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../../App";
import auth from "../../../firebase.init";
import toast from "react-hot-toast";
import Loading from "../../../Shared/Loading/Loading";
import "./AddReview.css";

const AddReview = () => {
  const [ratings, setRating] = useState(0);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const navigate = useNavigate();

  let [user, loading] = useAuthState(auth);

  const onSubmit = (data) => {
    // console.log(data);
    const review = {
      name: data.name,
      reviewTxt: data.Description,
      stars: ratings,
      picture: user?.photoURL || "https://i.ibb.co/K035fHn/149071.png",
    };

    console.log(review);
    const url = `https://neighbour-home--server.herokuapp.com/review`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast("review updated successfully");
      });
    navigate("/dashboard");
  };
  if (loading) {
    return <Loading></Loading>;
  }

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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-11/12 sm:w-7/12 mx-auto"
      >
        <div>
          <span className="font-bold">Name:</span>
          <input
            className="mb-3 text-2xl text-gray-500 font-bold text-center outline-none w-24 bg-white"
            placeholder="Your Name Here"
            readOnly
            {...register("name")}
            defaultValue={user?.displayName}
          />
        </div>
        <label className="label">
          {errors.name?.type === "required" && (
            <span className="label-text-alt text-red-500">
              {errors.name.message}
            </span>
          )}
        </label>
        <div className="flex items-center justify-center mb-3">
          {
            <div className="star-rating">
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <button
                    type="button"
                    key={index}
                    className={index <= ratings ? "on" : "off"}
                    onClick={() => setRating(index)}
                  >
                    <span className="star text-4xl">&#9733;</span>
                  </button>
                );
              })}
            </div>
          }
          {/* <input
            className="ml-5 w-5 text-xl font-bold outline-none bg-white"
            width="20px"
            placeholder="Rating"
            // defaultValue={0}
            // value={ratings}
            onChange={(e) => setRating(e.target.value)}
            // disabled
            // {...register("rating")}
          /> */}
        </div>
        {/* <label className="label">
          {errors.rating?.type === "required" && (
            <span className="label-text-alt text-red-500">
              {errors.rating.message}
            </span>
          )}
          {errors.rating?.type === "max" && (
            <span className="label-text-alt text-red-500">
              {errors.rating.message}
            </span>
          )}
          {errors.rating?.type === "maxLength" && (
            <span className="label-text-alt text-red-500">
              {errors.rating.message}
            </span>
          )}
        </label> */}

        <textarea
          className="input h-32 input-bordered input-md"
          placeholder="Description"
          {...register("Description", {
            required: {
              value: true,
              message: "Description is Required",
            },
          })}
        />
        <label className="label">
          {errors.Description?.type === "required" && (
            <span className="label-text-alt text-red-500">
              {errors.Description.message}
            </span>
          )}
        </label>

        <input
          style={{
            fontFamily: "Open Sans, sans-serif",
            letterSpacing: "2px",
          }}
          className="hover:bg-white transition w-40 mx-auto text-center bg-primary  hover:text-primary rounded-full text-white border-2 border-primary py-2 cursor-pointer"
          type={"submit"}
          value={"Post Review"}
        />
      </form>
    </div>
  );
};

export default AddReview;
