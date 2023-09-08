import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Logo from "../assets/logo.svg";
import avatar from "../assets/avatar.jpg";

const Navbar = () => {
  return (
    <nav className="pt-12 px-12 flex items-center justify-between">
      <div className="nav-links flex items-center justify-between">
        <Link to="/">
          <img src={Logo} alt="Otaku Quest Logo" />
        </Link>

        <ul className="flex w-full items-center">
          <li className="py-3 px-6">
            <Link className="text-white transition-all hover:text-gray-400">
              Popular
            </Link>
          </li>
          <li className="py-3 px-6">
            <Link className="text-white transition-all hover:text-gray-400">
              Games
            </Link>
          </li>
          <li className="py-3 px-6">
            <Link className="text-white transition-all hover:text-gray-400">
              Reviews
            </Link>
          </li>
          <li className="py-3 px-6">
            <Link className="text-white transition-all hover:text-gray-400">
              Support
            </Link>
          </li>
        </ul>
      </div>

      <div className="nav-search flex items-center">
        <FiSearch
          size={25}
          className="text-white transition-all hover:text-gray-400 mr-6 cursor-pointer"
        />

        <Link>
          <img src={avatar} alt="" className="w-12 h-12 rounded-full" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
