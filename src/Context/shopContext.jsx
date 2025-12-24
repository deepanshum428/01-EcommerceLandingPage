import { createContext, useEffect, useState } from "react";
// import { getProducts } from "../data/product";
import {
  getCart,
  getWishlist,
  saveCart,
  saveWishlist,
} from "../utils/cartStorage";

export const ShopContext = createContext(null);

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [searchBar, setSearchBar] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoaading] = useState(true);

  const getData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        throw new Error("Server error");
      } else {
        const data = await res.json();
        setProducts(data);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoaading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const value = getCart();
    if (value && Array.isArray(value) && value.length > 0) setCart(value);
  }, []);

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  useEffect(() => {
    const value = getWishlist();
    if (value && Array.isArray(value) && value.length > 0) setWishlist(value);
  }, []);

  useEffect(() => {
    saveWishlist(wishlist);
  }, [wishlist]);

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      return exists ? prev : [...prev, product];
    });
  };
  const removeFromWishlist = (id) => {
    setWishlist((prev) => {
      const updated = prev.filter((l) => l.id !== id);
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
        removeFromWishlist,
        searchBar,
        setSearchBar,
        error,
        loading,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
