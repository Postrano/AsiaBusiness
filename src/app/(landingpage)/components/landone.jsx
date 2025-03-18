"use client";
import React from "react";

const LandOne = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 bg-white">
      {/* Important Notice Banner */}
      <div className="bg-red-600 text-white font-bold text-center p-3 text-sm md:text-base">
        ⚠️ IMPORTANT: Beware of Fake Websites
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {/* Seminar Section - Clickable */}
        <div className="relative">
          <a href="/seminars" className="block">
            <img
              src="/images/bs2.jpg"
              alt="Seminar"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="absolute bottom-2 left-2 bg-blue-600 bg-opacity-70 text-white p-2 text-xs md:text-sm font-bold rounded-md">
              SEMINAR Information →
            </div>
          </a>
        </div>

        {/* Information Section */}
        <div className="md:col-span-2 border-4 border-black p-4">
          <h2 className="font-bold italic text-lg md:text-xl text-black">INFORMATION - Latest News</h2>
          <div className="mt-2 space-y-2">
            {[
              { type: "Seminar", date: "2025.03.12", text: "Seminar registration closed for 3/17..." },
              { type: "Seminar", date: "2025.03.05", text: "Seminar registration closed for 3/10..." },
              { type: "Update", date: "2025.03.04", text: "Social Insurance - [Reconfirmation]..." }
            ].map((news, index) => (
              <div key={index} className="flex flex-wrap items-center">
                <span className="bg-gray-800 text-white px-3 py-1 text-xs md:text-sm rounded-md">
                  {news.type}
                </span>
                <span className="ml-2 text-xs md:text-sm text-gray-600">{news.date}</span>
                <a href="#" className="ml-2 text-blue-600 underline text-xs md:text-sm">
                  {news.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brochure Download Section */}
      <div className="relative mt-4">
        <a href="/brochure.pdf" download className="block">
          <img src="/images/bs6.jpg" alt="Brochure" className="w-full h-auto object-cover rounded-lg" />
        </a>

        {/* Overlay Text at Bottom Right */}
        <div className="absolute bottom-4 right-4 bg-blue-600 bg-opacity-80 text-white p-2 md:p-4 text-xs md:text-lg font-bold rounded-md">
          BROCHURE <br /> Download Company Guide ↓
        </div>
      </div>
    </div>
  );
};

export default LandOne;
