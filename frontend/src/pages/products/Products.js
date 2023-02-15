import './products.scss'
import lady from '../../assets/hero/lady.png'
import Sidebar from '../../components/products/sidebar/Sidebar'
import Hotdeals from '../../components/hotdeals/Hotdeals'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useState } from 'react'
import ProductCard from '../../components/products/productcard/ProductCard'
import {products} from '../../data'


const Products = () => {
  const params = useParams()
 
  const [sort, setSort] = useState(null)
  const [productItems, setProductItems] = useState(products)

  return (
    <div className="products">
     <div className="hero">
      <img src={lady} alt="" srcSet="" />
     </div>    
     <div className="breadcrumbs">
      <div className="container">
          <div className="left"><Link to="/">Home </Link><span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i> </span><span style={{ color:"gray"}}> Shop All Products </span></div>
          <div className="right">
            <span style={{ color:"gray", paddingRight:"20px"}}> Showing 1-24 of 107 results </span> 
            <div className="sort">                     
              <select name="" id="">            
                <option value="" className="active">SORT BY</option>                  
                <option value="best" onChange={(e)=>setSort("best")}style={{ color:"orange"}}>Best Selling</option>
                <option value="az" onChange={(e)=>setSort("az")}>Alphabetically, A-Z</option>
                <option value="za" onChange={(e)=>setSort("za")}>Alphabetically, Z-A</option>
                <option value="low" onChange={(e)=>setSort("low")}>Price, low to high</option>
                <option value="high" onChange={(e)=>setSort("high")}>Price, high to low</option>
                <option value="new" onChange={(e)=>setSort("new")}>Date, new to old</option>
                <option value="old" onChange={(e)=>setSort("old")}>Date, old to new</option>                
              </select>    
              <div className="button"><i className="fa-solid fa-angle-down"></i></div> 
            </div>
          </div>
      </div>    
     </div>
    <div className="contents">
      <div className="left">
        <Sidebar />
      </div>       
      <div className="right">
        <ProductCard productItems={productItems}/>        
      </div>
     </div>  
      {/* <Hotdeals/>  */}
    </div>
  )
}

export default Products