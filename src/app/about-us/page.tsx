import Image from "next/image";
import React from "react";
import aboutUsImg from "@/../public/assets/aboutUsPage/aboutUs-hero.jpeg";
import abtSec2Mob from "@/../public/assets/aboutUsPage/aboutSec-2.jpeg";
import abtSec1 from "@/../public/assets/aboutUsPage/aboutSec-1.jpg";
import abtSec2 from "@/../public/assets/aboutUsPage/aboutSec-2.jpg";
import owner1 from "@/../public/assets/aboutUsPage/owner-1.jpg";
import owner2 from "@/../public/assets/aboutUsPage/owner-2.jpg";
import Clients from "../components/Footer/Clients";

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

const AboutSection = () => {
  return (
    <section
      className="bg-white overflow-x-hidden mt-10 sm:mt-20 mb-5 sm:mb-10 sm:pb-10"
    >
      <div className="sm:px-12 2xl:px-1 sm:space-y-20  max-w-[1280px] xl:mx-auto">
        {/* First Block */}
        <div className="relative sm:space-y-10">
          <h1 className="text-2xl border-b-2 border-gray-600 w-fit ml-[5vw] sm:ml-0 mb-4 sm:mb-0">
            Build for a Sustainable Future
          </h1>

          <div className="relative sm:space-y-16">
            <div className="hidden md:block bg-[#0FB3001A] sm:w-2/6 2xl:w-1/2 h-[575px] rounded-r-lg absolute sm:-left-20 2xl:-left-96 sm:-top-7 2xl:-top-7 z-0"></div>

            <div className="sm:flex justify-between h-[900px] sm:h-fit">
              <Image
                src={abtSec1}
                alt="Sustainable Future"
                // className="sm:rounded-lg h-[80vh] w sm:h-[76vh] sm:w-[32vw] z-10"
                className="sm:rounded-lg sm:h-3/4 2xl:h-2/4 z-10"
              />

              <div className="text-left max-w-[38ch] sm:max-w-[73ch] relative -top-32 sm:-top-0 bg-white space-y-6 mx-auto sm:mx-0 px-4 py-6 sm:p-0 rounded-md">
                <h2 className="text-xl sm:text-4xl leading-normal sm:text-gray-600 ">
                  Transforming Energy Consumption with High-Quality Biomass
                  Briquettes for a Cleaner and Sustainable Future
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
                <p className="text-lg sm:text-xl hidden sm:block">
                  Through relentless innovation and a commitment to
                  sustainability, we aim to address the global energy challenge
                  by promoting cleaner practices. Whether it&apos;s powering
                  industrial operations or providing heating solutions for
                  homes, our products cater to diverse energy needs. Join us in
                  embracing a greener future and reducing carbon footprints by
                  making the switch to renewable energy with Ravi Bio
                  Fuel Industries.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Block */}
        <div className="relative sm:space-y-10">
          <h2 className="sm:mb-0 text-2xl border-b-2 border-gray-600 w-fit ml-[5vw] sm:mx-0  mr-20 mb-4 ">
            Leading the Renewable Energy Revolution
          </h2>
          <div className="md:flex ">
            <div className="flex justify-center w-full sm:justify-between pr-px relative h-[125vh] sm:h-fit">
              <div className="text-left  max-w-[38ch] sm:max-w-[73ch] space-y-6 bg-white absolute sm:relative bottom-10 sm:bottom-0 z-20 mx-auto sm:mx-0 px-4 py-6 sm:p-0 rounded-md">
                <h2 className="text-xl sm:text-4xl leading-normal  sm:text-gray-600 ">
                  Your Trusted Partner in Sustainable Energy Solutions for a
                  Better and Greener Tomorrow
                </h2>
                <p className="text-lg sm:text-xl ">
                  Established in 2023, Ravi Bio Fuel Industries is dedicated to
                  transforming agricultural byproducts into a renewable and
                  valuable energy source. By collaborating with local farmers
                  and industries, we create sustainable solutions that promote
                  environmental conservation and empower communities
                </p>
                <p className="text-lg sm:text-xl hidden sm:block">
                  Our mission extends beyond energy production; it&apos;s about
                  fostering positive change for the planet and future
                  generations. Through innovative practices and a commitment to
                  reducing carbon footprints, we support industrial growth while
                  safeguarding the environment. Together, we&apos;re building a
                  sustainable future where renewable energy solutions enhance
                  efficiency, drive progress, and preserve natural resources.
                  Join us in making a lasting impact with eco-friendly
                  energy alternatives.
                </p>
              </div>

              <Image
                src={abtSec2}
                alt="Sustainable Future"
                className="sm:rounded-xl sm:h-3/4 2xl:h-2/4 z-10 hidden sm:block"
              />
              <Image
                src={abtSec2Mob}
                alt="Sustainable Future"
                className="sm:rounded-lg h-[80vh] sm:h-[76vh] sm:w-[32vw] z-10 sm:hidden"
              />
            </div>
            <div className="hidden md:block bg-[#1B4449] sm:w-2/6 2xl:w-1/2 h-[575px] rounded-l-lg absolute sm:-right-20 2xl:-right-96 sm:top-11 z-0"></div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="sm:space-y-20 px-4 sm:px-0">
          <h1 className="text-2xl border-b-2 border-gray-600 w-fit mb-6 sm:mb-0">
            Our Leadership
          </h1>

          <div className="relative rounded-lg ">
            <div className="hidden md:block bg-[#0FB3001A] sm:w-2/6 2xl:w-1/2 h-[575px] rounded-r-lg absolute sm:-left-20 2xl:-left-96 sm:-top-7 2xl:-top-7 z-0"></div>

            <div className="md:flex justify-between">
              <Image
                src={owner1}
                alt="Sustainable Future"
                className="object-cover sm:object-fill rounded-t-lg sm:rounded-lg h-[43vh]  sm:h-3/4 2xl:h-2/4 z-10 sm:object-center object-[center_0%]"
              />
              <div className="text-left max-w-[72ch] relative flex flex-col-reverse sm:block">
                <div className="bg-[#0FB3001A] rounded-b-lg sm:rounded-none sm:bg-white relative px-4 pb-5 sm:p-0">
                  <div className="absolute flex top-4 sm:-left-2 sm:-top-4">
                    <svg
                      className="w-[15px] h-[25px] sm:w-[20px] sm:h-[46px]"
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
                      className="w-[15px] h-[25px] sm:w-[20px] sm:h-[46px]"
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
                  <p className="mt-6 text-xl sm:text-3xl tracking-wide leading-relaxed text-gray-600  pl-2 italic ">
                    &nbsp;&nbsp;&nbsp; Ravi Bio Fuel Industries is guided by a vision to promote sustainability and renewable energy solutions. By transforming agricultural waste into eco-friendly biomass briquettes, we aim to reduce carbon emissions, minimize environmental impact, and contribute to a cleaner, greener planet. My mission is to ensure our efforts leave a lasting positive impact for future generations while addressing today&apos;s energy challenges
                  </p>
                </div>
                <div className="bg-[#0FB3001A] py-4 px-6 space-y-px  sm:rounded-md sm:px-8 sm:mt-5 w-full sm:w-4/5">
                  <p className="text-2xl sm:text-xl">
                    <strong>Dhanraj Tiwari</strong>
                  </p>
                  <p className="text-base">Founder, Ravi Bio Fuel Industries</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-10 sm:mt-16 ">
            <div className="flex flex-col-reverse md:flex-row justify-between pr-px">
              <div className="text-left  max-w-[72ch]  relative sm:mt-4 2xl:mt-6 flex flex-col-reverse sm:block">
                <div className="bg-[#0FB3001A] sm:bg-white relative px-4 pb-5 sm:p-0  rounded-b-lg sm:rounded-none">
                  <div className="absolute flex top-4 left-2 sm:left-0 sm:-top-4 px-4 pb-5 sm:p-0">
                    <svg
                      className="w-[15px] h-[25px] sm:w-[20px] sm:h-[46px] "
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
                      className="w-[15px] h-[25px] sm:w-[20px] sm:h-[46px]"
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
                  <p className="mt-6 text-xl sm:text-3xl tracking-wide leading-relaxed text-gray-600 pl-4 italic">
                    &nbsp;&nbsp;&nbsp; At Ravi Bio Fuel Industries, every operation is rooted in efficiency, quality, and sustainability. Through crafted policies and innovative processes, I ensure we deliver superior biomass briquettes while meeting customer expectations. My focus remains on driving excellence, fostering responsible growth, and aligning our goals with the mission of environmental responsibility and a sustainable energy future.
                  </p>
                </div>
                <div className="bg-[#0FB3001A] py-4 px-6 space-y-px sm:rounded-md sm:px-8  sm:mt-5 w-full sm:w-4/5">
                  <p className="text-2xl sm:text-xl">
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
                className="object-cover sm:object-fill rounded-t-lg sm:rounded-xl h-[42vh]  sm:h-3/4 2xl:h-2/4 z-10 sm:object-center object-[center_0%]"
              />
            </div>

            <div className="hidden md:block bg-[#1B4449] sm:w-2/6 2xl:w-1/2 h-[579px] rounded-l-lg absolute sm:-right-20 2xl:-right-96 sm:-top-8 2xl:-top-10 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroSection = () => {
  return (
    <section className="my-0 h-fit">
      <div className="relative w-full h-28 sm:h-64">
        <Image
          src={aboutUsImg}
          alt="aboutUs Image"
          className="absolute inset-0 h-full w-screen object-cover"
        />
        <div className="absolute w-1/2 inset-0 bg-gradient-to-r from-[#030701] to-transparent"></div>
        <div
          className="text-2xl sm:text-7xl font-semibold text-white relative top-8 sm:top-24 ml-[5vw] sm:ml-0 sm:border-l-4 border-l-2 border-green-500 px-2 sm:px-10 max-w-[1180px] 2xl:max-w-[1280px] xl:mx-auto h-9 sm:h-fit
        flex items-center " 
        >
          <h1>About Us</h1>
        </div>
      </div>
    </section>
  );
};

const page = () => {
  return (
    <main className="mt-16 sm:mt-20">
      <HeroSection />
      <AboutSection />
      <Clients />
      <div className="h-[2px] w-[50%] bg-gray-500/20 mx-auto my-4"></div>
    </main>
  );
};

export default page;
