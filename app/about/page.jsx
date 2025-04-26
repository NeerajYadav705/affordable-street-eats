// app/about/page.jsx
import { FaRoute, FaUtensils, FaHeart, FaHandsHelping } from "react-icons/fa";
import { IoRestaurant } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gray-900 overflow-hidden">
        <Image
          src="/about/about.jpg"
          alt="Lonely traveler exploring street food"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Born From a Hungry Student's Struggle
          </h1>
          <p className="text-xl text-orange-200">
            How one confusing day in Haldwani sparked a mission to help
            travelers eat like locals
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center mb-12">
            <div className="h-1 w-20 bg-orange-500 mr-4"></div>
            <h2 className="text-2xl font-bold text-orange-600">
              Our Origin Story
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-80 md:h-auto">
                <Image
                  src="/about/Haldwani.jpg"
                  alt="Haldwani streets"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
                  <p className="text-sm">Haldwani - Where It All Began</p>
                </div>
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-4">
                  The Day That Changed Everything
                </h3>
                <p className="text-gray-600 mb-4">
                  It was my exam day in Haldwani - a city I'd never
                  visited before. Alone, hungry, and completely lost, I wandered
                  the unfamiliar streets searching for decent food. Should I
                  risk that questionable stall? Is this price fair? What even IS
                  this local dish?
                </p>
                <p className="text-gray-600 mb-6">
                  After settling for overpriced, mediocre food from a tourist
                  trap, I realized:{" "}
                  <span className="font-semibold text-orange-600">
                    No traveler should have to choose between their wallet and
                    their stomach.
                  </span>{" "}
                  That's when Affordable Street Eats was born.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                  <p className="italic text-gray-700">
                    "I created this platform for every student, backpacker, and
                    solo traveler who's ever stood hungry on unfamiliar streets,
                    wondering where the locals really eat."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Food-First Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe authentic travel experiences begin at the street food
              stall
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-orange-50 rounded-2xl p-8 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRoute className="text-orange-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">For The Journey</h3>
              <p className="text-gray-600">
                Created by travelers, for travelers. We've been in your shoes
                and built what we needed.
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUtensils className="text-orange-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real Local Flavors</h3>
              <p className="text-gray-600">
                No tourist traps. Only authentic street eats loved by the
                community.
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-orange-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">With Heart</h3>
              <p className="text-gray-600">
                Every vendor featured supports local families and traditions.
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandsHelping className="text-orange-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community-Powered</h3>
              <p className="text-gray-600">
                Updated by food lovers like you. Found a gem? Share it!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Hungry Minds Behind This
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not food critics - we're fellow travelers who care about
              your experience
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 relative h-64 md:h-auto">
                <Image
                  src="/about/neeraj.jpg"
                  alt="Founder's photo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:w-2/3 p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-2">
                  Your Fellow Food Explorer
                </h3>
                <p className="text-orange-600 font-medium mb-4">
                  Founder & Chief Eating Officer
                </p>
                <p className="text-gray-600 mb-4">
                  After that fateful day in Haldwani, I made it my mission to
                  document every worthwhile street food spot across Uttarakhand.
                  What started as personal notes became this platform.
                </p>
                <p className="text-gray-600">
                  When I'm not coding this site, you'll find me hunting hidden
                  food gems or convincing vendors their mom's recipe deserves
                  global fame.
                </p>
           
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <IoRestaurant className="text-5xl mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Food Revolution
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
            Whether you're a hungry traveler or a proud local, help us build the
            ultimate street food guide
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/submit-vendor"
              className="bg-white text-orange-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-full transition-colors"
            >
              Suggest a Food Spot
            </Link>
            <Link
              href="/explore"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 font-medium py-3 px-8 rounded-full transition-colors"
            >
              Start Exploring
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
