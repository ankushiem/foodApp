import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponents";
import { fetchProducts} from "../redux/actions/productActions";


const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    },[]);

    // console.log("product: " ,products);
    return (
        <div>
            
            <div className="p-3 mb-2 bg-secondary text-white ">
            <div className="container">
                <div className="row">
                    <h1 className="col-5"> Product Details</h1>
                    <div className="col-3 offset-4">
                        
                    </div>
                </div>
                <div>
                    
                    <ProductComponent/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ProductListing;