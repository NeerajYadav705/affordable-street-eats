"use client";
import Loading from '@/components/loading';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const HaridwarPage = () => {
  const { slug } = useParams();
  const [cityData, setCityData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://affordable-street-eats-backend.onrender.com/api/cities');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        const city = data.find(c => c.slug === 'haridwar');
        if (!city) throw new Error('Haridwar data not found');
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
  if (error) return <div className="text-red-500 text-center py-10">Error: {error}</div>;
  if (!cityData) return <div className="text-center py-10">No data found for Haridwar</div>;

  return (
    <div className={`bg-gradient-to-b ${cityData.color} to-white min-h-screen`}>
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img src={cityData.image} alt={cityData.name} className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{cityData.name}</h1>
            <p className="text-xl md:text-2xl">{cityData.tagline}</p>
          </div>
        </div>
      </div>

      {/* Food Grid */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Prasad & Spiritual Eats ({cityData.foodCount})</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cityData.foods.map((food, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img src={food.image} alt={food.name} className="w-full h-full object-cover"/>
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full flex items-center">
                  <span className="text-teal-600 font-bold mr-1">★</span>
                  <span className="font-medium">{food.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{food.name}</h3>
                <p className="text-teal-600 font-medium mb-3">{food.price}</p>
                <p className="text-gray-600 mb-4">{food.description}</p>
                <a href={food.location} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                  Find near Ghats
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HaridwarPage;