import React from "react";
import useNavigateToArticle from "../../hook/useNavigateToArticle";
import formatDateTimeVi from "../../hook/useFormatDatetime";
export default function BlogCardCol({
  imgSrc,
  author,
  date,
  title,
  description,
  category,
  newsSlug,
  slug,
}) {
  const handleReadNews = useNavigateToArticle();

  return (
    <div
      className="hover:cursor-pointer bg-white shadow-md rounded-b-lg overflow-hidden"
      onClick={() => handleReadNews(slug, category, newsSlug)}
    >
      <div className="h-48">
        <img
          src={imgSrc}
          className="w-full h-full object-cover"
          alt="Thumbnail"
        />
      </div>
      <div className="p-4">
        <div className="flex flex-row  font-light text-gray-500 text-xs">
          <p className="">{author}</p>
          <p className="mx-1">-</p>
          <p>{date}</p>
        </div>
        <div className="mt-2">
          <h2 className="text-xl font-bold line-clamp-3">{title}</h2>
        </div>
        <p className="text-gray-600 mt-2 line-clamp-3 text-sm">{description}</p>
      </div>
    </div>
  );
}
