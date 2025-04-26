"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiStar,
  FiClock,
  FiAward,
  FiUsers,
  FiTrendingUp,
  FiChevronRight,
} from "react-icons/fi";
import { FaFacebook, FaInstagram, FaYelp } from "react-icons/fa";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

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
      name: "Mama Ji Katlambe Chole Wale",
      vendor: "Mama Ji",
      price: "₹70",
      rating: 4.9,
      image: "/hero/mamaji.jpg",
      location: "Moti Bazar Near Paltan Bazar",
      tags: ["Spicy", "Local"],
    },
    {
      id: 2,
      name: "The Buffet Eating Corner.",
      vendor: "Sweet, Burger, and more",
      price: "₹100 - 200",
      rating: 4.8,
      image: "/hero/buffet.jpg",
      location: "Rajpur Road",
      tags: ["Sweet", "Uttarakhand Special"],
    },
    {
      id: 3,
      name: "Angethi momo",
      vendor: "Fast Food",
      price: "₹50 - 100",
      rating: 4.7,
      image: "/hero/momo.jpg",
      location: "Nehru Colony",
      tags: ["Unique", "Traditional"],
    },
    {
      id: 4,
      name: "THE SHAWARMA KING",
      vendor: "Shawarma restaurant",
      price: "₹200 - 400",
      rating: 4.6,
      image: "/hero/SHAWARMA.jpg",
      location: "Dharampur",
      tags: ["Veg", "Chicken"],
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
    <main className="overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        {/* Background Video */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
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
        </motion.div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-2xl bg-transparent backdrop-blur-none p-8 rounded-xl shadow-xl"
            initial="hidden"
            animate="show"
            variants={container}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200 mb-4 leading-tight"
              variants={item}
            >
              Taste of <span className="text-orange-600">Uttarakhand</span> One
              Bite at a Time
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-500 mb-8"
              variants={item}
            >
              Discover authentic street flavors, hidden gems, and local
              favorites with our community-driven food map
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={item}
            >
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
            </motion.div>
          </motion.div>
        </div>

        {/* Scrolling Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white mt-2 rounded-full animate-scroll"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <motion.section 
        className="bg-orange-600 text-white py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={staggerItem}
              >
                <div className="flex justify-center text-white mb-2">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-orange-100">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Cities - Enhanced */}
      <motion.section 
        className="py-20 bg-gradient-to-b from-orange-50 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={slideUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Where Flavors Come Alive
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore street food havens across Uttarakhand's most vibrant
              cities
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {featuredCities.map((city, index) => (
              <motion.div 
                key={city.slug}
                variants={item}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={`/explore/${city.slug}`}
                  className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 block"
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Trending Foods - Expanded */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={slideUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Must-Try Street Foods
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Current favorites according to our community of food explorers
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {trendingFoods.map((food) => (
              <motion.div
                key={food.id}
                variants={item}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
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
                  <div className="p-6 flex-grow">
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
                      className="text-orange-600 hover:text-orange-700 font-medium flex items-center mt-auto"
                    >
                      View details
                      <FiChevronRight className="ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Link
              href="/explore"
              className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-full transition-colors"
            >
              Explore All Foods
              <FiMapPin className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Food Categories - Expanded */}
      <motion.section 
        className="py-20 bg-orange-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={slideUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse By Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find exactly what you're craving with our specialized categories
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {foodCategories.map((category, index) => (
              <motion.div
                key={category.name}
                variants={item}
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={`/explore?category=${category.name.toLowerCase()}`}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center block h-full"
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={slideUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Foodies Are Saying
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of happy explorers discovering Uttarakhand's street
              food scene
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Seasonal Specials */}
      <motion.section 
        className="py-20 bg-orange-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={slideUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Seasonal Delights
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Limited-time street foods you won't want to miss this season
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={item}>
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
            </motion.div>

            <motion.div 
              className="relative h-80 rounded-2xl overflow-hidden shadow-2xl"
              variants={item}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/hero/drinks.jpg"
                alt="Seasonal street foods"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        className="py-20 bg-gray-900 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={slideUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Ready to Explore Uttarakhand's Street Food?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            variants={slideUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Join our community of food lovers and never miss out on the best
            local flavors
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={item}>
              <Link
                href="/explore"
                className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-full transition-colors inline-block"
              >
                Start Exploring Now
              </Link>
            </motion.div>
            <motion.div variants={item}>
              <Link
                href="/submit-vendor"
                className="bg-transparent hover:bg-white/10 text-white font-medium py-3 px-8 rounded-full border border-white transition-colors inline-block"
              >
                Add Your Food Stall
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}