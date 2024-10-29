"use client";

import React, { useRef } from "react";
import BenifitCard from "./BenifitCard";

function Benifits() {
  const heading = useRef(null);

  const benifits = [
    {
      icon: "/assets/benefits1.svg",
      heading: "Reduced Emissions",
      content: "Biomass briquettes emit less CO₂,improving air quality in factories.",
    },
    {
      icon: "/assets/benefits1.svg",
      heading: "Cost Savings",
      content: "Lower fuel costs compared to coal,helping reduce overall expenses.",
    },
    {
      icon: "/assets/benefits3.svg",
      heading: "Cleaner Workplace",
      content: "Lower ash and dust output keep the factory environment cleaner.",
    },
    {
      icon: "/assets/benefits4.svg",
      heading: "Efficient Combustion",
      content: "High combustion efficiency translates to more energy per unit, lowering fuel consumption.",
    },
    {
      icon: "/assets/benefits5.svg",
      heading: "Versatile Fuel Source",
      content: "Can be used in various industrial boilers with minimal modifications.",
    },
    {
      icon: "/assets/benefits6.svg",
      heading: "Improves Company Reputation",
      content: "Environmentally responsible choice aligns with green industry standards.",
    },
  ];

  return (
    <div className="px-8 sm:px-12 py-6 sm:py-12  bg-[#B5D823]">
        <div className="max-w-[1280px] m-auto">
      <div className="blogs-heading py-4 sm:pb-12">
        <h2 ref={heading} className="text-3xl sm:text-5xl font-medium">
          Benefits of Biomass Briquettes
        </h2>
      </div>
      <div className="grid sm:grid-cols-3 gap-16 pb-4">
        {benifits.map((benefit, index) => (
          <BenifitCard
            key={index}
            icon={benefit.icon}
            heading={benefit.heading}
            content={benefit.content}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Benifits;
