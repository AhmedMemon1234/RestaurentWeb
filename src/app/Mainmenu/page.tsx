'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Importing Image from next/image

// Interface for MenuItem type
interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
}

interface OrderForm {
  name: string;
  address: string;
  phone: string;
}

const MenuPage = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderForm, setOrderForm] = useState<OrderForm>({
    name: '',
    address: '',
    phone: ''
  });
  const [orderPlaced, setOrderPlaced] = useState<boolean>(false);
  const [orderMessage, setOrderMessage] = useState<string>('');
  const [showFullScreenMessage, setShowFullScreenMessage] = useState<boolean>(false); // New state for full-screen message

 const [menuItems] = useState<MenuItem[]>([
      { id: 1, name: 'Spicy Chicken Roll', description: 'A fiery, spicy blend of tender chicken, perfectly seasoned with exotic spices, wrapped in a soft roll. Served with a tangy dipping sauce to elevate your taste buds.', price: '$12.99', image: '/food1.jpg' },
      { id: 2, name: 'Veggie Tacos', description: 'Crispy taco shells filled with a delightful mix of fresh vegetables, tangy salsa, and a drizzle of creamy zesty sauce. A perfect treat for veggie lovers.', price: '$8.99', image: '/food2.jpg' },
      { id: 3, name: 'Grilled Salmon', description: 'Freshly grilled salmon fillet infused with a smoky aroma, served with a side of herbed butter and lemon wedges for a burst of freshness and delicious spicy.', price: '$18.99', image: '/food3.jpg' },
      { id: 4, name: 'Beef Burrito', description: 'A hearty burrito packed with tender beef, seasoned rice, fresh veggies, and a blend of flavorful spices, wrapped in a soft tortilla.', price: '$14.99', image: '/food4.jpg' },
      { id: 5, name: 'Spicy Fried Rice', description: 'A spicy and savory fried rice dish loaded with fresh vegetables, tender protein options, and an aromatic blend of Asian spices.', price: '$10.99', image: '/food5.jpg' },
      { id: 6, name: 'Patty Burger', description: 'A classic patty burger layered with a juicy beef patty, fresh lettuce, tomatoes, onions, and your choice of sauces. Served in a soft bun.', price: '$9.99', image: '/food6.jpg' },
      { id: 7, name: 'BBQ Ribs', description: 'Juicy, tender ribs marinated in a smoky barbecue sauce and grilled to perfection. Served with a side of creamy coleslaw.', price: '$16.99', image: '/food7.jpg' },
      { id: 8, name: 'Vegetable Stir-fry', description: 'A colorful medley of fresh vegetables stir-fried in a savory garlic-soy sauce, perfect for a light and healthy meal.', price: '$11.99', image: '/food8.jpg' },
      { id: 9, name: 'Chicken Caesar', description: 'Crispy romaine lettuce topped with juicy grilled chicken, crunchy croutons, and parmesan cheese. Tossed in a creamy Caesar dressing.', price: '$13.99', image: '/food9.jpg' },
      { id: 10, name: 'Shrimp Tacos', description: 'Succulent shrimp seasoned and grilled to perfection, wrapped in soft tacos with fresh slaw, avocado, and a tangy lime sauce.', price: '$14.49', image: '/food10.jpg' },
      { id: 11, name: 'Mushroom Risotto', description: 'A creamy Italian risotto cooked with earthy mushrooms, garlic, white wine, and a generous sprinkle of parmesan cheese.', price: '$15.99', image: '/food11.jpg' },
      { id: 12, name: 'Noodles', description: 'Savory noodles cooked with juicy beef, fresh vegetables, and a rich soy-based sauce for a satisfying, flavorful experience.', price: '$11.49', image: '/food12.jpg' },
      { id: 13, name: 'Spicy Pizza', description: 'A pizza with a spicy twist! Topped with grilled chicken, fiery peppers, melted mozzarella, and a hint of parmesan.', price: '$17.99', image: '/food13.jpg' },
      { id: 14, name: 'Grilled Veggie Wrap', description: 'A healthy wrap loaded with grilled zucchini, bell peppers, eggplant, and a light yogurt dressing for a refreshing bite.', price: '$9.49', image: '/food14.jpg' },
      { id: 15, name: 'Steak Frites', description: 'A tender, juicy steak served alongside golden, crispy fries and a rich, savory sauce for an indulgent dining experience.', price: '$21.99', image: '/food15.jpg' },
      { id: 16, name: 'Fish and Chips', description: 'Crispy golden-battered fish served with a side of thick-cut fries, tartar sauce, and a wedge of lemon.', price: '$13.49', image: '/food16.jpg' },
      { id: 17, name: 'Veggie Chinese Roll', description: 'A crispy roll filled with fresh mozzarella, juicy tomatoes, and fragrant basil, delivering a perfect balance of flavor and texture.', price: '$14.99', image: '/food17.jpg' },
      { id: 18, name: 'Fish Burger', description: 'A crispy, breaded fish fillet served in a soft bun with lettuce, tartar sauce, and a side of dipping sauce for a delightful bite.', price: '$10.49', image: '/food18.jpg' },    
  ]);

  const addToCart = (item: MenuItem) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
        ? { ...cartItem, quantity: cartItem.quantity + 1 } 
        : cartItem
      ));
    } else {
      setCart([...cart, { id: item.id, name: item.name, price: item.price, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    // Check if all fields are filled before placing the order
    if (!orderForm.name || !orderForm.address || !orderForm.phone) {
      setOrderMessage('Please fill in all fields before placing your order!');
      return;
    }

    // Show the full-screen order placed message
    setShowFullScreenMessage(true);

    // Simulate order placement success
    setTimeout(() => {
      setOrderMessage('Your order has been placed successfully!');
      setShowFullScreenMessage(false); // Hide the full-screen message
      setOrderPlaced(false); // Reset after animation
    }, 3000); // Keep the message for 3 seconds
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrderForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-orange-500 mb-12">Our Menu</h2>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg relative overflow-hidden group hover:scale-105 transform transition-all duration-300"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
            >
              <Image 
                src={item.image} 
                alt={item.name} 
                width={500} 
                height={250} 
                className="w-full h-40 object-cover rounded-md mb-4 group-hover:opacity-80 transition-opacity duration-300" 
              />
              <h3 className="text-2xl font-bold text-orange-500 mb-2">{item.name}</h3>
              <p className="text-gray-300 mb-4">{item.description}</p>
              <span className="text-lg font-semibold text-orange-600">{item.price}</span>

              {/* Add to Cart Button */}
              <div className="absolute bottom-4 left-4 flex space-x-4 items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  className="bg-orange-500 text-white px-4 py-2 rounded-md"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Cart Section */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h3 className="text-2xl font-extrabold text-orange-500 mb-6">Your Cart</h3>
          <div className="bg-gray-800 p-6 rounded-lg">
            {cart.length === 0 ? (
              <p className="text-gray-300">Your cart is empty.</p>
            ) : (
              <div>
                {cart.map((cartItem) => (
                  <div key={cartItem.id} className="flex justify-between items-center mb-4">
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
          </div>
        </motion.div>

        {/* Order Form Section */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h3 className="text-2xl font-extrabold text-orange-500 mb-6">Checkout</h3>
          <div className="bg-gray-800 p-6 rounded-lg">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-white">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={orderForm.name} 
                  onChange={handleFormChange} 
                  className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md" 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-white">Address</label>
                <input 
                  type="text" 
                  id="address" 
                  name="address" 
                  value={orderForm.address} 
                  onChange={handleFormChange} 
                  className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md" 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-white">Phone</label>
                <input 
                  type="text" 
                  id="phone" 
                  name="phone" 
                  value={orderForm.phone} 
                  onChange={handleFormChange} 
                  className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md" 
                />
              </div>
            </form>

            {/* Place Order Button */}
            {cart.length > 0 && (
              <motion.button 
                type="button" 
                onClick={handleCheckout}
                className="w-full bg-orange-500 text-white py-2 rounded-md mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {orderPlaced ? 'Placing Order...' : 'Place Order'}
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Full-Screen Order Placed Message */}
        {showFullScreenMessage && (
          <motion.div 
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="bg-orange-500 text-white text-3xl font-extrabold p-8 rounded-md"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Your order has been placed successfully!
            </motion.div>
          </motion.div>
        )}
         
      </div>
    </section>
  );
};

export default MenuPage;
