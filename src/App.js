import React, {useState} from "react";
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import { searchYelp } from "./utils/searchYelp";

const App = () => {
  
  const [businesses, setBusinesses] = useState([]);
 
  async function yelpBusinesses(term, location, sortBy) {
    const response = await searchYelp(term, location, sortBy);
    setBusinesses(response);
  }

  return (
    <div className="App">
      <header className="App-header">
      <div className="title">
        <h1>ravenous</h1>
      </div>
      <SearchBar
         yelpBusinesses={yelpBusinesses}
       />
      <div className="business">
        <BusinessList 
        businesses={businesses} 
        />
      </div>
      </header>
    </div>
  );
};

export default App;
