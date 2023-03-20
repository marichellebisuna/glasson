import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import './productcard.scss'
import {product} from '../../../data'
const productItems = ({productItems}) => {
  // const [user, setUser] = useState(true)

  return (     
     <div className="product-card">
       {/* {user ?   */}       
        {productItems.map((productItems, i)=>( 
          <div className='product' key={i}>    
            <div className="top-img">
              <Link to={`/product/${i}`}>   
              <img src={productItems.images[0].url} alt="" srcSet="" />
              </Link>
              {productItems.discount > 0 &&
               <div className="top-discount">-{productItems.discount}% </div>
              }             
            </div>
            <div className="bottom-card">
              <div className="title"><Link to={`/product/${i}`} style={{
              textDecoration: 'none'
              }}>{productItems.title}</Link>
              </div>
              <hr/>
              <div className="last-bottom">
                <div className="diff-prices">
                  <div className="discount">
                  ${(productItems.price).toFixed(2)} 
                  </div>
                  {productItems.discount>0 && 
                  <div className="before">
                    ${(productItems.price-(productItems.price *productItems.discount)).toFixed(2)}
                  </div>
                  }
                  
                </div>
                <div className="rate-stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star-half-stroke"></i>
                </div>
              </div>
             
            </div>
            <div className="hover">
              <div className="icon active" ><i className="fa-regular fa-heart"></i></div>
              <div className="icon"><i className="fa-solid fa-bag-shopping"></i></div>

              <div className="icon"><i className="fa-solid fa-eye"></i></div>

              <div className="icon"><i className="fa-solid fa-shuffle"></i></div>

            </div>       
          </div> 
       ))} 
      
      
     {/* : <Navigate to='/login' />}    */}
       </div>
  
  
    
  )
}

export default productItems