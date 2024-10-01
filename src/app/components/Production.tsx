
"use client"
import React from 'react'

function Production() {
  React.useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
          el.classList.add('visible');
        } else {
          el.classList.remove('visible');
        }
      });

      // Update center line color based on scroll position
      const centerLine = document.querySelector('.center-line') as HTMLElement;
      if (centerLine) {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        centerLine.style.background = `linear-gradient(to bottom, #3b82f6 ${scrollPercentage}%, #ffffff ${scrollPercentage}%)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-6xl relative">
        <div className="center-line absolute left-1/2 top-0 bottom-0 w-px bg-white transform -translate-x-1/2" />
        {[
          {
            title: "Obtaining Raw Material",
            description: "The first step in our production process involves sourcing high-quality raw materials from trusted suppliers.",
            image: "https://media.istockphoto.com/id/1173024714/photo/peaceful-nature-landscape-background-with-mountains-on-sunset.jpg?s=2048x2048&w=is&k=20&c=t_ikT4Kk4u7whbm3Ceby8HKRYncX21Djmrudoeg1k0c="
          },
          {
            title: "Raw Material Refining Process",
            description: "Our state-of-the-art refining process ensures that all raw materials meet our strict quality standards before production.",
            image: "https://media.istockphoto.com/id/1173024714/photo/peaceful-nature-landscape-background-with-mountains-on-sunset.jpg?s=2048x2048&w=is&k=20&c=t_ikT4Kk4u7whbm3Ceby8HKRYncX21Djmrudoeg1k0c="
          },
          {
            title: "Production",
            description: "Using advanced manufacturing techniques, we transform refined materials into finished products with precision and care.",
            image: "https://media.istockphoto.com/id/1173024714/photo/peaceful-nature-landscape-background-with-mountains-on-sunset.jpg?s=2048x2048&w=is&k=20&c=t_ikT4Kk4u7whbm3Ceby8HKRYncX21Djmrudoeg1k0c="
          },
          {
            title: "Storage",
            description: "Finished products are carefully stored in our climate-controlled warehouses to maintain their quality until shipment.",
            image: "https://media.istockphoto.com/id/1173024714/photo/peaceful-nature-landscape-background-with-mountains-on-sunset.jpg?s=2048x2048&w=is&k=20&c=t_ikT4Kk4u7whbm3Ceby8HKRYncX21Djmrudoeg1k0c="
          },
          {
            title: "Shipment",
            description: "We use efficient logistics to ensure timely delivery of our products to customers worldwide.",
            image: "https://media.istockphoto.com/id/1173024714/photo/peaceful-nature-landscape-background-with-mountains-on-sunset.jpg?s=2048x2048&w=is&k=20&c=t_ikT4Kk4u7whbm3Ceby8HKRYncX21Djmrudoeg1k0c="
          }
        ].map((step, index) => (
          <div key={index} className="mb-16 relative production-section">
            <div className="flex items-center">
              <div className="w-1/2 pr-16">
                <h2 className="text-2xl font-bold mb-4 fade-in" data-aos="fade-up">{step.title}</h2>
                <p className="fade-in" data-aos="fade-up" data-aos-delay="100">{step.description}</p>
              </div>
              <div className="w-1/2 pl-16">
                <img src={step.image} alt={step.title} className="w-full h-auto rounded-lg fade-in" data-aos="fade-up" data-aos-delay="200" />
              </div>
            </div>
            <div className="absolute left-1/2 top-10 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-200 flex items-center justify-center text-gray-600 text-3xl font-bold">
                {index + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
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