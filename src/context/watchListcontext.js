import React,  { createContext, useState } from 'react'

export const WatchlistContext = createContext()

export const WatchlistContextProvider = (props) => {
    const [ watchList, setWatchList] = useState(["bitcoin", "ethereum" , "dogecoin"])

    const deleteCoin = (coin) =>{
        setWatchList(
            watchList.filter(el => {
            return el !== coin
            })
        )
    }

    return(
        <WatchlistContext.Provider value={{watchList , deleteCoin}}>
            {props.children}
        </WatchlistContext.Provider>
    )
}