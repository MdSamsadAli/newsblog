import { MdOutlineWatchLater } from "react-icons/md";
import { trendData } from "../assets/data";
import Title from "../common/Title";
import { FaRegComments } from "react-icons/fa";

const News2 = () => {
  return (
    <>
      <div className="mt-12">
        <Title title={"News"} />

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {trendData.slice(0, 2).map((val, key) => (
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
              <p className="mt-2 font-light">{val.description}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {trendData.slice(0, 3).map((val, key) => (
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
      </div>
    </>
  );
};

export default News2;
