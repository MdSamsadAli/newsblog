import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { popularVideos } from "../assets/data";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaRegComments } from "react-icons/fa";
import Title from "../common/Title";

const PopularVideos = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-10/12 m-auto mt-16">
        <div className="mx-2 my-16">
          <div className="bg-gray-300 h-28 my-8 flex items-end p-4 text-white">
            ADSPACE 980X120
          </div>
          <div>
            <Title title="Popular Videos" />
          </div>
        </div>
        <Slider {...settings}>
          {popularVideos.slice(0, 6).map((val, key) => (
            <div key={key} className="relative">
              <div className="mx-2">
                <div className="overflow-hidden md:h-96">
                  <img
                    src={val.img}
                    alt="banner-img"
                    className="w-full h-full object-cover hover:scale-110 transition-all ease-in-out duration-300"
                  />
                </div>

                <div className="text-white">
                  <div className="absolute bottom-3 left-10">
                    <div className="flex">
                      <button className="px-2 py-1 bg-red-500">
                        {val.btn}
                      </button>
                      <button className="p-2 bg-black">{val.icon}</button>
                    </div>
                    <h3 className="md:text-xl font-semibold">{val.title}</h3>
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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default PopularVideos;
