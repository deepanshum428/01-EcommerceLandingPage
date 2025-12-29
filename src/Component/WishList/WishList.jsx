import { useContext } from "react";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { ShopContext } from "../../Context/shopContext";

const WishList = () => {
  const { wishlist, cart, addToCart, removeFromWishlist } =
    useContext(ShopContext);

  // console.log(wishlist);

  return (
    <>
      {!wishlist.length && (
        <div className="text-center mt-2.5 font-bold"> No wishlist </div>
      )}
      {/* <>{Array.isArray(wishlist) ? wishlist[0].title : "no"} </> */}
      {wishlist?.map((list, index) => {
        return (
          <div
            key={list.id}
            className="border rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="relative">
              <img
                src={list.image}
                alt={list.name}
                className="w-full h-40 object-contain"
              />

              <button
                onClick={() => removeFromWishlist(list.id)}
                className="absolute top-2 right-2 text-red-500"
              >
                <Heart fill="red" />
              </button>
            </div>

            <h3 className="font-semibold mt-3">{list.title}</h3>
            <p className="text-green-600 font-bold">₹{list.price}</p>

            <div className="flex gap-2 mt-4">
              {cart.find((item) => item.id === list.id) ? (
                <button className="flex-1 bg-orange-500 text-white py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer">
                  <ShoppingCart size={18} /> Item Already added in cart
                </button>
              ) : (
                <button
                  onClick={() => addToCart(list)}
                  className="flex-1 bg-orange-500 text-white py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingCart size={18} /> Add to Cart
                </button>
              )}

              <button
                onClick={() => removeFromWishlist(list.id)}
                className="bg-red-100 text-red-600 p-2 rounded-lg cursor-pointer"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default WishList;
