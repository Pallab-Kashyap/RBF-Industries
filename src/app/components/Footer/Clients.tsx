"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface ClientsList {
  logo: string;
}
function Clients() {

  let logos: ClientsList[] = [
    { logo: "/assets/logo.png" },
    { logo: "/assets/logo.png" },
    { logo: "/assets/logo.png" },
    { logo: "/assets/logo.png" },
    { logo: "/assets/logo.png" },
    { logo: "/assets/logo.png" },
    { logo: "/assets/logo.png" },
    { logo: "/assets/logo.png" },
    { logo: "/assets/logo.png" },
    { logo: "/assets/logo.png" },
    { logo: "/assets/logo.png" },
    { logo: "/assets/logo.png" },
    { logo: "/assets/logo.png" },
    { logo: "/assets/logo.png" },
    { logo: "/assets/logo.png" },
    { logo: "/assets/logo.png" },
    { logo: "/assets/logo.png" },
    { logo: "/assets/logo.png" },
  ];

  const [displaySize, setDisplaySize] = useState(600)

  useEffect(() => {
    setDisplaySize(window.innerWidth);
  },[])

  const [currentIndex, setCurrentIndex] = useState(0);
  let logosPerSet = displaySize > 500 ? 6 : 3

  useEffect(() => {
    const rotateLogos = () => {
      const oldLogos = gsap.utils.toArray('.logo'); // Select current logos

      // Animate old logos moving to the right and disappearing
      gsap.to(oldLogos, {
        x: 150,          // Move logos 100px to the right
             // Fade them out
        duration: .7,     // Animation duration 1 second
        stagger: 0.2,    // Stagger the animation for a cascading effect
        onComplete: () => {
          // After the old logos finish animating, change the currentIndex to show the new set
          const nextIndex = (currentIndex + logosPerSet) % logos.length;
          setCurrentIndex(nextIndex);

          const newLogos = gsap.utils.toArray('.logo'); // Select the new logos

          // Animate new logos coming from the right in reverse order (right to left)
          gsap.fromTo(newLogos.reverse(), 
            { x: 150, },  // Start 100px to the left, invisible
            { x: 0,  duration: .7, stagger: 0.2 }  // Animate them back to position (right to left)
          );
        }
      });
    };


    // Rotate logos every 5 seconds
    const interval = setInterval(rotateLogos, 3500);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [currentIndex, logos.length]);

  const displayedLogos = logos.slice(currentIndex, currentIndex + logosPerSet);



  return (
    <div  className='bg-[#1B4449] p-4'>
      <h1 className="text-center text-4xl p-6 text-white">Our Past Clients</h1>
      <div className="flex justify-evenly  gap-4 overflow-hidden">
        {displayedLogos.map((logo, index) => (
          <div className="overflow-hidden  flex-1 flex justify-center">
            <img
              key={index}
              src={logo.logo}
              alt={`Client logo ${index}`}
              className="logo h-24 w-24 object-contain relative"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clients;
