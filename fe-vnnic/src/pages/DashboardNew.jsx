import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import PostNews from "../components/dashboard/PostNew";
export default function DashboardNews(params) {
  const [isPostNews, setIsPostNews] = useState(false);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleDisplayPostNews = () => {
    setIsPostNews(true);
  };
  const handleHiddenPostNews = () => {
    setIsPostNews(false);
  };

  useEffect(() => {
    // Define an async function to fetch data from the API
    const fetchData = async () => {
      try {
        // Set loading state to true while fetching data
        setIsLoading(true);
        // Make the API call using fetch
        const response = await fetch(`http://localhost:8080/api/v1/article`, {
          method: "GET",
          headers: {
            // Add any headers if needed (e.g., authorization token)
            "Content-Type": "application/json",
          },
        });
        // Check if the response is successful
        if (!response.ok) {
          // If response is not successful, throw an error
          throw new Error("Failed to fetch data");
        }
        // Parse the JSON response
        const jsonData = await response.json();
        // Update the state with the fetched data
        setData(jsonData);
        setIsLoading(false); // Set loading state to false after data is fetched
      } catch (error) {
        // If an error occurs during fetch, set the error state
        setError(error);
        setIsLoading(false); // Set loading state to false
      }
    };
    // Call the fetch function
    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="bg-gray-50 max-h-screen">
      <div className="mx-8  ">
        <div className="flex justify-between">
          <div className="flex mt-4 ">
            <button
              onClick={handleDisplayPostNews}
              className="active-check min-w-max p-2 h-9 rounded-3xl border-solid	border border-gray-500 text-gray-500 text-sm font-medium"
              type="button"
            >
              <span>Thêm tin tức mới</span>
            </button>
            <button
              className="ml-4  min-w-max w-24 p-2 h-9 rounded-3xl border-solid	border border-gray-500 text-gray-500 text-sm font-medium"
              type="submit"
            >
              <span>Xóa tin</span>
            </button>
          </div>
          <div className="mt-4 flex flex-row">
            <div>
              <button
                className="mr-4 p-2 w-20 rounded-lg border-solid	border border-gray-500 text-gray-500 text-sm"
                type="submit"
              >
                <FontAwesomeIcon className="mr-2 w-4 h-4" icon={faFilter} />
                <span>Filter</span>
              </button>
            </div>
            <div className="w-72">
              <form className="">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative ">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <FontAwesomeIcon
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      icon={faSearch}
                    />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-2 ps-10 text-sm text-gray-900 border border-solid	 border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos..."
                    required
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-4 overflow-y-auto max-h-96 shadow-md sm:rounded-lg">
          <table className="w-full text-sm overflow-y-auto text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="h-10 text-sm  text-gray-700  bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  News ID
                </th>
                <th scope="col" className="px-6 py-3">
                  {" "}
                  Title
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Nội dung
                </th>
                <th scope="col" className="px-6 py-3">
                  Ngày tạo
                </th>
                <th scope="col" className="px-6 py-3">
                  Tác giả
                </th>

                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>

            <tbody className="h-10">
              {data &&
                data.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{item.id}</td>
                    <td className="px-6 py-4 max-w-32">{item.title}</td>
                    <td className="px-6 py-4 ">{item.category.name}</td>
                    <td className="px-6 py-4">{item.createdAt} </td>
                    <td className="px-6 py-4">{item.user.name}</td>
                    <td className="px-6 py-4">
                      <FontAwesomeIcon
                        className="w-4 h-4 hover:cursor-pointer "
                        icon={faEllipsisVertical}
                      />
                    </td>
                  </tr>
                ))}
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">#123</td>
                <td className="px-6 py-4">Minh Khoi</td>
                <td className="px-6 py-4">
                  999 nfsnfjkjkdsfabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb 999
                  nfsnfjkjkdsfabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb 999
                  nfsnfjkjkdsfabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb 999
                  nfsnfjkjkdsfabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb 999
                  nfsnfjkjkdsfabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb 999
                  nfsnfjkjkdsfabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                </td>
                <td className="px-6 py-4">2000000</td>
                <td className="px-6 py-4">1000000</td>
                <td className="px-6 py-4">
                  <FontAwesomeIcon
                    className="w-4 h-4 hover:cursor-pointer "
                    icon={faEllipsisVertical}
                  />
                </td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">#123</td>
                <td className="px-6 py-4">Minh Khoi</td>
                <td className="px-6 py-4">999</td>
                <td className="px-6 py-4">2000000</td>
                <td className="px-6 py-4">1000000</td>
                <td className="px-6 py-4">
                  <FontAwesomeIcon
                    className="w-4 h-4 hover:cursor-pointer"
                    icon={faEllipsisVertical}
                  />
                </td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">#123</td>
                <td className="px-6 py-4">Minh Khoi</td>
                <td className="px-6 py-4">999</td>
                <td className="px-6 py-4">2000000</td>
                <td className="px-6 py-4">1000000</td>
                <td className="px-6 py-4">
                  <FontAwesomeIcon
                    className="w-4 h-4 hover:cursor-pointer"
                    icon={faEllipsisVertical}
                  />
                </td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">#123</td>
                <td className="px-6 py-4">Minh Khoi</td>
                <td className="px-6 py-4">999</td>
                <td className="px-6 py-4">2000000</td>
                <td className="px-6 py-4">1000000</td>
                <td className="px-6 py-4">
                  <FontAwesomeIcon
                    className="w-4 h-4 hover:cursor-pointer"
                    icon={faEllipsisVertical}
                  />
                </td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">#123</td>
                <td className="px-6 py-4">Minh Khoi</td>
                <td className="px-6 py-4">999</td>
                <td className="px-6 py-4">2000000</td>
                <td className="px-6 py-4">1000000</td>
                <td className="px-6 py-4">
                  <FontAwesomeIcon
                    className="w-4 h-4 hover:cursor-pointer"
                    icon={faEllipsisVertical}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-2 flex w-full justify-end px-4 py-2 ">
            <nav>
              <ul className="list-style-none flex">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <FontAwesomeIcon className="w-4 h-4" icon={faAngleLeft} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex  items-center active-check justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <FontAwesomeIcon className="w-4 h-4 " icon={faAngleRight} />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {isPostNews && <PostNews onClose={handleHiddenPostNews} />}
    </div>
  );
}
