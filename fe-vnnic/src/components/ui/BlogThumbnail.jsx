import useNavigateToArticle from "../../hook/useNavigateToArticle";
import formatDateTimeVi from "../../hook/useFormatDatetime";
export default function BlogThumbnail({ news }) {
  const handleReadNews = useNavigateToArticle();
  const datetime = formatDateTimeVi(news?.createdAt || null);

  return (
    <div className="w-full h-full hover:cursor-pointer ">
      <img
        onClick={() =>
          handleReadNews(news.category.slug, news.category.name, news.slug)
        }
        src={news?.thumbnail ? news?.thumbnail : `/images/defaultNews.png`}
        alt="Anh minh hoa"
        className="w-full h-64 object-cover"
      />
      <div className="mt-4 flex flex-row  text-xs font-light text-zinc-400">
        <p className="font-normal text-zinc-700">{news?.author}</p>
        <p className="mx-1">-</p>
        <p> {datetime}</p>
      </div>
      <div className="mt-4 pr-10">
        <p className="text-xl font-semibold text-gray-700">{news?.title} </p>
      </div>
    </div>
  );
}
