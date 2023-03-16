import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { FetchProductSlice } from "../redux/slice/productSlice";
import ProductCard from "./productCard";
import "../styles/productCard.css";



const Featured = () => {
    const products = useSelector(state => state.Featured.value)
    console.log(products)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(FetchProductSlice());
    }, [])

    return (
        <div>
            <h1 className="products-heading">Featured Products</h1>
            <div className="products-container">
                <div >
                    <div className="products">
                        {products.map(e => <ProductCard key={uuid()} data={e} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured;