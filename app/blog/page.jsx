// app/blog/page.jsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { FiCalendar, FiClock, FiX } from "react-icons/fi";

const BlogPage = () => {
  const [activePost, setActivePost] = useState(null);

  const posts = [
    {
      id: 1,
      title: "The Art of Perfect Kachori in Dehradun",
      excerpt: "Discover what makes Sharma Ji's 5am kachoris legendary",
      date: "May 15, 2023",
      readTime: "5 min",
      image: "/blog/kachori.jpg",
      content: `<p>At 3:30am when most of Dehradun sleeps, Sharma Ji's family is already kneading dough for their famous kachoris. The secret lies in the <strong>three-stage frying process</strong> that creates the perfect crispness.</p>
                <p class="mt-4">"We use urad dal from Punjab and spices from Kolkata," explains Sharma Ji, whose grandfather started this stall in 1962. The filling must rest for exactly 47 minutes before stuffing.</p>
                <img src="/blog/kachori-process.jpg" alt="Kachori making process" class="my-6 rounded-lg" />
                <p>The first batch hits the oil at 5:15am, timed so office workers get them piping hot. Regulars know to ask for the "kadak" (extra crisp) version with extra aloo sabzi.</p>`,
    },
    {
      id: 2,
      title: "Mussoorie's Hidden Tea Gardens",
      excerpt: "Where colonial tea traditions meet mountain views",
      date: "April 28, 2023",
      readTime: "7 min",
      image: "/blog/tea.jpg",
      content: `<p>Tucked behind Mussoorie's Mall Road, four generations of the Bisht family have maintained tiny tea terraces using methods brought by British planters in 1892.</p>
                <blockquote class="border-l-4 border-amber-500 pl-4 my-6 italic text-gray-700">"We still pluck leaves by hand before sunrise - machines bruise the flavor"</blockquote>
                <p>The <strong>autumn flush</strong> (October harvest) produces their most complex blends, with notes of wild honey and oak. Visitors can taste test different oxidation levels in their 1920s-era tasting room.</p>`,
    },
  ];

  const closeModal = () => setActivePost(null);

  return (
    <div className="bg-[#f9f8f5] min-h-screen">
      {/* Hero */}
      <div className="relative h-64 w-full bg-gray-900">
        <Image
          src="/blog/blog.jpg"
          alt="Food blog header"
          fill
          className="object-cover opacity-70"
        />
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-10 mb-2">
              Flavor Stories
            </h1>
            <p className="text-amber-100">
              Uttarakhand's food culture, one story at a time
            </p>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="grid gap-12">
          {posts.map((post) => (
            <article
              key={post.id}
              className="cursor-pointer group"
              onClick={() => setActivePost(post)}
            >
              <div className="relative h-64 rounded-xl overflow-hidden shadow-md mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="px-2">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <FiCalendar className="mr-1" />
                  <span className="mr-4">{post.date}</span>
                  <FiClock className="mr-1" />
                  <span>{post.readTime} read</span>
                </div>
                <h2 className="text-xl font-bold mb-2 group-hover:text-amber-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {activePost && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white max-w-2xl max-h-[90vh] w-full rounded-xl overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full z-10 hover:bg-gray-100 transition-colors"
            >
              <FiX className="text-gray-700" />
            </button>

            {/* Modal content */}
            <div className="overflow-y-auto h-full">
              {/* Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={activePost.image}
                  alt={activePost.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <FiCalendar className="mr-1" />
                  <span className="mr-4">{activePost.date}</span>
                  <FiClock className="mr-1" />
                  <span>{activePost.readTime} read</span>
                </div>
                <h2 className="text-2xl font-bold mb-4">{activePost.title}</h2>
                <div
                  className="prose prose-amber max-w-none"
                  dangerouslySetInnerHTML={{ __html: activePost.content }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
