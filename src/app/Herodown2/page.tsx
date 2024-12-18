"use client";
import { motion } from 'framer-motion';
import { FaConciergeBell, FaTruck, FaCheckCircle } from 'react-icons/fa'; // Importing icons

export default function VIPServiceSection() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-orange-500 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our VIP Services
        </motion.h2>

        <div className="space-y-12">
          {/* Service 1: Concierge */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }} // Trigger on entering the viewport
            exit={{ opacity: 0, y: 50 }} // Reset on leaving the viewport
            transition={{ duration: 1 }}
            viewport={{ once: false }} // Allow animation every time the element enters the viewport
          >
            <FaConciergeBell className="text-6xl text-orange-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Exclusive Concierge</h3>
            <p className="text-gray-300">Personalized services to cater to all your needs, ensuring a flawless experience.</p>
          </motion.div>
          <motion.div
            className="border-t-2 border-gray-600 my-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }} // Reset opacity on leaving
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          />

          {/* Service 2: Delivery */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }} // Trigger on entering the viewport
            exit={{ opacity: 0, y: 50 }} // Reset on leaving the viewport
            transition={{ duration: 1 }}
            viewport={{ once: false }} // Allow animation every time the element enters the viewport
          >
            <FaTruck className="text-6xl text-orange-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Premium Delivery</h3>
            <p className="text-gray-300">Fast and reliable delivery with tracking for your peace of mind.</p>
          </motion.div>
          <motion.div
            className="border-t-2 border-gray-600 my-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          />

          {/* Service 3: Delivered */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }} // Trigger on entering the viewport
            exit={{ opacity: 0, y: 50 }} // Reset on leaving the viewport
            transition={{ duration: 1 }}
            viewport={{ once: false }} // Allow animation every time the element enters the viewport
          >
            <FaCheckCircle className="text-6xl text-orange-500 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Delivered to You</h3>
            <p className="text-gray-300">Your order arrives on time, as promised, with the highest quality.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
