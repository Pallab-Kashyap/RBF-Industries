
"use client"
import React from 'react'

function Production() {
  // Effect hook to handle scroll events and animations
  React.useEffect(() => {
    const handleScroll = () => {
      // Fade-in animation for elements with 'fade-in' class
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        // Add 'visible' class when element is 75% in view
        if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      });

      // Update center line color based on scroll position
      const centerLine = document.querySelector('.center-line') as HTMLElement;
      if (centerLine) {
        // Calculate scroll percentage and update gradient
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        centerLine.style.background = `linear-gradient(to bottom, #3b82f6 ${scrollPercentage}%, #ffffff ${scrollPercentage}%)`;
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Cleanup function to remove event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* Main content container */}
      <div className="w-full max-w-6xl relative">
        {/* Center line that changes color based on scroll position */}
        <div className="center-line absolute left-1/2 top-0 bottom-0 w-px bg-white transform -translate-x-1/2" />
        {/* Map through production steps and render each section */}
        {[
          {
            title: "Obtaining Raw Material",
            description: "The first step in our production process involves sourcing high-quality raw materials from trusted suppliers.",
            image: "https://media.istockphoto.com/id/1173024714/photo/peaceful-nature-landscape-background-with-mountains-on-sunset.jpg?s=2048x2048&w=is&k=20&c=t_ikT4Kk4u7whbm3Ceby8HKRYncX21Djmrudoeg1k0c="
          },
          // ... (other steps omitted for brevity)
        ].map((step, index) => (
          <div key={index} className="mb-16 relative production-section">
            <div className="flex items-center">
              {/* Left side: Title and description */}
              <div className="w-1/2 pr-16">
                <h2 className="text-2xl font-bold mb-4 fade-in" data-aos="fade-up">{step.title}</h2>
                <p className="fade-in" data-aos="fade-up" data-aos-delay="100">{step.description}</p>
              </div>
              {/* Right side: Image */}
              <div className="w-1/2 pl-16">
                <img src={step.image} alt={step.title} className="w-full h-auto rounded-lg fade-in" data-aos="fade-up" data-aos-delay="200" />
              </div>
            </div>
            {/* Step number circle */}
            <div className="absolute left-1/2 top-10 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-200 flex items-center justify-center text-gray-600 text-3xl font-bold">
                {index + 1}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional content area (currently empty) */}
      <div className="w-full max-w-6xl relative bg-red-500">

      </div>

      {/* Styles for fade-in animation and center line */}
      <style jsx>{`
        .fade-in {
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
        }
        .fade-in.visible {
          opacity: 1;
        }
        .center-line {
          transition: background 0.3s ease-in-out;
        }
      `}</style>
    </div>
  )
}

export default Production