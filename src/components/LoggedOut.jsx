import { FiSearch } from "react-icons/fi";

const LoggedOut = () => {
  return (
    <div className="nav-search flex items-center">
      <FiSearch
        size={25}
        className="text-white transition-all hover:text-gray-400 mr-6 cursor-pointer"
      />

      <button className="text-sm font-bold bg-red-800 hover:bg-red-600 transition-all duration-200 text-white py-2 px-6 rounded-xl disabled:opacity-25">
        Log In
      </button>
    </div>
  );
};

export default LoggedOut;
