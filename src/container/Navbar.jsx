import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import LoggedIn from "../components/LoggedIn";
import LoggedOut from "../components/LoggedOut";

const Navbar = () => {
  return (
    <nav className="pt-12 px-6 flex items-center justify-between md:px-12">
      <div className="nav-links flex items-center justify-between">
        <Link to="/">
          <img src={Logo} alt="Otaku Quest Logo" className="max" />
        </Link>

        <ul className="hidden w-full items-center ml-6 gap-12 md:flex">
          <li>
            <Link className="text-white transition-all hover:text-gray-400">
              Popular
            </Link>
          </li>
          <li>
            <Link className="text-white transition-all hover:text-gray-400">
              Games
            </Link>
          </li>
          <li>
            <Link className="text-white transition-all hover:text-gray-400">
              Reviews
            </Link>
          </li>
          <li>
            <Link className="text-white transition-all hover:text-gray-400">
              Support
            </Link>
          </li>
        </ul>
      </div>

      <LoggedOut />
    </nav>
  );
};

export default Navbar;
