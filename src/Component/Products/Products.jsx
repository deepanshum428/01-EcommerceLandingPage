import { Heart, Minus, Plus, Trash } from "lucide-react";
import { ShopContext } from "../../Context/shopContext";
import { useContext } from "react";

export const Products = (props) => {
  const {
    products,
    cart,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    addToWishlist,
    // clearCart,
  } = useContext(ShopContext);

  return (
    <>
      <section className="w-full px-4 md:px-10 py-6">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Special Products For You</h2>
          <p className="text-gray-500 text-sm">Special Products For You</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow-sm relative hover:shadow-md transition"
            >
              <button className="absolute top-5 right-5 text-red-500 text-xl">
                <Heart
                  className="cursor-pointer"
                  onClick={() => addToWishlist(product)}
                />
              </button>

              <img
                src={product.image}
                className="w-full h-40 object-contain"
                alt="product image"
              />

              <h3 className="mt-3 text-lg font-semibold">{product.name}</h3>

              <p className="text-green-600 font-semibold">{product.price}</p>

              {cart.find((p) => p.id === product.id) ? (
                <div className="bg-orange-500 text-white w-full py-2 mt-3 rounded-md font-semibold">
                  <div className="flex justify-around">
                    <Trash
                      className="bg-red-500 px-0.5 py-0.5 cursor-pointer"
                      onClick={() =>
                        removeFromCart(cart.find((p) => p.id === product.id).id)
                      }
                    />
                    <span>
                      {cart.find((p) => p.id === product.id).quantity}
                    </span>
                    <div className="flex gap-2">
                      <Minus
                        className="bg-red-500 px-0.5 py-0.5 cursor-pointer"
                        onClick={() => {
                          decrementQuantity(product.id, -1);
                        }}
                      />
                      <Plus
                        className="bg-green-500 px-0.5 py-0.5 cursor-pointer"
                        onClick={() => {
                          incrementQuantity(product.id);
                        }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => addToCart(product)}
                  className="bg-orange-500 text-white w-full py-2 mt-3 rounded-md font-semibold cursor-pointer"
                >
                  ADD TO CART
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
