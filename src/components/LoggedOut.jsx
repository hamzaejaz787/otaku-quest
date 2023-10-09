import { Link } from "react-router-dom";

const LoggedOut = ({ styles, navToggle }) => {
  return (
    <div className={styles}>
      <Link
        to="/login"
        onClick={navToggle}
        className="block w-full text-sm text-center font-bold bg-red-800 md:ml-4 hover:bg-red-600 transition-all duration-200 text-white py-2 px-6 md:rounded-full"
      >
        Log In
      </Link>
    </div>
  );
};

export default LoggedOut;
