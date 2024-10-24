import React from "react";
import useNavigateToArticle from "../../hook/useNavigateToArticle";
import formatDateTimeVi from "../../hook/useFormatDatetime";
export default function BlogCardWidthFull({ article }) {
  const handleReadNews = useNavigateToArticle();
  const datetime = formatDateTimeVi(article?.createdAt || null);
  return (
    <div
      className="hover:cursor-pointer"
      onClick={() =>
        handleReadNews(
          article.category.slug,
          article.category.name,
          article.slug
        )
      }
    >
      <div className=" w-full h-80 relative text-white">
        <img
          src={article?.thumbnail}
          alt="Thumbnail"
          className="w-full h-full object-cover"
        />

        <div className="absolute left-4 bottom-8 flex flex-col gap-2 max-w-screen-md">
          <div className="flex flex-row text-xs font-light">
            <p className="font-normal">{article?.author}</p>
            <p className="mx-1">-</p>
            <p>{datetime}</p>
          </div>
          <h2 className="text-xl font-semibold line-clamp-2">
            {article?.title}
          </h2>
          <p className="line-clamp-3 text-sm font-normal">
            {article?.description}
          </p>
        </div>
      </div>
    </div>
  );
}
