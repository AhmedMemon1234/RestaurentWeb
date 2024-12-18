'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ContactUsPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate a delay for submission (e.g., API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Hide success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-semibold text-orange-600 mb-4">Contact Us</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            We’d love to hear from you! Whether you have questions or feedback, don’t hesitate to reach out.
          </p>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Form Inputs */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-6"
          >
            <motion.input
              type="text"
              placeholder="Your Name"
              required
              className="px-6 py-4 bg-gray-800 text-white rounded-lg shadow-lg focus:outline-none transform hover:scale-105 transition duration-300"
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              required
              className="px-6 py-4 bg-gray-800 text-white rounded-lg shadow-lg focus:outline-none transform hover:scale-105 transition duration-300"
            />
            <motion.input
              type="tel"
              placeholder="Your Phone Number"
              required
              className="px-6 py-4 bg-gray-800 text-white rounded-lg shadow-lg focus:outline-none transform hover:scale-105 transition duration-300"
            />
            <motion.textarea
              placeholder="Your Message"
              required
              className="px-6 py-4 bg-gray-800 text-white rounded-lg shadow-lg focus:outline-none h-32 resize-none transform hover:scale-105 transition duration-300"
            />
            <motion.button
              type="submit"
              className={`px-8 py-4 rounded-lg text-xl font-medium transition duration-300 ${
                isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-500 text-white'
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </motion.button>
          </form>

          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/contact.jpg"
              alt="Contact Us"
              width={500}
              height={200}
              className="w-full h-[500px] object-cover rounded-xl shadow-xl transform hover:scale-105 transition duration-300"
            />
          </motion.div>
        </motion.div>

        {/* Success Message */}
        {isSubmitted && (
          <motion.div
            className="text-center mt-8 text-green-500 text-xl font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Submitted Successfully!
          </motion.div>
        )}

        {/* Address Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-semibold text-orange-600 mb-4">Our Location</h3>
          <p className="text-gray-300 text-lg">
            Visit us at Spicy Flavours, where flavor meets tradition. Our doors are always open for you!
          </p>

          {/* Google Maps Embed */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_LINK"
              width="600"
              height="400"
              className="w-full h-[300px] rounded-lg shadow-lg"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUsPage;
