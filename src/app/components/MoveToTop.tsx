import React from 'react'
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-brands-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const MoveToTop = () => {
  return (
    <Link
    href='#home'
     className=' fixed h-12 w-12 rounded-lg flex justify-center items-center bg-[#0FB300] top-[90%] sm:top-[85%] z-30 right-3 sm:right-12 2xl:right-40 cursor-pointer'>
        <FontAwesomeIcon 
            icon={faArrowUp}
            className='text-white'
        />
    </Link>

  )
}

export default MoveToTop