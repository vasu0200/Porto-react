import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slice/cartSlice";
import {MdRemoveShoppingCart} from "react-icons/md";
import {AiOutlineHeart} from "react-icons/ai";

import "../styles/productCard.css";




const ProductCard=({data})=>{
    const cart = useSelector(state => state.Cart);
    // console.log(cart)
    const dispatch = useDispatch();
    


    return(
        <div className="product-container">
            <div className="product-card">
<img className="card-img" src={data.pictures[0].url} />  
<p className="card-name">{data.categories[0].name}</p> 
<p>{data.name}</p>
<h2>${data.price[0]}.00</h2>
<section className="card-footer">
<button className="card-icon" ><AiOutlineHeart/></button>
<button className="card-btn" onClick={() => dispatch(addToCart(data))}>Add</button>
<button className="card-icon" onClick={() => dispatch(removeFromCart(data))}><MdRemoveShoppingCart/></button>
</section>
</div>
 </div>
    )
}
export default ProductCard;