// Home.tsx
"use client"
import { useState } from "react";
import Hero from "./Hero/page";
import MenuSection from "./Herodown/page";
import VIPServiceSection from "./Herodown2/page";
import CartPage from "./Cartpage/page"; // Import the CartPage component
import TopItemsSection from "./Topitems/page"; // Import TopItemsSection
import SpecialItems from "./SpecialItems/page";

export type CartItem = {
  name: string;
  description: string;
  price: string;
  image: string;
};

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCheckout, setIsCheckout] = useState(false); // Track if we're in the checkout phase

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
    sessionStorage.setItem("cart", JSON.stringify([...cart, item]));
  };

  const proceedToCheckout = () => {
    setIsCheckout(true); // Trigger the checkout page
  };

  return (
    <div>
      <Hero />
      <MenuSection />
      <VIPServiceSection />
      
      {/* Pass addToCart to TopItemsSection */}
      <TopItemsSection onAddToCart={addToCart} />
      
      {/* Pass cart and proceedToCheckout as props to CartPage */}
      <CartPage cart={cart} proceedToCheckout={proceedToCheckout} />
      <SpecialItems/>
    </div>
  );
}
