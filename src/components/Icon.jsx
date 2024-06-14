import {
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaRss,
  FaTwitter,
} from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const Icon = () => {
  return (
    <>
      <div className="social-icon">
        <FaFacebookF />
      </div>
      <div className="social-icon">
        <FaTwitter />
      </div>
      <div className="social-icon">
        <FaGooglePlusG />
      </div>
      <div className="social-icon">
        <FaInstagram />
      </div>
      <div className="social-icon">
        <TfiYoutube />
      </div>
      <div className="social-icon">
        <FaRss />
      </div>
    </>
  );
};

export default Icon;
