import React, { useContext } from "react";
import { ShopContext } from "../../Context/shopContext";
import { NavLink } from "react-router-dom";

const Cart = (props) => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } =
    useContext(ShopContext);

  // console.log(cart);

  const calculateTotal = () => {};

  return (
    <div className=" px-4 py-10 ">
      <div className="max-w-7xl mx-auto">
        <header className="text-center ">
          <p className="text-black text-lg font-bold">
            {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
          </p>
        </header>

        {cart.length === 0 ? (
          <div className="text-center mt-2">
            <NavLink
              to="/"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded text-sm font-medium transition"
            >
              Continue Shopping
            </NavLink>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 mt-8">
            <div className="flex-1 flex flex-col gap-6">
              {cart.map((product, index) => (
                <div
                  key={`${index}-${product.id}`}
                  className="flex flex-col md:flex-row items-center gap-6 border p-4 rounded-lg bg-white shadow-sm"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-28 h-28 object-contain rounded"
                  />
                  <div className="flex-1 w-full">
                    <h2 className="text-lg font-semibold">{product.title}</h2>

                    <p className="text-sm text-gray-600 mt-1">
                      {product.description}
                    </p>

                    <p className="font-bold mt-2">
                      ₹{product.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => decrementQuantity(product.id)}
                        className="w-8 h-8 border rounded hover:bg-gray-100 cursor-pointer"
                      >
                        -
                      </button>

                      <span className="font-medium">{product.quantity}</span>

                      <button
                        onClick={() => incrementQuantity(product.id)}
                        className="w-8 h-8 border rounded hover:bg-gray-100 cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    <p className="mt-2 text-sm font-semibold">
                      Total: ₹{(product.price * product.quantity).toFixed(2)}
                    </p>

                    <div className="flex items-center gap-4 mt-4">
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="text-sm text-red-500 hover:underline cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="w-full lg:w-96 bg-white p-6 rounded-lg shadow-md h-fit">
              <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

              <div className="flex justify-between py-2 border-b">
                <span>
                  Subtotal ({cart.reduce((acc, item) => acc + item.quantity, 0)}{" "}
                  items)
                </span>
                <span>₹0</span>
              </div>

              <div className="flex justify-between py-2 border-b">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>

              <div className="flex justify-between py-2 font-semibold">
                <span>Total</span>
                <span>₹0</span>
              </div>

              <NavLink to="/payment">
                <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded font-medium transition">
                  Proceed To Checkout
                </button>
              </NavLink>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
