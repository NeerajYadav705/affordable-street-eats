"use client";
import { useState } from "react";
import { FiChevronRight, FiStar, FiMapPin, FiClock, FiX } from "react-icons/fi";
import { FaUtensils, FaFireAlt, FaWallet } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const ExplorePage = () => {
  // State for modal
  const [selectedFood, setSelectedFood] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (food, city) => {
    setSelectedFood({ ...food, cityName: city.name, cityColor: city.color });
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFood(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };
  // City data with complete details
  const cities = [
    {
      id: 1,
      name: "Dehradun",
      slug: "dehradun",
      tagline: "Where Tradition Meets Taste in the Valley",
      highlights: ["Kachori Capital", "Breakfast Heaven", "Sweet Treats"],
      foods: [
        {
          name: "Paltan Bazaar Kachori",
          price: "₹25",
          rating: 4.9,
          vendor: "Sharma Ji",
          image: "/foods/dehradun-kachori.jpg",
          waitTime: "5-10 min",
          tags: ["Signature", "Spicy", "Must-Try"],
          description:
            "Crispy fried kachori stuffed with spicy lentil filling, served with tangy tamarind chutney. A Dehradun specialty that's perfect for breakfast or evening snack.",
          location: "https://maps.google.com/?q=Paltan+Bazaar+Dehradun",
          ingredients: ["Urad dal", "Spices", "Maida", "Tamarind chutney"],
          bestTime: "Morning (7-10 AM) or Evening (4-7 PM)",
          vendorInfo:
            "Family-run stall operating since 1985, famous for their secret spice blend",
        },
        {
          name: "Rajpur Road Aloo Tikki",
          price: "₹40",
          rating: 4.7,
          vendor: "Tiwari Chaat Corner",
          image: "/foods/dehradun-tikki.jpg",
          waitTime: "10-15 min",
          tags: ["Tangy", "Evening Snack"],
          description:
            "Crispy potato patties topped with yogurt, chutneys, and spices. A perfect balance of sweet, spicy, and tangy flavors.",
          location: "https://maps.google.com/?q=Rajpur+Road+Dehradun",
          ingredients: ["Potatoes", "Chickpea flour", "Yogurt", "Chutneys"],
          bestTime: "Evening (4-9 PM)",
          vendorInfo:
            "Open-air stall with limited seating, known for their generous toppings",
        },
        {
          name: "Garam Doodh with Jalebi",
          price: "₹60",
          rating: 4.8,
          vendor: "Gandhi Road Stall",
          image: "/foods/dehradun-jalebi.jpg",
          waitTime: "5 min",
          tags: ["Winter Special", "Combo"],
          description:
            "Hot milk served with freshly fried jalebis - the perfect winter comfort food combination in Dehradun.",
          location: "https://maps.google.com/?q=Gandhi+Road+Dehradun",
          ingredients: ["Full cream milk", "Sugar", "Maida", "Saffron"],
          bestTime: "Early morning or late evening",
          vendorInfo: "Mobile cart that sets up near Gandhi Road crossing",
        },
        {
          name: "Chhole Bhature",
          price: "₹80",
          rating: 4.6,
          vendor: "Pandit Ji Bhature Wale",
          image: "/foods/dehradun-bhature.jpg",
          waitTime: "15 min",
          tags: ["Heavy Meal", "Weekend"],
          description:
            "Fluffy fried bread served with spicy chickpea curry, onions, and pickles. A hearty North Indian breakfast favorite.",
          location: "https://maps.google.com/?q=Pandit+Ji+Bhature+Dehradun",
          ingredients: ["Refined flour", "Chickpeas", "Onions", "Spices"],
          bestTime: "Weekend mornings (8 AM - 12 PM)",
          vendorInfo:
            "Small shop with limited tables, famous for their fluffy bhature",
        },
      ],
      image: "/cities/dehradun-panorama.jpg",
      foodCount: 42,
      color: "from-amber-500 to-amber-600",
    },
    {
      id: 2,
      name: "Haridwar",
      slug: "haridwar",
      tagline: "Spiritual Food Journey Along the Ganges",
      highlights: ["Prasad Specials", "Vegetarian", "Riverside Eats"],
      foods: [
        {
          name: "Hari Ki Pauri Aloo Puri",
          price: "₹50",
          rating: 4.8,
          vendor: "Ganga View Stall",
          image: "/foods/haridwar-aloopuri.jpg",
          waitTime: "10 min",
          tags: ["Pilgrim Favorite", "Hot"],
          description:
            "Deep-fried bread served with spicy potato curry, enjoyed by pilgrims after holy dips in the Ganges.",
          location: "https://maps.google.com/?q=Hari+Ki+Pauri+Haridwar",
          ingredients: ["Wheat flour", "Potatoes", "Spices", "Ghee"],
          bestTime: "Morning after Ganga Aarti",
          vendorInfo: "Stall with Ganges view, operates from 5 AM to 10 PM",
        },
        {
          name: "Mohan Ji's Malai Lassi",
          price: "₹40",
          rating: 4.9,
          vendor: "Mohan Ji Lassi Wale",
          image: "/foods/haridwar-lassi.jpg",
          waitTime: "5 min",
          tags: ["Refreshing", "Creamy"],
          description:
            "Thick, creamy lassi topped with malai (clotted cream) and dry fruits - a perfect respite from Haridwar's heat.",
          location: "https://maps.google.com/?q=Jwalapur+Road+Haridwar",
          ingredients: ["Curd", "Malai", "Sugar", "Cardamom"],
          bestTime: "Afternoon (12-4 PM)",
          vendorInfo: "Iconic shop established in 1972, always crowded",
        },
        {
          name: "Kankhal Kachori Sabzi",
          price: "₹35",
          rating: 4.7,
          vendor: "Bhole Kachori Bhandar",
          image: "/foods/haridwar-kachori.jpg",
          waitTime: "7-10 min",
          tags: ["Local Recipe", "Spicy"],
          description:
            "Distinct from Rajasthani kachoris, these are softer and served with a unique potato and pumpkin curry.",
          location: "https://maps.google.com/?q=Kankhal+Haridwar",
          ingredients: ["Maida", "Pumpkin", "Potatoes", "Spices"],
          bestTime: "Breakfast (7-10 AM)",
          vendorInfo: "Small shop near Kankhal crossing, family recipe",
        },
        {
          name: "Gur Vaisno Dham Prasad",
          price: "₹20",
          rating: 4.5,
          vendor: "Dham Prasad Stall",
          image: "/foods/haridwar-prasad.jpg",
          waitTime: "2 min",
          tags: ["Sweet", "Religious"],
          description:
            "Traditional prasad made with jaggery, wheat flour and dry fruits, offered at temples and sold as street food.",
          location: "https://maps.google.com/?q=Har+Ki+Paudi+Haridwar",
          ingredients: ["Jaggery", "Wheat flour", "Ghee", "Dry fruits"],
          bestTime: "All day",
          vendorInfo: "Authorized temple prasad sellers near ghats",
        },
      ],
      image: "/cities/haridwar-panorama.jpg",
      foodCount: 38,
      color: "from-teal-500 to-teal-600",
    },
    {
      id: 3,
      name: "Nainital",
      slug: "nainital",
      tagline: "Lakeside Eats with Himalayan Views",
      highlights: ["Tibetan Influence", "Bakeries", "Momo Varieties"],
      foods: [
        {
          name: "Mall Road Steamed Momos",
          price: "₹60",
          rating: 4.8,
          vendor: "Tibetan Taste",
          image: "/foods/nainital-momos.jpg",
          waitTime: "10-12 min",
          tags: ["Steamed", "Tibetan"],
          description:
            "Delicate steamed dumplings filled with vegetables or meat, served with fiery red chutney and clear soup.",
          location: "https://maps.google.com/?q=Mall+Road+Nainital",
          ingredients: ["Maida", "Cabbage", "Carrots", "Garlic"],
          bestTime: "Evening (4-8 PM)",
          vendorInfo: "Small shop run by Tibetan refugees, authentic recipes",
        },
        {
          name: "Tallital Bal Mithai",
          price: "₹100/box",
          rating: 4.9,
          vendor: "Gupta Sweet House",
          image: "/foods/nainital-mithai.jpg",
          waitTime: "5 min",
          tags: ["Local Specialty", "Fudge"],
          description:
            "Nainital's famous brown chocolate-like fudge made with khoya and coated with sugar balls - a must-try sweet.",
          location: "https://maps.google.com/?q=Tallital+Nainital",
          ingredients: ["Khoya", "Sugar", "Cocoa", "Sugar balls"],
          bestTime: "All day",
          vendorInfo: "Established in 1947, original inventors of Bal Mithai",
        },
        {
          name: "Bara Bazaar Thukpa",
          price: "₹80",
          rating: 4.7,
          vendor: "Himalayan Bowl",
          image: "/foods/nainital-thukpa.jpg",
          waitTime: "15 min",
          tags: ["Noodle Soup", "Hearty"],
          description:
            "Tibetan noodle soup loaded with vegetables and your choice of meat, perfect for Nainital's chilly evenings.",
          location: "https://maps.google.com/?q=Bara+Bazaar+Nainital",
          ingredients: ["Noodles", "Vegetables", "Chicken/veg stock", "Spices"],
          bestTime: "Lunch or dinner",
          vendorInfo: "Small eatery with Tibetan decor, generous portions",
        },
        {
          name: "Snow View Cafe Pancakes",
          price: "₹120",
          rating: 4.6,
          vendor: "Snow View Point Cafe",
          image: "/foods/nainital-pancakes.jpg",
          waitTime: "20 min",
          tags: ["Western", "With Views"],
          description:
            "Fluffy pancakes served with maple syrup and fresh fruits, enjoyed with breathtaking Himalayan views.",
          location: "https://maps.google.com/?q=Snow+View+Point+Nainital",
          ingredients: ["Flour", "Eggs", "Milk", "Fruits"],
          bestTime: "Breakfast (8-11 AM)",
          vendorInfo: "Cafe at Snow View Point, accessible by cable car",
        },
      ],
      image: "/cities/nainital-panorama.jpg",
      foodCount: 35,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 4,
      name: "Mussoorie",
      slug: "mussoorie",
      tagline: "Colonial Flavors Meet Mountain Treats",
      highlights: ["British Legacy", "Scenic Cafes", "Sunset Bites"],
      foods: [
        {
          name: "The Mall Road Corn",
          price: "₹30",
          rating: 4.7,
          vendor: "Bhatt Corn Stall",
          image: "/foods/mussoorie-corn.jpg",
          waitTime: "3 min",
          tags: ["Grilled", "Buttery"],
          description:
            "Fresh corn roasted over charcoal, slathered with butter, lemon, and spices - Mussoorie's most popular street snack.",
          location: "https://maps.google.com/?q=Mall+Road+Mussoorie",
          ingredients: ["Corn", "Butter", "Lemon", "Spices"],
          bestTime: "Evening stroll (4-8 PM)",
          vendorInfo:
            "Multiple carts along Mall Road, most popular near Library",
        },
        {
          name: "Kempty Falls Maggi",
          price: "₹50",
          rating: 4.5,
          vendor: "Waterfall Maggi Point",
          image: "/foods/mussoorie-maggi.jpg",
          waitTime: "10 min",
          tags: ["Tourist Favorite", "With View"],
          description:
            "Steaming hot Maggi noodles prepared with fresh vegetables, enjoyed with the view and sound of Kempty Falls.",
          location: "https://maps.google.com/?q=Kempty+Falls+Mussoorie",
          ingredients: ["Maggi noodles", "Vegetables", "Spices"],
          bestTime: "During waterfall visit (10 AM - 4 PM)",
          vendorInfo:
            "Several stalls near the falls, this one has blue umbrellas",
        },
        {
          name: "Library Bazaar Pastries",
          price: "₹90",
          rating: 4.8,
          vendor: "Baker's Cafe",
          image: "/foods/mussoorie-pastry.jpg",
          waitTime: "5 min",
          tags: ["Bakery", "European"],
          description:
            "Flaky, buttery pastries with various fillings - a remnant of Mussoorie's colonial bakery culture.",
          location: "https://maps.google.com/?q=Library+Bazaar+Mussoorie",
          ingredients: ["Flour", "Butter", "Eggs", "Fillings"],
          bestTime: "Morning tea time (9-11 AM)",
          vendorInfo: "Oldest bakery in Mussoorie, established 1952",
        },
        {
          name: "Gun Hill Pakoras",
          price: "₹60",
          rating: 4.6,
          vendor: "Sunset Pakora Stall",
          image: "/foods/mussoorie-pakora.jpg",
          waitTime: "12 min",
          tags: ["Fried", "With Tea"],
          description:
            "Crispy fritters made with seasonal vegetables, best enjoyed with masala chai while watching the sunset from Gun Hill.",
          location: "https://maps.google.com/?q=Gun+Hill+Mussoorie",
          ingredients: ["Chickpea flour", "Vegetables", "Spices"],
          bestTime: "Evening before sunset",
          vendorInfo: "Small stall at Gun Hill viewpoint",
        },
      ],
      image: "/cities/mussoorie-panorama.jpg",
      foodCount: 31,
      color: "from-violet-500 to-violet-600",
    },
  ];

  return (
    <main className="bg-gray-50">
      {/* Modal */}
      {isModalOpen && selectedFood && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-opacity-50 backdrop-blur-3xl"
            onClick={closeModal}
          ></div>

          {/* Modal content */}
          <div
            className="relative bg-white rounded-lg max-w-md w-full mx-auto max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
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
                  src={selectedFood.image}
                  alt={selectedFood.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {selectedFood.name}
                </h3>
                <p className="text-sm text-gray-500">{selectedFood.cityName}</p>
              </div>

              <p className="text-gray-700 mb-4">{selectedFood.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Rating</p>
                  <p className="flex items-center font-medium">
                    <FiStar className="text-amber-500 mr-1" />
                    {selectedFood.rating}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="font-medium">{selectedFood.price}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Wait Time</p>
                  <p className="flex items-center">
                    <FiClock className="text-gray-500 mr-1" />
                    {selectedFood.waitTime}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Best Time</p>
                  <p className="">{selectedFood.bestTime}</p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Vendor</h4>
                <p className="text-gray-600">{selectedFood.vendor}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {selectedFood.vendorInfo}
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Ingredients</h4>
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

              <a
                href={selectedFood.location}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-2 rounded-lg font-medium bg-gradient-to-r ${selectedFood.cityColor} text-white hover:opacity-90 transition-opacity`}
              >
                <FiMapPin className="inline mr-2" />
                View on Map
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Modern Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/explore/explore.jpg"
            alt="Vibrant Uttarakhand street food scene"
            fill
            className="object-cover opacity-50"
            priority
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

      {/* Navigation - Changed to wrap instead of scroll */}
      <div className="top-0 z-30 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap py-3 gap-2">
            {cities.map((city) => (
              <a
                key={city.id}
                href={`#${city.slug}`}
                className={`px-4 py-2 font-medium rounded-full transition-colors bg-gray-100 hover:bg-gray-200`}
              >
                {city.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* City Sections */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {cities.map((city) => (
          <section key={city.id} id={city.slug} className="mb-20 scroll-mt-16">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* City Introduction - Sidebar */}
              <div className="lg:w-1/3 lg:sticky lg:top-24">
                <div
                  className={`p-6 rounded-xl bg-gradient-to-br ${city.color} text-white shadow-lg`}
                >
                  <h2 className="text-2xl font-bold mb-2">{city.name}</h2>
                  <p className="text-gray-100 mb-6">{city.tagline}</p>

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

                  <div className="space-y-3 text-gray-100">
                    <div className="flex items-center">
                      <FaUtensils className="mr-3 opacity-80" />
                      <span>{city.foodCount}+ documented spots</span>
                    </div>
                    <div className="flex items-center">
                      <FaFireAlt className="mr-3 opacity-80" />
                      <span>Trending: {city.foods[0].name}</span>
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
                    View full {city.name} guide
                  </span>
                  <FiChevronRight className="ml-1 text-gray-500 group-hover:text-gray-700 group-hover:translate-x-1 transition-all" />
                </Link>
              </div>

              {/* Food Showcase - Main Content */}
              <div className="w-full lg:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {city.foods.map((food, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                    >
                      <div className="relative h-48">
                        <Image
                          src={food.image}
                          alt={food.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                          <h3 className="font-bold text-lg">{food.name}</h3>
                          <p className="text-gray-300 text-sm">{food.vendor}</p>
                        </div>
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full font-medium text-sm shadow-sm">
                          {food.price}
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center text-amber-500">
                            <FiStar className="mr-1" />
                            <span className="font-medium">{food.rating}</span>
                          </div>
                          <div className="flex items-center text-gray-500 text-sm">
                            <FiClock className="mr-1" />
                            <span>{food.waitTime}</span>
                          </div>
                        </div>

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

                        <button
                          onClick={() => openModal(food, city)}
                          className={`w-full py-2 rounded-lg font-medium bg-gradient-to-r ${city.color} text-white hover:opacity-90 transition-opacity`}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Discovery Section */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Continue Your Food Journey
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              More ways to explore Uttarakhand's culinary landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Food Tours */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="relative h-48">
                <Image
                  src="/food-tour.jpg"
                  alt="Street food tour"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">Guided Food Walks</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Join our expert-led tours to hidden culinary gems
                </p>
                <button className="text-amber-600 font-medium flex items-center text-sm group">
                  Explore Tours
                  <FiChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Food Map */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="relative h-48">
                <Image
                  src="/food-map.jpg"
                  alt="Interactive food map"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-blue-500/10 flex items-center justify-center">
                  <FiMapPin className="text-blue-500 text-4xl" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">Interactive Food Map</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Find street food spots near you in real-time
                </p>
                <button className="text-blue-600 font-medium flex items-center text-sm group">
                  Open Map
                  <FiChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Food Stories */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="relative h-48">
                <Image
                  src="/food-stories.jpg"
                  alt="Food stories and traditions"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-purple-500/10" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">Food Stories</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Discover the traditions behind Uttarakhand's iconic dishes
                </p>
                <button className="text-purple-600 font-medium flex items-center text-sm group">
                  Read Stories
                  <FiChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExplorePage;
