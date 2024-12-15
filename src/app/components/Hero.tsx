import Image from "next/image";
import React from "react";
import homeImg from "../../../public/assets/hero-background.jpg";

function Hero() {
  return (
    <div className="hero-container min-h-[600px] h-[90vh] sm:h-screen overflow-hidden relative">
      <Image
        src={homeImg}
        alt="Home background"
        className="brightness-50 object-cover"
        fill
        priority
      />
      <div className="hero-overlay bg-transparent absolute top-0 flex justify-center sm:justify-between items-center flex-wrap sm:flex-nowrap w-full h-full px-6 sm:px-12 2xl:px-2 2xl:max-w-[1280px] 2xl:right-40 z-20">
        <div className="sm:mt-40">
          <h1 className="text-black/10">rbf industries</h1>
          <h1 className="uppercase text-4xl sm:text-7xl leading-snug sm:leading-none font-semibold text-white mb-6">
            Ravi Bio Fuel industries
          </h1>
          <p className="text-white text-xl sm:text-4xl font-medium">
          Driving sustainability with renewable energy for a cleaner, greener future.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
