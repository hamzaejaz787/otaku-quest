import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import LoggedIn from "../components/LoggedIn";
import LoggedOut from "../components/LoggedOut";
import Search from "../components/Search";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const navLinks = [
  { id: "trending", title: "Trending", href: "/trending" },
  { id: "games", title: "Games", href: "/games" },
  { id: "anime", title: "Anime", href: "/anime" },
  { id: "reviews", title: "Reviews", href: "/reviews" },
];

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [loggedUser, setLoggedUser] = useState(false);

  return (
    <nav className="w-full pt-10 flex justify-between items-center md:px-12 px-5">
      <div className="w-full flex items-center justify-between">
        <img src={Logo} alt="Otaku Quest" />
        <ul className="hidden md:flex gap-6">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="text-white text cursor-pointer transition-all duration-200 hover:text-red-700"
            >
              <Link to={nav.href}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        <div className="block md:hidden">
          {navToggle ? (
            <AiOutlineClose
              className="text-white text-2xl cursor-pointer transition-all duration-200 hover:text-red-700"
              onClick={() => setNavToggle(false)}
            />
          ) : (
            <FiMenu
              className="text-white text-2xl cursor-pointer transition-all duration-200 hover:text-red-700"
              onClick={() => setNavToggle(true)}
            />
          )}
        </div>
      </div>

      <div className="hidden md:block">
        {loggedUser ? <LoggedIn /> : <LoggedOut />}
      </div>
    </nav>
  );
};

export default Navbar;
