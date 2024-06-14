import { useState } from "react";
import { FaRegComments } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { Link } from "react-router-dom";
import { trendData } from "../assets/data";
import Title from "../common/Title";

const Trending = () => {
  const [trendItem, setTrendItem] = useState(trendData);

  const [activeItem, setActiveItem] = useState("all");

  const filterItems = (item) => {
    setActiveItem(item);
    const eventItem = trendData.filter((data) => data.category === item);
    setTrendItem(eventItem);

    if (item === "all") {
      setTrendItem(trendData);
      return;
    }
  };
  return (
    <>
      <div className="w-10/12 m-auto mt-12">
        <div className="border-b border-gray-300">
          <div className="flex justify-between">
            <Title title={"Trending Post"} />
            <ul className="flex md:overflow-auto overflow-hidden overflow-x-auto">
              <li
                className={`border px-4 py-3 hover:text-red-500 ${
                  activeItem === "all" ? "active" : ""
                }`}
                onClick={() => filterItems("all")}
              >
                <Link>All</Link>
              </li>
              <li
                className={`border px-4 py-3 hover:text-red-500  ${
                  activeItem === "news" ? "active" : ""
                }`}
                onClick={() => filterItems("news")}
              >
                <Link>News</Link>
              </li>
              <li
                className={`border px-4 py-3 hover:text-red-500  ${
                  activeItem === "sports" ? "active" : ""
                }`}
                onClick={() => filterItems("sports")}
              >
                <Link>Sports</Link>
              </li>
              <li
                className={`border px-4 py-3 hover:text-red-500  ${
                  activeItem === "music" ? "active" : ""
                }`}
                onClick={() => filterItems("music")}
              >
                <Link>Music</Link>
              </li>
              <li
                className={`border px-4 py-3 hover:text-red-500  ${
                  activeItem === "business" ? "active" : ""
                }`}
                onClick={() => filterItems("business")}
              >
                <Link>Business</Link>
              </li>
              <li
                className={`border px-4 py-3 hover:text-red-500  ${
                  activeItem === "lifestyle" ? "active" : ""
                }`}
                onClick={() => filterItems("lifestyle")}
              >
                <Link>Lifestyle</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mt-8">
          {trendItem.slice(0, 4).map((val, key) => (
            <div key={key}>
              <div className="relative">
                <div className="overflow-hidden">
                  <img
                    src={val.img}
                    alt="banner-img"
                    className="w-full h-full hover:scale-110 transition-all ease-in-out duration-300"
                  />
                </div>
                <div className="absolute bottom-0 text-white">
                  <button className="p-2 bg-black">{val.icon}</button>
                </div>
              </div>
              <h3 className="text-xl font-semibold">{val.title}</h3>
              <div className="flex gap-4 text-gray-300">
                <p className="mt-2 text-base flex items-center">
                  <MdOutlineWatchLater />
                  {val.date}
                </p>
                <p className="mt-2 text-base flex items-center">
                  <FaRegComments />
                  {val.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {trendItem.map((val, key) => (
            <div key={key} className="flex gap-4 items-center">
              <div className="overflow-hidden w-32 h-20">
                <img
                  src={val.img}
                  alt="banner-img"
                  className="w-full h-full object-cover hover:scale-110 transition-all ease-in-out duration-300"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{val.title}</h3>
                <div className="flex gap-4 text-gray-300">
                  <p className="mt-2 text-base flex items-center">
                    <MdOutlineWatchLater />
                    {val.date}
                  </p>
                  <p className="mt-2 text-base flex items-center">
                    <FaRegComments />
                    {val.comment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Trending;
