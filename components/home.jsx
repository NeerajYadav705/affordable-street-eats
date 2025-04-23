import Link from "next/link";
import Image from "next/image";
import {
  FiMapPin,
  FiStar,
  FiClock,
  FiAward,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";
import { FaFacebook, FaInstagram, FaYelp } from "react-icons/fa";

export default function Home() {
  // Sample data - replace with API calls
  const featuredCities = [
    {
      name: "Dehradun",
      slug: "dehradun",
      foodCount: 127,
      specialty: "Kachori & Jalebi",
      image: "/hero/KACHORI.jpg",
    },
    {
      name: "Haridwar",
      slug: "haridwar",
      foodCount: 89,
      specialty: "Chole Bhature",
      image: "/hero/haridwar.jpg",
    },
    {
      name: "Rishikesh",
      slug: "rishikesh",
      foodCount: 65,
      specialty: "Momos & Thukpa",
      image: "/hero/rishikesh.jpg",
    },
    {
      name: "Mussoorie",
      slug: "mussoorie",
      foodCount: 42,
      specialty: "Tibetan Cuisine",
      image: "/hero/mussorie.jpg",
    },
  ];

  const trendingFoods = [
    {
      id: 1,
      name: "Pahadi Aloo Ke Gutke",
      vendor: "Mountain Spice",
      price: "₹40",
      rating: 4.9,
      image: "/images/foods/aloo-gutke.jpg",
      location: "Paltan Bazaar",
      tags: ["Spicy", "Local"],
    },
    {
      id: 2,
      name: "Bal Mithai",
      vendor: "Sweet Heaven",
      price: "₹100/box",
      rating: 4.8,
      image: "/images/foods/bal-mithai.jpg",
      location: "Rajpur Road",
      tags: ["Sweet", "Uttarakhand Special"],
    },
    {
      id: 3,
      name: "Bhang Ki Chutney",
      vendor: "Garhwali Flavors",
      price: "₹30",
      rating: 4.7,
      image: "/images/foods/bhang-chutney.jpg",
      location: "Clock Tower",
      tags: ["Unique", "Traditional"],
    },
    {
      id: 4,
      name: "Singodi",
      vendor: "Maa Ka Doodh",
      price: "₹50/pack",
      rating: 4.6,
      image: "/images/foods/singodi.jpg",
      location: "Chakrata Road",
      tags: ["Dessert", "Seasonal"],
    },
  ];

  const foodCategories = [
    { name: "Breakfast", icon: "☕", count: 58, popular: "Puri Sabzi" },
    { name: "Snacks", icon: "🍢", count: 112, popular: "Momos" },
    { name: "Sweets", icon: "🍬", count: 76, popular: "Bal Mithai" },
    { name: "Beverages", icon: "🧃", count: 43, popular: "Buransh Juice" },
    { name: "Meals", icon: "🍛", count: 89, popular: "Thali" },
    { name: "Street Specials", icon: "🌟", count: 64, popular: "Aloo Gutke" },
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      location: "Dehradun",
      text: "Found the best kachori in town through this platform!",
      rating: 5,
      image: "/images/testimonials/user1.jpg",
    },
    {
      name: "Priya Singh",
      location: "Haridwar",
      text: "The food map helped me explore hidden gems near Har Ki Pauri",
      rating: 4,
      image: "/images/testimonials/user2.jpg",
    },
    {
      name: "Ankit Joshi",
      location: "Rishikesh",
      text: "Accurate prices and locations saved me from tourist traps",
      rating: 5,
      image: "/images/testimonials/user3.jpg",
    },
  ];

  const stats = [
    {
      value: "500+",
      label: "Street Vendors",
      icon: <FiUsers className="text-3xl" />,
    },
    {
      value: "4.8★",
      label: "Average Rating",
      icon: <FiStar className="text-3xl" />,
    },
    {
      value: "50+",
      label: "Local Dishes",
      icon: <FiAward className="text-3xl" />,
    },
    {
      value: "10K+",
      label: "Monthly Visitors",
      icon: <FiTrendingUp className="text-3xl" />,
    },
  ];

  return (
    <main className="">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero/hero_video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl bg-transparent backdrop-blur-none p-8 rounded-xl shadow-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200 mb-4 leading-tight">
              Taste of <span className="text-orange-600">Uttarakhand</span> One
              Bite at a Time
            </h1>
            <p className="text-xl text-gray-500 mb-8">
              Discover authentic street flavors, hidden gems, and local
              favorites with our community-driven food map
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/explore"
                className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-full text-center transition-colors flex items-center justify-center"
              >
                Explore Local Foods
                <FiMapPin className="ml-2" />
              </Link>
              <Link
                href="/submit-vendor"
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-medium py-3 px-8 rounded-full text-center transition-colors"
              >
                Add Your Stall
              </Link>
            </div>
          </div>
        </div>

        {/* Scrolling Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white mt-2 rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-orange-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-white mb-2">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-orange-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cities - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Where Flavors Come Alive
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore street food havens across Uttarakhand's most vibrant
              cities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCities.map((city) => (
              <Link
                key={city.slug}
                href={`/explore/${city.slug}`}
                className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-80 relative">
                  <Image
                    src={city.image}
                    alt={`Street food in ${city.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{city.name}</h3>
                    <p className="text-orange-200 mb-2">{city.specialty}</p>
                    <div className="flex items-center text-sm">
                      <FiMapPin className="mr-1" />
                      {city.foodCount}+ food spots
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Foods - Expanded */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Must-Try Street Foods
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Current favorites according to our community of food explorers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingFoods.map((food) => (
              <div
                key={food.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="relative h-60">
                  <Image
                    src={food.image}
                    alt={food.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-medium shadow-sm">
                    {food.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {food.name}
                    </h3>
                    <div className="flex items-center bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm font-medium">
                      <FiStar className="mr-1" />
                      {food.rating}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3">
                    {food.vendor} •{" "}
                    <span className="text-orange-600">{food.location}</span>
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {food.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/vendors/${food.id}`}
                    className="text-orange-600 hover:text-orange-700 font-medium flex items-center"
                  >
                    View details
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/explore"
              className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-full transition-colors"
            >
              Explore All Foods
              <FiMapPin className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Food Categories - Expanded */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse By Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find exactly what you're craving with our specialized categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {foodCategories.map((category) => (
              <Link
                key={category.name}
                href={`/explore?category=${category.name.toLowerCase()}`}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center hover:-translate-y-2"
              >
                <span className="text-4xl mb-3 inline-block">
                  {category.icon}
                </span>
                <h3 className="font-bold text-gray-900 mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  {category.count} vendors
                </p>
                <p className="text-xs text-orange-600 font-medium">
                  Popular: {category.popular}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Foodies Are Saying
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of happy explorers discovering Uttarakhand's street
              food scene
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`${
                        i < testimonial.rating
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Specials */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Seasonal Delights
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Limited-time street foods you won't want to miss this season
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Summer Specials</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-white text-orange-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    1
                  </span>
                  <div>
                    <h4 className="font-bold">Buransh Juice</h4>
                    <p className="text-orange-100">
                      Refreshing rhododendron flower drink
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-white text-orange-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    2
                  </span>
                  <div>
                    <h4 className="font-bold">Kulfi Falooda</h4>
                    <p className="text-orange-100">
                      Creamy traditional ice cream dessert
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-white text-orange-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    3
                  </span>
                  <div>
                    <h4 className="font-bold">Aam Panna</h4>
                    <p className="text-orange-100">
                      Raw mango cooler with spices
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero/juice.jpg"
                alt="Seasonal street foods"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 " />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore Uttarakhand's Street Food?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our community of food lovers and never miss out on the best
            local flavors
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/explore"
              className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-full transition-colors"
            >
              Start Exploring Now
            </Link>
            <Link
              href="/submit-vendor"
              className="bg-transparent hover:bg-white/10 text-white font-medium py-3 px-8 rounded-full border border-white transition-colors"
            >
              Add Your Food Stall
            </Link>
          </div>

        
        </div>
      </section>
    </main>
  );
}
