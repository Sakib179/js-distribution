// app/page.js
'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import Notification from '../components/Notification';
import { productData } from '../utils/productData';

export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState(null);

  const handleAddToCart = (product) => {
    // Check if product is already in cart
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex >= 0) {
      // Item exists, update quantity
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: updatedCart[existingItemIndex].quantity + 1
      };
      setCartItems(updatedCart);
    } else {
      // Item doesn't exist, add new
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    // Show notification
    setNotification(`Added "${product.name.substring(0, 20)}..." to cart`); // Modified notification message
  };

  const handleAddToWishlist = (product) => {
    // In a real app, we would update wishlist state here
    setNotification(`Added "${product.name.substring(0, 20)}..." to wishlist`); // Modified notification message
  };

  const handleUpdateQuantity = (itemId, change) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === itemId) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
      }
      return item;
    }).filter(Boolean); // Remove null items (quantity zero)

    setCartItems(updatedCart);
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const handleCloseNotification = () => {
    setNotification(null);
  };

  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      <div className="container mx-auto p-4 grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <ProductList
            products={productData}
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
          />
        </div>
        <div className="col-span-1">
          <Cart
            items={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
          />
        </div>
      </div>

      {notification && (
        <Notification
          message={notification}
          onClose={handleCloseNotification}
        />
      )}
    </div>
  );
}