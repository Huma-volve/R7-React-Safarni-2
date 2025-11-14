import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("Home");

  const userMenuRef = useRef<HTMLDivElement>(null);
  const mainMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // يقفل منيو اليوزر لو الكليك براها
      if (userMenuRef.current && !userMenuRef.current.contains(target)) {
        setUserMenuOpen(false);
      }

      // يقفل المينيو بتاعة الموبايل لو الكليك براها
      if (mainMenuRef.current && !mainMenuRef.current.contains(target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white border-gray-200">
      <div className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 transition-all duration-300 ${isScrolled ? "fixed top-0 left-0 right-0 z-50 bg-white rounded-md  mt-4!" : "py-4"}`}>
        {/* Logo */}
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="../../../icons/logo.svg" alt="safarni Logo" />
        </a>

        {/* Right side */}
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* User Menu Button */}
          <nav className="flex items-center gap-4 md:space-x-4 rtl:space-x-reverse">
            <NavLink
              to="#"
              className=""
            >
              <img src="/icons/adjustments-horizontal.svg" alt="adjustments-horizontal" loading="lazy" />
            </NavLink>
            <NavLink
              to="#"
              className=""
            >
              <img src="/icons/Vector (Stroke).svg" alt="search" loading="lazy" />
            </NavLink>
            <button
              type="button"
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex text-sm  focus:ring-4 focus:ring-gray-300 border-2  rounded-full border-[#64c9f5] border-x-[#1e429e]"
            >
              <img
                className="w-10 h-10 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt="user"
              />
            </button>
          </nav>

          {/* User Menu */}
          {userMenuOpen && (
            <div
              ref={userMenuRef}
              className="z-50 absolute top-20 right-20 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-md"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-black">vito corleone</span>
              </div>
              <ul className="py-2">
                <li>
                  <NavLink
                    to="#"
                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                  >
                    Sign out
                  </NavLink>
                </li>
              </ul>
            </div>
          )}

          {/* Menu button (mobile) */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden 
            hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Main menu */}
        <div
          ref={mainMenuRef}
          className={`items-center justify-between ${menuOpen ? "flex" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:bg-white">
            {[
              { name: "Home", path: "/", active: activeLink === "Home" },
              { name: "Favorite", path: "#", active: activeLink === "Favorite" },
              { name: "Compare", path: "#", active: activeLink === "Compare" },
              { name: "maps", path: "#", active: activeLink === "maps" },
            ].map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setActiveLink(link.name)}
                  className={`block py-2 px-3 hover:text-[var(--color-main)] md:p-0 ${link.active
                    ? "text-[var(--color-main)] transition ease-in duration-100"
                    : "text-black"
                    }`}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
