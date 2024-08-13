import React from "react";
import Nav from "./Nav";
import Slider from "../Images/Slider";
import Card from "./Card";
import Show from "./Featch";
import { Routes, Route, AbortedDeferredError} from "react-router-dom";
import About from "./ِAbout";
import ProductDtail from "./Details";

function All(){

    return(
        <>
 
  <Routes>
<Route path='/' element={

<>
<Nav></Nav>
<Card></Card>
   

</>
}/>
        
      
        <Route path='about' element={<About></About>}></Route>
        <Route path='product/:productId' element={<ProductDtail></ProductDtail>}></Route>
        {/* <Show></Show> */}
        </Routes>
        </>
    )
}
export default All