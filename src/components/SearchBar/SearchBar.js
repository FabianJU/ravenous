import React, {useState} from "react";
import './SearchBar.css';


const sortBy = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleTermChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const [location, setLocation] = useState('');
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    }

    const [sortByOption, setSortByOption] = useState('best_match');
    const handleSortByChange = (option) => {
        setSortByOption(option);
    }

    const handleSearch = async (event) => {
        event.preventDefault();
        const searchData = { searchTerm, location, sortByOption };
        props.yelpBusinesses(searchData.searchTerm, searchData.location, searchData.sortByOption)
    }

    return (
        <div className="search-bar">
                <div className="sorting-options">
                        <ul>
                            {
                                Object.entries(sortBy).map(item => {
                                    return <li 
                                    key={item[1]} 
                                    className={sortByOption === item[1] ? 'active' : ''}
                                    onClick={() => handleSortByChange(item[1])}
                                    >
                                     {item[0]}
                                    </li>
                                })
                            }
                        </ul>
                        <div className="underline">
                        </div>
                </div>
                <div className="search-buttons">
                        <input 
                        type="search" 
                        className="search-business" 
                        placeholder="Search Businesses"
                        value={searchTerm}
                        onChange={handleTermChange}/>
                        <input 
                        type="search" 
                        className="where-button" 
                        placeholder="Where?"
                        value={location}
                        onChange={handleLocationChange}/>
                </div>
                <button className="let-go-button" type="button" onClick={handleSearch}>Let's Go</button>
            </div>
    );
 }

export default SearchBar;