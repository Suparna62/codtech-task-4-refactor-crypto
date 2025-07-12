import React, { useState, useEffect } from 'react';
import CoinList from './components/CoinList';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCoins = async () => {
    try {
      const res = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1'
      );
      const data = await res.json();
      setCoins(data);
    } catch (err) {
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <div className="App">
      <Navbar />
      {loading ? <p>Loading...</p> : <CoinList coins={coins} />}
    </div>
  );
}

export default App;
