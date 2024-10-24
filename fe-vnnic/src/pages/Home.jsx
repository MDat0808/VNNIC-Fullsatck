import { useState, useEffect, useRef } from "react";
import BlogCard from "../components/ui/BlogCard";
import BlogCardFeatured from "../components/ui/BlogCardFeatured";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import BlogThumbnail from "../components/ui/BlogThumbnail";
import BlogCardWidthFull from "../components/ui/BlogCardWitdhFull";
import BlogCardCol from "../components/ui/BlogCardCol";
import axios from "axios";
import BlogCardEvent from "../components/ui/BlogCardEvent";
import BlogListEvent from "../components/ui/articleEvent/BlogListEvent";
import CategoryHeader from "../components/ui/template/CatetoryHeader";
import formatDateTimeVi from "../hook/useFormatDatetime";
import FeaturedNewsSection from "../components/ui/template/FeaturedNewsSection";
export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [articleByNews, setArticleByNews] = useState([]);
  const [articleByEvent, setArticleByEvent] = useState([]);
  const [articleByActivities, setArticleByActivities] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8088/articles"); // Replace with your API endpoint
        const fetchedData = response.data;
        setData(fetchedData);
        setArticleByNews(
          fetchedData.filter((item) => item.category.slug === "tin-tuc")
        );
        setArticleByEvent(
          fetchedData.filter((item) => item.category.slug === "su-kien")
        );
        setArticleByActivities(
          fetchedData.filter((item) => item.category.slug === "hoat-dong-doan")
        );
      } catch (err) {
        setError("Error fetching data"); // Handle error
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, []);

  const categories = [
    { name: "Tất cả", count: 50, color: "bg-red-500" },
    { name: "Tin tức", count: 50, color: "bg-yellow-500" },
    { name: "Sự kiện", count: 40, color: "bg-green-500" },
    { name: "Hoạt động đoàn", count: 55, color: "bg-blue-500" },
  ];

  return (
    <div className="p-6">
      <div className="">
        <div className="w-full  flex flex-row justify-between h-[420px] ">
          {data && data[3] ? (
            <div className="w-3/6 ">
              <BlogCardFeatured article={data[0]} />
            </div>
          ) : (
            <div>Loading</div>
          )}

          <div className="w-3/6  ml-4 max-h-[420px] h-full">
            <div className="h-1/2 flex flex-row mb-4">
              <div className="w-1/2">
                <BlogCardFeatured article={data[1]} />
              </div>
              <div className="w-1/2  ml-4">
                <BlogCardFeatured article={data[2]} />
              </div>
            </div>
            <div className="w-full max-h-[192px] h-full ">
              <BlogCardFeatured article={data[4]} />
            </div>
          </div>
        </div>
      </div>
      {/* News */}
      <div className="mt-8 w-full  h-[500px]">
        <div className="w-full ">
          {/* Title */}
          <CategoryHeader title="TIN TỨC" categories={categories} />

          {/* Contents */}
          <div className="flex h-full w-full mt-2 gap-4">
            <div className="w-1/2 h-96 ">
              <BlogThumbnail news={articleByNews[0]} />
            </div>
            {/*  */}
            <div className="flex flex-col gap-4 h-96 w-1/2 overflow-auto ">
              {articleByNews.slice(1).map((item, index) => (
                <BlogCard key={index} article={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* ADS */}
      <div>
        <div className="w-2/3 h-32 bg-blue-500 ">
          <div className=" flex flex-row justify-between items-center w-full h-full p-8">
            <div>
              <h3>Dang ki dich vu cong</h3>
            </div>
            <div className="w-32  h-8  bg-red-500 flex justify-center items-center ">
              <p className="text-white text-sm font-semibold">Dang ki ngay</p>
            </div>
          </div>
        </div>
      </div>
      {/* Events */}

      <div className="w-full flex mt-8">
        <div className="w-2/3">
          <div className="w-full">
            <div className=" w-full ">
              <div className="">
                {/* Title */}
                <CategoryHeader title="Sự kiện" categories={categories} />

                {/* Featured */}
                <div className="flex flex-col h-full w-full  mt-2">
                  <div className="flex gap-8">
                    <BlogCardEvent article={articleByEvent[0]} />
                    <BlogCardEvent article={articleByEvent[1]} />
                  </div>
                  {/*  List item*/}
                  <BlogListEvent articleByEvent={articleByEvent.slice(2)} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="p-3">
            <h1 className="text-red-500 font-bold text-lg mb-2">Thể loại</h1>
            <hr className="border-t-2 border-red-300 mb-4" />
            <ul>
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center mb-2"
                >
                  <div className="flex gap-1  items-center">
                    <FontAwesomeIcon className="w-3 h-3 " icon={faCaretRight} />
                    <span>{category.name}</span>
                  </div>
                  <span
                    className={`text-white text-sm px-2 py-1 rounded ${category.color}`}
                  >
                    {category.count}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* Banner */}
          <div className="px-3 mt-4 flex flex-col gap-4">
            <div>
              <img
                src="https://tinhdoan.binhthuan.dcs.vn/portals/1013/hoctaphochiminh2_1.jpg"
                alt="Bảo vệ tổ quốc"
                className="w-fit h-fit object-cover hover:cursor-pointer"
              />
            </div>
            <div>
              <img
                src="https://storage-vnportal.vnpt.vn/btn-ubnd/6370/Ngay11/bao%20ve%20bien%20dao%20(1).jpg"
                alt="Bảo vệ tổ quốc"
                className="w-fit h-fit object-cover hover:cursor-pointer"
              />
            </div>
            <div>
              <img
                src="https://tinhdoan.binhthuan.dcs.vn/portals/1013/BR_hocsinh3renluyen-7c9bce788f.jpg"
                alt="Bảo vệ tổ quốc"
                className="w-full h-fit object-cover hover:cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      {/*  Group Activities */}
      <div className="w-full">
        <div className="mt-8 w-full ">
          <div className="">
            {/* Title */}
            <CategoryHeader title="Hoạt động đoàn" categories={categories} />

            {/* Featured */}
            <div className="flex flex-col h-full w-full  mt-2">
              <BlogCardWidthFull article={articleByActivities[0]} />
              {/*  List item*/}
              <div className=" mt-8 h-fit  w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {articleByActivities.slice(1).map((item, index) => (
                    <BlogCardCol
                      key={index}
                      imgSrc={item?.thumbnail}
                      author={item?.author}
                      date={formatDateTimeVi(item?.createdAt)}
                      title={item?.title}
                      description={item?.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* News that cannot be missed */}

      <FeaturedNewsSection />
    </div>
  );
}
