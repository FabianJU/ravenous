import React from 'react';
import Business from '../Business/Business';
/*import businesses from './businesses';*/
import './BusinessList.css'


const BusinessList = (props) => {
        return (
                <div className="business-list">
                    {props.businesses.map((business) => {
                        return <Business business={business} key={business.name} />
                    }) }
                </div>
            );
    }


export default BusinessList; 

