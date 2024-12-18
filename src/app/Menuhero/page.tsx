"use client";

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const HeroSectionmenu = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null); // Specify the type for better TypeScript support

  useEffect(() => {
    const currentRef = ref.current; // Store the ref value in a variable

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.isIntersecting); // Set inView to true when the component is in view
      },
      {
        threshold: 0.2, // Trigger animation when 20% of the element is visible
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the stored ref value
      }
    };
  }, []); // No dependencies needed here since the ref and observer are internal to the effect

  return (
    <div className="bg-black font-[sans-serif] p-6">
      <div className="grid md:grid-cols-2 items-center gap-10 max-w-5xl max-md:max-w-md mx-auto">
        {/* Image Section */}
        <motion.div
          ref={ref}
          className="md:h-[400px]"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/hero.webp"
            alt="Delicious restaurant dish"
            width={500}
            height={200}
            className="w-full h-full rounded-md object-cover"
          />
        </motion.div>

        {/* Text and Button Section */}
        <motion.div
          className="max-md:text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h3
            className="text-white font-semibold md:text-3xl text-2xl md:leading-10"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -30 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Savor Every Bite, Celebrate Every Moment
          </motion.h3>
          <motion.p
            className="text-gray-300 mt-4 text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Discover a menu crafted with love and passion, combining the freshest ingredients with bold flavors. From sizzling appetizers to indulgent desserts, every dish is designed to make your dining experience memorable. Join us for an unforgettable culinary journey.
          </motion.p>
          <motion.button
            type="button"
            className="px-5 py-2.5 mt-8 bg-orange-600 hover:bg-orange-500 text-white tracking-wider rounded text-sm outline-none"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: inView ? 1 : 0.8, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Explore Our Menu
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSectionmenu;
