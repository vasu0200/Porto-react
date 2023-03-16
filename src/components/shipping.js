import { FaShippingFast } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import { Ri24HoursFill } from "react-icons/ri";
 import "../styles/shipping.css";


const Shipping=()=>{
    return(
        <div>
        <div className="shipping-container">
            <div className="shipping-body">
                <p className="shipping-icon"><FaShippingFast/></p>
                <section>
                    <h4>Free Shipping Cart</h4>
                    <p>free shipping on allorders over $99</p>
                </section>
            </div>
            <div className="shipping-body">
                <p className="shipping-icon"><BiDollarCircle/></p>
                <section>
                    <h4>Money Back Gurarrente</h4>
                    <p>100% money back gurarrente</p>
                </section>
            </div>
            <div className="shipping-body">
                <p className="shipping-icon"><Ri24HoursFill/></p>
                <section>
                    <h4>Online Support 24/7</h4>
                    <p>Lorem ipsum dolar sit amet</p>
                </section>
            </div>
        </div>
        <div className="shipping-bottom">
            <div className="shipping-card1">
                <h2>Porto Watches</h2>
                <h1><strike>20%</strike>30% off</h1>
                <button className="shipping-btn">SHOP NOW</button>
                
            </div>
            <div className="shipping-card2">
            <section><h2>Deal Promos</h2>
            <h3>Starting At $99</h3></section>
                <button className="shipping-btn">SHOP NOW</button>
            </div>
            <div className="shipping-card3">
            <h2>Hand Bags</h2>
                <h4>Starting At $99</h4>
                <button className="shipping-btn">SHOP NOW</button>
            </div>
        </div>
        </div>
    )
}
export default Shipping;