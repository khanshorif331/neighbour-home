import React from "react";
import { BsFacebook, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const Engineer = ({ engineer }) => {
  const { picture, name, surname } = engineer;
  return (
    <div>
      <div class="cursor-pointer m-auto w-96 max-w-lg items-center justify-center overflow-hidden  shadow-2xl">
        <div class="h-24 bg-[#0D9488]"></div>
        <div class="-mt-20 flex justify-center">
          <img class="w-32 h-32 rounded-full" alt="" src={picture} />
        </div>
        <div class="mt-5 mb-1 px-3 text-center text-xl">{name}</div>
        <div class="mb-5 px-3 text-center text-gray-500 uppercase">
          {surname}
        </div>
        <blockquote>
          <p class="mx-4 mb-7 text-center text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            maiores quos, impedit exercitationem minus quidem!
          </p>
        </blockquote>
        <div class="mt-6 py-6 border-t border-slate-300 text-center">
          <div className="flex justify-around w-2/3 m-auto">
            <a className="text-7xl" href="/">
              <BsFacebook
                size={23}
                onMouseOver={({ target }) => (target.style.color = "blue")}
                onMouseOut={({ target }) => (target.style.color = "black")}
                onTransitionEnd={"3s"}
              />
            </a>
            <a href="/">
              {" "}
              <BsTwitter
                size={23}
                color={"skyblue"}
              />
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
