import { Link } from "react-router-dom";
import Search from "./Search";

const LoggedOut = () => {
  return (
    <div className="nav-search flex items-center">
      <div className="hidden md:block">
        <Search />
      </div>

      <Link to="/login">
        <button className="text-xs sm:text-sm font-bold bg-red-800 md:ml-4 hover:bg-red-600 transition-all duration-200 text-white py-2 px-6 rounded-full">
          Log In
        </button>
      </Link>
    </div>
  );
};

export default LoggedOut;
