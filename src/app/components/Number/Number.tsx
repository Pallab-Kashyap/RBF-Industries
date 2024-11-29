import React from "react";
import { Data } from "./Figures";

const Number = ({ data }: { data: Data }) => {
  return (
    <div key={data.number} className="px-3 max-w-96 relative">
      <div className="flex items-center justify-between">
        <p className=" text-3xl sm:text-5xl font-sans text-white mb-5 ">{`${data.number}+`}</p>
        <p className="text-white whitespace-nowrap block sm:hidden ">
          {data.text}
        </p>
      </div>
      <div className="w-full h-0.5 sm:h-1 bg-white/60 sm:bg-white mb-3"></div>
      <p className="text-white/75 whitespace-nowrap hidden sm:block text-wrap text-xs  min-h-[4ch]">
        {data.text}
      </p>
    </div>
  );
};

export default Number;