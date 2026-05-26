import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-5">
      <div className="text-[8vw] uppercase justify-center flex items-center leading-[10vh]">
        The Lake
        <div className="h-[12vw] w-[20vw] rounded-bl-4xl mb-2  rounded-tr-4xl overflow-hidden justify-center flex items-center m-3">
          <Video />
        </div>
        City
      </div>
      <div className="text-[8vw] text-yellow-400 justify-center mt-4 flex items-center uppercase leading-[10vh]">
        Udaipur
      </div>
    </div>
  );
};

export default HomeHeroText;
