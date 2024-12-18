// CartPage.tsx
"use client";

// Define CartItem type directly in CartPage.tsx
type CartItem = {
  name: string;
  description: string;
  price: string;
  image: string;
};

type CartPageProps = {
  cart: CartItem[];
  proceedToCheckout: () => void;
};

export default function CartPage({ cart, proceedToCheckout }: CartPageProps) {
  const clearCart = () => {
    sessionStorage.removeItem("cart");
    window.location.reload(); // Reload to reset the cart
  };

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-orange-500 mb-12">Your Cart</h2>

        {cart.length > 0 ? (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="bg-orange-500 p-6 rounded-lg shadow-lg mb-4">
                  <h3 className="text-2xl font-bold text-black mb-4">{item.name}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <span className="text-lg font-semibold text-orange-600">{item.price}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center mt-8">
             <a href="/Checkoutpage"><button
                className="mr-4 py-3 px-6 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-500"
              >
                Proceed to Checkout
              </button></a>
              <button
                onClick={clearCart}
                className="py-3 px-6 bg-gray-600 text-white rounded-lg font-bold hover:bg-gray-500"
              >
                Clear Cart
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-300">Your cart is empty. Add some items!</p>
        )}
      </div>
    </section>
  );
}
