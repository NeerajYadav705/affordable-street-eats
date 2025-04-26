"use client";
import Loading from "@/components/loading";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DehradunPage = () => {
  const { slug } = useParams();
  const [cityData, setCityData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/cities");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const dehradunData = data.find((city) => city.slug === "dehradun");

        if (!dehradunData) {
          throw new Error("Dehradun data not found");
        }

        setCityData(dehradunData);
      } catch (err) {
        setError(err.message);
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) return <Loading />;
  if (error)
    return <div className="text-red-500 text-center py-10">Error: {error}</div>;
  if (!cityData)
    return <div className="text-center py-10">No data found for Dehradun</div>;

  return (
    <div className={`bg-gradient-to-b ${cityData.color} to-white min-h-screen`}>
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          // src={cityData.image}
          src="/dehradun/dehradun.jpg"
          alt={cityData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {cityData.name}
            </h1>
            <p className="text-xl md:text-2xl">{cityData.tagline}</p>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Food Highlights
          </h2>
          <div className="flex flex-wrap gap-4">
            {cityData.highlights.map((highlight, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full font-medium"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* Food Items Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Must-Try Street Foods ({cityData.foodCount})
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cityData.foods.map((food, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full flex items-center">
                    <span className="text-amber-600 font-bold mr-1">★</span>
                    <span className="font-medium">{food.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">
                      {food.name}
                    </h3>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                      {food.price}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {food.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-600 mb-4">{food.description}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Best time: {food.bestTime}</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <a
                        href={food.location}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        View on Map
                      </a>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span>Vendor: {food.vendor}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ingredients Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Common Ingredients
          </h2>
          <div className="flex flex-wrap gap-3">
            {Array.from(
              new Set(cityData.foods.flatMap((food) => food.ingredients))
            ).map((ingredient, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-2 text-amber-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {ingredient}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DehradunPage;
