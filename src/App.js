import './css/App.css';
import React, {useEffect, useState } from 'react'
import axios from 'axios'
import Coin from './components/coin';


function App() {

  const [search, setSearch] = useState('')
  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h`)
      .then(res =>{
        setCoins(res.data)
      })
      .catch(error => 
        console.log(error)
      )
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins =coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
    )
 
  return (
    <div className="coin-app">
      <div className="coin-search">
      <h1 className="coin-text"> Coin Tracker </h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input" onChange={handleChange} />
        </form>
      </div>
      {filteredCoins.map(coin=> {
        return (
          <Coin 
          key={coin.id} 
          name={coin.name} 
          image={coin.image} 
          symbol={coin.symbol}
          volume={coin.total_volume}
          price={coin.current_price} 
          priceChange={coin.price_change_percentage_24h}
          marketcap={coin.market_cap}
          />
        )
      })}
    </div>
  );
}

export default App;