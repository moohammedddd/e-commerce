import React from 'react';
import Imge1 from"../Images/pngtree-shopping-logo-design-image_545854.jpg";
import Imge2 from"../Images/ecommerce.jpg";
import Imge3 from"../Images/785054-ecommerce-istock-020119.jpg";
import "./Slider.css";

function Slider() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Imge1} className="d-block w-100 img-fluid" alt="one" />
        </div>
        <div className="carousel-item">
          <img src={Imge2} className="d-block w-100 img-fluid" alt="two" />
        </div>
        <div className="carousel-item">
          <img src={Imge3} className="d-block w-100 img-fluid" alt="three" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    
  );
}

export default Slider;
