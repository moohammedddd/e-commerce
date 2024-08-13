import Imge1 from"../Images/—Pngtree—e-letter logo ecommerce shop store_7265997.png";
import "../Components/Nv.css"
import Showww from "./Featch";
import Slider from "../Images/Slider";
import Show from "./Featch";
import { useState } from "react";
import { Link } from "react-router-dom";


function Nav(){
    const [search,setSearch] = useState('');

    
    return(
        <>
        
        <nav className="navbar navbar-expand-lg navbar-light p-3 sticky-top">
        <div className="container">
            
          {/* <a className="navbar-brand p-lg-1 text-light" href="#">Navbar</a> */}
          <img
        src={Imge1}
        alt="Description"
      />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <form className="d-flex col-md-6 col-lg-6 m-2">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" 

        onChange={(event)=>{
            setSearch(event.target.value)
                    }}
               />
              {/* <button className="hover btn btn-outline-success text-light" type="submit">Search</button> */}
            </form>
          <div className=" test collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarSupportedContent">

                <div className="list ">
                <ul className="ul  navbar-nav me-auto  ">
              <li className="nav-item ">
                <a className="nav-link active p-lg-3 text-light" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link p-lg-3 text-light" to="/about">About</Link>
              </li>
              
            </ul>

                </div>
         
                
           
          </div>
       
        </div>
        
      </nav>
      <Slider></Slider>
      <Show search={search} />

   
      </>
     
    )
    
}

export default Nav