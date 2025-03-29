import React, { useState, useRef } from "react"; 
import { Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import {
  FaMapMarkerAlt, FaGift, FaQuestionCircle, FaGlobe,
  FaSearch, FaUser, FaHeart, FaShoppingBag, 
} from "react-icons/fa";



const TopNavbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      {/* Announcement Bar */}
      {isVisible && (
        <div className="bg-white text-black text-sm flex justify-center items-center py-2 relative">
          <p>
            Membership Madness is giving big. March 17-28, only in the lululemon iOS app.{" "}
            <a href="#" className="underline font-semibold">Learn More</a>
          </p>
          <button
            className="absolute right-4 text-xl font-bold"
            onClick={() => setIsVisible(false)}
            aria-label="Close announcement"
          >
            ✕
          </button>
        </div>
      )}

      {/* Top Right-Aligned Navbar */}
      <div className="bg-white text-black text-sm flex justify-end px-20 py-4 space-x-6 items-center">
  <a href="#" className="flex items-center space-x-1">
    <FaMapMarkerAlt className="text-lg" />
    <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">
      Store Locator
    </span>
  </a>
  <a href="#" className="flex items-center space-x-1">
    <FaGift className="text-lg" />
    <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">
      Gift Cards
    </span>
  </a>

  {/* Dropdown Container */}
  <div className="relative group">
  <a href="#" className="flex items-center space-x-1">
    <FaQuestionCircle className="text-lg" />
    <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 group-hover:after:w-full">
      Get Help
    </span>
  </a>

  {/* Updated Dropdown Menu */}
  <div className="absolute top-full right-0 w-56 bg-white shadow-lg border border-gray-200 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-50 overflow-visible mt-2">
    <ul className="py-2">
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex justify-between">
          Start a Return <span>›</span>
        </a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex justify-between">
          Track my Order <span>›</span>
        </a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex justify-between">
          Check Return Status <span>›</span>
        </a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex justify-between">
          Help & Support <span>›</span>
        </a>
      </li>
    </ul>
  </div>
</div>

  <a href="#" className="flex items-center space-x-1">
    <FaGlobe className="text-lg" />
    <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">
      USA
    </span>
  </a>
</div>




      {/* Main Navbar (Logo, Links, Search, Icons) */}
      <div className="bg-white text-black flex justify-between items-center px-20 py-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-0 ml-5">
          <img
            src="https://i.pinimg.com/736x/c6/73/ea/c673ea9afa347d5f283469d710189bae.jpg"
            alt="Lululemon"
            className="h-8"
          />
          <span className="text-3xl font-bold ml-2">lululemon</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-8 text-lg font-semibold mt-5">
        
      <Link to="/women" className="nav-link relative font-bold text-black after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[3px] after:bg-red-600 after:transition-all after:duration-300 hover:after:w-1/2">Women
      </Link>
      {/* Dropdown */}
      
        

      
      <Link to="/men" className="nav-link relative font-bold text-black after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[3px] after:bg-red-600 after:transition-all after:duration-300 hover:after:w-1/2">Men</Link>
      <Link to="/bags" className="nav-link relative font-bold text-black after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[3px] after:bg-red-600 after:transition-all after:duration-300 hover:after:w-1/2">Bags</Link>
      <Link to="/accessories" className="nav-link relative font-bold text-black after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[3px] after:bg-red-600 after:transition-all after:duration-300 hover:after:w-1/2">Accessories</Link>
      <Link to="/shoes" className="nav-link relative font-bold text-black after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[3px] after:bg-red-600 after:transition-all after:duration-300 hover:after:w-1/2">Shoes</Link>
      <Link to="/member-offers" className="nav-link relative text-red-600 font-bold hover:text-red-700 after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[3px] after:bg-red-600 after:transition-all after:duration-300 hover:after:w-1/2 ">Member Offers</Link>
    </nav>


        {/* Search and Icons */}
        <div className="flex items-center space-x-6">
          {/* Search Bar */}
          <div className="flex items-center border px-4 py-2 rounded-md shadow-sm w-60">
            <FaSearch className="text-gray-600" />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 outline-none w-full"
            />
          </div>

          {/* Icons */}
          <FaUser className="text-2xl cursor-pointer" />
          <FaHeart className="text-2xl cursor-pointer" />
          <div className="relative">
            <FaShoppingBag className="text-2xl cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">0</span>
          </div>
        </div>
      </div>


      {/* <HomePage/> */}
    </div>
  );
};

export default TopNavbar;