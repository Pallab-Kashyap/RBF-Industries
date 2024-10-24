"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import logo from "../../../public/assets/logo.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
  const logoRef = useRef(null);
  const ctaButtonRef = useRef(null);
  const navLinksRef = useRef(null);
  const menu = useRef(null);
  const [displayMenu, setDisplayMenu] = useState(false);

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

  useGSAP(() => {
    gsap.from(menu.current, {
      x: 300,
      duration: 0.5,
    });
  }, [displayMenu]);

  return (
    <header className="">
      <nav className="nav flex py-3 px-4 justify-between items-center sm:px-12 relative z-20 max-w-[1280px] m-auto">
        <div ref={logoRef} className=" w-24 sm:w-36">
          <Image src={logo} alt="Company Logo" />
        </div>
        <ul
          ref={navLinksRef}
          className="nav-links sm:flex items-center gap-8 hidden text-lg"
        >
          <li>
            <Link href="#about">About Us</Link>
          </li>
          <li>
            <Link href="#production">Production</Link>
          </li>
          <li>
            <Link href="#blogs">Blogs</Link>
          </li>
          <li>
            <Link href="#benifits">Benifits</Link>
          </li>
          <li>
            <Link href="#footer">Our Clients</Link>
          </li>
        </ul>

        <div
          ref={ctaButtonRef}
          className="cta-button flex items-center gap-3 sm:gap-8"
        >
          <p className="font-bold">EN</p>
          <Link
            href="#footer"
            className="bg-[#f57c00] text-white p-1 px-2 rounded-md sm:p-3 hidden sm:block"
          >
            Contact Us
          </Link>
          <div
            onClick={() => setDisplayMenu((prev) => !prev)}
            className="sm:hidden text-xl"
          >
            {displayMenu ? "\u2716" : "\u2630"}
          </div>
        </div>
        {displayMenu ? (
          <div
            ref={menu}
            className="w-screen absolute top-16 left-0 z-10 bg-[#f7faed] py-6"
          >
            <ul
              ref={navLinksRef}
              className="nav-links flex flex-col items-center text-lg w-full px-6 "
            >
              <li className="border-b-2 border-gray-400/25 w-full py-4">
                <Link href="#about" className="">
                  About Us
                </Link>
              </li>
              <li className="border-b-2 border-gray-400/25 w-full py-4">
                <Link href="#production">Production</Link>
              </li>
              <li className="border-b-2 border-gray-400/25 w-full py-4">
                <Link href="#blogs">Blogs</Link>
              </li>
              <li className="border-b-2 border-gray-400/25 w-full py-4">
                <Link href="#benifits">Benifits</Link>
              </li>
              <li className=" w-full py-4">
                <Link href="#footer">Our Clients</Link>
              </li>
            </ul>
            <div className="text-center py-4">
              <Link
                href="#footer"
                className="bg-[#f57c00] text-white rounded-md p-3 px-10 align-middle"
              >
                Contact Us
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </nav>
    </header>
  );
}

export default Navbar;
