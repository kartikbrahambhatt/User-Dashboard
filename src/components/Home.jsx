import React from 'react';
import BlogSlider from './BlogSlider';

const Home = () => {
  return (
    <div>
      <div class="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-20 px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Find Top Web Hosting IT Companies
        </h1>
        <p class="text-lg md:text-xl mb-8">
          Discover and Compare the best AI and IT service providers worldwide
        </p>
        <div class="flex justify-center flex-wrap gap-4">
          <input
            type="text"
            placeholder="Search for categories and services..."
            class="px-6 py-3 rounded-md text-gray-700 w-72 focus:outline-none bg-white"
          />
          <button disabled class="px-6 py-3 rounded-md bg-green-600 text-white opacity-100 cursor-pointer">
            Find
          </button>
        </div>
      </div>
      <div class="py-16 px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-semibold mb-2">
          Streamlining Your Research Journey
        </h2>
        <p class="text-gray-500 max-w-3xl mx-auto mb-12">
          Discover, Evaluate, Select, and Collaborate with trusted business partners effortlessly.
        </p>
        <div class="flex justify-center flex-wrap gap-6 relative max-w-7xl mx-auto">
          <div class="flex flex-col items-center w-64 border-dotted border-r last:border-r-0 border-gray-300 relative px-4">
            <div class="absolute -top-6 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
              1
            </div>
            <div class="bg-blue-400 rounded-full w-14 h-14 flex items-center justify-center mb-4 mt-8">
              <img src="/fd.png" alt="Clipboard Icon" class="w-8 h-8"/>
            </div>
            <h3 class="font-semibold text-lg mb-1">Pick a Category</h3>
            <p class="text-gray-600 text-sm">Find the ideal type of companies that match your needs</p>
          </div>
          <div class="flex flex-col items-center w-64 border-dotted border-r last:border-r-0 border-gray-300 relative px-4">
            <div class="absolute -top-6 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
              2
            </div>
            <div class="bg-blue-400 rounded-full w-14 h-14 flex items-center justify-center mb-4 mt-8">
              <img src="/qq.png" alt="Star Icon" class="w-8 h-8"/>
            </div>
            <h3 class="font-semibold text-lg mb-1">Explore Reviews & Ratings</h3>
            <p class="text-gray-600 text-sm">Discover authentic B2B reviews & ratings for businesses</p>
          </div>
          <div class="flex flex-col items-center w-64 border-dotted border-r last:border-r-0 border-gray-300 relative px-4">
            <div class="absolute -top-6 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
              3
            </div>
            <div class="bg-blue-400 rounded-full w-14 h-14 flex items-center justify-center mb-4 mt-8">
              <img src="/as.png" alt="Menu Icon" class="w-8 h-8"/>
            </div>
            <h3 class="font-semibold text-lg mb-1">Choose the Right Fit</h3>
            <p class="text-gray-600 text-sm">Select the company that aligns with your needs</p>
          </div>
          <div class="flex flex-col items-center w-64 relative px-4">
            <div class="absolute -top-6 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
              4
            </div>
            <div class="bg-blue-400 rounded-full w-14 h-14 flex items-center justify-center mb-4 mt-8">
              <img src="/re.png" alt="Eye Icon" class="w-8 h-8"/>
            </div>
            <h3 class="font-semibold text-lg mb-1">Share Your Feedback</h3>
            <p class="text-gray-600 text-sm">Write reviews to guide others in their decision-making</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white">
        <div className="md:w-1/2 space-y-6 px-10">
          <h2 className="text-4xl font-bold text-gray-900">
            Help others by sharing your <br /> experience
          </h2>
          <p className="text-lg text-gray-600">
            Your review can guide businesses in making informed choices.
            Be part of 60,000+ reviewers and share your insights.
          </p>
          <button className="bg-gray-900 text-white py-3 px-6 rounded-md hover:bg-gray-800 transition">
            Write a Review
          </button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="/ab.png"
            alt="Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
      <div >
        <BlogSlider />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">
            Boost Your Visibility with Us
          </h2>
          <p className="text-lg text-gray-600">
            Claim your company profile to stand out from the competition and connect with the right clients.
          </p>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-500 transition">
            Claim Your Profile
          </button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="/ww.jpg"
            alt="Claim Profile Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
      <div className="">
        <div className="flex flex-col  items-center justify-between p-8 bg-white">
          <h2 className="text-4xl font-bold text-gray-900  text-center">
            Discover global services at your fingertips
          </h2>
          <p className="text-lg text-gray-600">
            Access location-based services from anywhere in the world
          </p>
        </div>
        <div >
          <img
            src="/az.png"
            alt="Claim Profile Illustration"
            className="w-full px-10 h-96"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;