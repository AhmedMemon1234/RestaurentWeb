"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Define item type
type Item = {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
};

// Define cart item type
type CartItem = {
  id: number;
  name: string;
  price: string;
  quantity: number;
};

const topItems: Item[] = [
  { id: 1, name: "Spicy Burger", price: "$12.99", description: "A fiery, spicy blend of flavors.", image: "/burger.jpg" },
  { id: 2, name: "Spicy Pizza", price: "$8.99", description: "Crispy Pizza filled with fresh veggies.", image: "/pizza.jpg" },
  { id: 3, name: "Alfredo Pasta", price: "$18.99", description: "Perfectly Alfredo Pasta with veggies.", image: "/pasta.jpg" },
  { id: 4, name: "Ice Cream", price: "$14.99", description: "A delicious Ice Cream packed with flavors.", image: "/icecream.jpg" },
];

export default function MenuPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [checkout, setCheckout] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [orderMessage, setOrderMessage] = useState<string | null>(null); // For displaying order success/failure message

  const addToCart = (item: Item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([
        ...cart,
        { id: item.id, name: item.name, price: item.price, quantity: 1 },
      ]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      setOrderMessage("Please add items to the cart before proceeding to checkout.");
    } else {
      setCheckout(true);
      setOrderMessage(null); // Clear any previous messages
    }
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the order submission logic here
    setOrderMessage("Your order has been submitted successfully!");
    // Reset cart and form after submission
    setCart([]);
    setCheckout(false);
    setName("");
    setEmail("");
  };

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-center text-orange-500 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Top Items
        </motion.h2>

        {/* Displaying Top Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {topItems.map((item) => (
            <motion.div
              key={item.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-bold text-orange-500 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{item.description}</p>
              <span className="text-lg font-semibold text-orange-400">
                {item.price}
              </span>
              <button
                onClick={() => addToCart(item)}
                className="mt-4 py-2 px-4 bg-orange-600 text-white rounded-lg hover:bg-orange-500 ml-10"
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>

        {/* Cart Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="bg-gray-800 p-6 rounded-lg">
            {cart.length === 0 ? (
              <p className="text-gray-300">Your cart is empty.</p>
            ) : (
              <div>
                {cart.map((cartItem) => (
                  <div
                    key={cartItem.id}
                    className="flex justify-between items-center mb-4"
                  >
                    <div>
                      <h4 className="text-lg text-white">{cartItem.name}</h4>
                      <p className="text-gray-400">Quantity: {cartItem.quantity}</p>
                    </div>
                    <div className="flex space-x-2">
                      <span className="text-orange-600">{cartItem.price}</span>
                      <button
                        onClick={() => removeFromCart(cartItem.id)}
                        className="text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            <button
              onClick={handleCheckout}
              className="mt-4 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-500"
            >
              Proceed to Checkout
            </button>
          </div>
        </motion.div>

        {/* Checkout Form */}
        {checkout && (
          <motion.div
            className="mt-12 bg-gray-800 p-6 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Checkout</h3>
            <form onSubmit={handleSubmitOrder}>
              <div className="mb-4">
                <label className="block text-white mb-2">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-white mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-blue-500"
              >
                Submit Order
              </button>
            </form>
          </motion.div>
        )}

        {/* Order Success Message */}
        {orderMessage && (
          <motion.div
            className="mt-4 p-4 bg-green-600 text-white rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p>{orderMessage}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
