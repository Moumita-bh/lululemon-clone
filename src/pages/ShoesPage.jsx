import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const ShoesPage = () => {
  const [activeTab, setActiveTab] = useState("All Items");
    const [filters, setFilters] = useState({
      gender: [],
      type: [],
      size: [],
      color: [],
      collection: [],
      activity: [],
      fabric: [],
      features: [],
      climate: [],
    });
  
    const handleFilterChange = (category, value) => {
      setFilters((prev) => ({
        ...prev,
        [category]: prev[category].includes(value)
          ? prev[category].filter((item) => item !== value)
          : [...prev[category], value],
      }));
    };
  
    const filterOptions = {
      gender: ["Women", "Men"],
      type: [
        "Backpacks",
        "Bag Accessories",
        "Belt Bags",
        "Crossbody Bags",
        "Duffle Bags",
      ],
      size: ["Mini", "Small", "Medium", "Large"],
      color: [
        { name: "Black", hex: "#000000" },
        { name: "White", hex: "#FFFFFF", border: true },
        { name: "Grey", hex: "#808080" },
        { name: "Brown", hex: "#8B4513" },
        { name: "Khaki", hex: "#C3B091" },
        { name: "Neutral", hex: "linear-gradient(to right, #E5D9C5, #FFF)" },
        { name: "Red", hex: "#FF0000" },
        { name: "Pink", hex: "#FF1493" },
        { name: "Burgundy", hex: "#800020" },
        { name: "Orange", hex: "#FFA500" },
        { name: "Yellow", hex: "#FFFF00" },
        { name: "Green", hex: "#008000" },
        { name: "Olive", hex: "#808000" },
        { name: "Blue", hex: "#0000FF" },
        { name: "Navy", hex: "#000080" },
        { name: "Purple", hex: "#800080" },
        { name: "Pastel", hex: "linear-gradient(to right, #FFD1DC, #B2FFFF)" },
        { name: "Neon", hex: "#CCFF00" },
        { name: "Gold", hex: "#FFD700" },
        { name: "Printed", hex: "url(printed-pattern.jpg)" },
        { name: "Black & White", hex: "linear-gradient(to right, #000, #FFF)" },
      ],
      collection: ["City Essentials", "Everywhere", "Fast & Free"],
      activity: ["Casual", "Workout", "Running", "Yoga", "Travel"],
      fabric: ["Canvas", "Ripstop", "Cotton", "Leather Alternative", "Mesh"],
      features: [
        "Reflective",
        "Packable",
        "Lightweight",
        "Pocketed",
        "Water Repellant",
      ],
      climate: ["Spring", "Summer", "Fall", "Winter"],
    };
  
    const products = [
      {
        id: 1,
        name: "Everywhere Belt Bag",
        price: "$38.00",
        colors: ["Black", "White"],
        image: "https://images.lululemon.com/is/image/lululemon/LU9BUMS_031382_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
      },
      {
        id: 2,
        name: "City Adventurer Backpack",
        price: "$78.00",
        colors: ["Navy", "Grey"],
        image: "https://images.lululemon.com/is/image/lululemon/LU9BUMS_031382_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
      },
      {
        id: 3,
        name: "Crossbody Bag",
        price: "$48.00",
        colors: ["Black", "Pink"],
        image: "https://images.lululemon.com/is/image/lululemon/LU9BUMS_031382_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
      },
      {
        id: 4,
        name: "Duffle Bag",
        price: "$128.00",
        colors: ["Black", "Green"],
        image: "https://images.lululemon.com/is/image/lululemon/LU9BUMS_031382_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
      },
      {
        id: 5,
        name: "Mini Backpack",
        price: "$68.00",
        colors: ["Black", "Red"],
        image: "https://images.lululemon.com/is/image/lululemon/LU9BUMS_031382_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
      },
      {
        id: 6,
        name: "Travel Kit",
        price: "$38.00",
        colors: ["Black", "Blue"],
        image: "https://images.lululemon.com/is/image/lululemon/LU9BUMS_031382_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
      },
      {
        id: 7,
        name: "Belt Bag",
        price: "$38.00",
        colors: ["Black", "Yellow"],
        image: "https://images.lululemon.com/is/image/lululemon/LU9BUMS_031382_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
      },
      {
        id: 8,
        name: "Large Tote",
        price: "$88.00",
        colors: ["Black", "Brown"],
        image: "https://images.lululemon.com/is/image/lululemon/LU9BUMS_031382_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
      },
      {
        id: 9,
        name: "Waist Pack",
        price: "$48.00",
        colors: ["Black", "Purple"],
        image: "https://images.lululemon.com/is/image/lululemon/LU9BUMS_031382_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
      },
      {
        id: 10,
        name: "Weekender Bag",
        price: "$148.00",
        colors: ["Black", "Grey"],
        image: "https://images.lululemon.com/is/image/lululemon/LU9BUMS_031382_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
      }
    ];
  
    return (
      <div className="max-w-[100%] mx-auto py-10 relative">
        <h1 className="text-3xl font-bold mb-6 ml-26 mt-5">Shoes</h1>
        <div className="relative w-full h-[500px] mt-2 ml-80 pr-100 pt-[-100px]">
          <img
            src="https://images.lululemon.com/is/image/lululemon/na_Mar25_wk3_AG_Run_CDP_Hero_D_Shoes?$cdp-hero$&wid=1970&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
            alt="Shoes"
            className="w-full h-full object-cover"
          />
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold">
          Bring comfort up to speed.
          </h1>
        </div>
        
        <div className="flex max-w-[1200px] mx-auto py-10 ml-25">
          {/* Left Filter Section */}
          <div className="w-1/4 pr-6">
            <h2 className="text-gray-500 text-sm mb-2">Showing 60 of 98 results:</h2>
  
            {/* Gender Filter */}
            <div className="border-t border-gray-300 pt-3">
              <h3 className="font-bold text-lg mb-2">Gender</h3>
              {filterOptions.gender.map((option) => (
                <label key={option} className="flex items-center mb-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={filters.gender.includes(option)}
                    onChange={() => handleFilterChange("gender", option)}
                  />
                  {option}
                </label>
              ))}
            </div>
  
            {/* Type & Bag Size in One Section */}
            <div className="border-t border-b border-gray-300 pt-3 mt-4">
              <h3 className="font-bold text-lg mb-2">Type</h3>
              {filterOptions.type.map((option) => (
                <label key={option} className="flex items-center mb-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={filters.type.includes(option)}
                    onChange={() => handleFilterChange("type", option)}
                  />
                  {option}
                </label>
              ))}
              <p className="text-gray-500 cursor-pointer mt-3 border-b border-gray-300">View More +</p>
  
              <h3 className="font-bold text-lg mb-2 mt-4">Bag Size</h3>
              {filterOptions.size.map((option) => (
                <label key={option} className="flex items-center mb-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={filters.size.includes(option)}
                    onChange={() => handleFilterChange("size", option)}
                  />
                  {option}
                </label>
              ))}
            </div>
            
            {/* Colour Section */}
            <h3 className="font-bold text-lg mb-5 mt-4">Colour</h3>
            <div className="grid grid-cols-2 gap-5 border-b border-gray-300 pt-3">
              {filterOptions.color.map((color) => (
                <label key={color.name} className="flex items-center cursor-pointer">
                  <span
                    className="w-6 h-6 rounded-full border"
                    style={{
                      background: color.hex,
                      border: color.border ? "1px solid #000" : "none",
                    }}
                  ></span>
                  <span className="ml-2">{color.name}</span>
                </label>
              ))}
            </div>
            
            {/* Collection Section */}
            <h3 className="font-bold text-lg mb-5 mt-5">Collection</h3>
            {filterOptions.collection.map((option) => (
              <label key={option} className="flex items-center mb-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={filters.collection.includes(option)}
                  onChange={() => handleFilterChange("collection", option)}
                />
                {option}
              </label>
            ))}
            
            {/* Activity Section */}
            <h3 className="font-bold text-lg mb-2 mt-4">Activity</h3>
            {filterOptions.activity.map((option) => (
              <label key={option} className="flex items-center mb-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={filters.activity.includes(option)}
                  onChange={() => handleFilterChange("activity", option)}
                />
                {option}
              </label>
            ))}
            <p className="text-gray-500 cursor-pointer mt-3">View More +</p>
            
            {/* Fabric Section */}
            <div className="border-t border-gray-300 pt-3 pb-3 mt-4">
              <h3 className="font-bold text-lg mb-2">Fabric</h3>
              {filterOptions.fabric.map((option) => (
                <label key={option} className="flex items-center mb-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={filters.fabric.includes(option)}
                    onChange={() => handleFilterChange("fabric", option)}
                  />
                  {option}
                </label>
              ))}
              <p className="text-gray-500 cursor-pointer mt-3">View More +</p>
            </div>
  
            {/* Features Section */}
            <div className="border-t border-gray-300 pt-3 pb-3 mt-4">
              <h3 className="font-bold text-lg mb-2">Features</h3>
              {filterOptions.features.map((option) => (
                <label key={option} className="flex items-center mb-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={filters.features.includes(option)}
                    onChange={() => handleFilterChange("features", option)}
                  />
                  {option}
                </label>
              ))}
              <p className="text-gray-500 cursor-pointer mt-3">View More +</p>
            </div>
            
            {/* Climate Section */}
            <div className="border-t border-gray-300 pt-3 pb-3 mt-4">
              <h3 className="font-bold text-lg mb-2">Climate</h3>
              {filterOptions.climate.map((option) => (
                <label key={option} className="flex items-center mb-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={filters.climate.includes(option)}
                    onChange={() => handleFilterChange("climate", option)}
                  />
                  {option}
                </label>
              ))}
            </div> 
          </div>
          
          {/* Right Content Section */}
          <div className="w-3/4">
            <div className="flex justify-between items-center border-b border-gray-300 pb-600 px-4">
              {/* Left Section */}
              <div className="flex space-x-4 text-sm font-semibold border-b border-gray-300 pt-2">
                <div
                  className={`cursor-pointer ${activeTab === "All Items" ? "text-black font-bold" : "text-gray-500 relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"}`}
                  onClick={() => setActiveTab("All Items")}
                >
                  All Items
                  {activeTab === "All Items" && <div className="h-1 w-full bg-red-600 mt-1"></div>}
                </div>
                <div className="text-gray-500 cursor-pointer flex items-center pl-10 hover:underline hover:decoration-red-800">
                  Available Near You <span className="ml-120">&gt;</span>
                </div>
              </div>
  
              {/* Right Section */}
              <div className="flex items-center text-gray-600 text-sm cursor-pointer pt-4">
                Sort by <span className="font-semibold ml-1">Featured</span>
                <HiChevronDown className="h-4 w-4 ml-1" />
              </div>
            </div>
          </div>
        </div>
        {/* Product grid */}
  <div className="mt-8">
    <div className="grid grid-cols-4 grid-rows-3 gap-6 pl-100">
      {products.map((product) => (
        <div key={product.id} className="mb-8">
          <div className="relative group">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-auto object-cover transition-opacity group-hover:opacity-90"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-black px-4 py-2 rounded-full font-medium text-sm">
                Quick View
              </button>
            </div>
          </div>
          <div className="mt-3">
            <h3 className="text-lg font-medium">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <div className="flex mt-2">
              {product.colors.map((color, index) => (
                <span 
                  key={index}
                  className="w-4 h-4 rounded-full border border-gray-200 mr-2"
                  style={{ 
                    backgroundColor: filterOptions.color.find(c => c.name === color)?.hex || '#000000'
                  }}
                  title={color}
                ></span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
      </div>
    );
  
};

export default ShoesPage;