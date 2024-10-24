import useNavigateToArticle from "../../hook/useNavigateToArticle";
import formatDateTimeVi from "../../hook/useFormatDatetime";
export default function BlogCardFeatured({ article }) {
  const handleReadNews = useNavigateToArticle();
  const datetime = formatDateTimeVi(article?.createdAt || null);
  return (
    <div className="relative w-full h-full hover:cursor-pointer text-white dark:text-gray-700 ">
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
        className="w-full h-full object-cover "
      />
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      <div className="absolute left-6 top-4 w-fit p-4 h-8  rounded bg-blue-500">
        <div className="flex justify-center items-center w-full h-full ">
          <p className=" text-sm shadow-lg font-medium">
            {article?.category?.name}
          </p>
        </div>
      </div>
      <div className="absolute bottom-4 left-6 max-w-[75%]">
        <div className="flex flex-row  text-xs font-light shadow-lg ">
          <p>{article?.author}</p>
          <p className="mx-1">-</p>
          <p> {datetime}</p>
        </div>
        <div className="text-xl font-semibold capitalize shadow-lg">
          <p className="truncate"> {article?.title} </p>
        </div>
      </div>
    </div>
  );
}
