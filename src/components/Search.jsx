import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="border-2 h-10 px-5 pr-10 rounded-full bg-transparent text-white text-md transition-all duration-200 focus:outline-none focus:border-red-600"
      />
      <FiSearch
        size={22}
        className="absolute right-0 top-0 mt-2 mr-4 text-white pointer-events-none "
      />
    </div>
  );
};

export default Search;
