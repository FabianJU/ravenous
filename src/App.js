import React from "react";
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

const business = {
  imageSrc:
    "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Bordertown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};

const businesses = [business, business, business, business, business, business];

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      <div className="title">
        <h1>ravenous</h1>
      </div>
      <SearchBar />
      <div className="business">
        <BusinessList businesses={businesses} />
      </div>
      </header>
    </div>
  );
};

export default App;
