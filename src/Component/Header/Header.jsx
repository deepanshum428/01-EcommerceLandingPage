import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { ShopContext } from "../../Context/shopContext";

const Header = (props) => {
  const { cart, wishlist } = useContext(ShopContext);
  return (
    <>
      <header className="w-full px-6 py-3 shadow-sm border-b bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 ">
            <img src={logo} alt="" className="w-25 " />
          </div>

          <div className="flex items-center w-full max-w-xl mx-6 rounded-md overflow-hidden border border-gray-300">
            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              className="w-full px-4 py-2 outline-none"
            />

            <button className="bg-orange-400 px-4 py-2 flex items-center justify-center cursor-pointer">
              <Search />
            </button>
          </div>
          <div className="flex gap-2">
            <button>
              <User />
            </button>
            <div className="flex items-center gap-6">
              <div className=" relative flex items-center gap-2 text-[black] hover:scale-105 transition-transform duration-200">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-1 -right-2 bg-[black] text-white text-[10px] px-1.5  rounded-full font-semibold">
                  {cart.length}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="relative  flex items-center gap-2 text-[black] hover:scale-105 transition-transform duration-200">
                <Heart className="w-6 h-6" />
                <span className="absolute -top-1 -right-2 bg-[black] text-white text-[10px] px-1.5  rounded-full font-semibold">
                  {wishlist.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
