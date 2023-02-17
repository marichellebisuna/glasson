import { Link } from 'react-router-dom'
import './product.scss'
import {product} from '../../data'
import { useState } from 'react'

const Product = () => {
  const [ item, setItem ] = useState(product)
  


  return (
    <div className='product'>
      <div className="breadcrumbs">
      <div className="container">
          <div className="left"><Link to="/">Home </Link><span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i> </span> <Link to="/products">Shops </Link><span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i> </span>
            <Link to="/products?brand=Armani">{item.brand} </Link><span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i> </span><span style={{ color:"gray"}}> {item.title} </span></div>
          
      </div>    
      </div>
      <div className="top">
        <div className="left">
          <img src={item.images[0].url} alt="" srcset="" />
          <div className="middle">
            <img src={item.images[0].url} alt="" srcset="" />
            <img src={item.images[1].url} alt="" srcset="" />
            <img src={item.images[2].url} alt="" srcset="" />
            <img src={item.images[3].url} alt="" srcset="" />
            <img src={item.images[4].url} alt="" srcset="" />          
          </div>
        </div>
        <div className="right">right</div>
      </div>
     
    </div>
  )
}

export default Product