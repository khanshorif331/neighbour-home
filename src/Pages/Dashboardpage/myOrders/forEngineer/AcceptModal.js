import axios from "axios";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const AcceptModal = ({ booking, refetch, setBookingModal }) => {
    console.log(booking?._id);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const form = useRef();

  // const sendEmail = (data) => {
  //   console.log(data);
  //   setBookingModal(false);
    // emailjs.sendForm('neighbourHome', 'template_2jdv676', form.current, 'fjfswEx9fDSDkZnui')
    //   .then((res) => {
    //     console.log(res)
    //     if (res.status === 200) {
    //       toast.success("Message sent successfully", { id: 'success' })
    //       reset()
    //     }
    //   }, (err) => {
    //     toast.error("Message not sent", { id: 'error' })
    //   })
  // };
  const onSubmit = async (data) => {
    const updateStatus = {
      ...data,
      status: "complete",
    };
    console.log(updateStatus);
    axios
      .put(
        `https://neighbour-home--server.herokuapp.com/booking/${booking._id}`,
        updateStatus
      )
      .then((data) => {
        console.log(data.data);

        toast.success(`this hiring request has been Successfully accept`);
        refetch()
      })
      .catch((error) => {
        console.log(error.response.data);
        if (error.response.status === 403) {
          toast.error("You are Not Admin");
        }
      });
    setBookingModal(false);
    reset();
    // console.log('update done');
  };
  return (
    <div className="">
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box mt-24">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {/* <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3> */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-3 justify-items-center mt-5"
          >
            <h3 className="text-xl text-success">
              Give a description and price for your Deal
            </h3>
            <input
              className="w-full lg:w-[98%] font-serif font-bold px-4 py-2 border-2 border-teal-700 outline-teal-900 rounded-lg focus:bg-slate-200"
              type="number"
              name="price"
              placeholder="Amount"
              id="price"
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is Required",
                },
              })}
            />
            <textarea
              name="description"
              id="description"
              placeholder="write a booking description..."
              className="w-full lg:w-[98%] font-serif font-bold text-justify px-4 py-2 mt-2 border-2 border-teal-700 outline-teal-900 rounded-lg overflow-scroll focus:bg-slate-200"
              rows="5"
              {...register("description", {
                required: {
                  value: true,
                  message: "Description is Required",
                },
              })}
            ></textarea>
            <button
              type="submit"
              className="btn btn-sm bg-teal-800 mt-1  h-5 sm:h-7  ml-2 mr-2 sm:px-3 uppercase rounded-lg text-white font-bold duration-1000"
            >
              
              confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AcceptModal;
