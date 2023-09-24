import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import LoggedIn from "../components/LoggedIn";
import LoggedOut from "../components/LoggedOut";
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
    <nav className="w-full pt-10 flex justify-between items-center md:px-12 px-5 relative">
      <div className="flex items-center justify-between w-full md:w-auto md:justify-stretch">
        <div className="flex justify-between w-full items-center md:hidden z-20">
          {navToggle ? (
            <AiOutlineClose
              className="text-white text-3xl cursor-pointer transition-all duration-200 hover:text-red-700"
              onClick={() => setNavToggle(false)}
            />
          ) : (
            <>
              <FiMenu
                className="text-white text-3xl cursor-pointer transition-all duration-200 hover:text-red-700"
                onClick={() => setNavToggle(true)}
              />
            </>
          )}
          <Link to="/">
            <img src={Logo} alt="Otaku Quest" className="w-32 sm:w-48" />
          </Link>

          {loggedUser ? <LoggedIn /> : <LoggedOut />}
        </div>

        <Link to="/" className="hidden md:block">
          <img src={Logo} alt="Otaku Quest" />
        </Link>

        <ul className="hidden md:flex gap-6 ml-6">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="text-white text-lg text cursor-pointer transition-all duration-200 hover:text-red-700"
            >
              <Link to={nav.href}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        {navToggle && (
          <>
            <div
              className={`${
                navToggle ? "translate-x-0" : "translate-x-full"
              } md:hidden absolute top left-0 top-24 bg-gray-800 transition-transform duration-300 transform`}
            >
              <ul className="flex flex-col justify-between py-8 gap-2">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className="text-white text-xl text py-4 px-10 cursor-pointer transition-all duration-200 hover:bg-red-700 "
                  >
                    <Link to={nav.href}>{nav.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>

      <div className="hidden md:block">
        {loggedUser ? <LoggedIn /> : <LoggedOut />}
      </div>
    </nav>
  );
};

export default Navbar;
