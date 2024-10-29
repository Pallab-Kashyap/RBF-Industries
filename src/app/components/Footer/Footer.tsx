// components/Footer.tsx
import Image from 'next/image';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-10 sm:mt-0 ">
      <div className='pb-10 sm:block hidden'>
        <Image 
          src={'/assets/logo.png'}
          alt = 'logo'
          width={150}
          height={150}
        />
      </div>
      <div className="flex flex-col gap-8 sm:flex-row sm:gap-12 px-4 sm:px-0">
        {/* Products Section */}
        <div className="text-left">
          <h4 className="font-semibold text-lg mb-3">PRODUCTS</h4>
          <ul className="space-y-3">
            <li>Biomass Briquettes</li>
            <li>Sawdust</li>
            <li>Agri Waste</li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="text-left">
          <h4 className="font-semibold text-lg mb-3">COMPANY</h4>
          <ul className="space-y-3">
            <li>About Us</li>
            <li>Benefits</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Social Networks Section */}
        <div className="text-left">
          <h4 className="font-semibold text-lg mb-3">SOCIAL </h4>
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
