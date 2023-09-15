import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import avatar from "../assets/avatar.jpg";

const LoggedIn = () => {
  return (
    <div className="nav-search flex items-center">
      <FiSearch
        size={25}
        className="text-white transition-all hover:text-gray-400 mr-6 cursor-pointer"
      />

      <Link>
        <img src={avatar} alt="" className="w-12 h-12 rounded-full" />
      </Link>
    </div>
  );
};

export default LoggedIn;
