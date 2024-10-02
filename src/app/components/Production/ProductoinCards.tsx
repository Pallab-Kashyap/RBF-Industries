"use client"
import React, { useState } from "react";

interface ProductionCardProps {
  prop: {
    title: string;
    description: string;
    image: string;
    stepNo: number;
  };
}

  const ProductoinCards: React.FC<ProductionCardProps> = ({ prop }) => {
  const { title, description, image, stepNo } = prop;

  const [completion, setCompletion] = useState(0);
  const [opacity, setOpacity] = useState('0');
  const [isActive, setIsActive] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const card = document.getElementById(`production-card-${stepNo}`);
      const completionLine = document.getElementById(`completion-line-${stepNo}`);
      if (card && completionLine) {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        // Calculate the point where the completion line starts
        const lineEntryPoint = windowHeight * 0.6; // 60% from the top of the viewport
        // Calculate the point where the completion line ends
        const lineExitPoint = windowHeight * 0.1; // 10% from the top of the viewport

        // Calculate completion progress based on line position
        if (rect.top <= lineEntryPoint && rect.bottom >= lineExitPoint) {
          const totalDistance = lineEntryPoint - lineExitPoint;
          const scrolledDistance = lineEntryPoint - rect.top;
          const newCompletion = Math.min(1, Math.max(0, scrolledDistance / totalDistance)) * 100;
          setCompletion(newCompletion);
          setIsActive(rect.top <= lineEntryPoint && rect.top > lineExitPoint);
        } else if (rect.top < lineExitPoint) {
          setCompletion(100);
          setIsActive(false);
        } else {
          setCompletion(0);
          setIsActive(false);
        }

        // Calculate card opacity separately
        let opacity = 0;
        const cardEntryPoint = windowHeight;
        const cardExitPoint = windowHeight * 0.2;
        if (rect.top <= cardEntryPoint && rect.bottom >= cardExitPoint) {
          const totalCardDistance = cardEntryPoint - cardExitPoint;
          const scrolledCardDistance = cardEntryPoint - rect.top;
          opacity = Math.min(1, Math.max(0, scrolledCardDistance / totalCardDistance));
        } else if (rect.top < cardExitPoint) {
          opacity = 1;
        }

        setOpacity(opacity.toString());
      }
    };

    const smoothScrollHandler = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', smoothScrollHandler, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', smoothScrollHandler);
  }, [stepNo]);

  if(stepNo%2 !== 0)
  return (
    <div id={`production-card-${stepNo}`} className={`relative production-section bg-red-${stepNo}00`} style={{opacity: opacity, transition: 'opacity 0.3s linear'}}>
      <div className="flex min-h-[50vh]">

        {/* Left side: Title and description */}
        <div className="w-1/2 pr-16 flex-1 text-balance">
          <h2 className="text-2xl font-bold mb-4 fade-in mt-14" data-aos="fade-up">
            {title}
          </h2>
          <p className="fade-in" data-aos="fade-up" data-aos-delay="100">
            {description}
          </p>
        </div>

        {/* Step number circle */}
        <div className="flex flex-col items-center ">
          <div className={`w-16 h-16 rounded-full bg-white border-2 flex items-center justify-center text-3xl font-bold mt-10 mb-6 transition-all duration-300 ease-in-out ${isActive ? 'border-blue-500 text-blue-500' : 'border-gray-200 text-gray-600'}`}>
            {stepNo}
          </div>
          <div className="complitionLine bg-gray-300 flex-1 w-1 relative ">
            <div id={`completion-line-${stepNo}`} className="absolute top-0 w-full bg-blue-500 " style={{height: `${completion}%`}}></div>
          </div>
        </div>

        {/* Right side: Image */}
        <div className="flex-1 pl-16">
          <img
            src={image}
            alt={title}
            className="w-full h-auto rounded-lg fade-in"
            data-aos="fade-up"
            data-aos-delay="200"
          />
        </div>

      </div>
    </div>
  );

  else return (
    <div id={`production-card-${stepNo}`} className={`relative production-section bg-red-${stepNo}00`} style={{opacity: opacity, transition: 'opacity 0.3s linear'}}>
      <div className="flex min-h-[50vh]">

        {/* Right side: Image */}
        <div className="flex-1 w-1/2">
          <img
            src={image}
            alt={title}
            className="w-[38vw] rounded-lg fade-in"
            data-aos="fade-up"
            data-aos-delay="200"
          />
        </div>

        {/* Step number circle */}
        <div className="flex flex-col items-center">
          <div className={`w-16 h-16 rounded-full bg-white border-2 flex items-center justify-center text-3xl font-bold mt-10 mb-6 transition-all duration-300 ease-in-out ${isActive ? 'border-blue-500 text-blue-500' : 'border-gray-200 text-gray-600'}`}>
            {stepNo}
          </div>
          <div className="complitionLine bg-gray-300 flex-1 w-1 relative ">
          <div id={`completion-line-${stepNo}`} className="absolute top-0 w-full bg-blue-500 " style={{height: `${completion}%`}}></div>
          </div>
        </div>


        {/* Left side: Title and description */}
        <div className="w-1/2 flex-1 text-balance ">
        <div className="ml-16">

          <h2 className="text-2xl font-bold mb-4 fade-in mt-14" data-aos="fade-up">
            {title}
          </h2>
          <p className="fade-in" data-aos="fade-up" data-aos-delay="100">
            {description}
          </p>
        </div>
        </div>

      </div>
    </div>
  );
};


export default ProductoinCards;
