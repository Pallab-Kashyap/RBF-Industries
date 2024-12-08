"use client";

import Footer from "./Footer";
import ContactForm from "./ContactForm";
import Link from "next/link";

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
