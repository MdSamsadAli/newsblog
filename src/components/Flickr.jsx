import { flickrfeed } from "../assets/data";

const Flickr = () => {
  return (
    <>
      {flickrfeed.map((insta, key) => (
        <div key={key} className="h-14 overflow-hidden">
          <img
            src={insta.img}
            alt="insta"
            className="w-full h-full object-cover hover:scale-125 transition-all duration-300 ease-in-out"
          />
        </div>
      ))}
    </>
  );
};

export default Flickr;
