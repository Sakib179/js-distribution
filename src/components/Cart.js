'use client';

import { useState } from 'react';

export default function Cart({ items = [], onUpdateQuantity }) {
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  
  const handleIncreaseQuantity = (itemId) => {
    onUpdateQuantity(itemId, 1);
  };
  
  const handleDecreaseQuantity = (itemId) => {
    onUpdateQuantity(itemId, -1);
  };
  
  return (
    <div className="bg-zinc-900 text-white rounded-md h-full">
      <div className="mt-32 p-4 border-b border-zinc-800">
        <h2 className="text-2xl font-bold">Cart</h2>
        <p className="text-sm text-zinc-400">Items Selected: <span className="font-bold">{totalItems}</span></p>
      </div>
      
      {items.length === 0 ? (
        <div className="text-center text-zinc-500 py-8">
          Your cart is empty
        </div>
      ) : (
        <div className="p-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-start mb-4 relative group">
              <div className="w-10 h-10 bg-zinc-800 rounded-md flex items-center justify-center text-xs mr-3">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-md" />
              </div>
              <div className="flex-1">
                <p className="text-zinc-400 text-sm">{item.name}</p>
              </div>
              <div className="flex items-center ml-auto">
                
                <div className="hidden group-hover:flex items-center">
                  <button 
                    className="text-zinc-400 hover:text-white"
                    onClick={() => handleDecreaseQuantity(item.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                    </svg>
                  </button>
                  </div>
                  <span className="text-white font-bold mx-2 text-xl">×{item.quantity}</span>
                  <div className="hidden group-hover:flex items-center">
                  <button 
                    className="text-zinc-400 hover:text-white ml-2"
                    onClick={() => handleIncreaseQuantity(item.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                    </svg>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}
      
      <div className="p-4 border-t border-zinc-800">
        <h3 className="text-lg rounded-lg font-bold mb-3">Recommended</h3>
      </div>
    </div>
  );
}