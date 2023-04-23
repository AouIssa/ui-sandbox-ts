import React from "react";
import { IoIosArrowBack } from "react-icons/io";

interface HeaderProps {
  title: string;
  onBack?: () => void;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ title, onBack, className }) => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white shadow shadow-gray-400 p-2 pt-4 md:hidden ${className}`}
    >
      <div className="container mx-auto flex items-center justify-between border-b-0">
        {onBack ? (
          <button className="focus:outline-none" onClick={onBack}>
            <IoIosArrowBack className="text-blue-500" size={28} />
          </button>
        ) : (
          <div className="w-20" />
        )}
        <div className="w-full text-center">
          <h1 className="text-lg font-sans text-gray-600 font-bold">{title}</h1>
        </div>
        <div className="w-10" />
      </div>
    </header>
  );
};

export default Header;
