import React from "react";
import { BsFacebook, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const Engineer = ({ engineer }) => {
  const { picture, name, surname, bio } = engineer;
  return (
    <div>
      <div className=" m-auto  max-w-sm items-center justify-center overflow-hidden pt-6 shadow-lg">
        <div className="h-24 bg-[#0D9488]"></div>
        <div className="-mt-20 flex justify-center">
          <img className="w-28 h-28 rounded-full" alt="" src={picture} />
        </div>
        <div className="mt-5 mb-1 px-3 text-center text-xl">{name}</div>
        <div className="mb-5 px-3 text-center text-gray-500 uppercase">
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
    </div>
  );
};

export default Engineer;
