"use client"; // Add this line to ensure client-side rendering

import { motion } from 'framer-motion';

export default function MenuSection() {
  return (
    <section id="menu" className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-center text-orange-500 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Our Menu
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Menu Item 1 */}
          <motion.div
            className="bg-orange-500 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, delay: 0.1 }} 
            viewport={{ once: false }} // Allow animation every time the element enters the viewport
          >
            <h3 className="text-2xl font-bold text-black mb-4">Spicy Chicken Wings</h3>
            <p className="text-gray-300 mb-4">A fiery, spicy blend of flavors that will leave you craving more.</p>
            <span className="text-lg font-semibold text-orange-600">$12.99</span>
          </motion.div>

          {/* Menu Item 2 */}
          <motion.div
            className="bg-orange-500 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <h3 className="text-2xl font-bold text-black mb-4">Veggie Tacos</h3>
            <p className="text-gray-300 mb-4">Crispy tacos filled with fresh vegetables and zesty sauce.</p>
            <span className="text-lg font-semibold text-orange-600">$8.99</span>
          </motion.div>

          {/* Menu Item 3 */}
          <motion.div
            className="bg-orange-500 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            viewport={{ once: false }}
          >
            <h3 className="text-2xl font-bold text-black mb-4">Grilled Salmon</h3>
            <p className="text-gray-300 mb-4">Perfectly grilled salmon with a smoky finish, served with veggies.</p>
            <span className="text-lg font-semibold text-orange-600">$18.99</span>
          </motion.div>

          {/* Menu Item 4 */}
          <motion.div
            className="bg-orange-500 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, delay: 0.7 }} 
            viewport={{ once: false }}
          >
            <h3 className="text-2xl font-bold text-black mb-4">Beef Burrito</h3>
            <p className="text-gray-300 mb-4">A delicious beef burrito packed with flavors and a touch of spice.</p>
            <span className="text-lg font-semibold text-orange-600">$14.99</span>
          </motion.div>

          {/* Menu Item 5 */}
          <motion.div
            className="bg-orange-500 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, delay: 0.9 }} 
            viewport={{ once: false }}
          >
            <h3 className="text-2xl font-bold text-black mb-4">Spicy Noodles</h3>
            <p className="text-gray-300 mb-4">Hot and spicy noodles with a combination of vegetables and protein.</p>
            <span className="text-lg font-semibold text-orange-600">$10.99</span>
          </motion.div>

          {/* Menu Item 6 */}
          <motion.div
            className="bg-orange-500 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, delay: 1.1 }} 
            viewport={{ once: false }}
          >
            <h3 className="text-2xl font-bold text-black mb-4">Fried Rice</h3>
            <p className="text-gray-300 mb-4">Fried rice with a blend of savory sauces and your choice of protein.</p>
            <span className="text-lg font-semibold text-orange-600">$9.99</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
