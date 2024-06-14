import FeaturedPost from "./FeaturedPost";
import Flickr from "./Flickr";
import PopularPost from "./PopularPost";

const PopularWrapper = () => {
  return (
    <>
      <div className="w-10/12 m-auto">
        <div className="md:flex gap-6">
          <div className="md:w-8/12">
            <PopularPost />
          </div>
          <div className="md:w-1/3">
            <FeaturedPost />
            <h3 className="mt-12 mb-4 text-xl font-bold uppercase text-center text-gray-300">
              Flickr Photos
            </h3>
            <div className="grid grid-cols-4 gap-2">
              <Flickr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularWrapper;
