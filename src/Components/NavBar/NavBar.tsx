import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const userMenuRef = useRef<HTMLDivElement>(null);
  const mainMenuRef = useRef<HTMLDivElement>(null);
  const userButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const location = useLocation();

  const activeLink = useMemo(() => location.pathname, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    const target = event.target as Node;

    if (
      userMenuRef.current &&
      !userMenuRef.current.contains(target) &&
      userButtonRef.current &&
      !userButtonRef.current.contains(target)
    ) {
      setUserMenuOpen(false);
    }

    if (mainMenuRef.current && !mainMenuRef.current.contains(target) && menuButtonRef.current && !menuButtonRef.current.contains(target)) {
      setMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  // 🧠 روابط المينيو — Memo to avoid re-renders
  const navLinks = useMemo(
    () => [
      { name: "Home", path: "/" },
      { name: "Favorite", path: "/favorite" },
      { name: "Compare", path: "/compare" },
      { name: "Maps", path: "/map" },
    ],
    []
  );

  return (
    <nav className="bg-white border-gray-200">
      <div
        className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto! p-4! transition-all duration-300 
        ${isScrolled ? "fixed top-0 left-0 right-0 z-50 bg-white shadow-md rounded-md mt-4! px-8 md:px-0" : "py-4"}`}
      >
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/icons/logo.svg" alt="safarni Logo" loading="lazy" />
        </a>

        {/* Right side */}
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="flex items-center gap-4">
            <Link to="#" >
              <img
                src="/icons/adjustments-horizontal.svg"
                alt="settings"
                loading="lazy"
              />
            </Link>

            <Link to="#">
              <img src="/icons/Vector (Stroke).svg" alt="search" loading="lazy" />
            </Link>

            {/* User Button */}
            <button
              ref={userButtonRef}
              type="button"
              onClick={() => {
                setUserMenuOpen((prev) => !prev)
              }}
              className="flex text-sm focus:ring-4 focus:ring-gray-300 border-2 rounded-full border-[#64c9f5] border-x-[#1e429e]"
            >
              <img
                className="w-10 h-10 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt="user"
                loading="lazy"
              />
            </button>
          </div>

          {/* User Menu */}
          {userMenuOpen && (
            <div
              ref={userMenuRef}
              className="z-50 absolute top-20 right-20 bg-white divide-y divide-gray-100 rounded-lg shadow-md"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-black">vito corleone</span>
              </div>
              <ul className="py-2">
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          )}

          {/* Mobile menu button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => {
              setMenuOpen((prev) => !prev)
            }}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden 
            hover:bg-gray-100 focus:outline-none"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 17 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Main menu */}
        <div
          ref={mainMenuRef}
          className={`items-center justify-between ${menuOpen ? "flex" : "hidden"} w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`block py-2 px-3 md:p-0 transition 
                    ${activeLink === link.path
                      ? "text-[var(--color-main)]"
                      : "text-black hover:text-[var(--color-main)]"
                    }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
