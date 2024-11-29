import Image from "next/image";
import React from "react";
import homeImg from "../../../public/assets/hero-background.jpg"

function Hero() {
  return (
    <div className="hero-container h-[750px] sm:h-screen overflow-hidden relative">

      <Image 
        src={homeImg}
        alt="Home background"
        className="brightness-50 object-cover"
        fill
        priority
      />
      <div className="hero-overlay bg-transparent absolute top-0 flex justify-center sm:justify-between items-center flex-wrap sm:flex-nowrap w-full h-full px-6 sm:px-12 2xl:max-w-[1280px] 2xl:right-40 z-20">
        {/* <div className="home-page-logo">
            <Image 
                src={logo} 
                alt="Company logo"
                className="h-[45vh] sm:h-[60vh] w-auto"
                width={500}
                height={500}
                priority
            />
        </div> */}
        <div className="sm:mt-40">
          <h1 
            className="uppercase text-4xl sm:text-7xl leading-snug sm:leading-none font-semibold text-white mb-6"
            >Ravi Bio Fuel industries</h1>
          {/* <h1 className="uppercase text-4xl sm:text-5xl leading-snug sm:leading-none font-semibold text-white pb-6">Ravi Bio Fuel</h1> */}
          {/* <h1 className="uppercase text-4xl sm:text-5xl leading-snug sm:leading-none font-semibold text-white pb-10">industries</h1> */}
          <p 
          className="text-white text-xl sm:text-4xl font-medium"
          >The Turnkey Solution for Disposition of Manufacturing Industry Assets Worldwide</p>
        </div>
      </div>

      {/* <div className="absolute bottom-0 h-64 w-screen z-10"
        style={{ 
          // background: rgb(9,105,0);
         background:" linear-gradient(0deg, rgba(5,57,0,1) 19%, rgba(5,57,0,0.4852065826330533) 70%, rgba(5,57,0,0) 100%)"         }}
      >

      </div>
       */}

    </div>
  );
}

export default Hero;
