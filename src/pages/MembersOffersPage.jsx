import React from "react";

const MembersOffersPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="w-full max-w-7.5xl pl-27 pr-21 pt-15 py-10">
    <h1 className="text-6xl font-bold mb-8">Membership Madness</h1>
    <img
            src="https://images.lululemon.com/is/image/lululemon/NA_Q1_2025_MembershipMadness_Drop3_Awareness_Live_Ecomm_1_1_Med_MediaAction_D?wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
            alt="Membership Madness"
            className="w-full object-cover "
    />
    </div>

    <div className="flex flex-col items-center justify-center text-center px-6 py-12 bg-white">
      <h1 className="text-3xl md:text-6xl font-bold mb-4">March 17 - 28</h1>
      <p className="text-lg text-black whitespace-nowrap max-w-full pl-5 mt-6">
        Here’s to you, lululemon members. We’re going all out to say thanks for being here with 
        12 days of incredible prizes,* tons of community events, and can't-miss offers.
      </p>
      <p className="text-lg text-black whitespace-nowrap max-w-full mt-8">
        There’s so much to share—and you’ll only find it in the lululemon iOS app.
      </p>
      <button className="mt-6 border border-black px-6 py-2 text-black font-semibold hover:bg-black hover:text-white mt-8 rounded-lg py-4">
        DOWNLOAD THE APP
      </button>
      <p className="mt-6 text-lg text-black font-semi-bold">
        Don’t have a lululemon Membership account? It’s free and easy.{" "}
        <a href="#" className="text-black underline font-semibold">
          Join Membership
        </a>
      </p>
      {/* Feedback Button */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 rotate-270 bg-white py-1 px-4 text-sm font-medium border  mr-[-25px] mt-20">
          Feedback
        </div>
    </div>
    <div className="grid grid-cols-3 gap-6 px-10 py-8 pl-27 pr-20 ">
      {/* Dresses Section */}
      <div className="relative">
        <img
          src="https://images.lululemon.com/is/image/lululemon/NA_Q1_2025_MembershipMadness_Drop3_StoryPage_Live_Sm_Image_1_D_V1?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          alt="12 days"
          className="w-full h-[600px] object-cover"
        />
        
      </div>

      {/* Shorts Section */}
      <div className="relative">
        <img
          src="https://images.lululemon.com/is/image/lululemon/NA_Q1_2025_MembershipMadness_Drop3_Live_Storypage_Sm_Image_2_D_update1?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          alt="Ultimate experience"
          className="w-full h-[600px] object-cover"
        />
        
      </div>

      {/* Bags Section */}
      <div className="relative">
        <img
          src="https://images.lululemon.com/is/image/lululemon/NA_Q1_2025_MembershipMadness_Drop3_Live_Storypage_Sm_Image_3_D_udpate1?wid=750&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
          alt="Community Events"
          className="w-full h-[600px] object-cover"
        />
        
      </div>
    </div>
    <div className="max-w-8xl mx-auto text-center py-12 px-4">
      <h2 className="text-10xl sm:text-5xl font-bold text-black">
        These prizes aren’t just big, they’re grand.
      </h2>
      <p className="mt-4 text-lg text-gray-800 ml-20 mr-15">
        How grand? Six people will receive lululemon gear for a year (a $5,000 USD gift card), a Peloton Tread, and an Oura Ring Gen3. 
        They&apos;ll be flown to New York to take a class at Peloton Studios New York, meet a Peloton Instructor, and use a $500 USD Peloton gift card 
        on co-branded Peloton x lululemon products. (Round-trip airfare and three-nights hotel accommodations included. Winners must travel by May 31, 2025. 
        For full terms and alternate methods of entry, see the official rules below.)
      </p>
    </div>
    </div>
  );
};

export default MembersOffersPage;
