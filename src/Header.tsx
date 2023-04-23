import React from "react";

interface HeaderProps {
  title: string;
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onBack }) => {
  return (
    <header className="bg-white shadow p-4 block md:hidden">
      <div className="container mx-auto flex items-center justify-between">
        {onBack ? (
          <button className="text-blue-500" onClick={onBack}>
            &#x2190; Back
          </button>
        ) : (
          <div className="w-20" />
        )}
        <h1 className="text-lg font-semibold">{title}</h1>
        <div className="w-20" />
      </div>
    </header>
  );
};

export default Header;
