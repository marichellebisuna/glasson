import './products.scss'
import lady from '../../assets/hero/lady.png'
import Sidebar from '../../components/products/sidebar/Sidebar'
import Singledeal from '../../components/hotdeals/singlehotdeal/Singledeal'
import { Link} from 'react-router-dom'
import { useState } from 'react'
import ProductCard from '../../components/products/productcard/ProductCard'
import {products} from '../../data'
import Deal from '../../components/hotdeals/singlehotdeal/Deal'


const Products = () => {
  
 
  const [sort, setSort] = useState(null)
  const [productItems, setProductItems] = useState(products)
  const tempBrand=new Set(products.map(product =>product.brand))
  const brand = Array.from(tempBrand)

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
          <div className="tags">
            <div className="title">Tags</div>
            <div className="tag-item">
              {brand?.map((b, i)=>
              <Link to={`/products?brand=${b}`}>
              <div className="tag" key={i}>{b}</div>
              </Link>
              )} 
            </div>
                      
          </div>
        </div>       
        <div className="right">     

          <ProductCard productItems={productItems}/>  
          <div className="pages">         
              <div className="page">1</div>
              <div className="line"></div>
              <div className="page">2</div>
              <div className="line"></div>
              <div className="page">3</div>
              <div className="line"></div>
              <div className="page">4</div>
              <div className="line"></div>
              <div className="page"><i class="fa-solid fa-arrow-right"></i></div>
          </div> 
          
          <Singledeal/> 
                  
        </div>
     </div>  
    
      
    </div>
  )
}

export default Products