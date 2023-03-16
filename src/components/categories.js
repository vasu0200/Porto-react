import "../styles/categories.css";
const Categories=()=>{
    return(
        <div>
            <h3 style={{textAlign:"center",padding:"3rem"}}>BROWSE OUR CATEGORIES</h3>
            <div className="cate-container">
                <div className="cate-items">
                    <div className="cate-img-container">
                        
                    <img className="cate-img" src="https://d-themes.com/react/porto/demo4/images/home/products/categories/category-1.jpg" alt=""/>
                    </div>
                    <h3>DRESS</h3>
                   <span>3 products</span>
                </div>
                <div className="cate-items">
                    <div className="cate-img-container">
                        
                    <img className="cate-img" src="https://d-themes.com/react/porto/demo4/images/home/products/categories/category-2.jpg" alt=""/>
                    </div>
                    <h3>WATCHES</h3>
                   <span>3 products</span>
                </div>
                <div className="cate-items">
                    <div className="cate-img-container">
                        
                    <img className="cate-img" src="https://d-themes.com/react/porto/demo4/images/home/products/categories/category-3.jpg" alt=""/>
                    </div>
                    <h3>MACHINE</h3>
                   <span>3 products</span>
                </div>
                <div className="cate-items">
                    <div className="cate-img-container">
                        
                    <img className="cate-img" src="https://d-themes.com/react/porto/demo4/images/home/products/categories/category-3.jpg" alt=""/>
                    </div>
                    <h3>SOFA</h3>
                   <span>3 products</span>
                </div>
                <div className="cate-items">
                    <div className="cate-img-container">
                        
                    <img className="cate-img" src="https://d-themes.com/react/porto/demo4/images/home/products/categories/category-4.jpg" alt=""/>
                    </div>
                    <h3>HEADPHONE</h3>
                   <span>3 products</span>
                </div>
            </div>
        </div>
    )
}
export default Categories;