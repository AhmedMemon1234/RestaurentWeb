"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SpecialItems() {
  const specialItems = [
    {
      name: "Karachi Biryani",
      description: "A delicious, juicy biryani with premium ingredients.",
      price: "$12.99",
      image: "/biryani.jpg",
    },
    {
      name: "Juicy Jelabis",
      description: "Classic lahorian jelabies with juicy taste.",
      price: "$14.99",
      image: "/jelabi.jpg",
    },
    {
      name: "Pani Puri",
      description: "Fresh pani puris with a lemon butter sauce.",
      price: "$18.99",
      image: "/panipuri.jpg",
    },
    {
      name: "Chole Bhature",
      description: "Crispy chole bhature, romaine lettuce, and Caesar dressing.",
      price: "$11.99",
      image: "/chole.jpg",
    },
    {
      name: "Veggie Samosas",
      description: "A healthy samosas topped with fresh vegetables.",
      price: "$10.99",
      image: "/samosa.jpg",
    },
    {
      name: "Butter Chicken",
      description: "A rich and indulgent butter chicken.",
      price: "$8.99",
      image: "/butter.jpg",
    },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-extrabold text-center text-orange-500 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Special Items
        </motion.h2>

        {/* Grid layout for responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* First Big Image */}
          <motion.div
            className="col-span-1 lg:col-span-2 bg-gray-800 p-6 rounded-lg shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={specialItems[0].image}
              alt={specialItems[0].name}
              width={600}
              height={400}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <div className="mt-4 opacity-0 hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-6">
              <h3 className="text-2xl font-bold text-orange-500">{specialItems[0].name}</h3>
              <p className="text-gray-300">{specialItems[0].description}</p>
              <span className="text-lg font-semibold text-orange-600">{specialItems[0].price}</span>
            </div>
          </motion.div>

          {/* Second and Third Image (Smaller Images) */}
          {specialItems.slice(1, 3).map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <div className="mt-4 opacity-0 hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-xl font-bold text-orange-500">{item.name}</h3>
                <p className="text-gray-300">{item.description}</p>
                <span className="text-lg font-semibold text-orange-600">{item.price}</span>
              </div>
            </motion.div>
          ))}

          {/* Fourth and Fifth Image (Smaller Images) */}
          {specialItems.slice(3, 5).map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <div className="mt-4 opacity-0 hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-xl font-bold text-orange-500">{item.name}</h3>
                <p className="text-gray-300">{item.description}</p>
                <span className="text-lg font-semibold text-orange-600">{item.price}</span>
              </div>
            </motion.div>
          ))}

          {/* Last Big Image */}
          <motion.div
            className="col-span-1 lg:col-span-2 bg-gray-800 p-6 rounded-lg shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={specialItems[5].image}
              alt={specialItems[5].name}
              width={600}
              height={400}
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <div className="mt-4 opacity-0 hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-6">
              <h3 className="text-2xl font-bold text-orange-500">{specialItems[5].name}</h3>
              <p className="text-gray-300">{specialItems[5].description}</p>
              <span className="text-lg font-semibold text-orange-600">{specialItems[5].price}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
