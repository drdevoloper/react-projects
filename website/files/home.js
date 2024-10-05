import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
    const renderArrowPrev = (clickHandler, hasPrev, label) => {
        if (!hasPrev) return null;
        return (
            <button type="button" onClick={clickHandler} title={label} style={{ ...arrowStyle, left: 10 }}>
                &lt;
            </button>
        );
    };

    const renderArrowNext = (clickHandler, hasNext, label) => {
        if (!hasNext) return null;
        return (
            <button type="button" onClick={clickHandler} title={label} style={{ ...arrowStyle, right: 10 }}>
                &gt;
            </button>
        );
    };

    const arrowStyle = {
        position: 'absolute',
        zIndex: 2,
        top: '50%',
        transform: 'translateY(-50%)',
        width: '2vw',
        height: '2vw',
        cursor: 'pointer',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: 'none',
    };

    const slideStyle = {
        width: '100%', // Make the image take full width
        height: 'auto', // Maintain aspect ratio
        borderRadius: '15px', // Rounded corners
        objectFit: 'cover', // Make sure the image covers the area
    };

    return (
        <div className="home">
            <div className="carousel-container">
                <Carousel 
                    renderArrowPrev={renderArrowPrev} 
                    renderArrowNext={renderArrowNext}
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop
                    autoPlay
                    interval={3000}
                    useKeyboardArrows
                >
                    <div>
                        <img src="badmin.jpg" alt="Badminton" className='slide'/>
                        <p className="legend">Badminton Bat</p>
                    </div>
                    <div>
                        <img src="football1.jpg" alt="Football" className='slide'/>
                        <p className="legend">Foot Ball</p>
                    </div>
                    <div>
                        <img src="criset.jpg" alt="Cricket Set" className='slide'/>
                        <p className="legend">Cricket Set</p>
                    </div>
                    <div>
                        <img src="snakeboard.jpg" alt="snke" className='slide'/>
                        <p className="legend">Snake and Ludo Board</p>
                    </div>
                    <div>
                        <img src="unocard.jpg" alt="uno" className='slide'/>
                        <p className="legend">Uno Card</p>
                    </div>
                    <div>
                        <img src="chess board.jpg" alt="chess " className='slide'/>
                        <p className="legend">Chess Board</p>
                    </div> 
                </Carousel>
            </div>
            
            <div className="cards-container">
                <div className="card">
                    <h3>Indoor Sports</h3>
                    <p>Explore a variety of indoor sports equipment.</p>
                    <Link to="/indoor">
                        <button className="nav-button">Explore Indoor Sports</button>
                    </Link>
                </div>
                <div className="card">
                    <h3>Outdoor Sports</h3>
                    <p>Find the best outdoor sports gear and accessories.</p>
                    <Link to="/outdoor">
                        <button className="nav-button">Explore Outdoor Sports</button>
                    </Link>
                </div>
                <div className="card">
                    <h3>Shopping Cart</h3>
                    <p>Review your selected items in the shopping cart.</p>
                    <Link to="/cart">
                        <button className="nav-button">Go to Cart</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;


