import { banner } from "../assets/data";

const Banner = () => {
  return (
    <>
      <div className="w-10/12 m-auto">
        <div>
          {banner.map((val, key) => (
            <div key={key} className="relative">
              <div className="banner-img">
                <img src={val.img} alt="banner-img" className="w-full h-full" />
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <div className="">
                  <h3 className="text-2xl font-bold">Tour & Travel</h3>
                  <h1 className="text-4xl font-bold">Amazing Place On Earth</h1>
                  <p className="mt-2 text-base">Saturday, June 12 2021</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Banner;
