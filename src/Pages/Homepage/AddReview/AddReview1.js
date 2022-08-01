import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../../Shared/Loading/Loading";
import "./AddReview.css"

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  let [user, loading] = useAuthState(auth);
  const [data, setData] = useState("");
  console.log(data);

  const onSubmit = (data) => {
    console.log(data);
    // const url = `https://neighbour-home--server.herokuapp.com/review`;
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result);
    //     toast("user Updated successfully");
    //   });
    // navigate("/dashboard");
  };
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="container text-center">
      <h2 className="text-3xl  font-bold inline-block pb-1 px-5">
        Add A Review
      </h2>
      <div className="flex justify-center mb-8">
        <div className=" rounded-md w-32 h-1 bg-[#0D9488]"></div>
        <div className=" rounded-md w-4 h-1 mx-2 bg-[#0D9488]"></div>
        <div className=" rounded-md w-2 h-1 bg-[#0D9488]"></div>
      </div>

      <form className=" text-center flex flex-col w-11/12 sm:w-7/12 mx-auto" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
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
        <br />
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
            {...register("star", {
              required: {
                value: true,
                message: "Rating is Required",
              }
            })}
          />
        </div>
        <br />
        <textarea
          className="input h-32 input-bordered input-md"
          placeholder="Description"
          {...register("review", {
            required: {
              value: true,
              message: "Description is Required",
            },
          })}
        />
        <br />
        <input
          className="btn"
          type="submit"
          value="Add Review"
        />
      </form>
    </div>
  );
};

export default AddReview;
