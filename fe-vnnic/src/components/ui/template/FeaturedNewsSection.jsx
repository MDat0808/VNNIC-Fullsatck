import React from "react";
import FeaturedNewsColumn from "./FeaturedNewsColumn";

const FeaturedNewsSection = () => {
  const newsData = [
    [
      {
        title:
          "Su Kien bong da mung Xuan 2024, lan thu 12 thanh cong, Su Kien bong da mung Xuan 2024, lan thu 12 thanh cong ,Su Kien bong da mung Xuan 2024, lan thu 12 thanh cong, Su Kien bong da mung Xuan 2024, lan thu 12 thanh cong",
        author: "Minh Dat",
        date: "08 Aug 2024",
      },
      {
        title: "Su Kien bong da mung Xuan 2024, lan thu 12 thanh cong",
        author: "Minh Dat",
        date: "08 Aug 2024",
      },
      {
        title: "Su Kien bong da mung Xuan 2024, lan thu 12 thanh cong",
        author: "Minh Dat",
        date: "08 Aug 2024",
      },
    ],
  ];

  // Flatten the array
  const flattenedNewsData = newsData.flat();

  return (
    <div className="mt-16">
      <p className="mt-2 text-xl font-semibold">
        Tin Tuc noi bat khong nen bo lo
      </p>
      <div className="mt-4 w-full ">
        <FeaturedNewsColumn news={flattenedNewsData} />
      </div>
    </div>
  );
};

export default FeaturedNewsSection;
