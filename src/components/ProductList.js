'use client';

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { TbHexagonLetterQ } from "react-icons/tb";

export default function ProductList({ products, onAddToCart, onAddToWishlist }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState(null);
  const [sortBy, setSortBy] = useState('Most Quantity');
  const [sortedProducts, setSortedProducts] = useState([...products]);

  // Sort products when sortBy changes or products change
  useEffect(() => {
    let sorted = [...products];
    
    if (sortBy === 'Most Quantity') {
      sorted.sort((a, b) => b.quantity - a.quantity);
    } else if (sortBy === 'Lowest Price') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Highest Price') {
      sorted.sort((a, b) => b.price - a.price);
    }
    
    setSortedProducts(sorted);
  }, [sortBy, products]);

  // Filter products based on search query
  const filteredProducts = sortedProducts.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-zinc-950 text-gray-400 rounded-md h-full">
      <div className="flex ptop-4 overflow-x-auto border-b border-zinc-800">
        <button className="px-10 py-4 rounded-md bg-zinc-800 text-gray-400 hover:bg-indigo-800 hover:text-white whitespace-nowrap">
          Trending
        </button>
        <button className="px-10 py-4 rounded-md bg-indigo-600  hover:bg-indigo-800 whitespace-nowrap">
          Top Deals
        </button>
        <button className="px-10 py-4 rounded-md bg-zinc-800 text-gray-400 hover:bg-indigo-800 hover:text-white whitespace-nowrap">
          New Listings
        </button>
        <button className="px-10 py-4 rounded-md bg-zinc-800 text-gray-400 hover:bg-indigo-800 hover:text-white  whitespace-nowrap">
          Price Lowered
        </button>
        <button className="px-10 py-4 rounded-md bg-zinc-800 text-gray-400 hover:bg-indigo-800 hover:text-white whitespace-nowrap">
          Watchlist
        </button>
        <button className="px-10 py-4 rounded-md bg-zinc-800 text-gray-400 hover:bg-indigo-800 hover:text-white whitespace-nowrap">
          Sold
        </button>
      </div>

      <div className="flex p-4 items-center border-b border-zinc-800">
        <div className="relative mr-2">
          <select 
            className="bg-zinc-800 text-gray-400 p-2 rounded-md pr-8 appearance-none"
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="Most Quantity">Most Quantity</option>
            <option value="Lowest Price">Lowest Price</option>
            <option value="Highest Price">Highest Price</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search 923 items"
            className="bg-zinc-800 text-white p-2 rounded-md w-full pl-10 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <button className="bg-zinc-800 text-gray-400 p-2 rounded-md ml-2 flex items-center">
        <TbHexagonLetterQ className='mr-2'/>
          Filter(43)
        </button>
      </div>

      <div className="p-4 space-y-1">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart}
            onAddToWishlist={onAddToWishlist}
          />
        ))}
      </div>
    </div>
  );
}