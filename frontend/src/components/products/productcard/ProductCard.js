import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import './productcard.scss'

const Product = ({productItems}) => {
  const [user, setUser] = useState(true)

  return (   
    <div>
      {user ? 
      <div className="product-card" style={{flexWrap:"none"}}>
             
       {productItems.map((p, i)=>( 
          <div className='product' key={i}>    
            <div className="top" >
             <Link to={`/product/${i}`}>   
              <img src={p.images[0].url} alt="" srcSet="" />
            </Link>
            </div>
            <div className="bottom">
              <div className="title">{p.title}</div>
              <div className="prices">
                <div className="discount">
                ${(p.price).toFixed(2)} 
                </div>
                <div className="before">
                  ${(p.price-(p.price *.40)).toFixed(2)}</div>
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

       </div>
      : <Navigate to='/login' />}  
    </div> 
    
  )
}

export default Product