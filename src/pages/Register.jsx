import { useState } from "react";
import { auth } from "../firebase";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = async (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password, confirmPassword } = data;

    if (password !== confirmPassword)
      return toast.error("Passwords do not match!");

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setLoading(true);
        const user = userCredentials.user;

        updateProfile(auth.currentUser, {
          displayName: username,
        });

        sendEmailVerification(auth.currentUser);

        if (user) localStorage.setItem("user", JSON.stringify(user.uid));
        console.log(user);
        navigate("/");
      })
      .catch((err) => toast.error(`${err.code}: ${err.message}`));
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        sendEmailVerification(auth.currentUser);

        if (token) {
          localStorage.setItem("user", token);
          console.log(result);
          navigate("/");
        }
      })
      .catch((err) => toast.error(`${err.code}: ${err.message}`));
  };

  const handleFacebookSignUp = async () => {
    const provider = new FacebookAuthProvider();
    await signInWithPopup(auth, provider)
      .then((result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        sendEmailVerification(auth.currentUser);

        if (token) {
          localStorage.setItem("user", token);
          console.log(result);
          navigate("/");
        }
      })
      .catch((err) => toast.error(err.code, err.message));
  };
  return (
    <>
      <div className="flex min-h-screen items-center justify-center mt-16 pb-12 sm:pb-8 px-4 sm:px-0">
        <div className="w-full max-w-md bg-gray-800 rounded px-4 sm:px-8 py-8">
          <h1 className="mt-6 text-center text-3xl font-bold text-white">
            Create A New Account
          </h1>

          <form onSubmit={handleOnSubmit}>
            <div className="mt-8">
              <input
                required
                type="text"
                name="username"
                maxLength={20}
                value={data.username}
                onChange={handleChange}
                placeholder="Enter Your Username"
                className="block w-full appearance-none text-black rounded-md border border-gray-300 p-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
              />

              <span className="block text-gray-500 text-sm mt-1">
                (Between 2 and 16 characters)
              </span>
            </div>

            <div className="mt-4">
              <input
                required
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="block w-full appearance-none text-black rounded-md border border-gray-300 p-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              />
            </div>

            <div className="mt-4">
              <input
                required
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Enter Your Password"
                className="block w-full appearance-none text-black rounded-md border border-gray-300 p-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
              />
            </div>

            <div className="mt-4">
              <input
                required
                type="password"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="block w-full appearance-none text-black rounded-md border border-gray-300 p-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 "
              />
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={loading}
                className="relative flex w-full justify-center items-center rounded-md border border-transparent bg-red-800 py-2 px-4 text-lg font-medium text-white hover:bg-red-600  focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200"
              >
                Create Account
              </button>
            </div>
          </form>

          <div className="mt-4">
            <button
              onClick={handleGoogleSignUp}
              className="relative flex w-full justify-center items-center rounded-md border border-transparent bg-white py-2 px-4 text-lg font-medium text-gray-700 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
            >
              <FcGoogle className="mr-3 text-2xl" /> Sign Up with Google
            </button>
          </div>

          <div className="mt-4">
            <button
              onClick={handleFacebookSignUp}
              className="relative flex w-full justify-center items-center rounded-md border border-transparent bg-white py-2 px-4 text-lg font-medium text-gray-700 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
            >
              <FaFacebookSquare className="mr-2 text-2xl" /> Sign Up with
              Facebook
            </button>
          </div>

          <div className="text-center mt-6">
            <Link
              to="/login"
              className="text-white hover:text-gray-400 hover:underline transition-all duration-150"
            >
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
