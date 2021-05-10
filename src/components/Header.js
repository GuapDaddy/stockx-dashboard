import React, {useState} from 'react'
import Axios from 'axios'

const Header = () => {
    const [ emailLog, setEmailLog] = useState("")
    const [ passwordLog, setPasswordLog] = useState("")

    const login = () => {
        Axios.post("api.url", {
            email: emailLog,
            password: passwordLog
        }).then((response)=> {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className="header">
            <h1 className="coin-text" >Coin Tracker</h1>
            <input 
            type="email"
            placeholder="Email" 
            onChange ={(e) => {setEmailLog(e.target.value)}}
            />
            <input 
            type="password" 
            placeholder="Password"
            onChange= {(e) => {setPasswordLog(e.target.value)}}
            />
            <button onClick={login}>login</button>
        </div>
    )
}

export default Header
