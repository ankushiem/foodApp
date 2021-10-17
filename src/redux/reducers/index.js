import { combineReducers } from "redux";
import { productReducer,selectedProductReducer } from "./productReducer";
import changeTheNumber from "./upDown";
import loginReducer from "./loginReducer";

 const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    changeTheNumber,
    loginReducer
});

export default reducers;