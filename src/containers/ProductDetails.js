import React, { useEffect , Fragment } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct , incNumber , decNumber } from "../redux/actions/productActions";
import MenuItem from "./MenuItems"
import {PaymentFooter} from "./PaymentFooter";
import Cart from "./Cart";

const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    
    
    const {area, menu={},name , locality} = product;
    // const {items={}} = menu;
    // console.log("in lineee 12 ", items);
    const {productId } = useParams();
    const dispatch = useDispatch();
    
    useEffect(()=> {
        if (productId && productId!==""){ dispatch(fetchProduct(productId))
             //dispatch({type:"EMPTY_CART", payload:productId});
        };
    },[productId]);

    var data = {};
    Object.assign(data,menu.items);
    // console.log( data);
    const key = Object.keys(data);
    
    const getByCategory = () => {
        if (data.length !== 0) {
            return Object.keys(data).reduce((acc, curr) => {
                if (!acc[data[curr].category]) {
                    acc[data[curr].category] = {
                        [data[curr].name]: {
                            "id": data[curr].id,
                            "name": data[curr].name,
                            "price": data[curr].price,
                            "cloudinaryImageId": data[curr].cloudinaryImageId
                        }
                    }
                } else {
                    acc[data[curr].category][data[curr].name] = {
                        "id": data[curr].id,
                        "name": data[curr].name,
                        "price": data[curr].price,
                        "cloudinaryImageId": data[curr].cloudinaryImageId
                    }
                }
                return acc;
            }, {});
        }
    }
    // console.log(getByCategory());
    const RenderMenu = () => {
        var menuData = getByCategory();
        return (
            <React.Fragment>
            <div className="card-group">
                {Object.keys(menuData).map((category) => (
                    <div >
                        <div className="card-body">
                            <div>
                                <center className="card-title"><h1>{category}</h1></center>
                            </div>
                            <div>
                                {Object.keys(menuData[category]).map((item) => (
                                    <div>
                                        <div  key={item} className="card bg-info m-3" style={{ width: "20rem" }}>
                                            <div className="card-body" style={{padding:"20px 6%",margin:"auto" }}>
                                                <MenuItem key = {menuData[category][item].id} item={menuData[category][item]}></MenuItem>
                                             </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </React.Fragment>
        )
    }
    // console.log(getByCategory());
    return (
        <div className="bg-warning p-2" style={{"--bs-bg-opacity":".5"}}>
            <div className="container">
            
            {
                
            Object.keys(product).length===0 ? (
                <div> Loading...</div>
            ):
            (
                <div className="container1">
                    <center><h1 className="container"> !! Welcome to {name} !!</h1></center>
                    <center><h1 className="container1">  {area} , {locality}</h1></center>
                    {<RenderMenu></RenderMenu>}
                 </div>
            )
            }
        </div>
        </div>
    )
        };

export const ProductDetails = React.memo(ProductDetail);