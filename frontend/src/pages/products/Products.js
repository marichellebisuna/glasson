import './products.scss'
import lady from '../../assets/hero/lady.png'
import Sidebar from '../../components/products/sidebar/Sidebar'
import Singledeal from '../../components/products/hotdeals/singlehotdeal/Singledeal'
import { Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProductCard from '../../components/products/productcard/ProductCard'
import {products} from '../../data'
import Deal from '../../components/products/hotdeals/singlehotdeal/Deal'
import SideOption from '../../components/navbar/SideOption'
import Pages from '../../components/products/pages/Pages'


const Products = () => {
  const [showSidebar, setShowSidebar] = useState(false) 
  const [active, setActive] = useState(false)
  const [activeTag, setActiveTag] = useState(false)



  const [sort, setSort] = useState(null)
  const [productItems, setProductItems] = useState(products)
  const tempBrand=new Set(products.map(product =>product.brand))
  const brand = Array.from(tempBrand)

  const isActive = () => {
    window.scrollY > 520 ? setActive(window.scrollY <2800 && true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    }
  }, [])   
  
  const isTag = () => {
    window.scrollY > 1100 ? setActiveTag( true) : setActiveTag(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", isTag);

    return () => {
      window.removeEventListener("scroll", isTag);
    }
  }, [])   
  
  return (
    <div className="products">
     <div className="hero-img">
      <img src={lady} alt="" srcSet="" />
     </div>    
     <div className="breadcrumbs">
      <div className="container">
          <div className="left">
            <Link to="/">Home </Link><span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i> </span>
           
            <span style={{ color:"gray"}}> Shop All Products </span>
          </div>
          <div className="middle" onClick={()=>setShowSidebar(!showSidebar)}><i class="fa-solid fa-sliders"></i></div>
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
          <Sidebar active={active}/>
          <div className={activeTag? "tags":"tags hide"}>
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
          <div className="card">
            <ProductCard productItems={products} /> 
          </div>
                  
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

          <div className="double-deal"><Singledeal/> <Singledeal/></div>    
                 

                                     
        </div>
     </div> 
     <div className="outer-page">
      <Pages/> 
     </div>
     
     <div className="single-deal"><Deal/> </div>     
     <SideOption setShowSidebar={setShowSidebar} showSidebar={showSidebar}/>   
    </div>
  )
}

export default Products