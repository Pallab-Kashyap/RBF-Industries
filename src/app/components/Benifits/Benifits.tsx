'use client'

import React, { useRef } from "react";
import BenifitCard from "./BenifitCard";



function Benifits() {

    const heading = useRef(null);

    let benifits = [
        {
            icon : '/assets/logo.png',
            heading : 'IoT - Internet of Things',
            content : 'Intelligent Assistant.'
        },
        {
            icon : '/assets/logo.png',
            heading : 'IoT - Internet of Things',
            content : 'Intelligent Assistant.'
        },
        {
            icon : '/assets/logo.png',
            heading : 'IoT - Internet of Things',
            content : 'Intelligent Assistant.'
        },
        {
            icon : '/assets/logo.png',
            heading : 'IoT - Internet of Things',
            content : 'Intelligent Assistant.'
        },
        {
            icon : '/assets/logo.png',
            heading : 'IoT - Internet of Things',
            content : 'Intelligent Assistant.'
        },
        {
            icon : '/assets/logo.png',
            heading : 'IoT - Internet of Things',
            content : 'Intelligent Assistant.'
        },
    ]

  return (
    <div className="px-8 sm:px-12 sm:py-12 pb-6 sm:h-screen bg-lime-400">
    <div className="blogs-heading py-6 sm:pb-12">
        <h2 ref={heading} className="text-3xl sm:text-5xl font-medium">Benefits of Biomass Briquettes</h2>
      </div>
      <div className="grid sm:grid-cols-3 gap-10">
        {benifits.map((benefit) => (
            <BenifitCard icon={benefit.icon} heading={benefit.heading} content={benefit.content}/>
        ))}
      </div>
      </div>
  )
}

export default Benifits;
