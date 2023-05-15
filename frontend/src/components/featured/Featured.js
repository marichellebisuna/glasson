import React, {useEffect, useState} from 'react'
import './featured.scss'
import ProductCard from '../products/productcard/ProductCard'
import { fetchProductItems, fetchSingleProduct} from '../../redux/productSlice'
import {useDispatch, useSelector } from 'react-redux'

const Featured = () => {
  const {products, loading} = useSelector(state => state.items)  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProductItems()) 
    // dispatch(fetchSingleProduct())
  }, [dispatch])
  // useEffect(() => {
  //   setProductItems(products)
  // }, [products])
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
  
 if(loading){
  return (
    <div className='loading'><h1>Loading products....</h1></div>
  )
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
        {productItems.map((item) => {
        return <ProductCard key={item.id} {...item} />;
        })}        
      </div>  
            
      {/* <div className="text">Viewing 1-10 of 230</div>
      <div className="plus"><i className="fa-solid fa-plus"></i></div> */}
         
      </div>
  )
}

export default Featured