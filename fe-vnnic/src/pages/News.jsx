import TemplateNews from "../components/ui/template/TemplateNew";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/ui/Loading";
export default function News(params) {
  const { categorySlug } = useParams();
  const [category, setCategory] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const responseData = await axios.get(
          `http://localhost:8088/articles/category/${categorySlug}`
        );
        const responseCategory = await axios.get(
          `http://localhost:8088/category/slug/${categorySlug}`
        );
        setData(responseData.data);
        setCategory(responseCategory.data);
      } catch (err) {
        setError(err.message || "Error fetching data");
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 5000);
      }
    };

    fetchData();
  }, [categorySlug]);
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }
  console.log(data);

  return (
    <>
      <TemplateNews title={category.name} data={data} />
    </>
  );
}
