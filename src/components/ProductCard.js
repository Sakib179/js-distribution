'use client';

import { useState } from 'react';
import { IoShieldSharp } from "react-icons/io5";
import { FaFire } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaCube } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";

export default function ProductCard({ product, onAddToCart, onAddToWishlist }) {
  const [isHovering, setIsHovering] = useState(false);
  const [quantity, setQuantity] = useState(product.quantity);
  const [price, setPrice] = useState(product.price);
  
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  const handleAddToWishlist = () => {
    onAddToWishlist(product);
  };

  return (
    <div>
      <div 
        className="relative flex bg-black rounded-md pt-2 hover:bg-zinc-900 transition-all duration-200"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="mr-4 flex items-center justify-center bg-zinc-800 p-2 rounded-md w-16 h-16">
        {/* Placeholder for actual image */}
        <img src={product.image} alt={product.name} className="w-12 h-12 rounded-md" />
      </div>
        <div className={`flex-1 ${isHovering ? 'mr-50' : ''}`}>
          <h3 className="text-white text-sm mb-1">{product.name}</h3>
          
        </div>
        
        <div className={`flex-col items-start ${isHovering ? 'absolute right-30' : 'ml-3'}`}>
          {/* Quantity and Price Display */}
          <div className="text-zinc-500 text-xs mb-2">
            QUANTITY
            <div className="text-white font-semibold">{quantity}</div>
          </div>
          <div className="text-zinc-500 text-xs">
            PRICE
            <div className="text-white font-semibold">${price}</div>
          </div>
        </div>
        
        {/* Hover Action Buttons */}
        {isHovering && (
          <div className="absolute right-4 flex flex-row">
            <div className='flex flex-col'>
              <button 
                className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700"
              > <FaRegBell /> </button>
              
              <button 
                className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700"
                onClick={handleAddToWishlist}
              >
                <FaRegHeart />
              </button>
            </div>
            
            <button 
              className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700"
              onClick={handleAddToCart}
            >
              <FaArrowRight />
            </button>

          </div>
        )}
        
      </div>

      <div className="flex mt-0">
          {/* Item tags */}
          <div className="flex items-center bg-white rounded-2xl ml-3">
            <IoShieldSharp className="text-indigo-500 text-xl ml-1" />
            <span className="text-xs font-semibold text-violet-600 px-1 py-0.5 rounded-2xl">1Y Manifacture Warranty</span>
          </div>
          <div className='flex items-center bg-white rounded-2xl ml-3'>
            <AiFillThunderbolt className='text-indigo-500 text-xl ml-1'/>
            <span className="text-xs font-semibold text-violet-600 px-2 py-0.5 rounded-2xl flex items-center">Fast</span>
          </div>
          
          <FaFire className='text-red-600 text-xl ml-4'/>

          <div className='flex items-center bg-white rounded-2xl ml-3'>
            <FaCube className='text-purple-600 text-xl transform -scale-x-100 ml-1'/>
            <span className="text-xs bg-white font-semibold text-violet-600 px-2 py-0.5 rounded-2xl flex items-center">Verified</span>
          </div>  
          
      </div>
    </div>
  );
  
}