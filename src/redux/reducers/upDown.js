import {ActionTypes} from "../contants/actiontypes";

const initialState={
    cartByIds:{},
    userID:"guest",
    resturantId:0
};
const changeTheNumber = (state = initialState , action) => {
    switch(action.type){
        case ActionTypes.INCREMENT : {
            const {itemId} = action.payload;
            const {cartByIds} = state;
            const cartItem = cartByIds[itemId] || {quantity:0};
            cartItem.quantity +=1;
            const newCart = {
                ...cartByIds,
                [itemId]: cartItem
            };
            return {
                ...state,
                cartByIds: newCart
            };
        }
        case ActionTypes.DECREMENT : {
            const {itemId} = action.payload;
            const {cartByIds} = state;
            const cartItem = cartByIds[itemId];
            if(!cartItem){
                return state;
            }
            cartItem.quantity -=1;
            const newCart = {
                ...cartByIds,
                [itemId]: cartItem
            };
            return {
                ...state,
                cartByIds: newCart
            };
        }
        case "DELETE_ITEM" : {
            const {itemId} = action.payload;
            const {cartByIds} = state;
            const cartItem = cartByIds[itemId];
            if(!cartItem){
                return state;
            }
            delete cartByIds[itemId];
            
            const newCart = {
                ...cartByIds,
            };
            return {
                ...state,
                cartByIds: newCart
            };
        }
        case 'SET_CART_USER':
            return {...state,userID:""+action.payLoad}
        case 'SAVE_CART':
            localStorage.setItem("cart_"+state.userID,JSON.stringify(state))
            return {...state,cartByIds:{}}
        case 'GET_CART':
            console.log("called");
            console.log(state.userID);
            if(state.userID==="guest")
                return state
            console.log("get item called");
            var c = JSON.parse(localStorage.getItem("cart_"+state.userID))
            if(c&&c.userID===state.userID)
                return {...state,cartByIds:c.cartByIds,userID:c.userID};
            else
                return state;
        case 'EMPTY_CART':
            //console.log("empty!");
            // const {productId} = action.payload
            // if(state.resturantId==productId)
            // return state;
            return {...state,cartByIds:{}}
        default:
            return state;
        
    }
}

export default changeTheNumber;