"use client";
import Loading from "@/components/loading";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const NainitalPage = () => {
  const { slug } = useParams();
  const [cityData, setCityData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://affordable-street-eats-backend.onrender.com/api/cities");
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        const city = data.find((c) => c.slug === "nainital");
        if (!city) throw new Error("Nainital data not found");
        setCityData(city);
      } catch (err) {
        setError(err.message);
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
    return <div className="text-center py-10">No data found for Nainital</div>;

  return (
    <div className={`bg-gradient-to-b ${cityData.color} to-white min-h-screen`}>
      {/* Hero with Lake View */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={cityData.image}
          alt={cityData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {cityData.name}
            </h1>
            <p className="text-xl md:text-2xl">{cityData.tagline}</p>
          </div>
        </div>
      </div>

      {/* Food Grid with Tibetan Influence */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Lakeside Delicacies ({cityData.foodCount})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cityData.foods.map((food, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover"
                />
                {food.tags.includes("Tibetan") && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                    Tibetan
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {food.name}
                </h3>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-blue-600 font-medium">
                    {food.price}
                  </span>
                  <span className="text-sm text-gray-500">{food.waitTime}</span>
                </div>
                <p className="text-gray-600 mb-4">{food.description}</p>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-blue-500"
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
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Mall Road Location
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NainitalPage;
