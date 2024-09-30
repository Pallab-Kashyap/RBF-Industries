import React from "react";
import BlogCard from "./BlogCard";

function Blogs() {
  return (
    <div className="px-8 sm:px-12">
      <div className="blogs-heading py-6">
        <h2 className="text-3xl font-medium">Blogs on Biomass Briquettes</h2>
      </div>
      <div className="grid sm:grid-cols-3 gap-10 mt-2 pb-10 sm:pb-0">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}

export default Blogs;
