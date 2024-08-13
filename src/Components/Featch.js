
import { useState,useEffect } from "react";
import Showw from "./ShoData";
import "../Components/Featch.css" 

function Show(props){
    const [products, setProduct] = useState([]);
    const [category, setCategory] = useState([]);
    
    const api_url = "https://fakestoreapi.com/products";
    const featchh= ()=>{
        fetch(api_url)
        .then((Response) => Response.json())
        .then((data) => setProduct(data))
        .then(console.log(products));
    
      }

      const categoryy= ()=>{
        fetch(`${api_url}/categories`)
        .then((Response) => Response.json())
        .then((data) => setCategory(data))
        // .then(console.log(data));
    
      }
      useEffect(() => {
        featchh()
        categoryy()

      }, []);


      const [productsCat, setProductCat] = useState([]);
      const getProductCat =(catName)=>{
          console.log(catName)
          fetch(`${api_url}/category/${catName}`)
          .then(res=>res.json())
          .then((data)=>setProduct(data))
      
      }
      

      const ProductArray = products
      .filter((el) => {
        // تأكد من أن `title` موجود قبل تحويله إلى حروف صغيرة
        // if (el.title && props.search) {
          return props.search.toLowerCase() === ''
            ? true // عودة `true` إذا كانت `search` فارغة لتضمين كل المنتجات
            : el.title.toLowerCase().includes(props.search.toLowerCase());
        }
        // return false; // تجاهل العناصر التي لا تحتوي على `title`
      )
      
      
      .map((el) => {

                return(

        <Showw products={el} showDttails={true}  key={el.id}/>           
                )
      }
    )

    const categoryArray = category.map((cat) => {
      return (
        <button 
        key={cat} 
        className="btn  btn-primary  col-12 col-lg p-2 m-2 w-50"
        onClick={() => getProductCat(cat)}
      >
        {cat}
      </button>
      );
    });
  
    const categoryArrayCat = productsCat.map((ccat) => {
      return(
          <>
          <h1 key={ccat}>{ccat}</h1>
          </>
      )
    } ); 





    return(

        <>
           <h2 className="main-title">Products</h2>

        <div className="container">
        <div className="row d-flex justify-content-center">
    {categoryArray}
<button
      className="btn  btn-primary  col-12 col-lg p-2 m-2 w-50 "
      onClick={() => {
        featchh();
      }}
    >
      All
    </button>
  </div>
        </div>
 

        
        <div className="container">
        <div className="row">{ProductArray}</div>

        </div>
        
 
        
        </>
    )
}
export default Show