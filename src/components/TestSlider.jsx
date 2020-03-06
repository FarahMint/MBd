import React, { useState, useRef, useEffect}  from "react";
import {FaArrowDown}from "react-icons/fa"
import "./test.css"
function TestSlider() {

  
  // const elementRef = useRef(null);
  // const [width, setWidth] = useState(0);

  
  //   useEffect(() => {
  //     setWidth(elementRef.current.clientWidth);
  //     console.log(width);
  //   }, [width]);


    const item = [1,2,3,4,5]
    const classCss="item"
  return (
 <div>
    <h1>test</h1>
       <div className="container">
         { item.map((i, index)=>{
          return( 
          
          <Slider 
          key={index}
           divI={i}
           classCss={classCss}
          />
         
         
          )
     
         })}
        {/* <div className="item" ref={elementRef}>1</div>
        <div className="item">2</div>
        <div className="item">3</div>
        <div className="item">4</div>
        <div className="item">5</div> */}
      </div>

      {/* <div className="content">
        <div className="background">
          <div className="left">left</div>
          <div className="right">right</div>
        </div>
        <div className="content-container">content here... </div>
      </div> */}
      <DisplayContent/>
  </div>
  )
 
}


export default TestSlider;

const Slider =({classCss,divI})=>{
   const elementRef = useRef(null);
  const [width, setWidth] = useState(0);
 
  
    useEffect(() => {
      setWidth(elementRef.current.clientWidth);
      console.log(width);
    }, [width]);
    // { onSelectSlide, currentSlide, elementRef }) FROM CONTEXT
    // const isActive = currentSlide && currentSlide.id === movie.id;
    return(
  <div 
  className={classCss}
  ref={elementRef}
  >{divI}
       <ShowDetailsButton onClick={()=> console.log(elementRef.current)}/>
                 {/* {isActive && <Mark />} */}
 
  </div>
)}

 
// const ShowDetailsButton = ({ onClick }) => (
const ShowDetailsButton = ({ onClick } ) => (
  <button 
  onClick={onClick} 
  className="show-details-button">
    <span>
      <FaArrowDown />
    </span>
  </button>
);

const DisplayContent= () =>{
  return(
    <div className="content">

    <div className="background">
      <div className="left">left</div>
      <div className="right">right</div>
    </div>
    <div className="content-container">content here... </div>
  </div>
  )
}