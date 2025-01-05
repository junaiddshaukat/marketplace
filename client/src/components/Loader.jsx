"use client"

import React from 'react';

const Loader = ({ size = 'medium' }) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  return (
    <div className={`${sizeClasses[size]} relative`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full border-2 border-[#FFB5C7] rounded-full opacity-20"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full border-t-2 border-[#FFB5C7] rounded-full animate-spin"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3/4 h-3/4 border-2 border-[#FFB5C7] rounded-full opacity-30 animate-ping"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="w-1/2 h-1/2 text-[#FFB5C7] animate-pulse"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loader;

