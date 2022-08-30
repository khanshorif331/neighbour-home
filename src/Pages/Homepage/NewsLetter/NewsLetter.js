import React from "react";
import { Fade } from "react-reveal";

const NewsLetter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // toast.success(`Successfully Subscibed`)
    e.target.value.reset();
  };
  return (
    <div className="mt-7 sm:mt-10">
      {/* <h1 className="text-3xl sm:text-4xl border-b-4  mb-3 mt-4 border-primary inline-block">News Letter</h1> */}
      <div
        style={{
          backgroundImage:
            "url(https://i.ibb.co/fpXYGwM/abstract-architectural-background-building-lines-futuristic-backdrop-architecture-building-construct.jpg)",
          fontFamily: "Oswald",
        }}
        className="h-[300px]  sm:h-[400px] text-center bg-center bg-cover  w-full px-2 rounded-md sm:rounded-none sm:px-0  flex justify-center items-center text-white Container"
      >
        <div>
          <Fade top duration={2000}>
            <h3 className="text-xl sm:text-2xl uppercase text-white tracking-wider">
              SPECIAL <span className="text-primary">OFFER</span> FOR
              SUBSCRIPTION
            </h3>
            <h2
              style={{ fontFamily: "" }}
              className=" text-2xl sm:text-3xl font-semibold  sm:font-bold"
            >
              GET INSTANT DISCOUNT FOR MEMBERSHIP
            </h2>
            <p
              style={{ fontFamily: "Open Sans,sans-serif" }}
              className="italic text-white sm:text-base text-sm py-2"
            >
              Subscribe our newsletter and all latest news of our latest
              product, promotion and offers{" "}
            </p>
          </Fade>
          <Fade bottom duration={2000}>
            <form
              onSubmit={handleSubmit}
              style={{ fontFamily: "Open Sans,sans-serif" }}
            >
              <input
                className="h-10 sm:h-12 w-7/12 sm:w-6/12 px-5 mx-auto border-2 bg-inherit rounded-full"
                type="email"
                name="email"
                id=""
                placeholder="Enter Email"
                required
              />
              <button
                type="submit"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  letterSpacing: "2px",
                }}
                className=" transition w-32 sm:w-40 mx-auto text-center bg-white text-emerald-900  hover:bg-teal-900 hover:text-white rounded-full  border-2 border-primary py-1.5 sm:py-2.5 ml-[-40px]"
              >
                Subscribe
              </button>
            </form>
          </Fade>
        </div>
      </div>
    </div>
  );
  // return (
  //      <div style={{fontFamily:"'Rajdhani', sans-serif"}} className=' bg-teal-800 py-16 px-20 flex text-white'>
  //           <h1 className="text-6xl w-4/12 font-bold  border-r">Subscribe Our News Letter</h1>
  //           <div className='w-8/12 text-left'>
  //                <input className='w-8/12 mr-1 h-14' type="text" />
  //           </div>
  //      </div>
  // );
};

export default NewsLetter;
