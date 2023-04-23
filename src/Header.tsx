import React from "react";
import { IoIosArrowBack } from "react-icons/io";

interface HeaderProps {
  title: string;
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onBack }) => {
  return (
<header className="bg-white shadow p-4 mt-5 block md:hidden">
  <div className="container mx-auto flex items-center justify-between">
    {onBack ? (
      <button className="focus:outline-none" onClick={onBack}>
        <IoIosArrowBack className="text-blue-500" size={28} />
      </button>
    ) : (
      <div className="w-20" />
    )}
    <div className="w-full text-center">
      <h1 className="text-lg font-semibold">{title}</h1>
    </div>
    <div className="w-10" />
  </div>
</header>

  );
};

export default Header;
