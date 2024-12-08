"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import aboutImage from "../../../public/assets/about_section_img.jpg";

function About() {
  const image = useRef(null);
  const heading = useRef(null);
  const headingText = useRef(null);
  const text = useRef(null);
  const text2 = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(image.current, {
      scale: 0,
      duration: 1.3,
      opacity: 0,
      // ease: "power3.out",
      scrollTrigger: {
        trigger: heading.current,
        start: "top bottom",
        end: "top center",
        once: true,
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heading.current,
        start: "top bottom",
      },
    });

    tl.from(heading.current, {
      y: 70,
      opacity: 0,
      duration: 0.4,
      // ease: "power3.out",
    })
    .from(
      headingText.current,
      {
        y: 70,
        opacity: 0,
        duration: 0.4
      }
    )
      .from(
        text.current,
        {
          x: -100,
          opacity: 0,
          duration: 0.4,
          // ease: "power3.out",
        },
        ">"
      )
      .from(
        text2.current,
        {
          x: -100,
          opacity: 0,
          duration: 0.4,
          // ease: "power3.out",
        },
        ">"
      );
  }, []);

  return (
    <div className="w-full px-4 sm:px-12 max-w-[1280px] mx-auto h-sm:mt-56 h-md:mt-60 mt-64 sm:mt-32">
      <div className="about-us-heading text-center space-y-10 ">
        <h1 ref={heading} className="text-3xl sm:text-5xl font-medium ">
          Get to know Ravi Bio Fuel Industries
        </h1>

        <p
        ref={headingText}
        className="text-xl">
          Hilco Industrial Acquisitions – a Hilco Global Company – is a premiere
          purchaser of machinery and equipment utilized across the manufacturing
          industry
        </p>
      </div>

      <div className="about-container sm:flex justify-between gap-28 sm:py-20">
        <div className="about-image flex justify-center order-1 sm:order-2 mt-12 sm:mt-10">
          <Image
            ref={image}
            src={aboutImage}
            alt="About Us"
            className="rounded-xl h-[500px] w-[400px]"
          />
        </div>

        <div className="about-text sm:w-[70ch] sm:space-y-6 order-2 sm:order-1 mt-12 sm:mt-0">
          <div>
            <p ref={text} className="text-md  text-justify">
              Founded in 2023 by{" "}
              <strong>Dhanraj Tiwari, Ravi Bio Fuel Industries</strong> has
              swiftly established itself as a leading player in the biomass
              briquette manufacturing and trading sector. With a mission to
              promote sustainable energy solutions, the company specializes in
              the production of high-quality{" "}
              <strong>Briquettes, an Eco-friendly</strong> alternative to
              conventional fossil fuels.
            </p>
            <br className="hidden sm:block" />
            <p ref={text2} className="hidden sm:block">
              Ravi Bio Fuel Industries, we are committed to harnessing renewable
              energy to reduce <strong>environmental impact</strong> and
              contribute to a greener future. Our Biomass Briquettes are crafted
              from agricultural waste, offering an efficient and cost- effective
              fuel option for industries and households alike.
              <br />
              <br />
              <strong>Dhanraj Tiwari&apos;s</strong> vision laid the foundation
              for this enterprise, aiming to provide an environmentally
              conscious solution to{" "}
              <strong>India&apos;s growing energy demands</strong>. With a focus
              on innovation, quality, and customer satisfaction, we are not only
              helping to <strong>reduce carbon emissions</strong> but also
              supporting local farmers by converting their waste into valuable
              energy resources.
            </p>
          </div>

          <div className="space-y-2 sm:space-y-1 mt-8 sm:mt-0 mb-16 sm:mb-0">

            <div className="flex items-center bg-black text-white w-fit py-4 px-8 sm:px-6 rounded-full gap-4 group cursor-pointer">
              <div className="">
                Learn More About Hilco Industrial Acquisitions
              </div>
              <p className=" text-xl font-bold text-blue-500 relative right-0 transition-all duration-500 group-hover:-right-3 ">&#8599;</p>
            </div>

            <div className="flex items-center bg-black text-white w-fit py-4 px-8 sm:px-6 rounded-full gap-4 group cursor-pointer">
              <div className="">
                Click Here for Current Sales with Hilco Industrial Acquisitions
              </div>
              <p className=" text-xl font-bold text-blue-500  relative right-0 transition-all duration-500 group-hover:-right-3">&#8599;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
