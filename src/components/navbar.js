import React, { useState } from "react";
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { RiAccountCircleLine } from 'react-icons/ri';
import { FaGreaterThan} from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsFillBagDashFill } from 'react-icons/bs';
import { useSelector } from "react-redux";
import ShoppingCart from "./shopingCart";



import "../styles/navbar.css"

const Navbar=()=>{
    const [display, setDisplay] = useState(false);
    
  const cart = useSelector(state => state.Cart);

    return(
       <div className="nav">
         <div className="nav-container">
            <p className="nav-left">FREE RETURNS. STANDARD SHIPPING ORDERS $99+</p>
            <ul className="nav-right" type="none">
                <li>My Account</li>
                <li>Contact Us</li>
                <li>Blog</li>
                <li>My Wishlist</li>
                <li>Cart</li>
                <li>Log in</li>
                <li><BsFacebook/></li>
                <li><AiOutlineTwitter/></li>
                <li><AiFillInstagram/></li>
            </ul>
        </div>
        <hr/>

        <div className='header-container'>
            <img src='https://d-themes.com/react/porto/demo4/images/logo.png' alt=''/>
          <div className='header-right'>
           <p> <input className='input' type="text" placeholder='Search'/><button className='btn'><AiOutlineSearch/></button></p>
           <p className='header-icon'><BsTelephone/></p>
           <div><span>Call Us Now</span>
           <h3>+123456789</h3></div>
           <p className='header-icon' ><RiAccountCircleLine/></p>
           <p className='header-icon'><AiOutlineHeart/></p>
           <p className='header-icon' ><BsFillBagDashFill/><sup style={{color:"red"}}>{cart.totalQty}</sup></p>
           <p onClick={()=>setDisplay(true)}><FaGreaterThan/></p>
           
           </div>
           <ShoppingCart pass={display} setPass={setDisplay}/>
        </div>
        <hr/>
        <div className='header-bottom'>
            <ul className='header-bottom-left' type="none">
                <li>Home</li>
                <li>Categeoirs</li>
                <li>Products</li>
                <li>Pages</li>
                <li>Blog</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
            <span>BUY PORTO!</span>
            <span>SPECIAL OFFER!</span>
        </div>
       </div>
    )
}
export default Navbar;