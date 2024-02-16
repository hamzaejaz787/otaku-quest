import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FiMenu, FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import Logo from "../assets/logo.svg";
import LoggedIn from "../components/LoggedIn";
import LoggedOut from "../components/LoggedOut";

const navLinks = [
  { id: "games", title: "Games", href: "/games" },
  { id: "anime", title: "Anime", href: "/anime" },
  { id: "manga", title: "Manga", href: "/" },
  { id: "support", title: "Support", href: "/" },
];

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("user");
        navigate("/login");
      })
      .catch((err) => toast.error(err));
  };

  return (
    <nav className="pt-8">
      <div className="flex items-center space-x-8 py-3 mx-auto px-6 sm:px-10 2xl:px-20">
        <div className="flex-none lg:flex-initial z-10">
          <Link to="/" onClick={() => setNavToggle(false)}>
            <img src={Logo} alt="Otaku Quest" width={120} height={50} />
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-between">
          <div
            className={`${
              navToggle ? "bg-gray-800" : ""
            } absolute z-20 w-full top-24 left-0 p-6 pt-10 lg:p-4 lg:static lg:block space-y-5 ${
              navToggle ? "" : "hidden"
            }`}
          >
            <ul className="space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
              {navLinks.map((item) => (
                <li
                  key={item.id}
                  className="text-white text-lg text cursor-pointer transition-all duration-200 hover:text-red-700"
                >
                  <Link onClick={() => setNavToggle(false)} to={item.href}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Mobile */}
            {user ? (
              <LoggedIn
                handleLogout={handleLogout}
                navToggle={navToggle}
                styles="lg:hidden"
              />
            ) : (
              <LoggedOut styles="lg:hidden" navToggle={navToggle} />
            )}
          </div>

          {/* Desktop */}
          <div className="flex-1 flex items-center justify-end z-20 gap-4 sm:gap-6">
            <fieldset className="flex items-center space-x-2 border-2 rounded-full py-1 px-2 sm:px-4 transition-all duration-200 focus-within:border-red-600">
              <FiSearch
                size={20}
                className="h-5 w-5 flex-none text-gray-400 cursor-pointer hover:text-gray-200 duration-200 transition-all"
              />
              <input
                type="text"
                placeholder="Search..."
                className="w-full outline-none bg-transparent appearance-none placeholder-white text-white sm:w-auto"
              />
            </fieldset>

            {user ? (
              <LoggedIn handleLogout={handleLogout} styles="hidden lg:block" />
            ) : (
              <LoggedOut styles="hidden lg:block" />
            )}

            <button
              className="outline-none text-gray-400 block lg:hidden"
              onClick={() => setNavToggle(!navToggle)}
            >
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
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
