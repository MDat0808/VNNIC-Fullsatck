import React from "react";
import BlogCard from "../BlogCard";

const BlogListEvent = ({ articleByEvent }) => {
  return (
    <div className="flex gap-8">
      <div className=" mt-8 h-fit w-full">
        <div className="grid grid-cols-2 gap-8  justify-between">
          {articleByEvent.map((item, index) => (
            <BlogCard key={index} article={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListEvent;
