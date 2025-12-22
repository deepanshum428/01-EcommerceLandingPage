export const CART_KEY = "my-cart";
export const WISHLIST_KEY = "my-wishlist"

export const getCart = () => {
    try {
        const cartData = localStorage.getItem(CART_KEY);
        return cartData ? JSON.parse(cartData) : null;
    } catch (error) {
        return null;
    }
}

export const saveCart = (cart) => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export const getWishlist = () => {
    try {
        const wishlistData = localStorage.getItem(WISHLIST_KEY);
        return wishlistData ? JSON.parse(wishlistData) : null;
    } catch (error) {
        return null;
    }
}

export const saveWishlist = (wishlist) => {
    localStorage.setItem(WISHLIST_KEY,JSON.stringify(wishlist));
}

// export const clearCart = () => {
//     localStorage.removeItem(CART_KEY);
// }

