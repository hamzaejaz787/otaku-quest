/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai";

const LoginModal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed z-10 inset-0 overflow-hidden w-full h-full backdrop-blur-sm transition-all duration-200 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-around items-center">
        <h1 className="text-white text-lg">Login Modal</h1>

        <AiOutlineClose
          className="text-white cursor-pointer text-2xl"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default LoginModal;
