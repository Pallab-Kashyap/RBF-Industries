"use client"

import React, { useState, useRef } from 'react';
import ProductionCards from './ProductoinCards';

interface Step {
  title: string;
  description: string;
  image: string;
  stepNo: number;
}

function Production() {
  const [currentStep, setCurrentStep] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const steps: Step[] = [
    {
      title: "Obtaining Raw Material",
      description: "The first step in our production process involves sourcing high-quality raw materials from trusted suppliers.",
      image: "https://media.istockphoto.com/id/1173024714/photo/peaceful-nature-landscape-background-with-mountains-on-sunset.jpg?s=2048x2048&w=is&k=20&c=t_ikT4Kk4u7whbm3Ceby8HKRYncX21Djmrudoeg1k0c=",
      stepNo: 1,
    },
    {
      title: "Production",
      description: "The first step in our production process involves sourcing high-quality raw materials from trusted suppliers.",
      image: "https://media.istockphoto.com/id/1173024714/photo/peaceful-nature-landscape-background-with-mountains-on-sunset.jpg?s=2048x2048&w=is&k=20&c=t_ikT4Kk4u7whbm3Ceby8HKRYncX21Djmrudoeg1k0c=",
      stepNo: 2,
    },
    {
      title: "Production",
      description: "The first step in our production process involves sourcing high-quality raw materials from trusted suppliers.",
      image: "https://media.istockphoto.com/id/1173024714/photo/peaceful-nature-landscape-background-with-mountains-on-sunset.jpg?s=2048x2048&w=is&k=20&c=t_ikT4Kk4u7whbm3Ceby8HKRYncX21Djmrudoeg1k0c=",
      stepNo: 3,
    },
    {
      title: "Production",
      description: "The first step in our production process involves sourcing high-quality raw materials from trusted suppliers.",
      image: "https://media.istockphoto.com/id/1173024714/photo/peaceful-nature-landscape-background-with-mountains-on-sunset.jpg?s=2048x2048&w=is&k=20&c=t_ikT4Kk4u7whbm3Ceby8HKRYncX21Djmrudoeg1k0c=",
      stepNo: 4,
    },
  ];

  const handleNextCard = () => {
    const nextStep = (currentStep + 1) % steps.length;
    setCurrentStep(nextStep);
    scrollRef.current?.scrollTo({
      left: nextStep * scrollRef.current.offsetWidth,
      behavior: 'smooth'
    });
  };

  const handlePrevCard = () => {
    const prevStep = (currentStep - 1 + steps.length) % steps.length;
    setCurrentStep(prevStep);
    scrollRef.current?.scrollTo({
      left: prevStep * scrollRef.current.offsetWidth,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className="flex flex-col px-4 sm:px-12 py-6 sm:py-12 min-h-screen b-blue-300/35 relative sm:pb-10 text-white bg-[#1B4449]"
    >
      <div className="about-us-heading pt-10 pb-4  sm:py-14 px-4 sm:px-0">
        <h1 className="text-3xl sm:text-5xl font-medium ">Production Process</h1>
      </div>

      <div className="w-full relative sm:py-6">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory sm:block"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {steps.map((step) => (
            <div key={step.stepNo} className="w-full flex-shrink-0 snap-center sm:w-auto">
              <ProductionCards prop={step} />
            </div>
          ))}
        </div>
        <div className="sm:hidden flex justify-between items-center mt-4 px-4">
          <div className="flex space-x-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentStep ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              ></div>
            ))}
          </div>
          <div className="flex space-x-4 ">
            <button 
              onClick={handlePrevCard}
              className="w-10 h-10  text-white rounded-full border-2 border-whtie"
            >
              <span className="w-full h-full leading-5 font-bold text-2xl">&larr;</span>
            </button>
            <button 
              onClick={handleNextCard}
              className="w-10 h-10 bg-transparent text-white rounded-full border-2 border-white"
            >
              <span className="w-full h-full leading-5 font-bold text-2xl">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Production