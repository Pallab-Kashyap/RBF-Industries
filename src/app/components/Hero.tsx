import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/Layer_1.png"
import homeImg from "../../../public/assets/home_page_img.png"

function Hero() {
  return (
    <div className="hero-container flex-1 overflow-hidden relative">

      <Image 
        src={homeImg}
        alt="jife"
        className=" brightness-75 h-full object-cover"
      />
      <div className="hero-overlay absolute top-0 flex justify-between items-center flex-wrap w-full h-full px-12">
        <div className="home-page-logo">
            <Image 
                src={logo} 
                alt="company logo"
                className="sm:h-[60vh] w-auto"
            />
        </div>
        <div>
          <h1 className="uppercase text-2xl">Welcome to Biomass Briquettes</h1>
          <p>Your sustainable energy partner</p>
          <a href="#about" className="hero-btn">
            Learn More
          </a>
        </div>
      </div>

    </div>
  );
}

export default Hero;
