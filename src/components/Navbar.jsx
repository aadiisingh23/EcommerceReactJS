import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    // ✅ Correct cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 right-0 left-0 z-50 px-2 transition-all duration-500 ${
          isScrolled
            ? "bg-white/40 py-4 backdrop-blur-md shadow-md"
            : "py-6 bg-transparent backdrop-blur-md bg-white/40 shadow"
        } `}
      >
        <div className="flex justify-between items-center w-full container max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="text-2xl font-semibold text-gray-800/80">
            Hum<span className="text-red-600/80">Culture</span>
          </Link>

          {/* Links */}
          <div className="links hidden md:flex gap-6">
            <Link to="/" className="hover:text-gray-500 duration-300 transition-all">HOME</Link>
            <Link to="/dishes" className="hover:text-gray-500 duration-300 transition-all">DISHES</Link>
            <Link to="/contact" className="hover:text-gray-500 duration-300 transition-all">CONTACT</Link>
            <Link to="/useapp" className="hover:text-gray-500 duration-300 transition-all">USE APP</Link>
          </div>

          {/* Icons */}
          <div className="flex gap-4 items-center">
            <FiShoppingCart size={21} className="text-gray-500" />
            <CiUser size={20} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
