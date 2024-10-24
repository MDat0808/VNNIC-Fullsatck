import { useState, useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import BlogCard from "../components/ui/BlogCard";
import { useToast } from "../hook/useToast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
export default function DetailArticle() {
  const location = useLocation();
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [articlesRelated, setArticlesRelated] = useState([]);
  const [articlesLasted, setArticlesLasted] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataRender, setDataRender] = useState([]); // Default to an empty array

  const tab = [
    {
      name: "Tin tức mới nhất",
      slug: "tin-tuc-moi-nhat",
    },
    {
      name: "Tin tức liên quan",
      slug: "tin-tuc-lien-quan",
    },
  ];
  const [activeTab, setActiveTab] = useState(tab[0].slug);
  const handleTabClick = (tabSlug) => {
    setActiveTab(tabSlug);
  };
  useEffect(() => {
    if (activeTab === "tin-tuc-moi-nhat") {
      setDataRender(articlesLasted); // Set to latest articles
    } else if (activeTab === "tin-tuc-lien-quan") {
      setDataRender(articlesRelated); // Set to related articles
    }
  }, [activeTab, articlesLasted, articlesRelated]);
  const now = new Date();
  const bannerAds = [
    {
      imageUrl:
        "https://tinhdoan.binhthuan.dcs.vn/portals/1013/z5883316044839_e129d154524c3a17a24890b56ecf54a1.jpg",
      link: "https://example.com/banner1",
    },
    {
      imageUrl:
        "https://phanthiet.binhthuan.dcs.vn/portals/1018/Users/255/23/1023/loi%20the%20Dang%20Vien_1.jpg?ver=2023-08-15-062103-883",
      link: "https://example.com/banner2",
    },
  ];

  const formattedDate = now.toLocaleDateString("vi-VN");
  const formattedTime = now.toLocaleTimeString("vi-VN", { hour12: false });
  const fakeBlog = {
    _id: "12345",
    category: {
      slug: "technology",
      name: "Technology",
    },
    thumbnail: "/images/fake-thumbnail.jpg",
    author: {
      name: "John Doe",
    },
    createdAt: "2024-10-02",
    title: "The Future of Technology in 2024",
  };

  const toast = useToast();
  const handleClose = () => {
    toast.warning("Quảng cáo này không thể ẩn, nếu muốn vui lòng mua gói vip");
  };

  const handleCopyUrl = () => {
    toast.success("Ban cua copy url thanh cong.");
  };

  useEffect(() => {
    // Define an async function to fetch data from the API
    const fetchData = async () => {
      try {
        // Set loading state to true while fetching data
        setIsLoading(true);

        // Make the API calls using fetch
        const response = await fetch(
          `http://localhost:8088/articles/detail/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const dataArticlesRelated = await fetch(
          `http://localhost:8088/articles/related/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const dataArticlesFeatured = await fetch(
          `http://localhost:8088/articles/featured/${4}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        //  const dataBanner = await fetch(
        //    `http://localhost:8080/banner-ads/booking/dcYbFQHA`,
        //    {
        //      method: "GET",
        //      headers: {
        //        "Content-Type": "application/json",
        //      },
        //    }
        //  );

        //  if (!response.ok || !dataArticlesRelated.ok) {
        //    throw new Error("Failed to fetch data");
        //  }

        // Parse the JSON responses
        const jsonData = await response.json();

        const jsonDataArticlesRelated = await dataArticlesRelated.json();
        const jsonDataFeatured = await dataArticlesFeatured.json();

        // Update the state with the fetched data
        setData(jsonData);
        setArticlesLasted(jsonDataFeatured);
        //  setBannerAds(jsonDataBanner);
        setArticlesRelated(jsonDataArticlesRelated);
        setIsLoading(false); // Set loading state to false after data is fetched
      } catch (error) {
        // If an error occurs during fetch, set the error state
        setError(error);
        setIsLoading(false); // Set loading state to false
      }
    };

    // Call the fetch function
    fetchData();
  }, [id]);

  return (
    <div className="w-full px-8 py-6">
      {/* Title */}
      <div className="">
        <h2 className="max-w-prose text-2xl font-bold">{data?.title}</h2>
        <div className="mt-2 flex items-center gap-4 text-gray-500">
          <div className="">
            <p className="flex items-center text-sm font-semibold">
              <FontAwesomeIcon className="mr-2 h-5 w-5" icon={faCircleUser} />
              <span>{data?.author}</span>
            </p>
          </div>
          <p className="text-sm">
            {new Date(data?.createdAt).toLocaleDateString("vi-VN")} -
            {new Date(data?.createdAt).toLocaleTimeString("vi-VN", {
              hour12: false,
            })}{" "}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mt-4 flex min-w-min flex-row justify-between">
        <div className="flex flex-col max-h-max w-2/3 items-start justify-center  px-4">
          <div
            className="min-h-96 h-fit"
            dangerouslySetInnerHTML={{ __html: data?.content }}
          />
          <div className="">
            <h1 className="text-red-500 text-2xl font-bold mb-2">Notes</h1>
            <hr className="border-t border-gray-300 mb-4" />
            <p className="text-gray-600 mb-4">
              Hello Morbo, how's the family? I've been there. My folks were
              always on me to groom myself and wear underpants. What am I, the
              pope? I love this planet! I’ve got wealth, fame, and access to the
              depths of sleaze that those things bring. We’ll need to have a
              look inside you with this camera.
            </p>
            <div className="flex items-center space-x-2 ">
              <button
                className="flex items-center space-x-1 "
                onClick={handleCopyUrl}
              >
                <FontAwesomeIcon className="w-4 h-4" icon={faPaperclip} />{" "}
                <span>:</span>
                <span className=" max-w-72 truncate underline-offset-1 underline text-blue-500">
                  {window.location.href}
                </span>
              </button>
            </div>
            <div className="flex items-center space-x-1">
              <FontAwesomeIcon className="w-4 h-4" icon={faTag} />{" "}
              <span className="text-gray-700">Tags</span>
              <span className="text-gray-500 capitalize">
                : {data?.tags?.map((item) => item).join(", ")}
              </span>
            </div>
          </div>
        </div>

        <div className=" flex w-1/3 flex-col items-center justify-start ">
          <div className="">
            <div className="flex justify-between items-center ">
              <div className="w-full">
                <div className="flex justify-between space-x-4 border-b text-center font-semibold">
                  {tab.map((item) => (
                    <button
                      key={item.slug}
                      onClick={() => handleTabClick(item.slug)}
                      className={`text-lg pb-2 w-1/2 ${
                        activeTab === item.slug
                          ? "text-black font-bold border-b-2 border-blue-500"
                          : "text-gray-500"
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 flex h-fit min-h-96 flex-col gap-4 overflow-y-auto ">
              {}
              {dataRender?.map((item, index) => (
                <BlogCard key={index} article={item} />
              ))}
            </div>{" "}
          </div>
          {/* Benner Ads */}
          <div className="mt-16 flex w-full flex-col gap-8">
            <div className="relative flex w-full animate-bounce items-center justify-center overflow-hidden rounded-lg border border-gray-300 bg-gray-100 shadow-md hover:cursor-pointer hover:opacity-90">
              <img
                src={
                  bannerAds[0]?.imageUrl
                    ? bannerAds[0]?.imageUrl
                    : "/images/thiennghiep.jpg"
                }
                alt="Banner Ad"
                className="h-full w-full object-cover"
              />
              <div className="absolute right-2 top-0">
                <button onClick={handleClose} className="p-2 text-white">
                  X
                </button>
              </div>{" "}
            </div>

            <div className="flex  w-full items-center justify-center overflow-hidden rounded-lg border border-gray-300 bg-gray-100 shadow-md hover:cursor-pointer hover:opacity-90">
              <img
                src={
                  bannerAds[1]?.imageUrl
                    ? bannerAds[1]?.imageUrl
                    : "/images/thiennghiep.jpg"
                }
                alt="Banner Ad"
                className="h-full w-full object-fill"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Note */}

      {/* Comment Section */}
      {/* <div>
        <section className="py-8 antialiased lg:py-16 dark:bg-gray-900">
          <div className="mx-auto max-w-2xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900 lg:text-2xl dark:text-white">
                Bình luận (0)
              </h2>
            </div>
            <form className="mb-6">
              <div className="border--400 mb-4 rounded-lg rounded-t-lg border px-4 py-2 dark:border-gray-700 dark:bg-gray-800">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows="6"
                  className="w-full border-0 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                  placeholder="Write a comment..."
                  required
                ></textarea>
              </div>
              <button
                type="button"
                className="rounded-full bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-700"
              >
                Gửi bình luận
              </button>
            </form>
          </div>
        </section>
      </div> */}

      {/* Related Articles */}
      <div className="mt-16">
        <p className="mt-2 text-xl font-semibold ">
          Tin Tuc noi bat khong nen bo lo
        </p>
        <div className="mt-4 w-full flex flex-row gap-4">
          <div className="w-1/3 ">
            <div className="w-full h-[2px] bg-gray-500"></div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-y-2 hover:cursor-pointer ">
                <div className=" ">
                  <div className="py-1 hover:underline ">
                    <h2 className="text-sm font-semibold text-gray-700 ">
                      Su Kien bong da mung Xuan 2024, lan thu 12 thanh cong Su
                      Su Kien bong da mung Xuan 2024, lan thu 12 thanh cong Kien
                      bong da mung Xuan 2024, lan thu 12 thanh cong
                    </h2>
                  </div>
                  <div className=" flex flex-row  text-xs font-light text-zinc-400">
                    <p className="font-normal text-zinc-700">Minh Dat</p>
                    <p className="mx-1">-</p>
                    <p> 08 Aug 2024</p>
                  </div>
                </div>
                <div className="w-full h-[0.5px] bg-blue-500"></div>
              </div>
              <div className="flex flex-col gap-y-2 ">
                <div className=" ">
                  <div className="py-1">
                    <h2 className="text-sm font-semibold text-gray-700 ">
                      Su Kien bong da mung Xuan 2024, lan thu 12 thanh cong Su
                      Su Kien bong da mung Xuan 2024, lan thu 12 thanh cong Kien
                      bong da mung Xuan 2024, lan thu 12 thanh cong
                    </h2>
                  </div>
                  <div className=" flex flex-row  text-xs font-light text-zinc-400">
                    <p className="font-normal text-zinc-700">Minh Dat</p>
                    <p className="mx-1">-</p>
                    <p> 08 Aug 2024</p>
                  </div>
                </div>
                <div className="w-full h-[0.5px] bg-blue-500"></div>
              </div>
              <div className="flex flex-col gap-y-2 ">
                <div className=" ">
                  <div className="py-1">
                    <h2 className="text-sm font-semibold text-gray-700 ">
                      Su Kien bong da mung Xuan 2024, lan thu 12 thanh cong Su
                      Su Kien bong da mung Xuan 2024, lan thu 12 thanh cong Kien
                      bong da mung Xuan 2024, lan thu 12 thanh cong
                    </h2>
                  </div>
                  <div className=" flex flex-row  text-xs font-light text-zinc-400">
                    <p className="font-normal text-zinc-700">Minh Dat</p>
                    <p className="mx-1">-</p>
                    <p> 08 Aug 2024</p>
                  </div>
                </div>
                <div className="w-full h-[0.5px] bg-blue-500"></div>
              </div>
            </div>
          </div>
          <div className="w-1/3 ">
            <div className="w-full h-[2px] bg-gray-500"></div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-y-2 hover:cursor-pointer ">
                <div className=" ">
                  <div className="py-1 hover:underline ">
                    <h2 className="text-sm font-semibold text-gray-700 ">
                      Su Kien bong da mung Xuan 2024, lan thu 12 thanh cong Su
                      Su Kien bong da mung Xuan 2024, lan thu 12 thanh cong Kien
                      bong da mung Xuan 2024, lan thu 12 thanh cong
                    </h2>
                  </div>
                  <div className=" flex flex-row  text-xs font-light text-zinc-400">
                    <p className="font-normal text-zinc-700">Minh Dat</p>
                    <p className="mx-1">-</p>
                    <p> 08 Aug 2024</p>
                  </div>
                </div>
                <div className="w-full h-[0.5px] bg-blue-500"></div>
              </div>
              <div className="flex flex-col gap-y-2 ">
                <div className=" ">
                  <div className="py-1">
                    <h2 className="text-sm font-semibold text-gray-700 ">
                      Su Kien bong da mung Xuan 2024, lan thu 12 thanh cong Su
                      Su Kien bong da mung Xuan 2024, lan thu 12 thanh cong Kien
                      bong da mung Xuan 2024, lan thu 12 thanh cong
                    </h2>
                  </div>
                  <div className=" flex flex-row  text-xs font-light text-zinc-400">
                    <p className="font-normal text-zinc-700">Minh Dat</p>
                    <p className="mx-1">-</p>
                    <p> 08 Aug 2024</p>
                  </div>
                </div>
                <div className="w-full h-[0.5px] bg-blue-500"></div>
              </div>
              <div className="flex flex-col gap-y-2 ">
                <div className=" ">
                  <div className="py-1">
                    <h2 className="text-sm font-semibold text-gray-700 ">
                      Su Kien bong da mung Xuan 2024, lan thu 12 thanh cong Su
                      Su Kien bong da mung Xuan 2024, lan thu 12 thanh cong Kien
                      bong da mung Xuan 2024, lan thu 12 thanh cong
                    </h2>
                  </div>
                  <div className=" flex flex-row  text-xs font-light text-zinc-400">
                    <p className="font-normal text-zinc-700">Minh Dat</p>
                    <p className="mx-1">-</p>
                    <p> 08 Aug 2024</p>
                  </div>
                </div>
                <div className="w-full h-[0.5px] bg-blue-500"></div>
              </div>
            </div>
          </div>{" "}
          <div className="w-1/3 ">
            <div className="w-full h-[2px] bg-gray-500"></div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-y-2 hover:cursor-pointer ">
                <div className=" ">
                  <div className="py-1 hover:underline ">
                    <h2 className="text-sm font-semibold text-gray-700 ">
                      Su Kien bong da mung Xuan 2024, lan thu 12 thanh cong Su
                      Su Kien bong da mung Xuan 2024, lan thu 12 thanh cong Kien
                      bong da mung Xuan 2024, lan thu 12 thanh cong
                    </h2>
                  </div>
                  <div className=" flex flex-row  text-xs font-light text-zinc-400">
                    <p className="font-normal text-zinc-700">Minh Dat</p>
                    <p className="mx-1">-</p>
                    <p> 08 Aug 2024</p>
                  </div>
                </div>
                <div className="w-full h-[0.5px] bg-blue-500"></div>
              </div>
              <div className="flex flex-col gap-y-2 ">
                <div className=" ">
                  <div className="py-1">
                    <h2 className="text-sm font-semibold text-gray-700 ">
                      Su Kien bong da mung Xuan 2024, lan thu 12 thanh cong Su
                      Su Kien bong da mung Xuan 2024, lan thu 12 thanh cong Kien
                      bong da mung Xuan 2024, lan thu 12 thanh cong
                    </h2>
                  </div>
                  <div className=" flex flex-row  text-xs font-light text-zinc-400">
                    <p className="font-normal text-zinc-700">Minh Dat</p>
                    <p className="mx-1">-</p>
                    <p> 08 Aug 2024</p>
                  </div>
                </div>
                <div className="w-full h-[0.5px] bg-blue-500"></div>
              </div>
              <div className="flex flex-col gap-y-2 ">
                <div className=" ">
                  <div className="py-1">
                    <h2 className="text-sm font-semibold text-gray-700 ">
                      Su Kien bong da mung Xuan 2024, lan thu 12 thanh cong Su
                      Su Kien bong da mung Xuan 2024, lan thu 12 thanh cong Kien
                      bong da mung Xuan 2024, lan thu 12 thanh cong
                    </h2>
                  </div>
                  <div className=" flex flex-row  text-xs font-light text-zinc-400">
                    <p className="font-normal text-zinc-700">Minh Dat</p>
                    <p className="mx-1">-</p>
                    <p> 08 Aug 2024</p>
                  </div>
                </div>
                <div className="w-full h-[0.5px] bg-blue-500"></div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
