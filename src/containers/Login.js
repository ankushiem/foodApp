import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";



const Login = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginClicked, setLoginClick] = useState(false);
    const [loginFailed, setLoginFail] = useState(false);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const HandleLogin = async (e) => {
        e.preventDefault();
        //console.log("Handle!!")
        setLoginClick(true);
        //console.log(loginClicked)
        try {
            axios.post('https://food-power.glitch.me/login', { username: username, password: password })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    if (res.data.authenticated) {
                        setUserLoggedIn(true)
                        dispatch({ type: "USER_LOGIN", payLoad: username })
                        dispatch({ type: "SET_CART_USER", payLoad: username })
                        dispatch({ type: "GET_CART" })
                    }
                }).catch((e) => {
                    if (e.message.slice(-3,) === "400") {
                        setLoginFail(true)
                    }
                    setLoginClick(false);
                })
        } catch (_) {
            console.log("ERROR")
            setLoginClick(false);
        }
    }
    if (userLoggedIn)
        return <Redirect to="/"></Redirect>
    return (
        <div className="login-container">
            {
                loginClicked ?
                    (
                        <div>
                            <div className="container"></div>
                            <center>
                                <h1>Loading...</h1>
                            </center>
                            <div className="container"></div>
                        </div>
                    )
                    :
                    (
                        <form className="login" action="/" id="login-form" onSubmit={(e) => {
                            setLoginClick(true)
                            //console.log(loginClicked)
                            HandleLogin(e)
                        }}>
                            <div className="input-group mb-3">
                            <label id="username" className="form-label" aria-labelledby="username">Username</label>
                            <input className="form-control" aria-label="Username" aria-describedby="basic-addon1" type="text" id="userid" onChange={(e) => {
                                setLoginFail(false) 
                                setUsername(e.currentTarget.value)
                            }} required></input>
                            </div>
                            <div className="mb-3">
                            <label id="password" className="form-label" aria-labelledby="username">Password</label>
                            <input className="form-control" type="text" aria-labelledby="password" onChange={(e) => {
                                setLoginFail(false)
                                setPassword(e.currentTarget.value)
                            }} required></input>
                            </div>
                            <center>
                                <button className="login-button" id="pass" type="submit" >
                                    Login
                                </button>

                            </center>
                            <p className="error-message" hidden={!loginFailed}>Invalid Password!!</p>
                        </form>)
            }

            <div className="empty-container"></div>
        </div>
    )
}

export default Login;