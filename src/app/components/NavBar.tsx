import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../../public/assets/logo.png'


function Navbar() {
  return (
    <header className="">
          <nav className="nav flex py-3 px-4 justify-between items-center sm:px-12">
          <div className="logo w-24 sm:w-36 ">
            <Image 
              src={logo}
              alt="Company Logo"
            />
          </div>
            <ul className="nav-links sm:flex items-center gap-8 hidden ">
              <li>
                <Link href="#about">about Us</Link>
              </li>
              <li>
                <Link href="#benefits">Why Us ?</Link>
              </li>
              <li>
                <Link href="#blogs">Our Clients</Link>
              </li>
              <li>
                <Link href="#testimonial">Portfolio</Link>
              </li>
              <li>
                <Link href="#clients">Resources</Link>
              </li>
            </ul>

          <div className="cta-button flex items-center gap-3 sm:gap-8">
            <p className='font-bold'>EN</p>
            <Link href="#contact" 
              className='bg-[#f57c00] text-white p-1 px-2 rounded-md sm:p-3'
            >Contact Us</Link>
          </div>
          </nav>
      </header>
  )
}

export default Navbar