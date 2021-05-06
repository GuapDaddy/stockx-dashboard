import './css/App.css';
import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import CoinDetailPage from './pages/CoinDetailPage'
import CoinSummaryPage from './pages/CoinSummaryPage'
import Header from './components/Header';
import { WatchlistContextProvider } from './context/watchListcontext';


function App() {

 
  return (
    <div className="coin-app">
      <WatchlistContextProvider>
      <BrowserRouter>
      <Header/>
      <Route exact path='/' component={Home} />
      <Route exact path='/summary' component={CoinSummaryPage} />
      <Route exact path='/detail' component={CoinDetailPage} />
      </BrowserRouter>
      </WatchlistContextProvider>
    </div>
  );
}

export default App;