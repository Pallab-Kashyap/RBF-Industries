"use client"
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
      duration: .4,
      // ease: "power3.out",
    })
    .from(blogCards.current, {
      y: 150,
      opacity: 0,
      delay: .1,
      duration: .4,
      // ease: "power3.out",
    }, ">")
  }, []);

  return (
    <div className="px-8 sm:px-12 sm:py-12 h-fit">
      <div className="blogs-heading py-6 sm:pb-10">
        <h2 ref={heading} className="text-3xl sm:text-5xl font-medium">Blogs on Biomass Briquettes</h2>
      </div>
      <div className="grid sm:grid-cols-3 gap-10 mt-2 pb-10 sm:pb-0">
        {[1,2,3,4,5,6].map((item, index) => (
          <BlogCard key={item} ref={(el) => {
            blogCards.current[index] = el;
          }} />
        ))}

      </div>
    </div>
  );
}

export default Blogs;
