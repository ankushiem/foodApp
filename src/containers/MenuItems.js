import { useDispatch, useSelector } from "react-redux";
import {ActionTypes} from "../redux/contants/actiontypes";
import "../index.css";

function MenuItem(props){
    const {id,name,price,cloudinaryImageId} = props.item;
     //console.log("in line 6 ", cloudinaryImageId);
    const cartByIds = useSelector((state) => state.changeTheNumber.cartByIds);
    const dispatch = useDispatch();

    const quantity = cartByIds[id]?.quantity ?? 0;

    function handleIncrement() {
        dispatch({
            type: ActionTypes.INCREMENT,
            payload:{
                itemId: id
            }
        });
    }
    function handleDecrement() {
        dispatch({
            type: ActionTypes.DECREMENT,
            payload:{
                itemId: id
            }
        });
    }

    const addBtn = (
        <button className="btn btn-primary" style={{width:"90px"}}
        onClick={handleIncrement}>
            Add +
        </button>
    );

    const increaseBtn = (
        <button className="btn btn-warning"
        onClick={handleIncrement}>
            <span>+</span>
        </button>
    );

    const decreaseBtn = (
        <button className="btn btn-warning"
        onClick={handleDecrement}>
            -
        </button>
    );

    const qtyIndicator = (
        <div>
            {quantity}
        </div>
    );
    const placeholder = `blankImage.png`;
    const imageUrl = `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`;
    return (
        <div className="card bg-success " style={{ width: "18rem" }}>
            <div>
            <img className="card-img-top" alt={name} src={imageUrl} style={{ width: "150px", height: "125px", margin: "auto" }}  />
            <h4>{name}</h4>
            <span>(${price})</span>
            </div>
            {quantity===0 ? (
                addBtn
            ): (
                <div className="btn btn-primary" style={{display:"flex" , width:"90px"}}>
                    {decreaseBtn}
                   {qtyIndicator}
                   {increaseBtn} 
                </div>
            )}
        </div>
    )

}

export default MenuItem;