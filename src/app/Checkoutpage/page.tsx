"use client";
import { useState } from "react";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({ name: "", address: "", contact: "" });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    sessionStorage.removeItem("cart"); // Clear the cart
  };

  return (
    // Set the background of the entire page to black and center the content
    <div className="bg-black h-[550px] flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md sm:max-w-lg mt-14 md:max-w-xl lg:max-w-2xl w-full mx-auto">
        {!orderPlaced ? (
          <>
            <h3 className="text-3xl font-bold text-orange-500 mb-6 text-center">Checkout Form</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-300" htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded bg-gray-700 text-white"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300" htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded bg-gray-700 text-white"
                  placeholder="Enter your address"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300" htmlFor="contact">Contact Number</label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  required
                  value={formData.contact}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded bg-gray-700 text-white"
                  placeholder="Enter your contact number"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 mt-4 bg-orange-600 rounded text-white font-bold hover:bg-orange-500"
              >
                Place Order
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-3xl font-bold text-orange-500 mb-4">🎉 Order Placed!</h3>
            <p className="text-gray-300">Thank you for your order. Your food will arrive shortly!</p>
          </div>
        )}
      </div>
    </div>
  );
}
