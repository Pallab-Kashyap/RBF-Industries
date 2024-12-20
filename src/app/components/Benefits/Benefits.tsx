"use client";

import React, { useRef } from "react";
import BenefitCard from "./BenefitCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Benifits() {
  const heading = useRef(null);
  const benefitCards1 = useRef<(HTMLDivElement | null)[]>([]);
  const benefitCards2 = useRef<(HTMLDivElement | null)[]>([]);
  const benefitCards3 = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heading.current,
        start: "top bottom",
      },
    });

    tl.from(heading.current, {
      x: -100,
      opacity: 0,
      duration: 0.4,
      // ease: "power3.out",
    })
    .add(
    gsap.from(
      benefitCards1.current,
      {
        x: -200,
        opacity: 0,
        delay: 0.1,
        duration: 0.8,
        // ease: "power3.out",
      }),
      0
    )
    .add(
    gsap.from(
        benefitCards3.current,
        {
          x: 200,
          opacity: 0,
          delay: 0.1,
          duration: 0.8,
          // ease: "power3.out",
        }),
        0
      )
    .add(
    gsap.from(
        benefitCards2.current,
        {
          y: 400,
          opacity: 0,
          delay: 0.1,
          duration: 0.8,
          // ease: "power3.out",
        }),
        0
      )
      

  }, []);

  const benifits = [
    {
      icon: "/assets/benefits1.svg",
      heading: "Reduced Emissions",
      content:
        "Biomass briquettes emit less CO₂,improving air quality in factories.",
    },
    {
      icon: "/assets/benefits1.svg",
      heading: "Cost Savings",
      content:
        "Lower fuel costs compared to coal,helping reduce overall expenses.",
    },
    {
      icon: "/assets/benefits3.svg",
      heading: "Cleaner Workplace",
      content:
        "Lower ash and dust output keep the factory environment cleaner.",
    },
    {
      icon: "/assets/benefits4.svg",
      heading: "Efficient Combustion",
      content:
        "High combustion efficiency translates to more energy per unit, lowering fuel consumption.",
    },
    {
      icon: "/assets/benefits5.svg",
      heading: "Versatile Fuel Source",
      content:
        "Can be used in various industrial boilers with minimal modifications.",
    },
    {
      icon: "/assets/benefits6.svg",
      heading: "Improves Company Reputation",
      content:
        "Environmentally responsible choice aligns with green industry standards.",
    },
  ];

  return (
    <div className="px-8 sm:px-12 py-6 sm:py-12 bg-[#B5D823] overflow-hidden">
      <div className="max-w-[1280px] m-auto">
        <div className="blogs-heading py-8 pb-10 sm:pb-12">
          <h2 ref={heading} className="text-3xl sm:text-5xl font-medium">
            Benefits of Biomass Briquettes
          </h2>
        </div>

        {/* Mobile */}
        <div className="sm:hidden grid gap-8 pb-4">
        {benifits.map((benefit, index) => (
                <BenefitCard
                key={index}
                icon={benefit.icon}
                heading={benefit.heading}
                content={benefit.content}
                ref={(el) => {
                  benefitCards2.current[index] = el;
                }}
              />
                ))}
        </div>

        {/* Laptop */}
        <div className="hidden sm:grid grid-cols-3 gap-12 pb-4">
          {benifits.map((benefit, index) => {
            if (index === 0 || index === 3)
              return (
                <BenefitCard
                  key={index}
                  icon={benefit.icon}
                  heading={benefit.heading}
                  content={benefit.content}
                  ref={(el) => {
                    benefitCards1.current[index] = el;
                  }}
                />
              );
            else if (index === 2 || index === 5)
              return (
                <BenefitCard
                  key={index}
                  icon={benefit.icon}
                  heading={benefit.heading}
                  content={benefit.content}
                  ref={(el) => {
                    benefitCards3.current[index] = el;
                  }}
                />
              )
            else
              return (
                <BenefitCard
                  key={index}
                  icon={benefit.icon}
                  heading={benefit.heading}
                  content={benefit.content}
                  ref={(el) => {
                    benefitCards2.current[index] = el;
                  }}
                />
              );
          })}
        </div>
      </div>
    </div>
  );
}

export default Benifits;
