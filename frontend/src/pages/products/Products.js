import './products.scss'
import lady from '../../assets/hero/lady.png'
import Sidebar from '../../components/products/sidebar/Sidebar'
import Hotdeals from '../../components/hotdeals/Hotdeals'
import Product from '../product/Product'

const Products = () => {
  return (
    <div className="products">
     <div className="hero">
      <img src={lady} alt="" srcset="" />
     </div>    
     <div className="breadcrumbs">
      <div className="container">
          <div className="left">Home <span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i class="fa-solid fa-chevron-right"></i> </span><span style={{ color:"gray"}}> Shop All Products </span></div>
      <div className="right">
        <span style={{ color:"gray", paddingRight:"20px"}}> Showing 1-24 of 107 results </span> 
      <div className="sort">                     
              <select name="" id="">            
                <option value="" className="active">SORT BY</option>                  
                <option value=""  style={{ color:"orange"}}>Best Selling</option>
                <option value="">Alphabetically, A-Z</option>
                <option value="">Alphabetically, A-Z</option>
                <option value="">Price, low to high</option>
                <option value="">Price, high to low</option>
                <option value="">Date, new to old</option>
                <option value="">Date, old to new</option>
            
              </select>    
              <div className="button"><i class="fa-solid fa-angle-down"></i></div> 
            </div></div>
      </div>    
     </div>
    <div className="contents">
      <div className="left"><Sidebar /></div>       
      <div className="right">
        <Product />
        
      </div>
     </div>  
      <Hotdeals/> 
    </div>
  )
}

export default Products