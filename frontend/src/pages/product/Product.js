import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import './product.scss'
import glass from '../../assets/product/1.jpg'

const Product = ({productItems}) => {
  const [user, setUser] = useState(true)


  const products = [
    {
      img:{glass},
      title:"Armani AX5410",
      price:14
    }
  ]
    console.log(products)
  return (   
    <div>
      {user ? 
      <div className="product-card">
             
       {productItems.map((p,index)=>( 
          <div className='product' key={index}>    
            <div className="top" >
              <Link to={`/products/${index}`}>  
                         <img src={p.images[0].url} alt="" srcset="" /></Link>
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
              <div className="icon active" ><i class="fa-regular fa-heart"></i></div>
              <div className="icon"><i class="fa-solid fa-bag-shopping"></i></div>

              <div className="icon"><i class="fa-solid fa-eye"></i></div>

              <div className="icon"><i class="fa-solid fa-shuffle"></i></div>

            </div>       
          </div> 
       ))}

       </div>
      : <Navigate to='/login' />}  
    </div> 
    
  )
}

export default Product