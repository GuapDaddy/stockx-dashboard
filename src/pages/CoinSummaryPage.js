import React from 'react'
import CoinAdd from "../components/AddCoin.js"
import CoinList from "../components/CoinList.js"

const CoinSummaryPage = () => {
    return (
        <div>
            <CoinAdd/>
            <CoinList/>
        </div>
    )
}

export default CoinSummaryPage

