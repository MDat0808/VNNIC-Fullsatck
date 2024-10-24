import React from "react";

const FeaturedNewsColumn = ({ news }) => {
  return (
    <div className="w-full">
      <div className="w-full h-[2px] bg-gray-500"></div>
      <div className="grid grid-cols-3 gap-4">
        {news.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-y-2 hover:cursor-pointer h-full"
          >
            <div className="py-1 hover:underline flex-grow">
              <h2 className="text-sm font-semibold text-gray-700 line-clamp-2">
                {item.title}
              </h2>
            </div>
            <div className="flex flex-row text-xs font-light text-zinc-400">
              <p className="font-normal text-zinc-700">{item.author}</p>
              <p className="mx-1">-</p>
              <p>{item.date}</p>
            </div>
            <div className="w-full h-[0.5px] bg-blue-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedNewsColumn;
