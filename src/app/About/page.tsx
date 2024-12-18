'use client';

import Image from 'next/image';
import { FaShippingFast, FaUtensils, FaHandHoldingHeart } from 'react-icons/fa'; // Importing icons
import { motion } from 'framer-motion'; // Importing framer-motion for scroll animations

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-semibold text-orange-600 mb-4">Welcome to Spicy Flavours</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            At Spicy Flavours, we bring a blend of bold spices and aromatic flavors that create an unforgettable dining experience. Explore our world of taste.
          </p>
        </motion.div>

        {/* Image and Text Section */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Large Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/about1.webp"
              alt="Spicy Flavours Dish"
              width={800}
              height={500}
              className="w-full h-[500px] object-cover rounded-xl shadow-xl"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="flex flex-col justify-center px-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-semibold text-white mb-6">A Culinary Journey</h3>
            <p className="text-lg text-gray-300 mb-6">
              Experience the fusion of tradition and innovation with our diverse menu. From the spice-laden street foods of India to refined modern dishes, every bite is a celebration of culture and flavor.
            </p>
          </motion.div>
        </div>

        {/* Second Image Section */}
        <div className="grid md:grid-cols-2 gap-12 mt-20">
          {/* Large Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/restaurent.webp"
              alt="Spicy Flavours Experience"
              width={800}
              height={500}
              className="w-full h-[500px] object-cover rounded-xl shadow-xl transform hover:scale-105 transition duration-300"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="flex flex-col justify-center px-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-semibold text-white mb-6">Our Philosophy</h3>
            <p className="text-lg text-gray-300 mb-6">
              Our philosophy is simple: bring the highest quality ingredients to your table with a sprinkle of passion. Whether you’re looking for a casual meal or a celebratory feast, we offer a dining experience that leaves you craving more.
            </p>
          </motion.div>
        </div>

        {/* Our Services Section */}
        <div className="text-center mt-20">
          <motion.h2
            className="text-4xl font-semibold text-orange-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Services
          </motion.h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-12">
            {/* Service 1: Fast Delivery */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.2 }}
              className="text-center"
            >
              <FaShippingFast className="text-6xl text-orange-600 mb-4" />
              <h3 className="text-xl text-white font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-300">Get your food delivered hot and fresh, straight to your door within minutes.</p>
            </motion.div>

            {/* Service 2: Quality Dining */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.2 }}
              className="text-center"
            >
              <FaUtensils className="text-6xl text-orange-600 mb-4" />
              <h3 className="text-xl text-white font-semibold mb-2">Quality Dining</h3>
              <p className="text-gray-300">Enjoy a fine dining experience with premium ingredients and unique flavors.</p>
            </motion.div>

            {/* Service 3: Heartfelt Service */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.2 }}
              className="text-center"
            >
              <FaHandHoldingHeart className="text-6xl text-orange-600 mb-4" />
              <h3 className="text-xl text-white font-semibold mb-2">Heartfelt Service</h3>
              <p className="text-gray-300">We go the extra mile to ensure you feel at home, with personal and attentive service.</p>
            </motion.div>
          </div>
        </div>

        {/* Final Image Section with CTA */}
        <motion.div
          className="relative mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/about3.jpg"
            alt="Spicy Flavours Interior"
            width={1400}
            height={800}
            className="w-full h-[600px] object-cover rounded-xl shadow-xl"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <motion.h3
              className="text-4xl text-white font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Join Us for an Unforgettable Experience
            </motion.h3>
            <motion.button
              type="button"
              className="bg-orange-600 hover:bg-orange-500 px-8 py-4 rounded-md text-white text-xl font-medium transition duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Explore Our Menu
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
