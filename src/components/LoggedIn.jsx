import { Link } from "react-router-dom";
import avatar from "../assets/avatar.jpg";
import Search from "./Search";

const LoggedIn = () => {
  return (
    <div className="flex items-center justify-around md:justify-stretch">
      <div className="hidden md:block">
        <Search />
      </div>

      <Link to="/dashboard" className="outline-none">
        <img
          src={avatar}
          alt=""
          className="w-12 h-12 ml-3 rounded-full border-2 transition-all duration-200 hover:border-red-600 focus:border-red-600"
        />
      </Link>
    </div>
  );
};

export default LoggedIn;
