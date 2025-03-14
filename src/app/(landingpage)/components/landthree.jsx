"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { parseStringPromise } from "xml2js";
import { FaArrowRight } from "react-icons/fa";

const Landthree = () => {
  const [rssData, setRssData] = useState([]);

  useEffect(() => {
    const fetchRSSFeed = async () => {
      try {
        const response = await axios.get(
          "https://moxie.foxbusiness.com/google-publisher/latest.xml",
          {
            headers: { "Content-Type": "application/xml" },
          }
        );

        console.log("Raw XML Response:", response.data);

        const result = await parseStringPromise(response.data);
        console.log("Parsed XML Data:", result);

        const items = result?.rss?.channel?.[0]?.item || [];
        setRssData(items);
      } catch (error) {
        console.error("Error fetching RSS feed:", error);
      }
    };

    fetchRSSFeed();
  }, []);

  return (
    <div className="bg-white p-8 items-center justify-center max-w-5xl mx-auto">
      {/* Recruitment Information Section */}
      <div className="border-b pb-6 mb-8">
        <div className="flex justify-between items-center">
          <h2 className="font-bold italic text-xl text-black ">
            RECRUIT Recruitment information
          </h2>
          <a
            href="#"
            className="flex items-center text-gray-600 hover:text-black font-medium"
          >
            MORE <FaArrowRight className="ml-2" />
          </a>
        </div>
        {/* Full Bold Straight Line */}
        <hr className="border-2 border-black my-4" />
        <div className="flex flex-col md:flex-row items-center mt-4">
          <img
            src="/images/bs2.jpg"
            alt="Recruitment"
            className="w-full md:w-1/3 rounded shadow-lg"
          />
          <div className="md:ml-6 text-gray-700 text-sm md:text-base">
            <p>
              Garbera Partners Group is looking for cheerful and fun
              professional colleagues. After joining the company, we will share
              our company’s know-how with you during training, so your abilities
              are not an issue.
            </p>
            <p className="mt-2">
              This is a recommended workplace for those eager to improve their
              skills and grow every day.
            </p>
          </div>
        </div>
      </div>

      {/* News Blog Section */}
      <div>
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="font-bold italic text-xl text-black">
            NEWS BLOG Business Standard
          </h2>

          <a
            href="#"
            className="flex items-center text-gray-600 hover:text-black font-medium"
          >
            MORE <FaArrowRight className="ml-2" />
          </a>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {rssData.length > 0 ? (
            rssData.slice(0, 3).map((article, index) => {
              const imageUrl =
                article.enclosure?.[0]?.$.url ||
                article["media:content"]?.[0]?.$.url ||
                "https://via.placeholder.com/300x150"; // Fallback image

              return (
                <div
                  key={index}
                  className="border rounded-lg shadow-lg bg-white overflow-hidden h-full flex flex-col"
                >
                  <img
                    src={imageUrl}
                    alt="Article Thumbnail"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-bold text-md text-black">{article.title?.[0]}</h3>
                    <p className="text-sm text-gray-600 mt-1 flex-grow">
                      {article.description?.[0] || "No description available"}
                    </p>
                    <a
                      href={article.link?.[0]}
                      className="text-blue-500 mt-auto block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center text-black">Loading articles...</p>
          )}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden overflow-x-auto flex space-x-4 mt-4 px-2">
          {rssData.length > 0 ? (
            rssData.slice(0, 3).map((article, index) => {
              const imageUrl =
                article.enclosure?.[0]?.$.url ||
                article["media:content"]?.[0]?.$.url ||
                "https://via.placeholder.com/300x150"; // Fallback image

              return (
                <div
                  key={index}
                  className="min-w-[85%] sm:min-w-[60%] border rounded-lg shadow-lg bg-white overflow-hidden flex flex-col"
                >
                  <img
                    src={imageUrl}
                    alt="Article Thumbnail"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-bold text-md text-black">{article.title?.[0]}</h3>
                    <p className="text-sm text-gray-600 mt-1 flex-grow">
                      {article.description?.[0] || "No description available"}
                    </p>
                    <a
                      href={article.link?.[0]}
                      className="text-blue-500 mt-auto block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center text-black">Loading articles...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Landthree;
