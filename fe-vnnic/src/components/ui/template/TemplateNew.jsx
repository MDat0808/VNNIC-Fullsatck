import BlogCardCol from "../BlogCardCol";
import MainArticle from "./MainArticle";
import TrendingNews from "./TrendingNew";
import Title from "./Title";
import Pagination from "../pagination/Pagination";
import formatDateTimeVi from "../../../hook/useFormatDatetime";
export default function TemplateNews({ title, data }) {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <MainArticle article={data[0]} />
        <TrendingNews listNews={data} />
      </div>
      <div className="container mx-auto">
        <Title title={title} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.slice(1).map((item, index) => (
            <BlogCardCol
              key={index}
              imgSrc={item.thumbnail}
              author={item.author}
              date={formatDateTimeVi(item.createdAt)}
              title={item.title}
              category={item.category.name}
              newsSlug={item.slug}
              slug={item.category.slug}
            />
          ))}
        </div>
      </div>
      <div className="flex  mt-4 self-end">
        <Pagination totalPage={data.length / 10} />
      </div>
    </div>
  );
}
