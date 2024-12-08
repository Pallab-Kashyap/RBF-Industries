"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
} from "@/../public/assets/clients/Clients";
import Image from "next/image";

const Clients = () => {

  const logos = [
    { logo: client1 },
    { logo: client2 },
    { logo: client3 },
    { logo: client4 },
    { logo: client5 },
    { logo: client6 },
    { logo: client7 },
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
    <div className=" p-4 sm:px-12 2xl:px-0 bg-white">
      <h1 className="text-center text-2xl sm:text-4xl p-3 sm:p-6 text-black">
        Our Past Clients
      </h1>

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
              <Image
                src={logo.logo}
                alt={`Client logo ${index}`}
                className="sm:h-24 sm:w-24 h-16 w-16 object-contain"
              />
            </div>
          ))}
          {/* {DUP} */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex flex-shrink-0 items-center justify-center sm:w-48 mx-4"
            >
              <Image
                src={logo.logo}
                alt={`Client logo ${index}`}
                className="sm:h-24 sm:w-24 h-16 w-16 object-contain"
              />
            </div>
          ))}
          {/* {DUP} */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex flex-shrink-0 items-center justify-center sm:w-48 mx-4"
            >
              <Image
                src={logo.logo}
                alt={`Client logo ${index}`}
                className="sm:h-24 sm:w-24 h-16 w-16 object-contain"
              />
            </div>
          ))}
          {/* {DUP} */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex flex-shrink-0 items-center justify-center sm:w-48 mx-4"
            >
              <Image
                src={logo.logo}
                alt={`Client logo ${index}`}
                className="sm:h-24 sm:w-24 h-16 w-16 object-contain"
              />
            </div>
          ))}
          {/* {DUP} */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex flex-shrink-0 items-center justify-center sm:w-48 mx-4"
            >
              <Image
                src={logo.logo}
                alt={`Client logo ${index}`}
                className="sm:h-24 sm:w-24 h-16 w-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
