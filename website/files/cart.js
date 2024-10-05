import React from 'react';
import { useCart } from './CartContext';


const Cart = () => {
    const { cartItems, removeFromCart, clearCart } = useCart();

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul className="cart-items">
                        {cartItems.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h2>{item.name}</h2>
                                    <p>Price: ₹{item.price}</p>
                                    <p>Quantity: {item.quantity}</p> {/* Display quantity */}
                                    <button onClick={() => removeFromCart(item.id)} className="remove-button">Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                        <h2>Total: ₹{calculateTotalPrice()}</h2>
                        <button onClick={clearCart} className="clear-cart-button">Clear Cart</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
