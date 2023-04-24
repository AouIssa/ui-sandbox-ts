import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowBack, IoIosFunnel, IoIosClose } from "react-icons/io";

interface HeaderProps {
  title: string;
  onBack?: () => void;
  className?: string;
  filterByFeeType?: (feeType: string) => void;
  selectedFeeType?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  onBack,
  className,
  filterByFeeType,
  selectedFeeType,
}) => {
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const filterMenuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      filterMenuRef.current &&
      !filterMenuRef.current.contains(event.target as Node)
    ) {
      setShowFilterMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white shadow shadow-gray-400 p-2 pt-4 md:hidden ${className}`}
    >
      <div className="container mx-auto flex items-center justify-between border-b-0">
        <button className="focus:outline-none" onClick={onBack}>
          <IoIosArrowBack className="text-blue-500" size={28} />
        </button>

        <div className="w-full text-center">
          <h1 className="text-lg ml-6 font-sans text-gray-600 font-bold">
            {title}
          </h1>
        </div>
        {filterByFeeType && (
          <div className="relative">
            <button
              onClick={() => setShowFilterMenu((prevState) => !prevState)}
              className="focus:outline-none"
            >
              {showFilterMenu ? (
                <IoIosClose className="text-blue-500" size={24} />
              ) : (
                <IoIosFunnel className="text-blue-500" size={24} />
              )}
            </button>
            {showFilterMenu && (
              <div
                ref={filterMenuRef}
                className="absolute right-0 mt-0 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
              >
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div
                    onClick={() => {
                      filterByFeeType("");
                      setShowFilterMenu(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    role="menuitem"
                  >
                    All fee types
                  </div>
                  <div
                    onClick={() => {
                      filterByFeeType("Team fee");
                      setShowFilterMenu(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    role="menuitem"
                  >
                    Team fee
                  </div>
                  <div
                    onClick={() => {
                      filterByFeeType("Spare Fee");
                      setShowFilterMenu(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    role="menuitem"
                  >
                    Spare Fee
                  </div>
                  <div
                    onClick={() => {
                      filterByFeeType("Jersey Fee");
                      setShowFilterMenu(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    role="menuitem"
                  >
                    Jersey Fee
                  </div>
                  <div
                    onClick={() => {
                      filterByFeeType("Drink");
                      setShowFilterMenu(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    role="menuitem"
                  >
                    Drink
                  </div>
                  <div
                    onClick={() => {
                      filterByFeeType("Tournament");
                      setShowFilterMenu(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    role="menuitem"
                  >
                    Tournament
                  </div>
                  <div
                    onClick={() => {
                      filterByFeeType("Event");
                      setShowFilterMenu(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    role="menuitem"
                  >
                    Event
                  </div>
                  <div
                    onClick={() => {
                      filterByFeeType("Other");
                      setShowFilterMenu(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    role="menuitem"
                  >
                    Other
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        <div className="w-10" />
      </div>
    </header>
  );
};
export default Header;
