import React from "react";
import { IoIosArrowBack } from "react-icons/io";

interface HeaderProps {
  title: string;
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onBack }) => {
  return (
    <header className="bg-white shadow p-2 mt-3 md:hidden">
      <div className="container mx-auto flex items-center justify-between border-b-0">
        {onBack ? (
          <button className="focus:outline-none" onClick={onBack}>
            <IoIosArrowBack className="text-blue-500" size={28} />
          </button>
        ) : (
          <div className="w-20" />
        )}
        <div className="w-full text-center">
          <h1 className="text-lg font-sans text-gray-500 font-bold">{title}</h1>
        </div>
        <div className="w-10" />
      </div>
    </header>
  );
};

export default Header;
