import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Animated food icon sequence */}
      <div className="relative w-32 h-32 mb-8">
        {/* Rotating plate */}
        <div className="absolute inset-0 rounded-full border-8 border-amber-200 animate-spin-slow">
          {/* Food icons that appear sequentially */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-600 animate-bounce">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-amber-700 animate-bounce animation-delay-300">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M18.555 15.354a3 3 0 01-4.109-4.403L15 7.586V5a1 1 0 10-2 0v2.586l-2.464-2.465a3 3 0 01-4.244 4.243l8.263 8.263z" />
              <path d="M12.586 5H10V3a1 1 0 00-1-1H7.414l-2.829 2.828A3 3 0 109.879 8.121L12.586 5z" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-amber-800 animate-bounce animation-delay-600">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0V6h-1a1 1 0 010-2h1V3a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 text-amber-500 animate-bounce animation-delay-900">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Text with food-themed loading message */}
      <h2 className="text-2xl font-bold text-amber-800 mb-2">
        Discovering Local Delicacies
      </h2>
      <p className="text-amber-600 mb-8">
        Loading the best food experiences...
      </p>

      {/* Animated dots */}
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-amber-400 animate-bounce"></div>
        <div className="w-3 h-3 rounded-full bg-amber-500 animate-bounce animation-delay-150"></div>
        <div className="w-3 h-3 rounded-full bg-amber-600 animate-bounce animation-delay-300"></div>
      </div>
    </div>
  );
};

export default Loading;
