import React from "react";
import useNavigateToArticle from "../../hook/useNavigateToArticle";
import formatDateTimeVi from "../../hook/useFormatDatetime";
const BlogCard = ({ article }) => {
  const datetime = formatDateTimeVi(article.createdAt);
  const handleReadNews = useNavigateToArticle();
  return (
    <div
      className="flex flex-row justify-between hover:cursor-pointer border-b pb-2   min-h-24 "
      onClick={() =>
        handleReadNews(
          article.category.slug,
          article.category.name,
          article.slug
        )
      }
    >
      <div className="basis-1/3 h-24 ">
        <img
          src={
            article?.thumbnail ? article?.thumbnail : `/images/defaultNews.png`
          }
          alt="Anh minh hoa"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="ml-4 basis-2/3">
        <div className="flex flex-row  text-xs font-light text-zinc-400">
          <p className="font-normal text-zinc-700">{article?.author}</p>
          <p className="mx-1">-</p>
          <p>
            <p> {datetime}</p>
          </p>
        </div>
        <div className="mt-1">
          <p className="text-base font-semibold text-gray-700 line-clamp-2 ">
            {article?.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
