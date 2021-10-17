import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import "../index.css";
import axios from "axios";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);

    
    
    const renderList = products.map((product) => {
        const {id, avgRating,cuisines ,deliveryTime,name,costForTwoString ,cloudinaryImageId} = product;
        const imageUrl = `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`;
        return (
            <div>
                <div  key={id} className="card bg-info m-5" style={{ width: "20rem" }}>
                    
                        <Link to = {`/${id}`} >
                            <img className="card-img-top" alt={name} src={imageUrl} style={{ width: "319px", height: "250px", margin: "auto" }} />
                        </Link>
                    
                    <div className="card-body" style={{color:"black" }}>

                        <p className="card-title" >{name}</p>
                        <p className="card-text" >{cuisines}</p>
                        <p className="card-text" >Rating *{avgRating} |  {deliveryTime} min  | {costForTwoString}</p>
                        
                    </div>
                </div>
            </div>
        );
    });
    return (
        <React.Fragment>
            <div className="card-group">
            
                {renderList}
            </div>
        </React.Fragment>
    )
};

export default ProductComponent;