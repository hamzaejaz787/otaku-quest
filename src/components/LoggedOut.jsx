import { useState } from "react";
import LoginModal from "./LoginModal";
import Search from "./Search";

const LoggedOut = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="nav-search flex items-center">
      <div className="hidden md:block">
        <Search />
      </div>
      <button
        onClick={openModal}
        className="text-sm font-bold bg-red-800 ml-4 hover:bg-red-600 transition-all duration-200 text-white py-2 px-6 rounded-xl disabled:opacity-25"
      >
        Log In
      </button>

      <LoginModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default LoggedOut;
