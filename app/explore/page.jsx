"use client";
import { useState, useEffect } from "react";
import { FiChevronRight, FiStar, FiMapPin, FiClock, FiX } from "react-icons/fi";
import { FaUtensils, FaFireAlt, FaWallet } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Loading from "@/components/loading";

const ExplorePage = () => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFood, setSelectedFood] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10-second timeout

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://affordable-street-eats-backend.onrender.com/api/cities",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid data format received from API");
        }

        // Process data with safety checks
        const citiesWithLimitedFoods = data.map((city) => ({
          ...city,
          foods: Array.isArray(city.foods) ? city.foods.slice(0, 4) : [],
          foodCount: city.foodCount || 0,
          highlights: Array.isArray(city.highlights) ? city.highlights : [],
          color: city.color || "from-gray-500 to-gray-600", // default gradient
        }));

        setCities(citiesWithLimitedFoods);
        setError(null);
      } catch (err) {
        console.error("Fetch error:", err);
        if (retryCount < 3) {
          console.log(`Retrying... Attempt ${retryCount + 1}`);
          setTimeout(
            () => setRetryCount(retryCount + 1),
            2000 * (retryCount + 1)
          );
        } else {
          setError(
            err.message || "Failed to load data after multiple attempts"
          );
        }
      } finally {
        setIsLoading(false);
        clearTimeout(timeoutId);
      }
    };

    fetchData();

    return () => {
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, [retryCount]);

  const openModal = (food, city) => {
    if (!food || !city) return;

    setSelectedFood({
      ...food,
      cityName: city.name || "Unknown City",
      cityColor: city.color || "from-gray-500 to-gray-600",
      ingredients: Array.isArray(food.ingredients) ? food.ingredients : [],
      tags: Array.isArray(food.tags) ? food.tags : [],
    });
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFood(null);
    document.body.style.overflow = "auto";
  };

  if (isLoading) return <Loading />;

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <div className="max-w-md bg-red-50 p-6 rounded-lg border border-red-100">
          <h2 className="text-xl font-bold text-red-600 mb-2">
            Error Loading Data
          </h2>
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={() => {
              setRetryCount(0);
              setIsLoading(true);
              setError(null);
            }}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!cities.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-medium text-gray-600">No cities found</h2>
          <p className="text-gray-500">Please check back later</p>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-gray-50">
      {/* Modal */}
      {isModalOpen && selectedFood && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          <div
            className="relative bg-white rounded-lg max-w-md w-full mx-auto max-h-[90vh] overflow-y-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <FiX className="h-5 w-5 text-gray-600" />
            </button>
            <div className="p-6">
              <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                <Image
                  src={selectedFood.image || "/placeholder-food.jpg"}
                  alt={selectedFood.name || "Food image"}
                  fill
                  className="object-cover"
                  priority
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder-food.jpg";
                  }}
                />
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {selectedFood.name || "Unknown Food"}
                </h3>
                <p className="text-sm text-gray-500">{selectedFood.cityName}</p>
              </div>
              <p className="text-gray-700 mb-4">
                {selectedFood.description || "No description available."}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Rating</p>
                  <p className="flex items-center font-medium">
                    <FiStar className="text-amber-500 mr-1" />
                    {selectedFood.rating || "N/A"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="font-medium">{selectedFood.price || "N/A"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Wait Time</p>
                  <p className="flex items-center">
                    <FiClock className="text-gray-500 mr-1" />
                    {selectedFood.waitTime || "N/A"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Best Time</p>
                  <p className="">{selectedFood.bestTime || "N/A"}</p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Vendor</h4>
                <p className="text-gray-600">
                  {selectedFood.vendor || "Unknown vendor"}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {selectedFood.vendorInfo ||
                    "No vendor information available."}
                </p>
              </div>

              {selectedFood.ingredients.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Ingredients
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedFood.ingredients.map((ingredient, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedFood.location && (
                <a
                  href={selectedFood.location}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-2 rounded-lg font-medium bg-gradient-to-r ${selectedFood.cityColor} text-white hover:opacity-90 transition-opacity`}
                >
                  <FiMapPin className="inline mr-2" />
                  View on Map
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/explore/explore.jpg"
            alt="Vibrant Uttarakhand street food scene"
            fill
            className="object-cover opacity-50"
            priority
            onError={(e) => {
              e.currentTarget.src = "/placeholder-hero.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Discover Uttarakhand's{" "}
            <span className="text-amber-400">Hidden</span> Food Treasures
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Authentic street food experiences from the Himalayan foothills to
            the Ganges plains
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="#dehradun"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors"
            >
              Start Exploring
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors border border-white/20"
            >
              About Our Food
            </Link>
          </div>
        </div>
      </section>

      {/* City Navigation */}
      {cities.length > 0 && (
        <div className="sticky top-0 z-30 bg-white shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap py-3 gap-2">
              {cities.map((city) => (
                <a
                  key={city._id || city.slug}
                  href={`#${city.slug}`}
                  className={`px-4 py-2 font-medium rounded-full transition-colors bg-gray-100 hover:bg-gray-200`}
                >
                  {city.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* City Sections */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {cities.map((city) => (
          <section
            key={city._id || city.slug}
            id={city.slug}
            className="mb-20 scroll-mt-16"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* City Introduction */}
              <div className="lg:w-1/3 lg:sticky lg:top-24">
                <div
                  className={`p-6 rounded-xl bg-gradient-to-br ${city.color} text-gray-900 shadow-lg`}
                >
                  <h2 className="text-2xl font-bold mb-2">{city.name}</h2>
                  <p className="text-gray-500 mb-6">{city.tagline}</p>
                  {city.highlights.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {city.highlights.map((item, i) => (
                        <span
                          key={i}
                          className="bg-white/20 px-3 py-1 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="space-y-3 text-gray-500">
                    <div className="flex items-center">
                      <FaUtensils className="mr-3 opacity-80" />
                      <span>{city.foodCount}+ documented spots</span>
                    </div>
                    <div className="flex items-center">
                      <FaFireAlt className="mr-3 opacity-80" />
                      <span>
                        Trending: {city.foods[0]?.name || "Local specialties"}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaWallet className="mr-3 opacity-80" />
                      <span>Avg. cost: ₹50-150</span>
                    </div>
                  </div>
                </div>
                <Link
                  href={`/explore/${city.slug}`}
                  className="mt-4 inline-flex items-center group"
                >
                  <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                    View all {city.foodCount} foods in {city.name}
                  </span>
                  <FiChevronRight className="ml-1 text-gray-500 group-hover:text-gray-700 group-hover:translate-x-1 transition-all" />
                </Link>
              </div>

              {/* Limited Food Items (4 per city) */}
              <div className="w-full lg:w-2/3">
                {city.foods.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {city.foods.map((food, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                      >
                        <div className="relative h-48">
                          <Image
                            src={food.image || "/placeholder-food.jpg"}
                            alt={food.name || "Food image"}
                            fill
                            className="object-cover"
                            priority
                            onError={(e) => {
                              e.currentTarget.src = "/placeholder-food.jpg";
                            }}
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                            <h3 className="font-bold text-lg">{food.name}</h3>
                            <p className="text-gray-300 text-sm">
                              {food.vendor || "Local vendor"}
                            </p>
                          </div>
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full font-medium text-sm shadow-sm">
                            {food.price || "₹--"}
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center mb-3">
                            <div className="flex items-center text-amber-500">
                              <FiStar className="mr-1" />
                              <span className="font-medium">
                                {food.rating || "N/A"}
                              </span>
                            </div>
                            <div className="flex items-center text-gray-500 text-sm">
                              <FiClock className="mr-1" />
                              <span>{food.waitTime || "N/A"}</span>
                            </div>
                          </div>
                          {food.tags && food.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {food.tags.map((tag, i) => (
                                <span
                                  key={i}
                                  className="bg-gray-50 text-gray-700 px-2.5 py-1 rounded-full text-xs font-medium border border-gray-100"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                          <button
                            onClick={() => openModal(food, city)}
                            className={`w-full py-2 rounded-lg font-medium bg-gradient-to-r ${city.color} text-white hover:opacity-90 transition-opacity cursor-pointer`}
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-xl p-8 text-center border border-gray-200">
                    <p className="text-gray-500">
                      No food items listed yet for {city.name}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default ExplorePage;
