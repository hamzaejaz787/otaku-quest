import { Link } from "react-router-dom";
import avatar from "../assets/avatar.jpg";
import Search from "./Search";

const LoggedIn = () => {
  return (
    <div className="nav-search flex items-center">
      <Search />

      <Link to="/" className="outline-none">
        <img
          src={avatar}
          alt=""
          className="w-12 h-12 rounded-full border-2 transition-all duration-200 hover:border-red-600 focus:border-red-600"
        />
      </Link>
    </div>
  );
};

export default LoggedIn;
