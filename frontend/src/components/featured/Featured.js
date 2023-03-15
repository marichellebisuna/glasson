import React, {useState} from 'react'
import './featured.scss'
import ProductCard from '../products/productcard/ProductCard'
import {products} from "../../data"

const Featured = () => {
  const [productItems, setProductItems] = useState(products)
 
  const tempCategory=new Set(products.map(product=>product.category))
  let categories = Array.from(tempCategory)
  categories = ["all", ...categories]


  const handleProducts=(category)=>{
        let tempProducts = [...products]
   
       if(category==="all"){
           return setProductItems(tempProducts)        
       }
       else{
            let items = tempProducts.filter(products=>products.category===category)
            return setProductItems(items)   
       } 
  }
  
  const [tab, setTab] = useState(0)
  const isActive = (index) => {
      if(tab === index ) return "active" ;
       return ""
  }
  return (
    <div className='featured'>
      <h1>Featured Product</h1>
      <div className="categories">
        <ul>
        {categories && categories.map((category, index)=>
          <li key={index} className={`${isActive(index)}`} onClick={()=>setTab(index)}>           
            <div className='alink' onClick={()=>{handleProducts(category)}}>{category} </div></li>
      )}         
        </ul>
      </div>   
 
         <div className="product">
          <ProductCard productItems={productItems}/>  
      </div>  
       
     
      {/* <div className="text">Viewing 1-10 of 230</div>
      <div className="plus"><i class="fa-solid fa-plus"></i></div> */}
         
      </div>
  )
}

export default Featured