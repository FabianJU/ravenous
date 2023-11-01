import React from 'react';
import './Business.css';

const Business = ({ business }) => {
        return (
            <div className="business">
                <div className="image-container">
                    <img id="restaraunt-img" src={business.imageSrc} alt=''/>
                </div>
                <h2>{business.name}</h2>
                <div className="business-info">
                    <div className="business-address">
                        <p className="street">{business.address}</p>
                        <p className="city">{business.city}</p>
                        <p className="state-zip">{`${business.state} ${business.zipCode}`}</p>
                    </div>
                <div className="business-reviews">
                    <h3 className="category">{business.category}</h3>
                    <h3 className="rating">{`${business.rating} stars`}</h3>
                    <p className="review-count">{`${business.reviewCount} reviews`}</p>
                </div>
                </div>
            </div>
        );
    }

export default Business;