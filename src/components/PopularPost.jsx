import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { popularVideos } from "../assets/data";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaRegComments } from "react-icons/fa";
import Title from "../common/Title";

const PopularPost = () => {
  return (
    <>
      <div className="my-8">
        <div>
          <Title title="Popular Post" />
        </div>
      </div>
      <div>
        {popularVideos.slice(2, 6).map((val, key) => (
          <div key={key}>
            <div className="md:flex gap-8 my-8">
              <div className="md:w-1/2">
                <div className="overflow-hidden">
                  <img
                    src={val.img}
                    alt="banner-img"
                    className="w-full h-full object-cover hover:scale-110 transition-all ease-in-out duration-300"
                  />
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="flex text-white">
                  <button className="px-2 py-1 bg-red-500">{val.btn}</button>
                  <button className="p-2 bg-black">{val.icon}</button>
                </div>
                <h3 className="text-xl font-semibold">{val.title}</h3>
                <div className="flex gap-4">
                  <p className="mt-2 text-base flex items-center">
                    <MdOutlineWatchLater />
                    {val.date}
                  </p>
                  <p className="mt-2 text-base flex items-center">
                    <FaRegComments />
                    {val.comment}
                  </p>
                </div>
                <p>{val.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularPost;
