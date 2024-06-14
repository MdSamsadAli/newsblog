import MostRead from "./MostRead";
import Icon from "./Icon";
import News from "./News";
import News2 from "./News2";
import NewsLetter from "./Newsletter";
import Sports from "./Sports";

const BlogWrap = () => {
  return (
    <>
      <div className="lg:flex gap-8 m-auto w-10/12 mt-32">
        <div className="lg:w-2/3">
          <div className="lg:flex gap-4">
            <Sports />
            <News />
          </div>

          <News2 />
        </div>
        <div className="lg:w-1/3">
          <div className="relative h-80 bg-neutral-300">
            <div className="absolute bottom-4 left-4">
              <div className="text-white">AdSpace 300X580</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-8">
            <Icon />
          </div>
          <NewsLetter />
          <MostRead />
        </div>
      </div>
    </>
  );
};

export default BlogWrap;
