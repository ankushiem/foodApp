import { useSelector,useDispatch } from "react-redux";

function selectorCartPrice(menu,cartByIds) {
    
    
    
    // const {cartByIds } = state;
    // console.log("in line 10",cartByIds);
    let cartPrice =0;

     const cartKeys = Object.keys(cartByIds);

    cartKeys.forEach((id) => {
        const item = menu.items[id];
        const cartItem = cartByIds[id];

        const price = cartItem.quantity*item.price;

        cartPrice += price;
    });
    return cartPrice;
}


export function PaymentFooter() {

    const product = useSelector((state) => state.product);
    const { menu={}} = product;
    const cartByIds = useSelector((state) => state.changeTheNumber.cartByIds);
     const cartPrice = selectorCartPrice(menu,cartByIds);
     const dispatch = useDispatch();
     var handleOnCart = () => {
    
        dispatch({type:"EMPTY_CART"})
    }
    // console.log("in line 31",cartByIds);
    return (
        <header>
            {cartPrice > 0 && (
                // <a href="#payment" className="food-app-pay-btn" aria-live="polite">
                //     Pay for food (${cartPrice})
                // </a>
                <button className="food-app-pay-btn" aria-live="polite" onClick={handleOnCart}> Pay for food (${cartPrice})</button>
            )}
        </header>
    )
}