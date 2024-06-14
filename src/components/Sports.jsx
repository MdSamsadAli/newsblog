import { MdOutlineWatchLater } from "react-icons/md";
import { trendData } from "../assets/data";
import Title from "../common/Title";
import { FaRegComments } from "react-icons/fa";

const Sports = () => {
  return (
    <>
      <div className="md:w-1/2">
        <Title title={"Sports"} />

        <div className="grid grid-cols-1 gap-4 mt-8">
          {trendData.slice(0, 1).map((val, key) => (
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
        <div className="grid grid-cols-1 gap-6 mt-8">
          {trendData.slice(1, 3).map((val, key) => (
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

export default Sports;
