import React, {useState} from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router'

function Register() {

    const [nameReg, setNameReg] = useState("")
    const [usernameReg, setUsernameReg] = useState("")
    const [emailReg, setEmailReg] = useState("")
    const [birthdayReg, setBirthdayReg] = useState("")
    const [passwordReg, setPasswordReg] = useState("")
    const [password2Reg, setPassword2Reg] = useState("")

    const register = () => {

        Axios.post("http://localhost:6969/register", { 
          name: nameReg,
          userName: usernameReg,
          email: emailReg,
          birthday: birthdayReg, 
          password: passwordReg,
          password2: password2Reg
        }).then(() => {
          <Redirect to="/login"/>
        }).then((response) => {
          console.log(response)
        }).catch((error) => {
          console.log(error)
        })
      }

    return(
    <div id="register">
    <h2>Register</h2>
    <label>Enter Name</label>
    <input type="text" onChange={(e) => {setNameReg(e.target.value)}}/>

    <label>Enter Username</label>
    <input type="text" onChange={(e) => {setUsernameReg(e.target.value)}}/>

    <label>Enter Email</label>
    <input type="email" onChange={(e) => {setEmailReg(e.target.value)}}/>

    <label>Enter Birthday</label>
    <input type="Date" onChange={(e) => {setBirthdayReg(e.target.value)}}/>

    <label>Enter Password</label>
    <input type="password" onChange={(e) => {setPasswordReg(e.target.value)}}/>

    <label>Confirm Password</label>
    <input type="password" onChange={(e) => {setPassword2Reg(e.target.value)}}/>

    <button onClick={register}> Register </button>
    <div>
    Already a member? <a href="/login">Login</a>
    </div>
    </div>
    )
}

export default Register