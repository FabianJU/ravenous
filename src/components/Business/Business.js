import React from 'react';
import './Business.css';

const pizzaShop = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'ITALIAN',
    rating: 4.5,
    reviewCount: 90
}

class Business extends React.Component {
    render() {
        return (
            <div className="business">
                <div className="image-container">
                    <img id="restaraunt-img" src={pizzaShop.imageSrc} alt=''/>
                </div>
                <h2>{pizzaShop.name}</h2>
                <div className="business-info">
                    <div className="business-address">
                        <p className="street">{pizzaShop.address}</p>
                        <p className="city">{pizzaShop.city}</p>
                        <p className="state-zip">{`${pizzaShop.state} ${pizzaShop.zipCode}`}</p>
                    </div>
                <div className="business-reviews">
                    <h3 className="category">{pizzaShop.category}</h3>
                    <h3 className="rating">{`${pizzaShop.rating} stars`}</h3>
                    <p className="review-count">{`${pizzaShop.reviewCount} reviews`}</p>
                </div>
                </div>
            </div>
        );
    }
}

export default Business;