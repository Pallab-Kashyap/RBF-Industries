"use client";

import React, { useState, useRef } from "react";
import ProductionCards from "./ProductoinCards";
import { StaticImageData } from "next/image";
import {
  productionImg1,
  productionImg2,
  productionImg3,
  productionImg4,
} from "../../../../public/assets/productionImg";

export interface Step {
  title: string;
  description: string;
  image: StaticImageData;
  stepNo: number;
}

function Production() {
  const [currentStep, setCurrentStep] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const steps: Step[] = [
    {
      title: "Obtaining Raw Material",
      description:
        "Our production process begins by sourcing premium-grade raw materials from reliable, trusted suppliers. We prioritize quality to ensure our end products meet the highest standards",
      image: productionImg1,
      stepNo: 1,
    },
    {
      title: "Material Evaluation",
      description:
        "Our experts carefully assess the raw materials, conducting stringent quality checks to ensure they meet our specifications. Only materials that pass this evaluation are prepared for the next stage of processing.",
      image: productionImg2,
      stepNo: 2,
    },
    {
      title: "Mixing and Production",
      description:
        "Approved materials are mixed to create the ideal composition for briquette formation. They are then fed into our state-of-the-art briquette pressing machines, resulting in durable, high-quality briquettes that meet our performance standards.",
      image: productionImg3,
      stepNo: 3,
    },
    {
      title: "Packaging and Dispatch",
      description:
        "The finished briquettes are packaged securely and dispatched through our network of trusted transport partners, ensuring safe and timely delivery to our clients.",
      image: productionImg4,
      stepNo: 4,
    },
  ];

  const handleNextCard = () => {
    const nextStep = (currentStep + 1) % steps.length;
    setCurrentStep(nextStep);
    scrollRef.current?.scrollTo({
      left: nextStep * scrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const handlePrevCard = () => {
    const prevStep = (currentStep - 1 + steps.length) % steps.length;
    setCurrentStep(prevStep);
    scrollRef.current?.scrollTo({
      left: prevStep * scrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col px-4 sm:px-12 py-6 min-h-screen relative sm:pb-10 text-white max-w-[1280px] mx-auto">
      <div className="about-us-heading pt-10 pb-4  sm:py-10 px-4 sm:px-0">
        <h1 className="text-3xl sm:text-5xl font-medium ">
          Production Process
        </h1>
      </div>


      <div className="w-full relative sm:py-6">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory sm:block"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {steps.map((step) => (
            <div
              key={step.stepNo}
              className="w-full flex-shrink-0 "
            >
              <ProductionCards prop={step} />
            </div>
          ))}
        </div>


        {/* MOBILE */}
        <div className="sm:hidden flex justify-between items-center mt-4 px-4">
          <div className="flex space-x-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentStep ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
          <div className="flex space-x-4 ">
            <button
              onClick={handlePrevCard}
              className="w-10 h-10  text-white rounded-full border-2 border-whtie"
            >
              <span className="w-full h-full leading-5 font-bold text-2xl">
                &larr;
              </span>
            </button>
            <button
              onClick={handleNextCard}
              className="w-10 h-10 bg-transparent text-white rounded-full border-2 border-white"
            >
              <span className="w-full h-full leading-5 font-bold text-2xl">
                &rarr;
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Production;
