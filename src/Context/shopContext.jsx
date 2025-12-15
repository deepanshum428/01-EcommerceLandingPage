import { createContext, useEffect, useState } from "react";
import { getProducts } from "../data/product";
import { getCart, saveCart } from "../utils/cartStorage";

export const ShopContext = createContext(null);

export const ShopProvider = ({ children }) => {
  const [products] = useState(getProducts());
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      return exists ? prev : [...prev, product];
    });
  };
  const removeWishList = (product) => {
    setWishlist((prev) => {
      const updated = prev.filter((p) => p.id !== product.id);
      return updated;
    });
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      const updated = exists
        ? prev.map((p) =>
            p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
          )
        : [...prev, { ...product, quantity: 1 }];

      //   saveCart(updated);
      return updated;
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const updated = prev.filter((p) => p.id !== id);
      //   saveCart(updated);
      return updated;
    });
  };

  const decrementQuantity = (id) => {
    setCart((prev) => {
      const updated = prev
        .map((p) => (p.id === id ? { ...p, quantity: p.quantity - 1 } : p))
        .filter((p) => p.quantity > 0);
      // saveCart(updated);
      return updated;
    });
  };

  const incrementQuantity = (id) => {
    setCart((prev) => {
      const updated = prev.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
      );
      //   saveCart(updated);
      return updated;
    });
  };

  //   const clearCart = () => {
  //     localStorage.removeItem(CART_KEY);
  //     setCart([]);
  //   };
  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        wishlist,
        addToWishlist,
        removeWishList,
        // clearCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
