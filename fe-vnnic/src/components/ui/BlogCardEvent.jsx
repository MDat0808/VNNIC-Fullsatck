import React from "react";
import useNavigateToArticle from "../../hook/useNavigateToArticle";
import formatDateTimeVi from "../../hook/useFormatDatetime";
export default function BlogCardEvent({ article }) {
  const datetime = formatDateTimeVi(article?.createdAt || null);
  const handleReadNews = useNavigateToArticle();
  return (
    <div
      className="w-[400px] flex flex-col gap-4 hover:cursor-pointer"
      onClick={() =>
        handleReadNews(
          article.category.slug,
          article.category.name,
          article.slug
        )
      }
    >
      <div className="w-full h-80">
        <img
          src={article?.thumbnail}
          alt={article?.title || "Thumbnail"}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row text-xs font-light">
          <p className="font-normal">{article?.author || "Unknown"}</p>
          <p className="mx-1">-</p>
          <p>{datetime || "Unknown Date"}</p>
        </div>
        <h2 className="text-xl font-semibold">{article?.title}</h2>
        <div className="max-h-12 line-clamp-3">
          <p className="text-xs text-gray-600">{article?.description}</p>
        </div>
      </div>
    </div>
  );
}
