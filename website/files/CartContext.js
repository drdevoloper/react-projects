import React, { createContext, useContext, useState } from 'react';

// Create CartContext
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Function to add items to the cart
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const itemIndex = prevItems.findIndex(item => item.id === product.id);
            if (itemIndex > -1) {
                // If the item is already in the cart, increase the quantity
                const newItems = [...prevItems];
                newItems[itemIndex].quantity += 1;
                return newItems;
            } else {
                // If the item is not in the cart, add it with a quantity of 1
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    // Function to remove an item from the cart
    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
    };

    // Function to clear the cart
    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};


export const useCart = () => useContext(CartContext);
