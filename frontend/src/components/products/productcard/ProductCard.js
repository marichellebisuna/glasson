import { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import './productcard.scss'
import {product} from '../../../data'
import { useDispatch, useSelector } from "react-redux";
import {addToCart} from '../../../redux/cartSlice';


const ProductCard = ({productItems}) => {
  // const [user, setUser] = useState(true)
  // const productList = useSelector((state)=>state.productList)

  const {items} = useSelector((state) => state.cart)
  console.log(items)
  // const { products} = productList;
  const dispatch = useDispatch();

  return (
     <div className="product-card">
    
       {/* {user ?   */}
        {productItems.map((item, i)=>(
          <div className='product' key={i}>
            <div className="top-img">
              <Link to={`/product/${item.id}`}>
              <img src={item.images[0].url} alt="" srcSet="" />
              </Link>
              {item.discount > 0 &&
               <div className="top-discount">-{item.discount}% </div>
              }
            </div>
            <div className="bottom-card">
              <div className="title"><Link to={`/product/${item.id}`} style={{
              textDecoration: 'none'
              }}>{item.title}{item.id}</Link>
              </div>
              <hr/>
              <div className="last-bottom">
                <div className="diff-prices">
                  <div className="discount">
                  ${(item.price).toFixed(2)}
                  </div>
                  {item.discount>0 &&
                  <div className="before">
                    ${(item.price-(item.price *item.discount)).toFixed(2)}
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
              <div className="icon"
               onClick={ () =>
                dispatch(addToCart(item))
                }
              ><i className="fa-solid fa-bag-shopping"></i></div>

              <div className="icon"><i className="fa-solid fa-eye"></i></div>

              <div className="icon"><i className="fa-solid fa-shuffle"></i></div>

            </div>
          </div>
       ))}


     {/* : <Navigate to='/login' />}    */}
       </div>



  )
}

export default ProductCard


