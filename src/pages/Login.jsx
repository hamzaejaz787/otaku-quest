import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="flex h-screen items-center justify-center mt-16">
        <div className="w-full max-w-md bg-gray-800 rounded p-8">
          <h1 className="mt-6 text-center text-3xl font-bold text-white">
            Welcome Back!!
          </h1>

          <form action="" className="">
            <div className="mt-8">
              <input
                type="email"
                placeholder="Enter Your Registered Email"
                className="block w-full appearance-none text-black rounded-md border border-gray-300 p-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              />
            </div>
            <div className="mt-4">
              <input
                type="password"
                placeholder="Enter Your Password"
                className="block w-full appearance-none text-black rounded-md border border-gray-300 p-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
              />
            </div>

            <div className="mt-8">
              <button
                onClick={(e) => e.preventDefault()}
                type="submit"
                className="relative flex w-full justify-center items-center rounded-md border border-transparent bg-red-800 py-2 px-4 text-lg font-medium text-white hover:bg-red-600  focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200"
              >
                Log In
              </button>
            </div>
          </form>

          <div className="mt-4">
            <button
              type="submit"
              className="relative flex w-full justify-center items-center rounded-md border border-transparent bg-white py-2 px-4 text-lg font-medium text-gray-700 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
            >
              <FcGoogle className="mr-3 text-2xl" /> Sign In with Google
            </button>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="relative flex w-full justify-center items-center rounded-md border border-transparent bg-white py-2 px-4 text-lg font-medium text-gray-700 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
            >
              <FaFacebookSquare className="mr-2 text-2xl" /> Sign In with
              Facebook
            </button>
          </div>

          <div className="flex justify-between items-center mt-6">
            <Link
              to="/forgot"
              className="text-white hover:text-gray-400 hover:underline transition-all duration-150"
            >
              Forgot Password?
            </Link>
            <Link
              to="/register"
              className="text-white hover:text-gray-400 hover:underline transition-all duration-150"
            >
              Create New Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
