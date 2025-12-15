export const CART_KEY = "my-cart";

export const getCart = () => {
    try {
        const cartData = localStorage.getItem(CART_KEY);
        return cartData ? JSON.parse(cartData) : [];
    } catch (error) {
        return [];
    }
}

export const saveCart = (cart) => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// export const addToCart = (item) => {
//     const cart = getCart();

//     const existingItem = cart.find((p) => p.id === item.id);

//     if(existingItem) {
//         existingItem.quantity += 1;
//     } else {
//         cart.push({...item, quantity: 1});
//     }

//     saveCart(cart);
// }

// export const removeFromCart = (id) => {
//     const cart = getCart().filter((item) => item.id != id );
//     saveCart(cart);
// }

// export const updateCartQuantity = (id, qty) => {
//     const cart = getCart().map((item) => (item.id === id) ? {...item, quantity: qty} : item );
//     saveCart(cart);
// }

// export const clearCart = () => {
//     localStorage.removeItem(CART_KEY);
// }

