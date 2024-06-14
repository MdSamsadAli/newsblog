import { PropTypes } from "prop-types";
const Title = ({ title }) => {
  return (
    <>
      <div className="border-b">
        <button className=" bg-black whitespace-nowrap text-white px-4 py-3 font-semibold text-xl title relative">
          {title}
        </button>
      </div>
    </>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
