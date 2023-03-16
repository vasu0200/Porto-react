import { useState, useRef, useEffect } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"
import "../styles/carousel.css";

const Carousel = () => {
    const [current, setCurrent] = useState(0)
    const widthSpan = 100.1
    const data = ["https://d-themes.com/react/porto/demo4/images/home/slider/slide-1.jpg","https://d-themes.com/react/porto/demo4/images/home/slider/slide-2.jpg"]

    const prev = () => {
        let newPosition = current;
        if (newPosition > 0) {
            newPosition = newPosition - 1;
        } else {
            newPosition = data.length - 1;
        }
        translateFullSlides(newPosition);
        setCurrent(newPosition);

    }
    const next = () => {
        let newPosition = current;
        if (newPosition < data.length - 1) {
            newPosition = newPosition + 1;
        } else {
            newPosition = 0;
        }
        translateFullSlides(newPosition);
        setCurrent(newPosition);

    }
    const translateFullSlides = (newPosition) => {
        let toTranslate = -widthSpan * newPosition;
        for (var i = 0; i < data.length; i++) {
            let elem = document.getElementById(`carouselitem` + i);
            elem.style.transform = `translateX(` + toTranslate + `%)`;
        }
    }
    return (
        <div className="carousel-container">
            <div className="carousel-body" id="carousel-body">
                {data.map((e, index) => {
                    return (
                        <div id={`carouselitem` + index} className="slide-container">
                            <img id="img" src={e} className="slide" />
                        </div>
                    )
                })}
            </div>
            <BsChevronLeft className="slide-arrow left-arrow" onClick={prev} />
            <BsChevronRight className="slide-arrow right-arrow" onClick={next} />
            <div style={{display:"flex",justifyContent:"center"}}>
                {data.map((e, index) => {
                    return (
                        <div style={{fontSize:"5rem"}} onClick={() => { setCurrent(index); translateFullSlides(index) }}>
                            .
                        </div>
                        
                    )
                })}
                
            </div>
        </div>
    )
}

export default Carousel;

// import React, { useState } from "react";

// import{GrNext,GrPrevious} from 'react-icons/gr';
// import "../styles/carousel.scss"

// export default function Carousel(){
//     const [count,setcount] = useState(0);

//     function previous(){
//         setcount(count-1);
//         let body = document.getElementById('cont');
//         if(count>0){
//             body.style.transform += "translateX(60rem)";   
//             body.style.transition = ".2s";
//         }else{
//             body.style.transform += "translateX(0)";
//             setcount(0)
//         }
//     }
//     function Next(){
//         setcount(count+1);
//         let body = document.getElementById("cont");
//         if(count<1){
//             body.style.transform +="translateX(-60rem)";
//             body.style.transition = ".3s";
//         }else{
//             body.style.transform += "translateX(0)";
//             setcount(1);
//         }
//     }

//     return(
//         <div className="carousel-container">
//             <div id="cont" className="carousel-item-cont">
//                 <div className="carousel-item">
//                     {/* <img className='carousel-img' src="https://reactstorefronts.com/static/img/slider/home-4/3.jpg" alt=""/> */}
//                 </div>
//                 <div className="carousel-item">
//                     {/* <img className="carousel-img" src="https://reactstorefronts.com/static/img/app.png" alt="" /> */}
//                 </div>
//             </div>
//             <div className="prev" onClick={previous}><GrPrevious/></div>
//             <div className="next" onClick={Next}><GrNext/></div>
           
//         </div>
        
    
//     )
// }
