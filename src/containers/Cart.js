import React from "react";
import {useSelector} from "react-redux";
import MenuItem from "./MenuItems";
import {PaymentFooter} from "./PaymentFooter";
import CartMenuItems from "./CartMenuItems";

const Cart = (props) => {
    console.log(props);
    const cartByIds = useSelector((state) => state.changeTheNumber.cartByIds);
    const product = useSelector((state) => state.product);
    const {area, menu={},name , locality} = product;
    var backEventHandeler = () => {
        props.history.goBack();
    }
    // console.log("ids ",cartByIds);
    // console.log("product ",product);
    return (
        <div className="container">
            <h1>this is cart</h1>
            <div className="card-group" >
            {Object.keys(cartByIds).map((item) => (
                <div>
                    <div  key={item} className="card bg-info m-5" style={{ width: "20rem" }}>
                        <div className="card-body" style={{padding:"20px 6%",margin:"auto" }}>
                            <CartMenuItems key = {item} item={menu.items[item]}></CartMenuItems>
                        </div>
                    </div>
                </div>
            ))}
               <PaymentFooter/>
                                
            </div>
            <input type="button" className="btn btn-primary" style={{width:"90px"}} value="go back" onClick={backEventHandeler}/>
        </div>
        
    )
}

export default Cart;