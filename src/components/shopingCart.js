import React, { useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import {AiOutlineClose} from "react-icons/ai";
import { removeFromCart } from "../redux/slice/cartSlice";
import "../styles/shopingCart.css";


const ShoppingCart = (prop)=>{
    const cart = useSelector(state => state.Cart);
    const dispatch=useDispatch();
    return(
        <div className={prop.pass? ("cart"+ " " +"cartmove"):"cart"}>
              <AiOutlineClose onClick={()=>prop.setPass(false)} className="close"/>
        <div className="cart-container">
                <h1>Shopping Cart</h1>
                <div className="cart-product-container">
                    {cart.items.map(e=>{
                        return(
                            <div className="cart-item">
                             <div className="cart-item-header">
                                <div className="cart-item-price">
                                    <p>{e.name}</p>
                                    <p>{e.cartQty}x{ e.price[0]}</p>
                                    <button onClick={() => dispatch(removeFromCart(e))} style={{width:"10rem",fontSize:"1.3rem"}}>Remove From Cart</button>
                                </div>
                                <img className="cart-img" src={e.pictures[0].url}></img>
                             </div>
                            </div>
                            )
                        })}
                </div>
                  <h4>SUBTOTAL: ${cart.totalPrice}.00</h4>
        </div>
        </div>
    )
}

export default ShoppingCart;