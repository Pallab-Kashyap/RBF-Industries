import React, { forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "./Blogs";

interface BlogCardProps {
  blog: Blog;
  blogNo: number
}

const BlogCard = forwardRef<HTMLDivElement, BlogCardProps>(({ blog, blogNo }, ref) => {
  return (
    <div
      ref={ref}
      className="bg-[#6456E4] rounded-xl overflow-hidden shadow-md sm:shadow-2xl sm:max-w-[360px]"
    >
      {/* <img src="./assets/blog_img.png" alt="Blog Image"
    className=''
    /> */}
      <div className="relative overflow-hidden h-[210px]">
        <Image
          src={blog.img}
          alt="Blog Image"
          className="rounded-xl shadow-2xl h-full w-full"
        />
      </div>
      <div className="blog-content p-3 px-5 text-white">
        <h3 className="text-2xl pt-8 font-semibold ">{blog.title}</h3>
        <p className="py-6 overflow-hidden line-clamp-3 max-h-[calc(4*1.5rem)] leading-6">
          {blog.description}
        </p>
        <div className="group mt-5 pb-8 w-fit">
          <Link href={`/blogs/${blogNo}`}
           className="blog-btn text-sm  ">
            Learn more &#8594;
          </Link>
          <div className="w-0 bg-white h-[1px] transition-all duration-300 rounded-2xl absolute group-hover:w-[100px]"></div>
        </div>
      </div>
    </div>
  );
});

BlogCard.displayName = "BlogCard";

export default BlogCard;
