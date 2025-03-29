import React, { useState, useRef } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTwitter,
  FaPinterest,
  FaYoutube,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const MenPage = () => {
const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const carouselRef = useRef(null);
  
  
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

  const products1 = [
    {
      id: 1,
      image: "https://images.lululemon.com/is/image/lululemon/LM3F64S_069076_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      hoverImage: "https://images.lululemon.com/is/image/lululemon/LM3F64S_069076_2?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      name: "Airing Easy Long-Sleeve Shirt",
      price: "$98",
    },
    {
      id: 2,
      image: "https://images.lululemon.com/is/image/lululemon/LM7B85S_069417_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      hoverImage: "https://images.lululemon.com/is/image/lululemon/LM7B86S_068684_2?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      name: "ABC WovenAir Pull-On Short 7",
      price: "$78",
    },
    {
      id: 3,
      image: "https://images.lululemon.com/is/image/lululemon/LM3FMOS_046927_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      hoverImage: "https://images.lululemon.com/is/image/lululemon/LM3FMOS_046927_2?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      name: "Airing Easy Short-Sleeve Shirt",
      price: "$88",
    },
    {
      id: 4,
      image: "https://images.lululemon.com/is/image/lululemon/LM5BBRS_036763_1?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
      hoverImage: "https://images.lululemon.com/is/image/lululemon/LM5BBRS_036763_2?wid=1440&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
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
    <>
      {/* Secondary Navbar - Below Main Navbar */}
      <div className="relative">
        {/* Left Section */}
        <div className="absolute w-[340px] bg-white pl-[120px] py-10 flex flex-col justify-start mt-20 z-10 left-[-20px]">
          <h2 className="text-3xl font-bold mb-4">lululemon men's</h2>
          <ul className="space-y-3 text-base font-normal text-black">
            <li>
              <a href="#" className="hover:underline hover:decoration-red-500">
                Shorts
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:decoration-red-500">
              Hoodies & Sweatshirts
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:decoration-red-500">
              Shirts
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:decoration-red-500">
              Pants
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:decoration-red-500">
              Joggers
              </a>
            </li>
          </ul>
          
        </div>

        {/* Right Image Section */}
        <div className="relative w-full h-full flex justify-center items-center pl-[200px] py-4 pr-20">
          <img
            src="https://images.lululemon.com/is/image/lululemon/na_Mar25_wk4_M_OTM_3_1_D_MLP?wid=1600&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
            alt="Men Image"
            className="w-full h-auto object-cover"
          />
          <button className="absolute bottom-8 right-8 border border-black px-4 py-4 text-md font-semibold bg-white hover:bg-black hover:text-white mr-20">
            SHOP MEN'S
          </button>
        </div>

        {/* Feedback Button */}
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 rotate-270 bg-white py-1 px-4 text-sm font-medium border shadow-md mr-[-25px]">
          Feedback
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white-100 p-8">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-black-800 mb-8 md:mb-0 md:w-1/2 ml-42 mt-[-10px]">
          Not typical­—technical.
          </h1>

          {/* Paragraph */}
          <div className="md:w-1/2">
            <p className="text-lg text-black-300 pr-7 pl-1 pr-7">
            The lightweight, breezy Airing Easy Long Sleeve. Stretchy? Yes. Stiff? Never.
            </p>
          </div>
        </div>
        {/* New Section with Two Pictures */}
      <div className="bg-white p-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 ml-10 mt-8">
          {/* First Picture */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="https://images.lululemon.com/is/image/lululemon/LM1337S_033454_1?wid=1125&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
              alt="First Men Image" 
              className="w-full h-auto"
            />
            <h2 className="text-2xl font-bold mt-4">Elements of comfort.</h2>
            <p className="text-lg mt-2">
            Stretchy, classic-fit ABC shorts and trousers make any environment feel like home.
            </p>
            <div className="mt-4">
              <button className="bg-white text-black border border-black hover:bg-black hover:text-white px-4 py-2 mr-2">SHOP ABC COLLECTION</button>
              
            </div>
          </div>
      
          {/* Second Picture */}
          <div className="md:w-1/2 mr-4">
            <img 
              src="https://images.lululemon.com/is/image/lululemon/na_Mar25_wk4_M_OTM_1_2_Lg_MediaAction_D_CasualShirts?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
              alt="Second Male Image" 
              className="w-full h-auto"
            />
            <h2 className="text-2xl font-bold mt-4">Go to any lengths.</h2>
            <p className="text-lg mt-2">
            The fast-drying, fan-favourite Airing Easy WovenAir™ button-up—also in a long sleeve.
            </p>
            <button className="bg-white text-black border border-black hover:bg-black hover:text-white px-4 py-2 mt-4">SHOP CASUAL SHIRTS</button>
            <button className="bg-black text-white hover:bg-gray-500 px-4 py-2 ml-2">SHOP SPRING CLOTHES</button>
          </div>
        </div>
      </div>
      {/* Run with this gear */}
                  <div className="relative w-full px-12 py-15 pr-9">
                    <h2 className="text-5xl font-bold text-center mb-8">What’s new this week.</h2>
                  
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
                        className="absolute right-6 top-50 -translate-y-1/2 bg-white p-3 squared-full border border-black text-gray-700 z-10 mr-3"
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
                      SHOP WHAT'S NEW
                      </button>
                    </div>
                  </div>
                  {/* Box Container */}
      <div className="bg-gray-300 flex items-center justify-between px-6 py-6 mx-auto max-w-8xl ml-18 mr-14 mb-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <h2 className="text-3xl font-bold pl-20">New to lululemon?</h2>
          <p className="text-black-600 pl-50">Get familiar, get inspired, and get moving.</p>
        </div>
        <button className="border border-black px-12 py-3 font-semibold hover:bg-black hover:text-white text-lg bg-white text-black rounded-lg mr-20">
          START HERE
        </button>
      </div>
      <div className="grid grid-cols-3 gap-6 px-10 py-8 pl-18 pr-14 ">
      {/* Dresses Section */}
      <div className="relative">
        <img
          src="https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_M_PoloShirts_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          alt="Shirts"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute bottom-[-95px] left-[-2px]">
          <h2 className="text-black text-2xl font-bold">
          Walk the talk.
          </h2>
          <button className="mt-2 px-6 py-2 border border-black text-black font-medium hover:bg-black hover:text-white">
            SHOP POLO SHIRTS
          </button>
        </div>
      </div>

      {/* Shorts Section */}
      <div className="relative">
        <img
          src="https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_M_Joggers_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          alt="Joggers"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute bottom-[-95px] left-[-2px]">
          <h2 className="text-black text-2xl font-bold">Relaxation mode: activated.</h2>
          <button className="mt-2 px-6 py-2 border border-black text-black font-medium hover:bg-black hover:text-white">
            SHOP JOGGERS
          </button>
        </div>
      </div>

      {/* Bags Section */}
      <div className="relative">
        <img
          src="https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_M_Underwear_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          alt="Underwear"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute bottom-[-95px] left-[-2px]">
          <h2 className="text-black text-2xl font-bold">These essentials stack up.</h2>
          <button className="mt-2 px-6 py-2 border border-black text-black font-medium hover:bg-black hover:text-white">
            SHOP UNDERWEAR
          </button>
        </div>
      </div>
    </div>
    {/* Run with this gear */}
        <div className="relative w-full px-12 py-15 pr-9 mt-20">
                  <h2 className="text-5xl font-bold text-center mb-8">Bestsellers, if we're playing favourites.</h2>
                
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
                      {products1.map((products1, index) => (
                        <div key={products1.id} className="flex flex-col items-start text-left flex-shrink-0 min-w-[300px] max-w-[312px] snap-center">
                          <img
                            src={hoverIndex === index ? products1.hoverImage : products1.image}
                            alt={products1.name}
                            className="w-[350px] h-[400px] object-cover transition duration-200"
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(null)}
                          />
                          <div className="flex justify-between items-center w-full">
                            <p className="mt-2 font-semibold text-lg">{products1.name}</p>
                            <p className="text-gray-600 text-base">{products1.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                
                    {/* Right Arrow */}
                    <button
                      className="absolute right-6 top-50 -translate-y-1/2 bg-white p-3 squared-full border border-black text-gray-700 z-10 mr-3"
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
                      SHOP BESTSELLERS
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6 px-10 py-8 pl-18 pr-14 ">
      {/* Dresses Section */}
      <div className="relative">
        <img
          src="https://images.lululemon.com/is/image/lululemon/na_Mar25_wk4_M_OTM_1_3_Med_MediaAction_D_Pants?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          alt="Pants"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute bottom-[-95px] left-[-2px]">
          <h2 className="text-black text-2xl font-bold">
          You've got range, we do too.
          </h2>
          <button className="mt-2 px-6 py-2 border border-black text-black font-medium hover:bg-black hover:text-white">
            SHOP DRESS PANTS
          </button>
        </div>
      </div>

      {/* Shorts Section */}
      <div className="relative">
        <img
          src="https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_M_CoatsJackets_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          alt="Coats & Jackets"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute bottom-[-95px] left-[-2px]">
          <h2 className="text-black text-2xl font-bold">Couldn't be cozier.</h2>
          <button className="mt-2 px-6 py-2 border border-black text-black font-medium hover:bg-black hover:text-white">
            SHOP COATS & JACKETS
          </button>
        </div>
      </div>

      {/* Bags Section */}
      <div className="relative">
        <img
          src="https://images.lululemon.com/is/image/lululemon/na_Mar25_Q1_AppMerchandising_M_Shoes_1_3_Med_MediaAction_D?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          alt="Shoes"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute bottom-[-95px] left-[-2px]">
          <h2 className="text-black text-2xl font-bold">Makes getting there the fun part.</h2>
          <button className="mt-2 px-6 py-2 border border-black text-black font-medium hover:bg-black hover:text-white">
            SHOP SHOES
          </button>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center min-h-[300px] bg-cover bg-center ml-17 mr-14 mt-40 mb-10" 
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
              <div className="max-w-6xl mx-auto px-4 ml-13">
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
                <hr className="my-10 border-gray-300 " />
        
                {/* Copyright Section */}
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
              <p>© lululemon athletica 1818 Cornwall Ave, Vancouver BC V6J 1C7</p>
              <div className="flex space-x-6 mt-1 md:mt-0">
                <a href="#" className="hover:underline">Privacy Policy</a>
                <span>|</span>
                <a href="#" className="hover:underline">Terms of Use</a>
              </div>
            </div>
          </div>
        
              
            </footer>
      </div>
    </>
  );
};

export default MenPage;
