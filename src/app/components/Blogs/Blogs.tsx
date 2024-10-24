"use client";
import React, { useRef } from "react";
import BlogCard from "./BlogCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Blogs() {
  const heading = useRef(null);
  const blogCards = useRef<(HTMLDivElement | null)[]>([]);

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
    }).from(
      blogCards.current,
      {
        y: 150,
        opacity: 0,
        delay: 0.1,
        duration: 0.4,
        // ease: "power3.out",
      },
      ">"
    );
  }, []);

  return (
    <div className="px-8 sm:px-12 py-6 sm:py-12 h-fit">
      <div className="max-w-[1280px] m-auto">
        <div className="blogs-heading py-4 sm:pb-12">
          <h2 ref={heading} className="text-3xl sm:text-5xl font-medium">
            Blogs on Biomass Briquettes
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-10 mt-2 pb-10 sm:pb-4">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <BlogCard
              key={item}
              ref={(el) => {
                blogCards.current[index] = el;
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
