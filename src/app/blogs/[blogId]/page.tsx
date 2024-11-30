import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  blogImg1,
  blogImg2,
  blogImg3,
  blogImg4,
  blogImg5,
  blogImg6,
} from "../../../../public/assets/blogImg";

import { blogList } from "../../components/Blogs/Blogs";



const page = async ({ params }: { params: { blogId: string } }) => {
  const blogId = params.blogId;

  const blogNumber = blogId ? Number(blogId) : NaN;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl mt-24">
      <article className="prose lg:prose-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center ">
          {blogList[blogNumber].title}
        </h1>

        <div className="relative w-full h-64 md:h-96 mb-8">
          <Image
            src={blogList[blogNumber].img}
            alt="Technology landscape"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <pre className="w-full  p-4 rounded-lg text-lg overflow-x-auto whitespace-pre-wrap">
          {blogList[blogNumber].content}

          </pre>
        </div>

  </article>

      <p className="mt-10 text-center text-lg font-semibold">
        For more blogs{" "}
        <Link href="/#blogs" className="text-blue-600">
          Click here
        </Link>
      </p>
    </div>
  );
};
export default page;
