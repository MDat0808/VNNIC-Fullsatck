import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import ArticleSearchCard from "../components/ui/ArticleSearchCard";
import Pagination from "../components/ui/pagination/Pagination";

export default function Search() {
  const [searchParams] = useSearchParams();
  const order = searchParams.get("order");
  const category = searchParams.get("category");
  const sort = searchParams.get("sort");
  const [articles, setArticles] = useState([]);
  const [articlesToShow, setArticlesToShow] = useState([]);

  // Generate mock data
  useEffect(() => {
    const mockArticles = [
      {
        id: 1,
        title: "Mock Article 1",
        author: "Author 1",
        createdAt: "2024-10-21",
        thumbnail: "https://via.placeholder.com/150",
        category: {
          slug: "news",
          name: "News",
        },
        description:
          "hello hello hello hello kaslkd nlasn ldnlsan kldn kldn ksan ln dalsn",
        slug: "mock-article-1",
      },
      {
        id: 1,
        title: "Mock Article 1",
        author: "Author 1",
        createdAt: "2024-10-21",
        thumbnail: "https://via.placeholder.com/150",
        category: {
          slug: "news",
          name: "News",
        },
        description:
          "hello hello hello hello kaslkd nlasn ldnlsan kldn kldn ksan ln dalsn",
        slug: "mock-article-1",
      },
      {
        id: 1,
        title: "Mock Article 1",
        author: "Author 1",
        createdAt: "2024-10-21",
        thumbnail: "https://via.placeholder.com/150",
        category: {
          slug: "news",
          name: "News",
        },
        description:
          "hello hello hello hello kaslkd nlasn ldnlsan kldn kldn ksan ln dalsn",
        slug: "mock-article-1",
      },
      {
        id: 1,
        title: "Mock Article 1",
        author: "Author 1",
        createdAt: "2024-10-21",
        thumbnail: "https://via.placeholder.com/150",
        category: {
          slug: "news",
          name: "News",
        },
        description:
          "hello hello hello hello kaslkd nlasn ldnlsan kldn kldn ksan ln dalsn",
        slug: "mock-article-1",
      },
      {
        id: 1,
        title: "Mock Article 1",
        author: "Author 1",
        createdAt: "2024-10-21",
        thumbnail: "https://via.placeholder.com/150",
        category: {
          slug: "news",
          name: "News",
        },
        description:
          "hello hello hello hello kaslkd nlasn ldnlsan kldn kldn ksan ln dalsn",
        slug: "mock-article-1",
      },
      {
        id: 1,
        title: "Mock Article 1",
        author: "Author 1",
        createdAt: "2024-10-21",
        thumbnail: "https://via.placeholder.com/150",
        category: {
          slug: "news",
          name: "News",
        },
        description:
          "hello hello hello hello kaslkd nlasn ldnlsan kldn kldn ksan ln dalsn",
        slug: "mock-article-1",
      },
      {
        id: 1,
        title: "Mock Article 1",
        author: "Author 1",
        createdAt: "2024-10-21",
        thumbnail: "https://via.placeholder.com/150",
        category: {
          slug: "news",
          name: "News",
        },
        description:
          "hello hello hello hello kaslkd nlasn ldnlsan kldn kldn ksan ln dalsn",
        slug: "mock-article-1",
      },
      {
        id: 1,
        title: "Mock Article 1",
        author: "Author 1",
        createdAt: "2024-10-21",
        thumbnail: "https://via.placeholder.com/150",
        category: {
          slug: "news",
          name: "News",
        },
        description:
          "hello hello hello hello kaslkd nlasn ldnlsan kldn kldn ksan ln dalsn",
        slug: "mock-article-1",
      },

      {
        id: 2,
        title: "Mock Article 2",
        author: "Author 2",
        createdAt: "2024-10-20",
        thumbnail: "https://via.placeholder.com/150",
        category: {
          slug: "events",
          name: "Events",
        },
        slug: "mock-article-2",
      },
      {
        id: 3,
        title: "Mock Article 3",
        author: "Author 3",
        createdAt: "2024-10-19",
        thumbnail: "https://via.placeholder.com/150",
        category: {
          slug: "activities",
          name: "Activities",
        },
        slug: "mock-article-3",
      },
    ];

    setArticles(mockArticles);
    setArticlesToShow(mockArticles);
  }, []);

  // Handle sorting if necessary
  useEffect(() => {
    if (sort) {
      const sortedArticles = [...articles].sort((a, b) => {
        return b[sort] - a[sort];
      });
      setArticlesToShow(sortedArticles);
    }
  }, [sort, articles]);

  const [limit, setLimit] = useState(9);
  const [isExpanded, setIsExpanded] = useState(false); // Track if expanded or not

  // Handle the "Xem thêm" and "Ẩn bớt" functionality
  const toggleArticles = () => {
    if (isExpanded) {
      setLimit(9); // Collapse back to showing 10 items
    } else {
      setLimit(articlesToShow.length); // Show all items
    }
    setIsExpanded(!isExpanded); // Toggle the state
  };
  return (
    <div className="w-full px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 h-fit">
        {articlesToShow &&
          articlesToShow.map((article, index) => {
            if (index < limit) {
              return <ArticleSearchCard key={index} article={article} />;
            }
          })}
      </div>
      <div className="flex justify-center my-10">
        {articlesToShow.length >= 10 && (
          <button
            onClick={toggleArticles}
            className="text-blue-700 font-semibold bg-blue-100 hover:bg-blue-200 rounded-md px-4 py-2"
          >
            {isExpanded ? "Ẩn bớt" : "Xem thêm..."}
          </button>
        )}
      </div>
    </div>
  );
}
