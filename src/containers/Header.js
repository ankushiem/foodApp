import React from "react";
import {Route , Switch, Link, NavLink} from "react-router-dom";
import Cart from "./Cart";
import "../index.css";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect  } from "react";
import { fetchProduct  } from "../redux/actions/productActions";

const Header = () => {
    const dispatch = useDispatch();
    const HandleLogoutClick = (e) => {
     dispatch({ type: "USER_LOGOUT" })
     dispatch({type:"SAVE_CART"})
     dispatch({type:"SET_CART_USER",payLoad:"guest"})
     dispatch({type:"EMPTY_CART",payLoad:""})
 }
 const loginState = useSelector((state) => state.loginReducer);
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            {
                                loginState.userLoggedIn ?
                                    <NavLink to="/" className="nav-link active" aria-current="page" onClick={HandleLogoutClick}>Logout</NavLink>
                                    : <NavLink to="/login" className="nav-link active" aria-current="page">Login</NavLink>
                            }
                            </li>
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link active" aria-current="page"> Go To Cart</Link> 
                            </li>
                            <li className="nav-item">
                            <Link to = "/" className="nav-link active"> Menu</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}
 
export default Header;