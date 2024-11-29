"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StaticImageData } from "next/image";
import { blogImg1, blogImg2, blogImg3, blogImg4, blogImg5, blogImg6 } from "../../../../public/assets/blogImg";
import BlogCard from "./BlogCard";

export interface Blog {
  img: StaticImageData,
  title: string,
  description: string,
  content?:string
}

function Blogs() {
  
  const heading = useRef(null);
  const blogCards = useRef<(HTMLDivElement | null)[]>([]);

 const blogList: Blog[] = [
    {
      img: blogImg1,
      title: 'What Are Biomass Briquettes',
      description: 'Biomass briquettes are cylindrical blocks made from organic materials like agricultural residue, forestry waste, or organic industrial by-products.'
    },
    {
      img: blogImg2,
      title: `Fueling India's Green Future`,
      description: `India, a nation grappling with energy security and environmental concerns, is increasingly turning towards sustainable alternatives. One such promising solution is biomass briquettes, a clean and efficient fuel source derived from agricultural residues. The Indian government has recognized the potential of biomass briquettes and has implemented several policies to promote their adoption.`,
      
    },
    {
      img: blogImg3,
      title: '',
      description: '',
    },
    {
      img: blogImg4,
      title: '',
      description: '',
    },
    {
      img: blogImg5,
      title: '',
      description: '',
    },
    {
      img: blogImg6,
      title: '',
      description: '',
    },
  ]

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
        <div className="blogs-heading py-8 pb-10 sm:pb-12">
          <h2 ref={heading} className="text-3xl sm:text-5xl font-medium">
            Blogs on Biomass Briquettes
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-10 mt-2 pb-10 sm:pb-4">
          {blogList.map((item, index) => (
            <BlogCard
              key={index}
              blog={item}
              blogNo={index}
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
