import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import { BiLogIn } from "react-icons/bi";
import { navbar } from "../assets/data";

const TopHeader = () => {
  return (
    <>
      <div className="border-b md:overflow-auto overflow-hidden overflow-x-auto">
        <div className="w-10/12 m-auto">
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              {navbar.slice(5, 8).map((val, key) => (
                <div key={key}>
                  <div className="border-l pl-4 py-1">
                    <Link className="hover:text-rose-600">{val.nav}</Link>
                  </div>
                </div>
              ))}
              <Link className="flex items-center border-x px-4 hover:text-rose-600">
                <BiLogIn /> Login
              </Link>
            </div>

            <div className="flex gap-4 top-social-icons">
              <Icon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
