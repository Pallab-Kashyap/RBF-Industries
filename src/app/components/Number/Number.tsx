import React from "react";
import { Data } from "./Figures";

const Number = ({ data }: { data: Data }) => {
  return (
    <div  className="px-3  sm:min-h-[115px]">
      <div className="flex items-center justify-between">
        <p className=" text-3xl sm:text-4xl font-sans text-white mb-5 ">{`${data.number}+`}</p>
        <p className="text-white whitespace-nowrap block sm:hidden text-right max-w-[30ch] text-[10px] text-wrap">
          {data.text}
        </p>
      </div>
      <div className="w-full h-0.5 sm:h-1 bg-white/60 sm:bg-white mb-3"></div>
      <p className="text-white/75 whitespace-nowrap hidden sm:block text-sm max-w-[30ch] text-wrap">
        {data.text}
      </p>
    </div>
  );
};

export default Number;
