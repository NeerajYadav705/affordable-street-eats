"use client";
import Loading from "@/components/loading";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MussooriePage = () => {
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
        const city = data.find((c) => c.slug === "mussoorie");
        if (!city) throw new Error("Mussoorie data not found");
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
    return <div className="text-center py-10">No data found for Mussoorie</div>;

  return (
    <div className={`bg-gradient-to-b ${cityData.color} to-white min-h-screen`}>
      {/* Mountain View Hero */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={cityData.image}
          alt={cityData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-purple-900 bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {cityData.name}
            </h1>
            <p className="text-xl md:text-2xl">{cityData.tagline}</p>
          </div>
        </div>
      </div>

      {/* Colonial Style Food Grid */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Hill Station Favorites ({cityData.foodCount})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cityData.foods.map((food, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-full object-cover"
                />
                {food.tags.includes("British") && (
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-2 py-1 rounded text-xs font-bold">
                    Colonial
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">
                    {food.name}
                  </h3>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm">
                    {food.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{food.description}</p>
                <div className="flex items-center text-sm text-purple-600">
                  <svg
                    className="w-4 h-4 mr-1"
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
                  {food.bestTime}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MussooriePage;
