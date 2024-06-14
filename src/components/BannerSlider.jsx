import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { bannerSlider } from "../assets/data";
import {
  MdNavigateBefore,
  MdNavigateNext,
  MdOutlineWatchLater,
} from "react-icons/md";
import { FaRegComments } from "react-icons/fa";

const BannerSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <MdNavigateNext />,
    prevArrow: <MdNavigateBefore />,
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
      <Slider {...settings}>
        {bannerSlider.map((val, key) => (
          <div key={key} className="relative">
            <div className="overflow-hidden">
              <img
                src={val.img}
                alt="banner-img"
                className="w-full h-full hover:scale-110 transition-all ease-in-out duration-300"
              />
            </div>

            <div className="text-white">
              <div className="absolute bottom-10 left-10">
                <div className="flex">
                  <button className="px-2 py-1 bg-red-500">{val.btn}</button>
                  <button className="p-2 bg-black">{val.icon}</button>
                </div>
                <h3 className="lg:text-4xl font-semibold">{val.title}</h3>
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
        ))}
      </Slider>
    </>
  );
};

export default BannerSlider;
