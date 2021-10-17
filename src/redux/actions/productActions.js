//import { products } from "../../products";
import { ActionTypes } from "../contants/actiontypes";
import axios from "axios";
import storeApi from "../../apis/storeApi"; 

export const fetchProducts = () => async (dispatch) => {
        const response = await storeApi.get("/restaurants");
        console.log(response);
        dispatch({type: ActionTypes.FETCH_PRODUCTS, payload: response.data.data});
};

export const fetchProduct = (id) => async (dispatch) => {
    const response = await storeApi.get(`/restaurant/${id}`);
    dispatch({type: ActionTypes.SELECTED_PRODUCT, payload: response.data.data});
};

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};

export const incNumber = (id) => {
    return {
        type: "INCREMENT",
        payload: id
    }
}

export const decNumber = (id) => {
    return {
        type: "DECREMENT",
        payload: id
    }
}
