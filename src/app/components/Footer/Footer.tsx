// components/Footer.tsx
import Image from 'next/image';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-10 sm:mt-0">
      <div className='pb-10 flex justify-center sm:block'>
        <Image 
          src={'/assets/logo.png'}
          alt = 'logo'
          width={150}
          height={150}
        />
      </div>
      <div className="flex sm:gap-12 gap-6">
        {/* Products Section */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-lg mb-5">PRODUCTS</h4>
          <ul className="space-y-3">
            <li>Biomass Briquettes</li>
            <li>Sawdust</li>
            <li>Agri Waste</li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-lg mb-5">COMPANY</h4>
          <ul className="space-y-3">
            <li>About Us</li>
            <li>Benefits</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Social Networks Section */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-lg mb-5">SOCIAL </h4>
          <ul className="space-y-3">
            <li>About Us</li>
            <li>Benefits</li>
            <li>Blogs</li>
          </ul>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
