import React, { useEffect, useState, useContext } from 'react'
import coinGecko from '../apis/coinGecko'
import { WatchlistContext } from '../context/watchListcontext'
import Coin from '../components/Coin'

const CoinList = () => {
    const [ coins, setCoins] = useState([])
    const { watchList, deleteCoin } = useContext(WatchlistContext)
    const [isLoading, setIsLoading] = useState(false)
    console.log(watchList)
    useEffect(() =>{
        const fetchData = async () => {
                setIsLoading(true)
            const response = await coinGecko.get("/coins/markets", {
                params: {
                    vs_currency: "usd",
                    ids: watchList.join(","),
                }
            })
            setCoins(response.data)
            setIsLoading(false)
        }

        fetchData()
    }, [watchList])

    const renderCoins = () => {
        if(isLoading) {
            return <div>Loading...</div>
        }

        return(
            <ul className="coinlist list-group mt-2">
                {coins.map(coin => {
                   return <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin} />
                })}
            </ul>
        )
    }

    return (
        <div>
            {renderCoins()}
        </div>
    )
}

export default CoinList