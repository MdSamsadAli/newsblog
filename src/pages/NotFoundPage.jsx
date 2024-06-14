import React from "react";
import Heading from "../common/Heading";

const NotFoundPage = () => {
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
        title={"Not Found Page"}
        to={"Home"}
        current={"Not Found Page"}
      />
    </div>
  );
};

export default NotFoundPage;
