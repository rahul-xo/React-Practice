import React from "react";

// Play Icon component
const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 ml-2"
  >
    <path
      fillRule="evenodd"
      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.717-2.779-.217-2.779-1.643V5.653z"
      clipRule="evenodd"
    />
  </svg>
);

const Card = ({ currEle }) => {
  // Agar currEle nahi hai to kuch na dikhayein
  if (!currEle) return null;

  const { Poster, Title, imdbRating } = currEle;

  return (
    // Main container - group class hover effects ke liye zaroori hai
    <div className="relative rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 group-hover:ring-4 group-hover:ring-cyan-500/70">
      {/* Image */}
      <img
        className="w-full h-full object-cover aspect-[4/5] transition-transform duration-300 group-hover:scale-110"
        src={Poster}
        alt={Title || "Movie Poster"}
      />

      {/* Gradient Overlay & Content Container */}
      <div
        className="absolute inset-x-0 bottom-0 p-4 
                   bg-gradient-to-t from-black/90 to-transparent 
                   transform transition-transform duration-300 
                   translate-y-16 group-hover:translate-y-0"
      >
        {/* Movie Title */}
        <h3 className="text-lg font-bold text-white mb-2 transform transition-transform duration-300 -translate-y-12 group-hover:translate-y-0">
          {Title || "Movie Title"}
        </h3>

        {/* Yeh rating hai jo delay ke saath fade in hogi */}
        <div className="flex items-center text-sm text-gray-300 mb-3 opacity-0 transform transition-all duration-300 delay-100 group-hover:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 mr-1 text-yellow-400"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z"
              clipRule="evenodd"
            />
          </svg>
          {imdbRating || "N/A"}
        </div>

        <button
          className="flex items-center px-5 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-full shadow-md
                     opacity-0 transform transition-all duration-300 delay-200
                     group-hover:opacity-100 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40"
        >
          Watch Now
          <PlayIcon />
        </button>
      </div>
    </div>
  );
};

export default Card;