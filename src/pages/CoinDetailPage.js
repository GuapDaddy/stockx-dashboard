import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import CoinData from '../components/CoinData'
import HistoryChart from '../components/HistoryChart'
import coinGecko from '../apis/coinGecko'

const CoinDetailPage = () => {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [CoinData, setCoinData] = useStat([])

    useEffect(() => {
       const fetchData = async () => {
           const results = await coinGecko.get(`/coins/${id}/market_chart`, {
               params: {
                   vs_currency: "usd",
                   days: "1"
               }
           })
           console.log(results.data)
           setCoinData(results.data.prices)
       }

       fetchData()
    }, [])

    const renderData = () => { 
        return (
            <div className="coinlist">
                <HistoryChart />
                <CoinData />
            </div>
        )
    }

    return (
        <div>
            
        </div>
    )
}

export default CoinDetailPage
