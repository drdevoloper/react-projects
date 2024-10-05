import React, { useContext, useState } from 'react';
import { useCart } from './CartContext'; 

const Outdoor = () => {
  const { addToCart } = useCart(); 
  const [show, setShow] = useState(null);


  const products = [
    { id: 1, name: 'Football Club Ball Size 5 FIFA Basic F500 White Yellow', image: 'football.jpg', price: 3199, originalPrice: 3999, discount: '-20%' },
    { id: 2, name: 'Vector X Estadia Football', image: 'football1.jpg', price: 3009, originalPrice: 3499, discount: '-15%' },
    { id: 3, name: 'BA SPORTS Wood Popular Cricket Bat (Mrf Cricket Bat)', image: 'cribat.jpg', price: 1159, originalPrice: 1999, discount: '-42%' },
    { id: 4, name: 'CW SCOREMASTER Cricket Kit Kashmir Willow Bat Cricket Leather Ball Wheel Kit Bag with Complete Accessories', image: 'criset.jpg', price: 11999, originalPrice: 14999, discount: '-20%' },
    { id: 5, name: 'FITNACE Badminton Racket Set of 6 Shuttles, Aluminium Badminton Racquet', image: 'badmin.jpg', price: 1199, originalPrice: 1225, discount: '-2%' },
    { id: 6, name: 'Yonex MAVIS FIELD II Nylon Shuttlecock Badminton Racket Yellow 3 Pieces NWT', image: 'shuttle.jpg', price: 499, originalPrice: 999, discount: '-50%' },
    { id: 7, name: 'Nivia Heavy Tennis Ball Cricket Pack - 12 Red Balls', image: 'criball.jpg', price: 240, originalPrice: 600, discount: '-60%' },
    { id: 8, name: 'BADMINTON RACKET ACE 7028', image: 'bad.png', price: 1875, originalPrice: 2500, discount: '-25%' },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    setShow(product.id);
    setTimeout(() => setShow(null), 2000);
  };

  return (
    <div className='bg'>
      <div className='dis'>
        {products.map((product) => (
          <div className='card' key={product.id}>
            <img src={product.image} alt={product.name} className='photo' />
            <p>{product.name}</p>
            <p>{product.discount}</p>
            <h2>₹{product.price}</h2>
            <h3>MRP: ₹{product.originalPrice}</h3>
            {show === product.id && <h3>ADDED TO CART</h3>}
            <button onClick={() => handleAddToCart(product)} className='button'>CART</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Outdoor;
