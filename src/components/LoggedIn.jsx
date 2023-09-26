import { Link } from "react-router-dom";
import Search from "./Search";
import avatar from "../assets/avatar.jpg";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

const LoggedIn = ({ handleLogout }) => {
  const [dropdown, setDropdown] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const image = user.photoURL;
        setCurrentImage(image);
      }
    });

    return () => unsubscribe();
  }, []);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const closeDropdown = () => {
    setDropdown(false);
  };

  return (
    <div className="flex items-center justify-around md:justify-stretch">
      <div className="hidden md:block">
        <Search />
      </div>

      <div className="relative">
        <div onClick={toggleDropdown} className="cursor-pointer" tabIndex={0}>
          <img
            src={currentImage ? currentImage : avatar}
            alt={`${auth.currentUser.displayName} profile image`}
            className="w-12 h-12 ml-3 object-cover rounded-full border-2 transition-all duration-200 hover:border-red-600 focus:border-red-600"
          />
        </div>

        <div
          className={`absolute mt-2 top-full right-0 bg-white shadow-lg ${
            dropdown ? "block" : "hidden"
          }`}
        >
          <ul className="">
            <li className="cursor-pointer" onClick={closeDropdown}>
              <Link
                to="/dashboard"
                className="block text-center text-lg px-8 md:px-12 py-2 md:py-3 text-gray-800 hover:bg-red-600 hover:text-white transition-all duration-200"
              >
                Dashboard
              </Link>
            </li>
            <li className="cursor-pointer" onClick={closeDropdown}>
              <Link
                to="/settings"
                className="block text-center text-lg px-8 md:px-12 py-2 md:py-3 text-gray-800 hover:bg-red-600 hover:text-white transition-all duration-200"
              >
                Settings
              </Link>
            </li>
            <li
              className="cursor-pointer text-center text-lg px-8 md:px-12 py-2 md:py-3 text-gray-800 hover:bg-red-600 hover:text-white transition-all duration-200"
              onClick={handleLogout}
            >
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoggedIn;
