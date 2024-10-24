import { useNavigate } from "react-router-dom";

const useNavigateToArticle = () => {
  const navigate = useNavigate();

  const handleReadNews = (slug, category, slugNews) => {
    navigate(`/article/${slug}/${category}/${slugNews}`);
  };

  return handleReadNews;
};

export default useNavigateToArticle;
