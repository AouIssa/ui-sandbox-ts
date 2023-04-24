import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowBack, IoIosFunnel } from "react-icons/io";
import { IoFunnelOutline } from "react-icons/io5";

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

  const handleTouchEnd = () => {
    if (showFilterMenu) {
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
    <>
      {/*Mobile view View*/}

      <header
        className={`flex w-full top-0 left-0 right-0 bg-white border-b border-gray-400 py-3 md:hidden ${className}`}
      >
        <div className="flex items-center justify-center mx-auto w-full">
          <div className="flex justify-between w-full">
            <button className="focus:outline-none pl-4" onClick={onBack}>
              <IoIosArrowBack className="text-blue-500" size={26} />
            </button>

            <div className="flex-1 text-center">
              <h1 className="text-lg font-sans text-gray-600 font-bold">
                {title}
              </h1>
            </div>

            {filterByFeeType && (
              <div className="relative pr-4">
                <button
                  onClick={() => setShowFilterMenu((prevState) => !prevState)}
                  className="focus:outline-none"
                >
                  {showFilterMenu ? (
                    <IoFunnelOutline className="text-blue-500" size={24} />
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
                        onTouchEnd={() => {
                          filterByFeeType("");
                          setShowFilterMenu(false);
                        }}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        role="menuitem"
                      >
                        All fee types
                      </div>
                      <div
                        onTouchEnd={() => {
                          filterByFeeType("Team fee");
                          setShowFilterMenu(false);
                        }}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        role="menuitem"
                      >
                        Team fee
                      </div>
                      <div
                        onTouchEnd={() => {
                          filterByFeeType("Spare Fee");
                          setShowFilterMenu(false);
                        }}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        role="menuitem"
                      >
                        Spare Fee
                      </div>
                      <div
                        onTouchEnd={() => {
                          filterByFeeType("Jersey Fee");
                          setShowFilterMenu(false);
                        }}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        role="menuitem"
                      >
                        Jersey Fee
                      </div>
                      <div
                        onTouchEnd={() => {
                          filterByFeeType("Drink");
                          setShowFilterMenu(false);
                        }}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        role="menuitem"
                      >
                        Drink
                      </div>
                      <div
                        onTouchEnd={() => {
                          filterByFeeType("Tournament");
                          setShowFilterMenu(false);
                        }}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        role="menuitem"
                      >
                        Tournament
                      </div>
                      <div
                        onTouchEnd={() => {
                          filterByFeeType("Event");
                          setShowFilterMenu(false);
                        }}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        role="menuitem"
                      >
                        Event
                      </div>
                      <div
                        onTouchEnd={() => {
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
          </div>
        </div>
      </header>

      {/*Desktop View*/}

      <header className="hidden md:flex md:justify-between md:items-center md:bg-white md:border-b md:border-gray-200 md:p-4">
        {onBack && (
          <button className="focus:outline-none" onClick={onBack}>
            <IoIosArrowBack className="text-blue-500" size={28} />
          </button>
        )}
        <div className="flex-grow md:text-center">
          <h1 className="text-lg font-sans text-gray-600 font-bold">{title}</h1>
        </div>
        {filterByFeeType && (
          <div className="relative">
            <button
              onClick={() => setShowFilterMenu((prevState) => !prevState)}
              className="focus:outline-none"
            >
              {showFilterMenu ? (
                <IoFunnelOutline className="text-blue-500" size={24} />
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
      </header>
    </>
  );
};
export default Header;
