import React from "react";
import Mainhero from "./Mainhero.svg";

function MainBody() {
  return (
    <>
      <div className="flex pl-[130px]">
        <div>
          <h1 className=" text-white text-6xl w-[575px] text-start flex mt-[200px]">
            Join a Community of Achievers
          </h1>
          <p className="text-white text-start pt-7">
            Begin your learning journey today!
          </p>
          <p className="color-white btn-contact w-[156px] mt-7 cursor-pointer">Learn More</p>
        </div>
        <img className="pt-24" src={Mainhero} alt="hero" />
      </div>
    </>
  );
}

export default MainBody;
