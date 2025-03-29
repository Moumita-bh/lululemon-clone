import React, { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaTwitter, FaPinterest, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";



const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const carouselRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("womens");
  
  const scroll = (offset) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
  
      // Adjust active index calculation
      const index = Math.round(carouselRef.current.scrollLeft / carouselRef.current.children[0].clientWidth);
      setActiveIndex(index);
    }
  };
  
  const products = [
    {
      id: 1,
      image: "https://images.lululemon.com/is/image/lululemon/LW7DKRS_068585_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      hoverImage: "https://images.lululemon.com/is/image/lululemon/LW7DKRS_068585_2?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      name: "Side-Cinch High-Rise Short 1.5\"",
      price: "$68",
    },
    {
      id: 2,
      image: "https://images.lululemon.com/is/image/lululemon/LW3IAJS_069045_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      hoverImage: "https://images.lululemon.com/is/image/lululemon/LW3IAJS_069045_2?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      name: "Swiftly High-Low Cropped Short-Sleeve Shirt",
      price: "$68",
    },
    {
      id: 3,
      image: "https://images.lululemon.com/is/image/lululemon/LW7DHHS_069032_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      hoverImage: "https://images.lululemon.com/is/image/lululemon/LW7DHHS_069032_2?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      name: "Pace Rival High-Rise Short 3",
      price: "$68",
    },
    {
      id: 4,
      image: "https://images.lululemon.com/is/image/lululemon/LW9FGCS_071370_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      hoverImage: "https://images.lululemon.com/is/image/lululemon/LW9FGCS_071370_2?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      name: "Women's Beyondfeel Running Shoe",
      price: "$158",
    },
    {
      id: 5,
      image: "https://images.lululemon.com/is/image/lululemon/LM1366S_068585_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      hoverImage: "https://images.lululemon.com/is/image/lululemon/LM1366S_068585_2?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      name: "Mile Maker Run Crew Lightweight Tank Top",
      price: "$48",
    },
    {
      id: 6,
      image: "https://images.lululemon.com/is/image/lululemon/LM7BL0S_038426_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      hoverImage: "https://images.lululemon.com/is/image/lululemon/LM7BL0S_038426_2?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      name: "Mile Maker Run Crew Ripstop Lined Short 6",
      price: "$78",
    },
    {
      id: 7,
      image: "https://images.lululemon.com/is/image/lululemon/LM4APWS_069122_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      hoverImage: "https://images.lululemon.com/is/image/lululemon/LM4APWS_069122_2?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      name: "Pace Breaker Jacket",
      price: "$168",
    },
    {
      id: 8,
      image: "https://images.lululemon.com/is/image/lululemon/LM9AVDS_067062_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      hoverImage: "https://images.lululemon.com/is/image/lululemon/LM9AVDS_067062_2?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      name: "Men's Beyondfeel Running Shoe",
      price: "$158",
    }
  ];

  const categories = {
    womens: [
      { src: "https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_W_Shorts_ShopCategories?wid=624&fmt=webp", label: "Shorts" },
      { src: "https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_W_Pants_ShopCategories?wid=624&fmt=webp", label: "Pants" },
      { src: "https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_W_HoodiesSweatshirts_ShopCategories?wid=624&fmt=webp", label: "Hoodies & Sweatshirts" },
      { src: "https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_W_Shirts_ShopCategories?wid=624&fmt=webp", label: "Shirts" },
      { src: "https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_W_Shoes_ShopCategories?wid=624&fmt=webp", label: "Shoes" },
      { src: "https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_W_Bags_ShopCategories?wid=624&fmt=webp", label: "Bags" }
    ],
    mens: [
      { src: "https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_M_Shorts_ShopCategories?wid=624&fmt=webp", label: "Shorts" },
      { src: "https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_M_HoodiesSweatshirts_ShopCategories?wid=624&fmt=webp", label: "Hoodies & Sweatshirts" },
      { src: "https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_M_Shirts_ShopCategories?wid=624&fmt=webp", label: "Shirts" },
      { src: "https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_M_Pants_ShopCategories?wid=624&fmt=webp", label: "Pants" },
      { src: "https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_M_Joggers02_ShopCategories?wid=624&fmt=webp", label: "Joggers" },
      { src: "https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_M_Shoes_ShopCategories?wid=624&fmt=webp", label: "Shoes" }
    ]
  };

  const products1 = [
    {
      id: 1,
      image: "https://images.lululemon.com/is/image/lululemon/LM3DK4S_069122_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      hoverImage: "https://images.lululemon.com/is/image/lululemon/LM3DK4S_069122_2?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      name: "Airing Easy Long-Sleeve Shirt",
      price: "$98",
    },
    {
      id: 2,
      image: "https://images.lululemon.com/is/image/lululemon/LM7BNQS_033454_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      hoverImage: "https://images.lululemon.com/is/image/lululemon/LM7BNQS_033454_2?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      name: "ABC WovenAir Pull-On Short 7",
      price: "$78",
    },
    {
      id: 3,
      image: "https://images.lululemon.com/is/image/lululemon/LM3DK7S_058320_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      hoverImage: "https://images.lululemon.com/is/image/lululemon/LM3DK7S_058320_2?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      name: "Airing Easy Short-Sleeve Shirt",
      price: "$88",
    },
    {
      id: 4,
      image: "https://images.lululemon.com/is/image/lululemon/LM5AO5S_026865_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      hoverImage: "https://images.lululemon.com/is/image/lululemon/LM5AO5S_026865_2?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      name: "ABC Classic-Fit Trouser 32L Warpstreme", 
      price: "$128",
    },
    {
      id: 5,
      image: "https://images.lululemon.com/is/image/lululemon/LM3FBSS_046927_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      hoverImage: "https://images.lululemon.com/is/image/lululemon/LM3FBSS_046927_2?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      name: "Heavyweight Cotton Jersey T-Shirt",
      price: "$58",
    },
    {
      id: 6,
      image: "https://images.lululemon.com/is/image/lululemon/LM3F45S_049106_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      hoverImage: "https://images.lululemon.com/is/image/lululemon/LM3F45S_049106_2?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      name: "Soft Jersey Half Zip",
      price: "$98",
    },
    {
      id: 7,
      image: "https://images.lululemon.com/is/image/lululemon/LM5AY0S_031382_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      hoverImage: "https://images.lululemon.com/is/image/lululemon/LM5AY0S_031382_2?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      name: "ABC Slim-Fit Trouser 32L WovenAir",
      price: "$128",
    },
    {
      id: 8,
      image: "https://images.lululemon.com/is/image/lululemon/LM9AV8S_071402_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      hoverImage: "https://images.lululemon.com/is/image/lululemon/LM9AV8S_071402_2?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      name: "Men's Cityverse Sneaker",
      price: "$138",
    }
  ];

  return (
    
    
    
    <div>
    
      {/* Secondary Navbar - Below Main Navbar */}
      {/* Left Section - Styled Exactly Like the Reference Image */}
      <div className="relative">
        {/* Left Section */}
        <div className="absolute w-[340px] bg-white pl-[120px] py-10 flex flex-col justify-start mt-20 z-10 left-[-20px]">
          <h2 className="text-3xl font-bold mb-4">lululemon</h2>
          <ul className="space-y-3 text-base font-normal text-black">
            <li><a href="#" className="hover:underline hover:decoration-red-500">Women's What's New</a></li>
            <li><a href="#" className="hover:underline hover:decoration-red-500">Men's What's New</a></li>
            <li><a href="#" className="hover:underline hover:decoration-red-500">All Women's</a></li>
            <li><a href="#" className="hover:underline hover:decoration-red-500">All Men's</a></li>
            <li><a href="#" className="hover:underline hover:decoration-red-500">All Accessories</a></li>
          </ul>
          <a href="#" className="mt-4 text-base font-semibold text-black hover:underline hover:decoration-red-500">SHOP WHAT'S NEW</a>
        </div>
      
        {/* Right Image Section */}
        <div className="relative w-[94.5%] h-full justify-center pl-[200px] py-4 mr-100">
          <img 
            src="https://images.lululemon.com/is/image/lululemon/na_Mar25_wk3_AG_Run_3_1_D_HP?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
            alt="Hero Image" 
            className="w-full h-full object-cover"
          />
          <button className="absolute bottom-8 right-8 border border-black px-4 py-4 text-md font-semibold bg-white hover:bg-black hover:text-white">
            SHOP WHAT'S NEW
          </button>
        </div>
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 rotate-270 bg-white py-1 px-4 text-sm font-medium border shadow-md mr-[-25px]">
          Feedback
        </div>
      </div>
      
      <div className="bg-white-100 p-8">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-black-800 mb-8 md:mb-0 md:w-1/2 ml-42 mt-[-10px]">
            The right support is everything.
          </h1>
      
          {/* Paragraph */}
          <div className="md:w-1/2">
            <p className="text-lg text-black-300 pl-[-10px]">
              Ventilated fabrics fuel your pace. 
              Lightweight stretch offers freedom to go further. 
              With innovative running gear, you're already miles ahead—together.
            </p>
          </div>
        </div>
      </div>
      
      {/* New Section with Two Pictures */}
      <div className="bg-white-100 p-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 ml-20">
          {/* First Picture */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="https://images.lululemon.com/is/image/lululemon/na_Mar25_wk3_AG_Run_1_2_Lg_MediaAction_D_WomensRunning?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
              alt="First Image" 
              className="w-full h-auto"
            />
            <h2 className="text-2xl font-bold mt-4">Always by your stride.</h2>
            <p className="text-lg mt-2">
              From hidden pockets to four-way stretch, these new running shorts move with you—powering both personal beats and collective wins.
            </p>
            <div className="mt-4">
              <button className="bg-white text-black border border-black hover:bg-black hover:text-white px-4 py-2 mr-2">SHOP WOMEN'S RUNNING</button>
              <button className="bg-black text-white hover:bg-gray-500 px-4 py-2">SHOP SHORTS</button>
            </div>
          </div>
      
          {/* Second Picture */}
          <div className="md:w-1/2 mr-12">
            <img 
              src="https://images.lululemon.com/is/image/lululemon/na_Mar25_wk3_AG_Run_1_2_Lg_MediaAction_D_MensRunning?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
              alt="Second Image" 
              className="w-full h-auto"
            />
            <h2 className="text-2xl font-bold mt-4">Run as one.</h2>
            <p className="text-lg mt-2">
              In lightweight fabrics that feel like a second skin, all that's left to do is sync into the momentum.
            </p>
            <button className="bg-white text-black border border-black hover:bg-black hover:text-white px-4 py-2 mt-4">SHOP MEN'S RUNNING</button>
          </div>
        </div>
      </div>
      
      {/* Run with this gear */}
      <div className="relative w-full px-21.5 py-15 pr-20">
        <h2 className="text-5xl font-bold text-center mb-8">Run with this gear.</h2>
      
        {/* Carousel Container */}
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            className="absolute left-10 top-50 -translate-y-1/2 bg-white p-3 border border-black squared-full shadow-md"
            onClick={() => scroll(-370)}
          >
            <FaChevronLeft size={30} />
          </button>
      
          {/* Scrollable Products */}
          <div
            ref={carouselRef}
            className="flex overflow-x-hidden scroll-smooth gap-6 max-w-[95vw] px-6 snap-x snap-mandatory"
            style={{ scrollPadding: "0 16px", scrollBehavior: "smooth" }}
          >
            {products.map((product, index) => (
              <div key={product.id} className="flex flex-col items-start text-left flex-shrink-0 min-w-[300px] max-w-[312px] snap-center">
                <img
                  src={hoverIndex === index ? product.hoverImage : product.image}
                  alt={product.name}
                  className="w-[350px] h-[400px] object-cover transition duration-200"
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                />
                <div className="flex justify-between items-center w-full">
                  <p className="mt-2 font-semibold text-lg">{product.name}</p>
                  <p className="text-gray-600 text-base">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
      
          {/* Right Arrow */}
          <button
            className="absolute right-6 top-50 -translate-y-1/2 bg-white p-3 squared-full border border-black text-gray-700 z-10"
            onClick={() => scroll(370)}
          >
            <FaChevronRight size={30} />
          </button>
        </div>
      
        {/* Dot Indicators */}
        <div className="flex justify-center mt-5 space-x-2">
          {products.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-black" : "bg-gray-300"}`}
            ></div>
          ))}
        </div>
      
        {/* Shop Now Button */}
        <div className="text-center mt-8">
          <button className="uppercase tracking-widest py-3 px-8 text-lg bg-white text-black border border-black rounded-md font-semibold hover:bg-black hover:text-white transition duration-300">
            Shop What's New
          </button>
        </div>
      </div>
      
      {/* Box Container */}
      <div className="bg-gray-300 flex items-center justify-between px-6 py-6 mx-auto max-w-8xl ml-27 mr-20 mb-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <h2 className="text-3xl font-bold pl-20">New to lululemon?</h2>
          <p className="text-black-600 pl-50">Get familiar, get inspired, and get moving.</p>
        </div>
        <button className="border border-black px-12 py-3 font-semibold hover:bg-black hover:text-white text-lg bg-white text-black rounded-lg mr-20">
          START HERE
        </button>
      </div>
      
      <div className="p-6 max-w-8xl mx-auto pl-26.5 pr-20 pt-12">
        {/* Heading */}
        <h1 className="text-3xl font-bold">Shop Popular Categories.</h1>
      
        {/* Tabs */}
        <div className="flex space-x-10 mt-4 border-b border-gray-300 w-full">
          <button
            className={`pb-3 text-lg font-semibold ${
              selectedCategory === "womens" ? "border-b-2 border-red-500 text-black" : "text-black-500 relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full" 
            }`}
            onClick={() => setSelectedCategory("womens")}
          >
            Women's
          </button>
          <button
            className={`pb-2 text-lg font-semibold ${
              selectedCategory === "mens" ? "border-b-2 border-red-500 text-black" : "text-black-500 relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
            }`}
            onClick={() => setSelectedCategory("mens")}
          >
            Men's
          </button>
        </div>
      
        {/* Category Grid */}
        <div className="mt-6 overflow-x-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pb-2">
            {categories[selectedCategory].map((item, index) => (
              <div key={index} className="text-center">
                <img
                  src={item.src}
                  alt={item.label}
                  className="h-[300px] w-auto object-cover mx-auto"
                />
                <p className="mt-2 font-semibold text-sm md:text-base">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-center w-full bg-white">
        {/* Image Section */}
        <div className="w-full max-w-7.5xl pl-27 pr-21 pt-25">
          <img
            src="https://images.lululemon.com/is/image/lululemon/na_Mar25_wk4_M_OTM_1_1_Med_MediaAction_D_Mens?wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
            alt="Fashion Model"
            className="w-full object-cover"
          />
        </div>
      
        {/* Text & Button Section */}
        <div className="w-full max-w-7.5xl px-26 py-4">
          <h2 className="text-3xl font-bold mb-2">Greater lengths.</h2>
          <p className="text-gray-600 text-lg mb-4">
            Lightweight, stretchy Airing Easy—in a long sleeve—so you can go even more places.
          </p>
          <button className="bg-white text-black px-6 py-4 text-sm font-semibold border border-black hover:bg-black hover:text-white rounded-lg">
            Shop Men's
          </button>
        </div>
      </div>
      
      {/* Spring looks just got breezier. */}
      <div className="relative w-full px-21.5 py-15 pr-20">
        <h2 className="text-5xl font-bold text-center mb-8">Spring looks just got breezier.</h2>
      
        {/* Carousel Container */}
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            className="absolute left-10 top-50 -translate-y-1/2 bg-white p-3 border border-black squared-full shadow-md"
            onClick={() => scroll(-370)}
          >
            <FaChevronLeft size={30} />
          </button>
      
          {/* Scrollable Products */}
          <div
            ref={carouselRef}
            className="flex overflow-x-hidden scroll-smooth gap-6 max-w-[95vw] px-6 snap-x snap-mandatory"
            style={{ scrollPadding: "0 16px", scrollBehavior: "smooth" }}
          >
            {products1.map((product, index) => (
              <div key={product.id} className="flex flex-col items-start text-left flex-shrink-0 min-w-[300px] max-w-[312px] snap-center">
                <img
                  src={hoverIndex === index ? product.hoverImage : product.image}
                  alt={product.name}
                  className="w-[350px] h-[400px] object-cover transition duration-200"
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                />
                <div className="flex justify-between items-center w-full">
                  <p className="mt-2 font-semibold text-lg">{product.name}</p>
                  <p className="text-gray-600 text-base">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
      
          {/* Right Arrow */}
          <button
            className="absolute right-6 top-50 -translate-y-1/2 bg-white p-3 squared-full border border-black text-gray-700 z-10"
            onClick={() => scroll(370)}
          >
            <FaChevronRight size={30} />
          </button>
        </div>
      
        {/* Dot Indicators */}
        <div className="flex justify-center mt-5 space-x-2">
          {products1.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-black" : "bg-gray-300"}`}
            ></div>
          ))}
        </div>
      
        {/* Shop Now Button */}
        <div className="text-center mt-8">
          <button className="uppercase tracking-widest py-3 px-8 text-lg bg-white text-black border border-black rounded-md font-semibold hover:bg-black hover:text-white transition duration-300">
            Shop Spring Clothes
          </button>
        </div>
      </div>
      
      <div className="flex flex-col items-center w-full bg-white">
        {/* Image Section */}
        <div className="w-full max-w-7.5xl pl-27 pr-21 pt-15">
          <img
            src="https://images.lululemon.com/is/image/lululemon/NA_Q1_2025_MembershipMadness_Drop3_Awareness_Live_Ecomm_1_1_Med_MediaAction_D?wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
            alt="Membership Madness"
            className="w-full object-cover"
          />
        </div>
      
        {/* Text & Button Section */}
        <div className="w-full max-w-7.5xl px-26 py-4">
          <h2 className="text-3xl font-bold mb-2">Cheering you on (and on).</h2>
          <p className="text-gray-600 text-lg mb-4">
            We're your biggest fans. So from March 17-28, we're dropping complimentary classes, events, and huge prizes*—including gear for a year.
          </p>
          <button className="bg-white text-black px-6 py-4 text-sm font-semibold border border-black hover:bg-black hover:text-white rounded-lg">
            Learn more
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center min-h-[300px] bg-cover bg-center ml-26 mr-21 mt-20 mb-10" 
         style={{ backgroundImage: "url('https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_BrandStatement_D?wid=1322&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72')" }}>
      <div className="bg-white p-6 md:p-10 text-center shadow-lg w-1/2">
        <h2 className="text-lg font-semibold ">Shopping made seamless.</h2>
        <p className="text-gray-600 mt-1 ml-2">Free shipping. Free returns.</p>
        <button className="mt-4 px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition font-bold">
          LEARN MORE
        </button>
      </div>
    </div>
    <footer className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4 ml-22">
        <div className="grid grid-cols-4 gap-30">
          {/* My Account Section */}
          <div>
            <h3 className="font-bold text-sm uppercase mb-4">My Account</h3>
            <ul className="space-y-5 text-gray-700 text-sm mt-8">
              <li><a href="#">Membership Program</a></li>
              <li><a href="#">Sign In</a></li>
              <li><a href="#">Register</a></li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Returns</a></li>
              <h3 className="font-bold text-sm uppercase mb-4 mt-60">Email Sign Up</h3>
              <h3 className="font-bold text-sm uppercase mb-4 mt-5">Careers</h3>
              <h3 className="font-bold text-sm uppercase mb-4 mt-5">lululemon x Fanatics</h3>
              <h3 className="font-bold text-sm uppercase mb-4 mt-5">Like New</h3>
              <h3 className="font-bold text-sm uppercase mb-4 mt-5">Sustainability</h3>
              <h3 className="font-bold text-sm uppercase mb-4 mt-5">Social Impact</h3>
              <h3 className="font-bold text-sm uppercase mb-4 mt-5">Diversity And Inclusion</h3>
              <h3 className="font-bold text-sm uppercase mb-4 mt-5">Lululemon Apps</h3>
              <h3 className="font-bold text-sm uppercase mb-4 mt-5">SITEMAP</h3>
              
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="font-bold text-sm uppercase mb-4">Help</h3>
            <ul className="space-y-5 text-gray-700 text-sm mt-8">
              <li><a href="#">Ordering</a></li>
              <li><a href="#">Returns and Refunds</a></li>
              <li><a href="#">Shipping and Delivery</a></li>
              <li><a href="#">Payment</a></li>
              <li><a href="#">Redeem Gift Cards</a></li>
              <li><a href="#">Programs and Discounts</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Product and Sizing</a></li>
              <li><a href="#">Stores</a></li>
              <li><a href="#">Account</a></li>
              <h3 className="font-bold text-sm uppercase mb-4 mt-8">GIFT CARD</h3>
              <h3 className="font-bold text-sm uppercase mb-4 mt-5">STORE Locator</h3>
              <li><a href="#">Accessibility Statement</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">California Privacy Rights</a></li>
              <li><a href="#">California Transparency Act</a></li>
            </ul>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="font-bold text-sm uppercase mb-4">About Us</h3>
            <ul className="space-y-5 text-gray-700 text-sm mt-8">
              <li><a href="#">Our Business</a></li>
              <li><a href="#">Media</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Strategic Sales</a></li>
              <li><a href="#">Affiliates and Creators</a></li>
              <li><a href="#">Sweat Collective</a></li>
            </ul>
            {/* Social Media Icons Below Sweat Collective */}
            <div className="flex space-x-14 mt-45">
              <a href="#" className="text-black text-xl"><FaTwitter /></a>
              <a href="#" className="text-black text-xl"><FaPinterest /></a>
              <a href="#" className="text-black text-xl"><FaYoutube /></a>
              <a href="#" className="text-black text-xl"><FaFacebook /></a>
              <a href="#" className="text-black text-xl"><FaInstagram /></a>
            </div>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="font-bold text-sm uppercase mb-4">Contact Us</h3>
            <ul className="space-y-5 text-gray-700 text-sm mt-8">
              <li><a href="#">Live Chat</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>© lululemon athletica 1818 Cornwall Ave, Vancouver BC V6J 1C7</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Terms of Use</a>
          </div>
        </div>
      </div>

      
    </footer>
    </div>
  );
};

export default HomePage;