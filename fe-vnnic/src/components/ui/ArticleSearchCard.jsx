import useNavigateToArticle from "../../hook/useNavigateToArticle";
import formatDateTimeVi from "../../hook/useFormatDatetime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
export default function ArticleSearchCard({ article }) {
  const handleReadNews = useNavigateToArticle();
  const datetime = formatDateTimeVi(article?.createdAt || null);
  return (
    <div className="relative w-full h-full hover:cursor-pointer  dark:text-gray-700 ">
      <img
        onClick={() =>
          handleReadNews(
            article.category.slug,
            article.category.name,
            article.slug
          )
        }
        src={
          article?.thumbnail ? article?.thumbnail : `/images/defaultNews.png`
        }
        alt="Anh minh hoa"
        className="w-full h-80 object-cover rounded-lg "
      />

      <div className="absolute left-6 top-4 w-fit p-4 h-8  rounded bg-blue-500">
        <div className="flex justify-center items-center w-full h-full ">
          <p className=" text-sm shadow-lg font-medium text-white">
            {article?.category?.name}
          </p>
        </div>
      </div>
      <div className="mt-2">
        <div className="flex flex-row  font-light text-gray-500 text-xs">
          <p className="">{article?.author}</p>
          <p className="mx-1">-</p>
          <p>{datetime}</p>
        </div>
        <div className="mt-2">
          <h2 className="text-xl text-gray-700  font-bold line-clamp-3">
            {article?.title}
          </h2>
        </div>
        <p className="text-gray-500 line-clamp-3 text-sm before:content-['“'] after:content-['”']">
          {article?.description}
        </p>
      </div>
      <div
        onClick={() =>
          handleReadNews(
            article.category.slug,
            article.category.name,
            article.slug
          )
        }
        className="mt-2 hover:underline-offset-1 hover:underline text-gray-700 font-medium text-sm flex flex-row gap-1 items-center "
      >
        <p className=" ">Đọc bài viết</p>
        <FontAwesomeIcon className="w-4" icon={faSquareArrowUpRight} />
      </div>
    </div>
  );
}
