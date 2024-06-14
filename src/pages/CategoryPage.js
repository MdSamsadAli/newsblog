import React from "react";
import Heading from "../common/Heading";
import { blog } from "../data/Data";
import { SlUser } from "react-icons/sl";
import { TbMessageStar } from "react-icons/tb";
import { GrLinkNext } from "react-icons/gr";
import NewsLetter from "../components/NewsLetter";
import Category from "../components/Category";
import PopularPost from "../components/PopularPost";

const CategoryPage = () => {
  return (
    <>
      <div>
        <Heading
          banner={
            <img
              src="./images/hero-banner.png"
              className="w-full h-full"
              alt="img"
            />
          }
          title={"Category Page"}
          to={"Home"}
          current={"Category Page"}
        />
        <div className="w-10/12 m-auto mt-16">
          <div className="lg:flex gap-8">
            <div className="lg:w-2/3">
              <div className="grid grid-cols-2 gap-8">
                {blog.map((val, key) => (
                  <div key={key}>
                    <div className="relative">
                      <div className="blog_img h-96 overflow-hidden">
                        <img
                          src={val.blog_img}
                          alt="img "
                          className="w-full h-full hover:scale-110 transition-all ease-in-out duration-300 object-cover"
                        />
                      </div>

                      <div className="absolute bottom-0">
                        <div className="lg:flex gap-4 items-center py-4 px-6 bg-white text-gray-500">
                          <p className="flex items-center gap-2">
                            <SlUser />
                            {val.role}
                          </p>
                          <p className="flex items-center gap-2">
                            <TbMessageStar />
                            {val.comment}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-3xl font-semibold">{val.title}</h2>
                      <p className="my-3 text-gray-400">Tag: {val.tag}</p>
                      <p className="text-gray-500">{val.description}</p>
                      <div className="my-4">
                        <button className="flex items-center gap-2 text-orange-500 bg-black px-10 py-3 hover:bg-white hover:shadow-lg">
                          Read More <GrLinkNext />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/3">
              <NewsLetter />
              <Category />
              <PopularPost />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
