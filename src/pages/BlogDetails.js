import React from "react";
import Heading from "../common/Heading";

const BlogDetails = () => {
  return (
    <div>
      <Heading
        banner={
          <img
            src="./images/hero-banner.png"
            className="w-full h-full"
            alt="img"
          />
        }
        title={"Blog Details"}
        to={"Home"}
        current={"Blog Details"}
      />
    </div>
  );
};

export default BlogDetails;
