"use client";

import Footer from "./Footer";
import ContactForm from "./ContactForm";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="px-4 sm:px-12 2xl:px-0 py-8 max-w-[1280px] m-auto ">
        <div
          className="relative  flex flex-col  sm:flex-row justify-between gap-2 sm:gap-1  w-full p-1 rounded-2xl "
          style={{ boxShadow: "0px 0px 20px 1px rgba(0, 0, 0, 0.2);" }}
        >
          <ContactForm />

          <Footer />
        </div>
      </div>

      {/* footer */}
      <div className="sm:flex justify-between px-8 sm:px-12  border-t pb-6 border-gray-300 py-6 ">
        <div>
          <p className="text-[14px] text-gray-600 mb-4 sm:mb-0">
            © 2024 Ravi Bio Fuel Industries. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 flex-wrap justify-evenly">
          <div>
            <Link
              href="/#hero"
              className="text-[13px] text-gray-600 hover:text-black"
            >
              Home
            </Link>
          </div>
          <div>
            <a
              href="/#about"
              className="text-[13px] text-gray-600 hover:text-black"
            >
              About Us
            </a>
          </div>
          <div>
            <a
              href="/#production"
              className="text-[13px] text-gray-600 hover:text-black"
            >
              Production Process
            </a>
          </div>
          <div>
            <a
              href="/#blogs"
              className="text-[13px] text-gray-600 hover:text-black"
            >
              Blogs on Biomass Briquettes
            </a>
          </div>
          <div>
            <a
              href="/#benefits"
              className="text-[13px] text-gray-600 hover:text-black"
            >
              Benefits of Biomass Briquettes
            </a>
          </div>
        </div>

        {/* Socials */}
        <div className=" flex items-center mt-1 sm:mt-0">
          <Link href={'https://www.instagram.com/rbfindustries?igsh=MWduM2ljaXZ5NG51cA=='} target="_blank">
            <FontAwesomeIcon
              icon={faFacebook}
              className=" hover:text-[#4477b9] hover:scale-150 p-[6px] cursor-pointer"
            />
          </Link>
          <Link href={'https://www.linkedin.com/company/ravi-bio-fuel-industries'} target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              className=" hover:text-[#1877F2] hover:scale-150 p-[6px] cursor-pointer"
            />
          </Link>
          <Link href={'https://www.instagram.com/rbfindustries?igsh=MWduM2ljaXZ5NG51cA=='} target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              className="instagram-gradient hover:text-white  rounded-full p-[6px] cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
