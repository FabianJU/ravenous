import React from "react";
import './SearchBar.css';


const sortBy = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
    render() {
        return(
            <div className="search-bar">
                <div className="sorting-options">
                        <ul>
                            {
                                Object.entries(sortBy).map(item => {
                                    return <li key={item[1]}>{item[0]}</li>
                                })
                            }
                        </ul>
                        <div className="underline">
                        </div>
                </div>
                <div className="search-buttons">
                        <input type="search" className="search-business" placeholder="Search Businesses"/>
                        <input type="search" className="where-button" placeholder="Where?"/>
                </div>
                <button className="let-go-button" type="button">Let's Go</button>
            </div>
        )
    }
};

export default SearchBar;