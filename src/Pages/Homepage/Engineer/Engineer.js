import React, { useEffect, useState } from "react";
import { BsFacebook, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { Autoplay, FreeMode, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  FaCode,
  FaDesktop,
  FaMobileAlt,
  FaCamera,
  FaFile,
} from 'react-icons/fa'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Engineer = () => {
  const [engineers, setEngineers] = useState([]);
  useEffect(() => {
    fetch("engineers.json")
      .then((res) => res.json())
      .then((data) => setEngineers(data));
  }, []);
  // console.log(engineers);
  return (
    <div className='h-[400px] p-6 md:px-16'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
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
        className='mySwiper '
      >

        {
          engineers.map(engineer => {
            const { picture, name, surname } = engineer;
            return (
              <SwiperSlide>
                <div>
                  <div className=" m-auto  max-w-sm items-center justify-center overflow-hidden  shadow-lg">
                    <div className="h-24 bg-[#0D9488]"></div>
                    <div className="-mt-20 flex justify-center">
                      <img className="w-32 h-32 rounded-full" alt="" src={picture} />
                    </div>
                    <div className="mt-5 mb-1 px-3 text-center text-xl">{name}</div>
                    <div className="mb-5 px-3 text-center text-gray-500 uppercase">
                      {surname}
                    </div>
                    <blockquote>
                      <p className="mx-4 mb-7 text-center text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
                        maiores quos, impedit exercitationem minus quidem!
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
                </div>
              </SwiperSlide>
            )
          })
        }






      </Swiper>
    </div>
  )
  // const { picture, name, surname } = engineer;
  // return (
  //   <div>
  //     <div className=" m-auto  max-w-sm items-center justify-center overflow-hidden  shadow-lg">
  //       <div className="h-24 bg-[#0D9488]"></div>
  //       <div className="-mt-20 flex justify-center">
  //         <img className="w-32 h-32 rounded-full" alt="" src={picture} />
  //       </div>
  //       <div className="mt-5 mb-1 px-3 text-center text-xl">{name}</div>
  //       <div className="mb-5 px-3 text-center text-gray-500 uppercase">
  //         {surname}
  //       </div>
  //       <blockquote>
  //         <p className="mx-4 mb-7 text-center text-base">
  //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
  //           maiores quos, impedit exercitationem minus quidem!
  //         </p>
  //       </blockquote>
  //       <div className="mt-6 py-6 border-t border-slate-300 text-center">
  //         <div className="flex justify-around w-2/3 m-auto">
  //           <a href="/">
  //             <BsFacebook size={23} color={"blue"} />
  //           </a>
  //           <a href="/">
  //             {" "}
  //             <BsTwitter size={23} color={"skyblue"} />
  //           </a>
  //           <a href="/">
  //             {" "}
  //             <BsLinkedin size={23} color={"#0A66C2"} />
  //           </a>
  //           <a href="/">
  //             <BsGithub size={23} color={"black"} />
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Engineer;
