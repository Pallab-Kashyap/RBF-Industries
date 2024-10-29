"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Clients = () => {
  const logos = [
    { logo: "/assets/logo.svg" },
    { logo: "/assets/logo.svg" },
    { logo: "/assets/logo.svg" },
    { logo: "/assets/logo.svg" },
    { logo: "/assets/logo.svg" },
    { logo: "/assets/logo.svg" },
  ];

  const marqueeRef = useRef(null);
  // const [displaySize, setDisplaySize] = useState(window.innerWidth);

  // useEffect(()=>{
  //   setDisplaySize(window.innerWidth)
  // },[])

  useEffect(() => {
    
    // const duration = displaySize < 600 ? 18 : 40

    const container = marqueeRef.current;

    if (!container) return;

    const animation = gsap.to(container, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1,
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className="bg-[#1B4449] p-4 sm:px-12 2xl:px-0">
      <h1 className="text-center text-2xl sm:text-4xl p-3 sm:p-6 text-white">Our Past Clients</h1>

      <div className="relative overflow-hidden  max-w-[1280px] sm:mx-auto ">
        <div
          ref={marqueeRef}
          className="flex w-[500%] transition-transform will-change-transform"
        >
          {/* Original set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex flex-shrink-0 items-center justify-center sm:w-48 mx-4"
            >
              <img
                src={logo.logo}
                alt={`Client logo ${index}`}
                className="sm:h-24 sm:w-24 h-16 w-16 object-contain"
              />
              <p className="text-white">{index}</p>
            </div>
          ))}
          {/* {DUP} */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex flex-shrink-0 items-center justify-center sm:w-48 mx-4"
            >
              <img
                src={logo.logo}
                alt={`Client logo ${index}`}
                className="sm:h-24 sm:w-24 h-16 w-16 object-contain"
              />
              <p className="text-white">{index}</p>
            </div>
          ))}
          {/* {DUP} */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex flex-shrink-0 items-center justify-center sm:w-48 mx-4"
            >
              <img
                src={logo.logo}
                alt={`Client logo ${index}`}
                className="sm:h-24 sm:w-24 h-16 w-16 object-contain"
              />
              <p className="text-white">{index}</p>
            </div>
          ))}
          {/* {DUP} */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex flex-shrink-0 items-center justify-center sm:w-48 mx-4"
            >
              <img
                src={logo.logo}
                alt={`Client logo ${index}`}
                className="sm:h-24 sm:w-24 h-16 w-16 object-contain"
              />
              <p className="text-white">{index}</p>
            </div>
          ))}
          {/* {DUP} */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex flex-shrink-0 items-center justify-center sm:w-48 mx-4"
            >
              <img
                src={logo.logo}
                alt={`Client logo ${index}`}
                className="sm:h-24 sm:w-24 h-16 w-16 object-contain"
              />
              <p className="text-white">{index}</p>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Clients;
