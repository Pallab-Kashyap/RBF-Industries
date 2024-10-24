import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/Layer_1.png"
import homeImg from "../../../public/assets/home_page_img.png"

function Hero() {
  return (
    <div className="hero-container flex-1 overflow-hidden relative">

      <Image 
        src={homeImg}
        alt="Home background"
        className="brightness-50 object-cover"
        fill
        priority
      />
      <div className="hero-overlay absolute top-0 flex justify-center sm:justify-between items-center flex-wrap sm:flex-nowrap w-full h-full px-8 sm:px-12 2xl:max-w-[1280px] 2xl:right-40">
        <div className="home-page-logo">
            <Image 
                src={logo} 
                alt="Company logo"
                className="sm:h-[60vh] w-auto"
                width={500}
                height={500}
                priority
            />
        </div>
        <div className="sm:mb-10 text-center">
          <h1 className="uppercase text-4xl sm:text-5xl leading-snug sm:leading-none font-semibold text-white sm:pb-10">Welcome to Biomass</h1>
          <h1 className="uppercase text-4xl sm:text-5xl leading-snug sm:leading-none font-semibold text-white pb-10">Briquettes</h1>
          <p className="text-white text-lg font-medium">Your sustainable energy partner</p>
        </div>
      </div>

    </div>
  );
}

export default Hero;
