// import Banner from "../components/Banner";
import BannerSlider from "../components/BannerSlider";
import BlogWrap from "../components/BlogWrap";
import PopularVideos from "../components/PopularVideos";
import PopularWrapper from "../components/PopularWrapper";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <>
      {/* <Banner /> */}
      <BannerSlider />
      <Trending />
      <BlogWrap />
      <PopularVideos />
      <PopularWrapper />
    </>
  );
};

export default Home;
