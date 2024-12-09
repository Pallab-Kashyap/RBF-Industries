"use client"

import React, { useEffect, useState } from "react";
import { Data } from "./Figures";

const Number = ({ data }: { data: Data }) => {

  const [count, setCount] = useState(0);
  const target = data.number;
  const duration = 2300;

  useEffect(() => {
    let animationFrameId: number;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * target);
      
      setCount(currentCount);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [target, duration]);

  return (
    <div  className="px-3  sm:min-h-[115px]">
      <div className="flex items-center justify-between">
        <p className=" text-3xl sm:text-4xl font-sans text-white mb-5 ">{`${count.toLocaleString()}+`}</p>
        <p className="text-white whitespace-nowrap block sm:hidden text-right max-w-[30ch] text-[10px] text-wrap">
          {data.text}
        </p>
      </div>
      <div className="w-full h-0.5 sm:h-1 bg-white/60 sm:bg-white mb-3"></div>

      {/* LAPTOP */}
      <p className="text-white/75 whitespace-nowrap hidden sm:block text-sm max-w-[23ch] text-wrap">
        {data.text}
      </p>
    </div>
  );
};

export default Number;
