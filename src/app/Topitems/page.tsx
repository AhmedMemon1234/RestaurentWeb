"use client"
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

const topItems: Item[] = [
  { id: 1, name: "Spicy Burger", price: "$12.99", description: "A fiery, spicy blend of flavors.", image: "/burger.jpg" },
  { id: 2, name: "Spicy Pizza", price: "$8.99", description: "Crispy Pizza filled with fresh veggies.", image: "/pizza.jpg" },
  { id: 3, name: "Alfredo Pasta", price: "$18.99", description: "Perfectly Alfredo Pasta with veggies.", image: "/pasta.jpg" },
  { id: 4, name: "Ice Cream", price: "$14.99", description: "A delicious Ice Cream packed with flavors.", image: "/icecream.jpg" },
];

type TopItemsSectionProps = {
  onAddToCart: (item: Item) => void;
};

export default function TopItemsSection({ onAddToCart }: TopItemsSectionProps) {
  return (
    <section id="top-items" className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-center text-orange-500 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Top Items
        </motion.h2>

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
              <Image src={item.image} alt={item.name} width={300} height={200} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-bold text-orange-500 mb-2">{item.name}</h3>
              <p className="text-gray-300 text-sm mb-4">{item.description}</p>
              <span className="text-lg font-semibold text-orange-400">{item.price}</span>
              <button
                onClick={() => onAddToCart(item)}
                className="mt-4 py-2 px-4 bg-orange-600 text-white rounded-lg hover:bg-orange-500 ml-10"
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
