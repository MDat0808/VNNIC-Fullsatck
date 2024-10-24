import formatDateTimeVi from "../../../hook/useFormatDatetime";
import useNavigateToArticle from "../../../hook/useNavigateToArticle";
export default function MainArticle({ article }) {
  const datetime = formatDateTimeVi(article.createdAt);
  const handleReadNews = useNavigateToArticle();
  return (
    <div
      onClick={() =>
        handleReadNews(
          article.category.slug,
          article.category.name,
          article.slug
        )
      }
      className="hover:cursor-pointer"
    >
      <img
        src={article?.thumbnail}
        alt="Two women standing and smiling"
        className="w-full h-[400px] mb-4"
      />
      <p className="text-gray-600 mb-2">
        {article.author} - {datetime}
      </p>
      <h2 className="text-xl font-bold mb-2">{article.title}</h2>
      <p className="text-gray-800 before:content-['“'] after:content-['”']">
        {article.description}
      </p>
    </div>
  );
}
