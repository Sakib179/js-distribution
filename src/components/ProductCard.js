'use client';

import { useState } from 'react';

export default function ProductCard({ product, onAddToCart, onAddToWishlist }) {
  const [isHovering, setIsHovering] = useState(false);
  const [quantity, setQuantity] = useState(product.quantity);

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  const handleAddToWishlist = () => {
    onAddToWishlist(product);
  };

  return (
    <div 
      className="relative flex bg-black rounded-md p-4 mb-2 hover:bg-zinc-900 transition-all duration-200"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="mr-4 flex items-center justify-center bg-zinc-800 p-2 rounded-md w-16 h-16">
        {/* Placeholder for actual image */}
        <div className="w-12 h-12 bg-gray-700 rounded-md flex items-center justify-center text-xs text-white">
          {product.brand}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-white text-sm mb-1">{product.name}</h3>
        <div className="flex space-x-2 mb-1">
          {/* Item tags */}
          <span className="text-xs bg-indigo-900 text-indigo-300 px-2 py-0.5 rounded-full">FP Marketplace Warranty</span>
          <span className="text-xs bg-red-900 text-red-300 px-2 py-0.5 rounded-full flex items-center">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span> Hot
          </span>
          <span className="text-xs bg-blue-900 text-blue-300 px-2 py-0.5 rounded-full flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Verified
          </span>
        </div>
      </div>
      
      <div className={`flex items-center ${isHovering ? 'absolute left-4' : ''}`}>
        {/* Quantity and Price Display */}
        <div className="text-zinc-500 text-xs mr-6">
          QUANTITY
          <div className="text-white font-semibold">{quantity}</div>
        </div>
        <div className="text-zinc-500 text-xs mr-2">
          PRICE
          <div className="text-white font-semibold">${product.price}</div>
        </div>
      </div>
      
      {/* Hover Action Buttons */}
      {isHovering && (
        <div className="absolute right-4 flex space-x-2">
          <button 
            className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700"
            onClick={handleAddToWishlist}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button 
            className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700"
            onClick={handleAddToCart}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
          <button className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}