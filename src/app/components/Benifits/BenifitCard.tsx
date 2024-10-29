import Image from 'next/image';
import React from 'react'

export interface BenefitStr {
  icon : string;
  heading : string;
  content : string;
}

const BenifitCard: React.FC<BenefitStr> = ({ icon, heading, content }) => {
    
  return (
    <div className="px-5 py-10 flex flex-col gap-3 bg-[#c6e156] rounded-lg shadow-md hover:shadow-lg">
          <Image 
            src={icon}
            alt='logo'
            height={35}
            width={35}
          />
          <h3 className='text-2xl mt-2'>{heading}</h3>
          <p>{content}</p>
    </div>
  )
}

export default BenifitCard