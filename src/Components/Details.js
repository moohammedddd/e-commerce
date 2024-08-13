import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Components/Details.css"
import Showw from "./ShoData";
function ProductDtail() {
    const api_url = "https://fakestoreapi.com/products";
    const params = useParams();
    const [product, setProduct] = useState({});
    console.log(params);
    useEffect(() => {
      fetch(`${api_url}/${params.productId}`)
        .then((Response) => Response.json())
        .then((product) => setProduct(product));
    }, []);
  
    return (
      <div className="d-flex lol ">


        <Showw products={product}>
          
          </Showw>
        
    
 

      </div>
      

    );
  }
export default ProductDtail;
