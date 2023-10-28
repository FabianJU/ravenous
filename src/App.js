import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="title">
        <h1>ravenous</h1>
      </div>
      <SearchBar />
      <div className="business">
        <BusinessList />
      </div>
      </header>
    </div>
  );
}

export default App;
