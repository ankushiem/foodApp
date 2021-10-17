import React from "react";
// import Covid from "./components/covid.js";
// import Login from "./loginPage";
// import FoodData from "./foodData.js";
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Header from "./containers/Header";
import {ProductDetails} from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";
import {PaymentFooter} from "./containers/PaymentFooter";
import "./index.css";
import Cart from "./containers/Cart";
import Login from "./containers/Login";

const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        
        <Switch>
        <Route path="/" exact component={ProductListing}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/cart" exact component={Cart}></Route>
          
          <Route path="/:productId" exact component={ProductDetails}/>
          
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
    
  )
}

export default App