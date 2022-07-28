import axios from "axios";
import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../../App";
import auth from "../../../firebase.init";
import toast from 'react-hot-toast';
import Loading from "../../../Shared/Loading/Loading";

const AddReview = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const navigate = useNavigate();

  // const onSubmit = (data) => {
  //   console.log(data);
  //   navigate("/");
  // };
  let [user, loading, error] = useAuthState(auth)
  const onSubmit = data => {

    // console.log(data);
    const review = {
      name: data.name,
      review: data.Description,
      rating: data.rating,
      img: user?.photoURL || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-MOxuRwldA5D6vQQM5-Cje2zSAUESGvewA&usqp=CAU",
    }
    // console.log(review);
    axios.post(`https://shielded-waters-86658.herokuapp.com/reviews`, review)
      .then(data => {
        console.log(data.data);
        if (data.data.insertedId) {
          reset()
          toast.success(`Your Review Succesfully Posted`)
        }
      })


  }
  if (loading) {
    return <Loading></Loading>
  }

  return (
    <div className='text-center'>
      <h2 className="text-3xl  font-bold mb-5 border-b-4 inline-block pb-1 px-5 border-primary ">Add A Review</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-11/12 sm:w-7/12 mx-auto">

        <input className='input input-bordered input-md' placeholder='Name' {...register("name", {
          required: {
            value: true,
            message: 'Name is Required'
          }
        })} value={user?.displayName} />
        <label className="label">
          {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
        </label>

        <input className='input input-bordered input-md' placeholder='Rating'
          type={'number'}
          {...register("rating", {
            required: {
              value: true,
              message: 'Rating is Required'
            },

            maxLength: {
              value: 1,
              message: 'please enter 1 number of rating' // JS only: <p>error message</p> TS only support string
            },
            max: {
              value: 5,
              message: 'please rate 0 - 5' // JS only: <p>error message</p> TS only support string
            }

          })} />
        <label className="label">
          {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
          {errors.rating?.type === 'max' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
          {errors.rating?.type === 'maxLength' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}

        </label>




        <textarea className='input h-32 input-bordered input-md' placeholder='Description' {...register("Description", {
          required: {
            value: true,
            message: 'Description is Required'
          }
        })} />
        <label className="label">
          {errors.Description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.Description.message}</span>}
        </label>

        <input
          style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '2px' }} class="hover:bg-white transition w-40 mx-auto text-center bg-primary  hover:text-primary rounded-full text-white border-2 border-primary py-2 cursor-pointer" type={'submit'} value={'Post Review'} />
      </form>
    </div>
    // <div className=" h-screen">
    //   <h2
    //     style={{ fontFamily: "'Rajdhani', sans-serif" }}
    //     className="uppercase text-3xl font-bold text-center py-3"
    //   >
    //     Add your Valuable Feedback
    //   </h2>
    //   <div className="flex justify-center">
    //     <div className=" rounded-md w-32 h-1 bg-[#0D9488]"></div>
    //     <div className=" rounded-md w-4 h-1 mx-2 bg-[#0D9488]"></div>
    //     <div className=" rounded-md w-2 h-1 bg-[#0D9488]"></div>
    //   </div>

    //   <form className="block text-center" onSubmit={handleSubmit(onSubmit)}>
    //     <input
    //       className="p-2 mt-5 rounded border outline-none text-center"
    //       placeholder="Name"
    //       disabled
    //       width="60%"
    //     />{" "}
    //     <br />
    //     <p>Stars</p>
    //     <br />
    //     <textarea
    //       className="p-2 mt-5 rounded border-2  outline-none"
    //       placeholder="Review"
    //       {...register("review")}
    //       name=""
    //       id=""
    //       cols="30"
    //       rows="5"
    //     ></textarea>
    //     <br />
    //     <button
    //       type="submit"
    //       className={`${
    //         darkMode
    //           ? "hover:bg-white bg-teal-900 text-white border border-teal-900 hover:text-teal-900"
    //           : "hover:shadow-md border-2 hover:border-orange-400 text-orange-400 "
    //       } sm:px-7 px-5 transition py-1.5 sm:py-2.5 rounded-[3px] mt-5 uppercase  text-center`}
    //     >
    //       add review{" "}
    //     </button>
    //   </form>
    // </div>
  );
};

export default AddReview;
