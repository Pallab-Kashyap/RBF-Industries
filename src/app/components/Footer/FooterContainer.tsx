"use client"

import Footer from "./Footer";
import ContactForm from "./ContactForm";
import Clients from "./Clients";
import Link from "next/link";
import PopupMessage from "@/utils/PopupMessage";
import { useState } from "react";

const HomePage: React.FC = () => {

  const [showPopup, setShowPopup] = useState(true);
  const [popMessage, setPopMessage] = useState(false)

  return (
    <>
      <Clients />
      <div className="relative sm:flex justify-between px-4 sm:px-12 2xl:px-0 py-8 max-w-[1280px] m-auto">
        <ContactForm setShowPopup={setShowPopup} setPopMessage={setPopMessage}/>
        <Footer />
        {showPopup && (
        <PopupMessage
          message={popMessage}
          duration={4000} 
          onClose={() => setShowPopup(false)}
        />
      )}
      </div>
      <div className="sm:flex justify-between px-8 sm:px-12  border-t pb-6 border-gray-300 py-6 ">
        <p className="text-[14px] text-gray-600 mb-4 sm:mb-0">
          © 2024 Ravi Bio Fuel Industries. All rights reserved.
        </p>
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 flex-wrap justify-evenly">
          <div>
            <Link
              href="#hero"
              className="text-[14px] text-gray-600 hover:underline"
            >
              Home
            </Link>
          </div>
          <div>
            <a
              href="#about"
              className="text-[13px] text-gray-600 hover:underline"
            >
              About Us
            </a>
          </div>
          <div>
            <a
              href="#production"
              className="text-[13px] text-gray-600 hover:underline"
            >
              Production Process
            </a>
          </div>
          <div>
            <a
              href="#blogs"
              className="text-[13px] text-gray-600 hover:underline"
            >
              Blogs on Biomass Briquettes
            </a>
          </div>
          <div>
            <a
              href="#benefits"
              className="text-[13px] text-gray-600 hover:underline"
            >
              Benefits of Biomass Briquettes
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
