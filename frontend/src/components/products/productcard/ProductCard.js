import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import './productcard.scss'

const productItems = ({productItems}) => {
  // const [user, setUser] = useState(true)

  return (     
     <div className="product-card" style={{flexWrap:"wrap"}}>
       {/* {user ?   */}       
        {productItems.map((productItems, i)=>( 
          <div className='product' >    
            <div className="top" >
             <Link to={`/product/${i}`}>   
              <img src={productItems.images[0].url} alt="" srcSet="" />
            </Link>
            </div>
            <div className="bottom">
            <Link to={`/product/${i}`} style={{
           textDecoration: 'none'
          }}><div className="title">{productItems.title}</div></Link>
              <div className="prices">
                <div className="discount">
                ${(productItems.price).toFixed(2)} 
                </div>
                <div className="before">
                  ${(productItems.price-(productItems.price *.40)).toFixed(2)}</div>
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