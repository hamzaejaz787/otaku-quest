import { Link } from "react-router-dom";
import avatar from "../assets/avatar.jpg";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

const LoggedIn = ({ handleLogout, styles, navToggle }) => {
  const [dropdown, setDropdown] = useState(false);
  const [user, setUser] = useState({
    username: "",
    currentImage: "",
    email: "",
  });

  const navLinks = [
    { id: "dashboard", title: "Dashboard", href: "/dashboard" },
    { id: "settings", title: "Settings", href: "/settings" },
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = {
          currentImage: user.photoURL || avatar,
          username: user.displayName || "",
          email: user.email || "",
        };

        setUser(userData);
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
    <div className={`relative z-20 ${styles}`}>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleDropdown}
          className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 transition-all duration-200 lg:focus:ring-red-600 lg:hover:ring-red-600 cursor-pointer"
        >
          <img
            src={user.currentImage}
            alt={`${auth.currentUser.displayName} profile image`}
            className="w-full h-full rounded-full"
          />
        </button>

        <div className="lg:hidden">
          <span className="block text-white text-lg">
            {user.username || ""}
          </span>
          <span className="block text-sm text-gray-500">{user.email}</span>
        </div>
      </div>

      <ul
        className={`top-16 right-0 mt-5 space-y-5 lg:absolute  lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 overflow-hidden ${
          navToggle ? "bg-gray-800" : "bg-white"
        } ${dropdown ? "" : "hidden"}`}
      >
        {navLinks.map((item) => (
          <li className="cursor-pointer" onClick={closeDropdown} key={item.id}>
            <Link
              to={item.href}
              className={`block text-lg py-2 md:py-3 ${
                navToggle
                  ? "text-white text-left px-0"
                  : "text-gray-800 text-center"
              } hover:bg-red-600 hover:text-white transition-all duration-200`}
            >
              {item.title}
            </Link>
          </li>
        ))}
        <li
          className={`cursor-pointer text-lg py-2 md:py-3 ${
            navToggle
              ? "text-white text-left px-0"
              : "text-gray-800 text-center"
          } hover:bg-red-600 hover:text-white transition-all duration-200`}
          onClick={handleLogout}
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default LoggedIn;
