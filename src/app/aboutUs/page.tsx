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
    <section className="py-12 bg-white mb-28 max-w-[1280px] mx-auto relative">
      <div className="max-w-7xl ">
        {/* First Block */}
        <h1 className="ml-[116px] my-5 text-2xl border-b-2 border-gray-600 w-fit">
          Build for a Sustainable Future
        </h1>
        <div className="md:flex gap-48">
          <div className="bg-[#0FB3001A] w-fit h-[550px] flex items-center rounded-md">
            <Image
              src={abtSec1}
              alt="Sustainable Future"
              className="rounded-lg relative left-28 h-[85%]"
            />
          </div>
          <div className="text-left  max-w-[58ch] pt-16">
            <h2 className="text-4xl font mb-4 text-gray-800">
              Powering Industries with Renewable Energy Solutions
            </h2>
            <p className="mt-6 text-xl">
              At Ravi Bio Fuel Industries, we are transforming the way energy is
              harnessed by providing high-quality biomass briquettes crafted
              from agricultural waste. Our eco-friendly solutions enable
              industries and households to switch to sustainable alternatives,
              reducing reliance on conventional fossil fuels.
            </p>
            <p className="mt-6 text-xl">
              By embracing innovation and prioritizing sustainability, we aim to
              drive a cleaner, greener future. Our products are efficient,
              cost-effective, and tailored to meet the growing energy demands of
              today’s world.{" "}
            </p>
          </div>
        </div>

        {/* Second Block */}
        <h1 className="ml-[116px] mt-16 text-2xl border-b-2 border-gray-600 w-fit">
          Leading the Renewable Energy Revolution
        </h1>
        <div className="md:flex">
          <div className="text-left  max-w-[60ch] pt-16 ml-28">
            <h2 className="text-4xl font mb-4 text-gray-800">
              Your trusted partner in building a cleaner, greener future.
            </h2>
            <p className="mt-6 text-xl">
              Founded in 2023, Ravi Bio Fuel Industries specializes in
              converting agricultural byproducts into a valuable source of
              energy. With a strong focus on environmental conservation, we work
              alongside local farmers and industries to create a positive impact
              on communities and the planet.
            </p>
            <p className="mt-6 text-xl">
              Our commitment to renewable energy not only supports industrial
              efficiency but also contributes to reducing carbon footprints.
              Together, we are creating energy solutions that benefit both the
              environment and future generations.
            </p>
          </div>

          <div className="bg-[#1B4449] w-fit h-[550px] flex items-center rounded-md absolute right-0">
            <Image
              src={abtSec2}
              alt="Sustainable Future"
              className="rounded-lg relative right-36 h-[85%]"
            />
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mt-40">
          <h1 className="ml-[116px] my-5 text-2xl border-b-2 border-gray-600 w-fit">
            Our Leadership
          </h1>
          <div className="">
            <div className="md:flex gap-56">
              <div className="bg-[#0FB3001A] w-fit h-[550px] flex items-center rounded-md">
                <Image
                  src={owner1}
                  alt="Sustainable Future"
                  className="rounded-lg relative left-28 h-[85%]"
                />
              </div>
              <div className="text-left  max-w-[58ch] pt-12 relative">
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
                <p className="mt-6 text-2xl tracking-wide leading-relaxed text-gray-600 max-w-[40ch] pl-2">
                  &nbsp;&nbsp;&nbsp; As the founder of Ravi Bio Fuel Industries, I am deeply
                  committed to sustainability and environmental stewardship. Our
                  focus is on developing renewable energy solutions that not
                  only meet today’s energy needs but also preserve the planet
                  for future generations.
                </p>
                <div className="bg-[#0FB3001A] w-full py-4 px-8 space-y-px rounded-md mt-5">
                    <p className="text-xl"><strong>Dhanraj Tiwari</strong></p>
                    <p className="text-base">Founder, Ravi Bio Fuel Industries</p>
                </div>
              </div>
            </div>

            <div className="md:flex gap-48">

              <div className="text-left  max-w-[58ch] pt-12 relative ml-28">
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
                <p className="mt-6 text-2xl tracking-wide leading-relaxed text-gray-600 max-w-[40ch] pl-4">
                  &nbsp;&nbsp;&nbsp;    At Ravi Bio Fuel Industries, our policy is built on operational excellence and integrity. I lead with a focus on efficiency, innovation, and customer satisfaction, ensuring that our practices align with our core values of sustainability and responsible growth.
                </p>
                <div className="bg-[#0FB3001A] py-4 px-8 space-y-px rounded-md mt-5">
                    <p className="text-xl"><strong>Ravi Tiwari</strong></p>
                    <p className="text-base">Managing Head, Ravi Bio Fuel Industries</p>
                </div>
              </div>

              <div className="bg-[#1B4449] w-fit h-[550px] flex items-center rounded-md absolute right-0">
                <Image
                  src={owner2}
                  alt="Sustainable Future"
                  className="rounded-xl relative right-36 h-[85%] "
                />
              </div>
            </div>



          </div>
        </div>
      </div>
    </section>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className="">
      <div className="relative w-full h-64">
        <Image
          src={aboutUsImg}
          alt="aboutUs Image"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute w-1/2 inset-0 bg-gradient-to-r from-[#0D2801] to-transparent"></div>
        <h1 className="text-7xl font-semibold text-white relative top-24 ml-[10vw] border-l-4 border-green-500 px-10 max-w-[1280px] 2xl:ml-[23vw] ">
          About Us
        </h1>
      </div>
    </section>
  );
};

const page = () => {
  return (
    <main className="mt-40">
      <HeroSection />
      <AboutSection />
    </main>
  );
};

export default page;
