import React, { useRef, useState, useEffect } from "react";
import { HiChevronDown } from "react-icons/hi";


const BagsPage = () => {
  const [activeTab, setActiveTab] = useState("All Items");
  const [products1] = useState([
    { "id": 1, "name": "Leather Handbag", "price": 59.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Gucci" },
    { "id": 2, "name": "Backpack", "price": 39.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Nike" },
    { "id": 3, "name": "Travel Duffle Bag", "price": 79.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Samsonite" },
    { "id": 4, "name": "Tote Bag", "price": 29.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "H&M" },
    { "id": 5, "name": "Shoulder Bag", "price": 49.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Michael Kors" },
    { "id": 6, "name": "Laptop Bag", "price": 69.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Dell" },
    { "id": 7, "name": "Crossbody Bag", "price": 35.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Louis Vuitton" },
    { "id": 8, "name": "Gym Duffle Bag", "price": 55.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Adidas" },
    { "id": 9, "name": "Messenger Bag", "price": 45.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Fossil" },
    { "id": 10, "name": "Clutch Bag", "price": 25.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Coach" },
    { "id": 11, "name": "Drawstring Bag", "price": 19.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Puma" },
    { "id": 12, "name": "Mini Backpack", "price": 34.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Guess" },
    { "id": 13, "name": "Beach Tote", "price": 27.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Tommy Hilfiger" },
    { "id": 14, "name": "Weekender Bag", "price": 89.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Samsonite" },
    { "id": 15, "name": "Camera Bag", "price": 99.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Sony" },
    { "id": 16, "name": "Rolling Suitcase", "price": 149.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "American Tourister" },
    { "id": 17, "name": "Convertible Backpack", "price": 59.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "JanSport" },
    { "id": 18, "name": "Satchel Bag", "price": 64.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Kate Spade" },
    { "id": 19, "name": "Hiking Backpack", "price": 129.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "North Face" },
    { "id": 20, "name": "Fanny Pack", "price": 22.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Adidas" },
    { "id": 21, "name": "Casual Tote", "price": 31.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Uniqlo" },
    { "id": 22, "name": "Luxury Purse", "price": 199.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Chanel" },
    { "id": 23, "name": "Waterproof Backpack", "price": 79.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Patagonia" },
    { "id": 24, "name": "Canvas Tote Bag", "price": 19.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Etsy" },
    { "id": 25, "name": "Vegan Leather Bag", "price": 49.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Matt & Nat" },
    { "id": 26, "name": "Sports Duffel Bag", "price": 59.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Reebok" },
    { "id": 27, "name": "Slim Laptop Sleeve", "price": 29.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Amazon Basics" },
    { "id": 28, "name": "Rolling Laptop Bag", "price": 99.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Targus" },
    { "id": 29, "name": "Softshell Carry-On", "price": 139.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "TravelPro" },
    { "id": 30, "name": "Hardshell Suitcase", "price": 169.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Away" },
    { "id": 31, "name": "Luxury Briefcase", "price": 259.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Montblanc" },
    { "id": 32, "name": "Messenger Laptop Bag", "price": 49.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "HP" },
    { "id": 33, "name": "Crossover Sling Bag", "price": 34.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Adidas" },
    { "id": 34, "name": "Kid’s Backpack", "price": 29.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Disney" },
    { "id": 35, "name": "Gaming Laptop Bag", "price": 89.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Razer" },
    { "id": 36, "name": "Expandable Travel Bag", "price": 119.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Samsonite" },
    { "id": 37, "name": "High-Fashion Clutch", "price": 79.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Dolce & Gabbana" },
    { "id": 38, "name": "Lightweight Gym Bag", "price": 24.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Nike" },
    { "id": 39, "name": "Crossbody Purse", "price": 45.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Fendi" },
    { "id": 40, "name": "Handmade Leather Tote", "price": 99.99, "image": "https://images.lululemon.com/is/image/lululemon/LU9BSDS_037019_1?$product_tile$&wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72", "brand": "Etsy" }
  
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const products1PerPage = 60;
  const totalProducts = 5400; // 60 products per page × 90 pages
  const totalPages = Math.ceil(totalProducts / products1PerPage);
  
  // Get current page products
  const indexOfLastProduct = currentPage * products1PerPage;
  const indexOfFirstProduct = indexOfLastProduct - products1PerPage;
  const currentProducts1 = products1.slice(indexOfFirstProduct, indexOfLastProduct);
  
  
  
  

  
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
      title: "Belt Bags",
      description: "Take convenience up a notch.",
      image:
        "https://images.lululemon.com/is/image/lululemon/NA_MarWk2_Bags_EPS_CarouselCard_D_Belt?wid=624&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    },
    {
      id: 2,
      title: "Crossbody Bags",
      description: "The crossover of style and function.",
      image:
        "https://images.lululemon.com/is/image/lululemon/NA_MarWk2_Bags_EPS_CarouselCard_D_Crossbody?wid=624&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    },
    {
      id: 3,
      title: "Shoulder Bags",
      description: "Shoulder it all in style.",
      image:
        "https://images.lululemon.com/is/image/lululemon/NA_MarWk2_Bags_EPS_CarouselCard_D_Shoulder?wid=624&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    },
    {
      id: 4,
      title: "Totes",
      description: "Fits it all, and then some.",
      image:
        "https://images.lululemon.com/is/image/lululemon/NA_MarWk2_Bags_EPS_CarouselCard_D_Totes?wid=624&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    },
    {
      id: 5,
      title: "Backpacks",
      description: "Take the load off stylishly.",
      image:
        "https://images.lululemon.com/is/image/lululemon/NA_MarWk2_Bags_EPS_CarouselCard_D_Backpacks?wid=624&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72",
    },
  ];

  const BagsCarousel = () => {
    const scrollRef = useRef(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

    const checkScroll = () => {
      if (scrollRef.current) {
        setShowLeftButton(scrollRef.current.scrollLeft > 0);
        setShowRightButton(
          scrollRef.current.scrollLeft <
            scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        );
      }
    };

    const scroll = (direction) => {
      if (scrollRef.current) {
        const scrollAmount = 350;
        scrollRef.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    };

    useEffect(() => {
      if (scrollRef.current) {
        scrollRef.current.addEventListener("scroll", checkScroll);
      }
      return () => {
        if (scrollRef.current) {
          scrollRef.current.removeEventListener("scroll", checkScroll);
        }
      };
    }, []);

    return (
      <div className="max-w-[100%] mx-auto py-10 relative">
        {/* Title */}
        <nav className="text-gray-500 text-sm mb-4 ml-26 mt-[-40px]">
          <span className="cursor-pointer hover:text-black text-black">Accessories</span> /{" "}
          <span className="font-bold text-black">Bags</span>
        </nav>
        <h1 className="text-3xl font-bold mb-6 ml-26 mt-5">Bags</h1>

        {/* Carousel Container */}
        <div className="relative flex items-center ml-6">
          {/* Left Scroll Button */}
          {showLeftButton && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-xl p-3 squared-full z-10 flex items-center justify-center h-12 w-12 hover:bg-gray-100 transition mr-10"
              aria-label="Scroll left"
            >
              <span className="text-2xl font-bold">{"<"}</span>
            </button>
          )}

          {/* Scrollable Items */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex overflow-hidden space-x-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 px-20 scroll-smooth no-scrollbar"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-[350px] bg-white shadow-md rounded-lg"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-90 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold">{product.title}</h2>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Scroll Button */}
          {showRightButton && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-xl p-3 squared-full z-10 flex items-center justify-center h-12 w-12 hover:bg-gray-100 transition mr-5 mb-30"
              aria-label="Scroll right"
            >
              <span className="text-2xl font-bold">{">"}</span>
            </button>
          )}
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
            
            {/* Product Grid */}
            <div className="container mx-auto p-4 pt-[-500px]">
              <div className="grid grid-cols-3 gap-3 items-start">
                {currentProducts1.map((product) => (
                  <div key={product.id} className="border p-2">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-40 object-contain" 
                    />
                    <h2 className="text-lg font-bold">{product.name}</h2>
                    <p className="text-gray-600">${product.price}</p>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-4 space-x-2">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                  Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    
      
    );
  };

  return (
    <div>
      <BagsCarousel />
    </div>
  );
};

export default BagsPage;
