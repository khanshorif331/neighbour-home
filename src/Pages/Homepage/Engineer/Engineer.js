import React, { useContext, useEffect, useState } from "react";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsGithub,
  BsBehance,
} from "react-icons/bs";
import { Autoplay, FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Engineer.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { DarkModeContext } from "../../../App";
import useEngineers from "../../../hooks/useEngineers";

const Engineer = () => {
  const [engineers] = useEngineers([]);
  const [darkMode] = useContext(DarkModeContext);
  // console.log(engineers);
  return (
    <div className="h-[400px] p-6 md:px-16">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          // delay: 2500,
          disableOnInteraction: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper "
      >
        {engineers.map((engineer) => {
          const { picture, name, surname, _id } = engineer;
          return (
            <SwiperSlide key={_id}>
              <div class="my-10">
                <div class={`${darkMode && "text-white"} card shadow-xl`}>
                  <img src={picture} alt="Person" class="card__image" />
                  <p class="card__name">{name}</p>
                  <div class="">
                    {/* <div class="grid-child-posts">902 Post</div>

                    <div class="grid-child-followers">1300 Likes</div> */}
                    <p>{surname}</p>
                  </div>
                  <ul class="social-icons">
                    <li>
                      <a href="/">
                        <BsFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <BsLinkedin />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <BsTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <BsBehance />
                      </a>
                    </li>
                  </ul>
                  <div className="flex">
                    <button
                      class={`${
                        darkMode ? "bg-transparent" : "bg-white"
                      } btn draw-border`}
                    >
                      Follow
                    </button>
                    <button
                      class={`${
                        darkMode ? "bg-transparent" : "bg-white"
                      } btn draw-border`}
                    >
                      Follow
                    </button>
                  </div>
                </div>
              </div>

              {/* <div>
                  <div className={`${darkMode && "text-white"} m-auto  max-w-sm items-center justify-center overflow-hidden  shadow-lg`}>
                    <div className="h-24 bg-[#0D9488]"></div>
                    <div className="-mt-20 flex justify-center">
                      <img className="w-32 h-32 rounded-full" alt="" src={picture} />
                    </div>
                    <div className="mt-5 mb-1 px-3 text-center text-xl">{name}</div>
                    <div className={`${darkMode? "text-gray-400": "text-gray-500"} mb-5 px-3 text-center  uppercase`}>
                      {surname}
                    </div>
                    <blockquote>
                      <p className="mx-4 mb-7 text-center text-base">
                        {bio}
                      </p>
                    </blockquote>
                    <div className="mt-6 py-6 border-t border-slate-300 text-center">
                      <div className="flex justify-around w-2/3 m-auto">
                        <a href="/">
                          <BsFacebook size={23} color={"blue"} />
                        </a>
                        <a href="/">
                          {" "}
                          <BsTwitter size={23} color={"skyblue"} />
                        </a>
                        <a href="/">
                          {" "}
                          <BsLinkedin size={23} color={"#0A66C2"} />
                        </a>
                        <a href="/">
                          <BsGithub size={23} color={"black"} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Engineer;
