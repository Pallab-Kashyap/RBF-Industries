'use client'

import React, { useRef } from "react";
import BenifitCard from "./BenifitCard";



function Benifits() {

    const heading = useRef(null);

    const benifits = [
        {
            icon : '/assets/logo.png',
            heading : 'IoT - Internet of Things',
            content : 'Centralized management of physical assets and buildings.'
        },
        {
            icon : '/assets/logo.png',
            heading : 'IoT - Internet of Things',
            content : 'Centralized management of physical assets and buildings.'
        },
        {
            icon : '/assets/logo.png',
            heading : 'IoT - Internet of Things',
            content : 'Centralized management of physical assets and buildings.'
        },
        {
            icon : '/assets/logo.png',
            heading : 'IoT - Internet of Things',
            content : 'Centralized management of physical assets and buildings.'
        },
        {
            icon : '/assets/logo.png',
            heading : 'IoT - Internet of Things',
            content : 'Centralized management of physical assets and buildings.'
        },
        {
            icon : '/assets/logo.png',
            heading : 'IoT - Internet of Things',
            content : 'Centralized management of physical assets and buildings..'
        },
    ]

  return (
    <div className="px-8 sm:px-12 sm:py-12  bg-[#B5D823]">
    <div className="blogs-heading py-4 sm:pb-12">
        <h2 ref={heading} className="text-3xl sm:text-5xl font-medium">Benefits of Biomass Briquettes</h2>
      </div>
      <div className="grid sm:grid-cols-3 gap-16 pb-4">
        {benifits.map((benefit, index) => (
            <BenifitCard key={index} icon={benefit.icon} heading={benefit.heading} content={benefit.content}/>
        ))}
      </div>
      </div>
  )
}

export default Benifits;
