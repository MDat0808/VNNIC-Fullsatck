import BlogCard from "../BlogCard";
export default function TrendingNews({ listNews }) {
  const trendingArticles = [
    {
      imgSrc: "https://placehold.co/150x100",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      title: "A Relentless Pursuit of Perfection in Product Design",
      snippet: `"I began to notice that there was a sharp contrast between well-made..."`,
    },
    {
      imgSrc: "https://placehold.co/150x100",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      title: "A Relentless Pursuit of Perfection in Product Design",
      snippet: `"I began to notice that there was a sharp contrast between well-made..."`,
    },
    {
      imgSrc: "https://placehold.co/150x100",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      title: "A Relentless Pursuit of Perfection in Product Design",
      snippet: `"I began to notice that there was a sharp contrast between well-made..."`,
    },
    {
      imgSrc: "https://placehold.co/150x100",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      title: "A Relentless Pursuit of Perfection in Product Design",
      snippet: `"I began to notice that there was a sharp contrast between well-made..."`,
    },
    {
      imgSrc: "https://placehold.co/150x100",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      title: "A Relentless Pursuit of Perfection in Product Design",
      snippet: `"I began to notice that there was a sharp contrast between well-made..."`,
    },
  ];

  return (
    <div className="bg-gray-50 border border-solid rounded-lg p-6 max-h-[600px] overflow-auto">
      <p className="text-xl font-bold">Trending News</p>
      <p className="w-full h-[1px] bg-blue-500 mt-1 mb-2"></p>

      <div className="space-y-6">
        {listNews.map((article, index) => (
          <BlogCard article={article} />
        ))}
      </div>
    </div>
  );
}
