import React from 'react';
import Business from '../Business/Business';
import businesses from './businesses';
import './BusinessList.css'

class BusinessList extends React.Component { 
    render() {
        return (
            <div className="business-list">
                {businesses.map((business) => {
                    return <Business business={business} />
                }) }
            </div>
        )
    }
}

export default BusinessList; 

