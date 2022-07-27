import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../../App";

const AddReview = () => {
  const { register, handleSubmit } = useForm();
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/");
  };

  return (
    <div className="mt-32 h-screen">
      <h2
        style={{ fontFamily: "'Rajdhani', sans-serif" }}
        className="uppercase text-3xl font-bold text-center py-3"
      >
        Add your Valuable Feedback
      </h2>
      <div className="flex justify-center">
        <div className=" rounded-md w-32 h-1 bg-[#0D9488]"></div>
        <div className=" rounded-md w-4 h-1 mx-2 bg-[#0D9488]"></div>
        <div className=" rounded-md w-2 h-1 bg-[#0D9488]"></div>
      </div>

      <form className="block text-center" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="p-2 mt-5 rounded border outline-none text-center"
          placeholder="Name"
          disabled
          width="60%"
        />{" "}
        <br />
        <p>Stars</p>
        <br />
        <textarea
          className="p-2 mt-5 rounded border-2  outline-none"
          placeholder="Review"
          {...register("review")}
          name=""
          id=""
          cols="30"
          rows="5"
        ></textarea>
        <br />
        <button
          type="submit"
          className={`${
            darkMode
              ? "hover:bg-white bg-teal-900 text-white border border-teal-900 hover:text-teal-900"
              : "hover:shadow-md border-2 hover:border-orange-400 text-orange-400 "
          } sm:px-7 px-5 transition py-1.5 sm:py-2.5 rounded-[3px] mt-5 uppercase  text-center`}
        >
          add review{" "}
        </button>
      </form>
    </div>
  );
};

export default AddReview;
