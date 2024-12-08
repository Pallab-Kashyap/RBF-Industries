import Image from 'next/image';
import React, { forwardRef } from 'react'

export interface BenefitStr {
  icon : string;
  heading : string;
  content : string;
}

const BenefitCard = forwardRef<HTMLDivElement,BenefitStr> (({ icon, heading, content }, ref) => {
    
  return (
    <div
    ref={ref}
    className="px-5 py-10 flex flex-col gap-3 bg-[#c6e156] rounded-lg shadow-md hover:shadow-lg">
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
})

BenefitCard.displayName = "BenefitCard";

export default BenefitCard