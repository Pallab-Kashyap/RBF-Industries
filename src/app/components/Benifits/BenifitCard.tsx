import Image from 'next/image';
import React from 'react'

export interface BenefitStr {
  icon : string;
  heading : string;
  content : string;
}

const BenifitCard: React.FC<BenefitStr> = ({ icon, heading, content }) => {
    
  return (
    <div className="px-5 py-10 flex flex-col gap-3 bg-lime-200">
          <Image 
            src='/assets/logo.png'
            alt='logo'
            height={80}
            width={80}
          />
          <h3>360° asset management</h3>
          <p>Centralized management of physical assets and buildings.</p>
    </div>
  )
}

export default BenifitCard