"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import logo from "../../../public/assets/logo.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
  const logoRef = useRef(null);
  const ctaButtonRef = useRef(null);
  const navLinksRef = useRef(null);


  useGSAP(() => {
    gsap.from(logoRef.current, {
      y: -200,
      duration: 0.4,
      opacity: 0,
    });
  }, []);

  useGSAP(() => {
    gsap.from(ctaButtonRef.current, {
      y: -200,
      duration: 0.4,
      opacity: 0,
    });
  }, []);

  useGSAP(() => {
    gsap.from(navLinksRef.current, {
      y: -200,
      duration: 0.4,
      delay: 0.1,
      opacity: 0,
    });
  }, []);


  return (
    <header className="">
      <nav className="nav flex py-3 px-4 justify-between items-center sm:px-12">
        <div ref={logoRef} className="logo w-24 sm:w-36 ">
          <Image src={logo} alt="Company Logo" />
        </div>
        <ul
          ref={navLinksRef}
          className="nav-links sm:flex items-center gap-8 hidden "
        >
          <li>
            <Link href="#about">about Us</Link>
          </li>
          <li>
            <Link href="#benefits">Why Us ?</Link>
          </li>
          <li>
            <Link href="#blogs">Our Clients</Link>
          </li>
          <li>
            <Link href="#testimonial">Portfolio</Link>
          </li>
          <li>
            <Link href="#clients">Resources</Link>
          </li>
        </ul>

        <div
          ref={ctaButtonRef}
          className="cta-button flex items-center gap-3 sm:gap-8"
        >
          <p className="font-bold">EN</p>
          <Link
            href="#contact"
            className="bg-[#f57c00] text-white p-1 px-2 rounded-md sm:p-3"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
