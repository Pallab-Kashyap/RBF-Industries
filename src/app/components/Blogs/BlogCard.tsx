import React, { forwardRef } from 'react'

const BlogCard = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div 
    ref={ref}
    className="bg-[#6456E4] rounded-xl overflow-hidden">
    {/* <img src="./assets/blog_img.png" alt="Blog Image"
    className=''
    /> */}
    <img src="https://images.unsplash.com/photo-1726931467680-713bb3f432f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
        className='rounded-xl'
    />
    <div className="blog-content p-5 px-3 text-white">
      <h3 className='text-2xl pt-8 font-semibold'>EAM - Enterprise Asset Management</h3>
      <p className='py-6 '>
        Manage your physical assets, buildings, field teams and suppliers
        on a single platform.
      </p>
      <button className="blog-btn pb-8">Learn more</button>
    </div>
  </div>
  )
})

export default BlogCard