import React from "react";

const CategoryHeader = ({ title, categories }) => {
  return (
    <div>
      <div className="bg-white flex flex-row justify-between h-12 items-center">
        <h2 className="text-red-400 text-xl font-semibold uppercase">
          {title}
        </h2>
        <div className="flex flex-row text-white">
          {categories.map((category, index) => (
            <p
              key={index}
              className={`ml-2 min-w-min min-h-max px-3 py-1 rounded-sm text-sm font-medium ${category.color}`}
            >
              {category.name}
            </p>
          ))}
        </div>
      </div>
      <div>
        <p className="w-full h-[1px] bg-blue-500"></p>
      </div>
    </div>
  );
};

export default CategoryHeader;
