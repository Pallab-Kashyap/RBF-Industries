"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ProductionCardProps {
  prop: {
    title: string;
    description: string;
    image: string;
    stepNo: number;
  };
}

const ProductionCards: React.FC<ProductionCardProps> = ({ prop }) => {
  const { title, description, image, stepNo } = prop;

  const [completion, setCompletion] = useState(0);
  const [opacity, setOpacity] = useState("0");
  // const [isActive, setIsActive] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const card = document.getElementById(`production-card-${stepNo}`);
      const completionLine = document.getElementById(
        `completion-line-${stepNo}`
      );
      if (card && completionLine) {
        const rect = card.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        const lineEntryPoint = windowHeight * 0.6;
        const lineExitPoint = windowHeight * 0.1;

        if (rect.top <= lineEntryPoint && rect.bottom >= lineExitPoint) {
          const totalDistance = lineEntryPoint - lineExitPoint;
          const scrolledDistance = lineEntryPoint - rect.top;
          const newCompletion =
            Math.min(1, Math.max(0, scrolledDistance / totalDistance)) * 100;
          setCompletion(newCompletion);
          // setIsActive(rect.top <= lineEntryPoint && rect.top > lineExitPoint);
        } else if (rect.top < lineExitPoint) {
          setCompletion(100);
          // setIsActive(false);
        } else {
          setCompletion(0);
          // setIsActive(false);
        }

        let opacity = 0;
        const cardEntryPoint = windowHeight;
        const cardExitPoint = windowHeight * 0.2;
        if (rect.top <= cardEntryPoint && rect.bottom >= cardExitPoint) {
          const totalCardDistance = cardEntryPoint - cardExitPoint;
          const scrolledCardDistance = cardEntryPoint - rect.top;
          opacity = Math.min(
            1,
            Math.max(0, scrolledCardDistance / totalCardDistance)
          );
        } else if (rect.top < cardExitPoint) {
          opacity = 1;
        }

        setOpacity(opacity.toString());
      }
    };

    const smoothScrollHandler = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", smoothScrollHandler, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", smoothScrollHandler);
  }, [stepNo]);

  return (
    <div
      id={`production-card-${stepNo}`}
      className={`relative production-section`}
      style={{ opacity: opacity, transition: "opacity 0.3s linear" }}
    >
      <div className="sm:flex sm:min-h-[50vh] flex-col sm:flex-row ">
        
        {/* Mobile layout */}
        <div className="sm:hidden px-4 py-6 space-y-4">
          <div className="w-10 h-10 rounded-full bg-transparent border-[1px] flex items-center justify-center text-xl font-bold border-white text-white">
            {stepNo}
          </div>
          <h2 className="text-2xl font-medium">
            {title}
          </h2>
          <p
            className=" text-base"
          >
            {description}
          </p>
          <div className="w-full pt-2">
            <Image
              src={image}
              alt={title}
              width={500}
              height={350}
              className="w-full h-[40vh] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden sm:flex min-h-[50vh] flex-row">
          {stepNo % 2 !== 0 ? (
            <>
              <div className="sm:w-1/2 pr-16 flex-1 sm:text-balance">
                <h2
                  className="text-2xl font-bold mb-4 mt-14"
                >
                  {title}
                </h2>
                <p className="" >
                  {description}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div
                  className={`w-16 h-16 rounded-full border-2 flex items-center justify-center text-3xl font-bold mt-10 mb-6 transition-all duration-300 ease-in-out text-white`
                    // ${
                  //   isActive
                  //     ? "border-white text-white "
                  //     : "border-gray-200 text-gray-600"
                  // }
                }
                >
                  {stepNo}
                </div>
                <div className="completionLine bg-gray-600 flex-1 w-1 relative ">
                  <div
                    id={`completion-line-${stepNo}`}
                    className="absolute top-0 w-full bg-white"
                    style={{ height: `${completion}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex-1 pl-16">
                <Image
                  src={image}
                  alt={title}
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </>
          ) : (
            <>
              <div className="flex-1 w-1/2">
                <Image
                  src={image}
                  alt={title}
                  width={500}
                  height={300}
                  className="w-[38vw] rounded-lg"
                />
              </div>

              <div className="flex flex-col items-center">
                <div
                  className={`w-16 h-16 rounded-full border-2 flex items-center justify-center text-3xl font-bold mt-10 mb-6 transition-all duration-300 ease-in-out text-white`
                    // ${
                  //   isActive
                  //     ? "border-white text-white "
                  //     : "border-gray-200 text-gray-600"
                  // }
                }
                >
                  {stepNo}
                </div>
                <div className="complitionLine bg-gray-600 flex-1 w-1 relative ">
                  <div
                    id={`completion-line-${stepNo}`}
                    className="absolute top-0 w-full bg-white "
                    style={{ height: `${completion}%` }}
                  ></div>
                </div>
              </div>

              <div className="w-full sm:w-1/2 flex-1 text-balance ">
                <div className="sm:ml-16">
                  <h2
                    className="text-2xl font-bold mb-4 mt-14"
                  >
                    {title}
                  </h2>
                  <p
                    className=""
                  >
                    {description}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductionCards;
