import React from "react";
import Shipping from "../components/shipping";
import Featured from "../components/featuredProduct";
import Arrivals from "../components/newProducts";
import Banner from "../components/banner";
import Categories from "../components/categories";
import Footer from "../components/footer";
import Fashion from "../components/banner2";
import Model from "../components/model";
import Carousel from "../components/carousel";


import "../styles/homepage.css";

function HomePage(){
    return(
        <div>
            <Carousel/>
<Model/>
{/* <button className='scroll-btn'><a href="">Scroll Up</a></button> */}
<Shipping/>
<Featured/>
<Arrivals/>
<Banner/>
<Categories/>
<Fashion/>
<Footer/>
          
        </div>
    )
}
export default HomePage;