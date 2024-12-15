import Image from "next/image";
import React from "react";
import aboutUsImg from "@/../public/assets/aboutUsPage/aboutUs-hero.jpg";
import abtSec1 from "@/../public/assets/aboutUsPage/aboutSec-1.jpg";
import abtSec2 from "@/../public/assets/aboutUsPage/aboutSec-2.jpg";
import owner1 from "@/../public/assets/aboutUsPage/owner-1.jpg";
import owner2 from "@/../public/assets/aboutUsPage/owner-2.jpg";

// interface LeadershipCardProps {
//   image: string;
//   name: string;
//   title: string;
//   quote: string;
// }

// const LeadershipCard: React.FC<LeadershipCardProps> = ({
//   image,
//   name,
//   title,
//   quote,
// }) => {
//   return (
//     <div className="flex flex-col items-center text-center bg-gray-100 rounded-lg p-6 shadow-md">
//       <img
//         src={image}
//         alt={name}
//         className="w-32 h-32 rounded-full object-cover mb-4"
//       />
//       <h3 className="text-lg font-semibold">{name}</h3>
//       <p className="text-sm text-gray-500">{title}</p>
//       <p className="text-gray-600 mt-4">{quote}</p>
//     </div>
//   );
// };

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white overflow-x-hidden flex flex-col items-center my-20
    ">
      <div className="max-w-7xl sm:px-12 2xl:px-1 space-y-20">
        {/* First Block */}
        <h1 className="text-2xl border-b-2 border-gray-600 w-fit">
          Build for a Sustainable Future
        </h1>

        <div className="relative space-y-20">
          <div className="bg-[#0FB3001A] sm:w-2/6 2xl:w-1/2 h-[575px] flex items-center rounded-l-lg 2xl:rounded-l-lg absolute sm:-left-20 2xl:-left-96 sm:-top-7 2xl:-top-7 z-0"></div>

          <div className="flex justify-between">
            <Image
              src={abtSec1}
              alt="Sustainable Future"
              className="rounded-lg sm:h-3/4 2xl:h-2/4 z-10"
            />

            <div className="text-left max-w-[38ch] sm:max-w-[73ch] relative -top-32 sm:-top-0 bg-white">

              <h2 className="text-xl sm:text-4xl font text-gray-800">
                Your Trusted Partner in Sustainable Energy Solutions for a
                Better and Greener Tomorrow
              </h2>
              <p className="text-lg sm:text-xl">
                At Ravi Bio Fuel Industries, we revolutionize energy usage by
                offering premium biomass briquettes derived from agricultural
                waste. These eco-friendly alternatives empower industries and
                households to transition from conventional fossil fuels to
                sustainable, renewable energy solutions. Our briquettes are
                engineered to deliver superior efficiency, ensuring a
                cost-effective and environmentally conscious energy source.
              </p>
              <p className="text-lg sm:text-xl">
                Through relentless innovation and a commitment to
                sustainability, we aim to address the global energy challenge by
                promoting cleaner practices. Whether it’s powering industrial
                operations or providing heating solutions for homes, our
                products cater to diverse energy needs. Join us in embracing a
                greener future and reducing carbon footprints by making the
                switch to renewable energy with Ravi Bio Fuel Industries.
              </p>
            </div>
          </div>
        </div>

        {/* Second Block */}
        <div className="relative space-y-10">
          <h2 className="sm:mb-8 text-2xl border-b-2 border-gray-600 w-fit">
            Leading the Renewable Energy Revolution
          </h2>
          <div className="md:flex">
            <div className="flex h-screen w-screen justify-between">
              <div className="text-left  max-w-[78ch]">
                <h2 className="text-4xl font text-gray-800">
                  Your Trusted Partner in Sustainable Energy Solutions for a
                  Better and Greener Tomorrow
                </h2>
                <p className="text-xl">
                  Established in 2023, Ravi Bio Fuel Industries is dedicated to
                  transforming agricultural byproducts into a renewable and
                  valuable energy source. By collaborating with local farmers
                  and industries, we create sustainable solutions that promote
                  environmental conservation and empower communities
                </p>
                <p className="text-xl">
                  Our mission extends beyond energy production; it’s about
                  fostering positive change for the planet and future
                  generations. Through innovative practices and a commitment to
                  reducing carbon footprints, we support industrial growth while
                  safeguarding the environment. Together, we’re building a
                  sustainable future where renewable energy solutions enhance
                  efficiency, drive progress, and preserve natural resources.
                  Join us in making a lasting impact with eco-friendly
                  energy alternatives.
                </p>
              </div>

              <Image
                src={abtSec2}
                alt="Sustainable Future"
                className="rounded-lg sm:h-3/4 2xl:h-2/4 z-10"
              />
            </div>
            <div className="bg-[#1B4449] sm:w-2/6 2xl:w-1/2 h-[575px] flex items-center rounded-l-lg 2xl:rounded-l-lg absolute sm:-right-20 2xl:-right-96 sm:top-8 2xl:top-9 z-0"></div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className=" space-y-20">
          <h1 className="text-2xl border-b-2 border-gray-600 w-fit">
            Our Leadership
          </h1>

          <div className="relative">
            <div className="bg-[#0FB3001A] sm:w-2/6 2xl:w-1/2 h-[575px] flex items-center rounded-l-lg 2xl:rounded-l-lg absolute sm:-left-20 2xl:-left-96 sm:-top-7 2xl:-top-7 z-0"></div>

            <div className="flex justify-between">
              <Image
                src={owner1}
                alt="Sustainable Future"
                className="rounded-lg sm:h-3/4 2xl:h-2/4 z-10"
              />
              <div className="text-left  max-w-[72ch] relative">
                <div className="absolute flex -left-4">
                  <svg
                    width="20"
                    height="46"
                    viewBox="0 0 30 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.0884 30.9486C29.0884 22.6359 24.6913 16.0662 15.3899 16.0662C15.559 13.5858 17.3516 7.84713 23.1693 4.73537L21.4781 8.39233e-05C18.4904 0.507439 10.384 4.12655 6.59577 9.13242C3.01231 13.8677 0.00019455 19.9559 0.00019455 30.9486C0.00019455 39.2612 6.51181 46 14.5443 46C23.3384 46 29.0884 39.2612 29.0884 30.9486Z"
                      fill="#0FB300"
                    />
                  </svg>
                  <svg
                    width="20"
                    height="46"
                    viewBox="0 0 30 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.0884 30.9486C29.0884 22.6359 24.6913 16.0662 15.3899 16.0662C15.559 13.5858 17.3516 7.84713 23.1693 4.73537L21.4781 8.39233e-05C18.4904 0.507439 10.384 4.12655 6.59577 9.13242C3.01231 13.8677 0.00019455 19.9559 0.00019455 30.9486C0.00019455 39.2612 6.51181 46 14.5443 46C23.3384 46 29.0884 39.2612 29.0884 30.9486Z"
                      fill="#0FB300"
                    />
                  </svg>
                </div>
                <p className="mt-6 text-3xl tracking-wide leading-relaxed text-gray-600  pl-2 italic ">
                  &nbsp;&nbsp;&nbsp; As the founder of Ravi Bio Fuel Industries,
                  I am deeply committed to sustainability and environmental
                  stewardship. Our focus is on developing renewable energy
                  solutions that not only meet today’s energy needs but also
                  preserve the planet for future generations.
                </p>
                <div className="bg-[#0FB3001A] py-4 px-8 space-y-px rounded-md mt-5 w-4/5">
                  <p className="text-xl">
                    <strong>Dhanraj Tiwari</strong>
                  </p>
                  <p className="text-base">Founder, Ravi Bio Fuel Industries</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-16">
            <div className="flex justify-between">
              <div className="text-left  max-w-[72ch]  relative mt-4 2xl:mt-6">
                <div className="absolute flex -left-0">
                  <svg
                    width="20"
                    height="46"
                    viewBox="0 0 30 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.0884 30.9486C29.0884 22.6359 24.6913 16.0662 15.3899 16.0662C15.559 13.5858 17.3516 7.84713 23.1693 4.73537L21.4781 8.39233e-05C18.4904 0.507439 10.384 4.12655 6.59577 9.13242C3.01231 13.8677 0.00019455 19.9559 0.00019455 30.9486C0.00019455 39.2612 6.51181 46 14.5443 46C23.3384 46 29.0884 39.2612 29.0884 30.9486Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                  <svg
                    width="20"
                    height="46"
                    viewBox="0 0 30 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.0884 30.9486C29.0884 22.6359 24.6913 16.0662 15.3899 16.0662C15.559 13.5858 17.3516 7.84713 23.1693 4.73537L21.4781 8.39233e-05C18.4904 0.507439 10.384 4.12655 6.59577 9.13242C3.01231 13.8677 0.00019455 19.9559 0.00019455 30.9486C0.00019455 39.2612 6.51181 46 14.5443 46C23.3384 46 29.0884 39.2612 29.0884 30.9486Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </div>
                <p className="mt-6 text-3xl tracking-wide leading-relaxed text-gray-600 pl-4 italic">
                  &nbsp;&nbsp;&nbsp; At Ravi Bio Fuel Industries, our policy is
                  built on operational excellence and integrity. I lead with a
                  focus on efficiency, innovation, and customer satisfaction,
                  ensuring that our practices align with our core values of
                  sustainability and responsible growth.
                </p>
                <div className="bg-[#0FB3001A] py-4 px-8 space-y-px rounded-md mt-5 w-4/5">
                  <p className="text-xl">
                    <strong>Ravi Tiwari</strong>
                  </p>
                  <p className="text-base">
                    Managing Head, Ravi Bio Fuel Industries
                  </p>
                </div>
              </div>

              <Image
                src={owner2}
                alt="Sustainable Future"
                className="rounded-xl sm:h-[70vh] 2xl:h-2/4 z-10"
              />
            </div>

            <div className="bg-[#1B4449] sm:w-2/6 2xl:w-1/2 sm:h-[555px] 2xl:h-[591px] flex items-center rounded-l-lg 2xl:rounded-l-lg absolute sm:-right-20 2xl:-right-96 sm:-top-9 2xl:-top-10 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className="my-20">
      <div className="relative w-full h-28 sm:h-64">
        <Image
          src={aboutUsImg}
          alt="aboutUs Image"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute w-1/2 inset-0 bg-gradient-to-r from-[#0D2801] to-transparent"></div>
        <div
          className="text-2xl sm:text-7xl font-semibold text-white relative top-8 sm:top-24 ml-[5vw] sm:ml-[5vw] sm:border-l-4 border-l-2 border-green-500 px-2 sm:px-10 max-w-[1280px] 2xl:ml-[23vw] h-9 sm:h-fit
        flex items-center"
        >
          <h1>About Us</h1>
        </div>
      </div>
    </section>
  );
};

const page = () => {
  return (
    <main className="mt-20">
      <HeroSection />
      <AboutSection />
    </main>
  );
};

export default page;
