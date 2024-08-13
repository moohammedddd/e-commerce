import "../Components/Show.css"
import { useState } from "react";
import { Link } from "react-router-dom";
function Showw(props){
const [data, setData] = useState(false);

const toggleData = () => {
 setData(!data)
};
const{products,showDttails}=props

    return(<>

    <div className=" main col-md-6 col-lg-4 p-3"  >

<div className="card" key={products.id} >
          <img src={products.image} className="card-img-top" alt="image" />
          <div className="card-body">
            <h5 className="card-title">{products.id}</h5>
            <p className="card-text">{products.title}</p>

<div className=" d-flex justify-content-between">
            
       <button onClick={() => { toggleData(); }} className="btn btn-primary">
    showPrice
</button>
{
data&& 
<a href="#" className=" price btn btn-primary  ">
{products.price}$
</a> 

}
</div>
{showDttails &&
  <Link key={products.id} className="details btn btn-primary" to={`/product/${products.id}`}>
                Details
              </Link>
}


  </div>
</div>

</div>
    </>
    )
}
export default Showw