"use client";
import Hero from "./Hero/page";
import MenuSection from "./Herodown/page";
import VIPServiceSection from "./Herodown2/page";
import TopItemsSection from "./Topitems/page"; // Import TopItemsSection
import SpecialItems from "./SpecialItems/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <MenuSection />
      <VIPServiceSection />
      
      {/* Pass addToCart to TopItemsSection */}
      <TopItemsSection/>
      
      {/* Pass cart and proceedToCheckout as props to CartPage */}
      <SpecialItems/>
    </div>
  );
}
