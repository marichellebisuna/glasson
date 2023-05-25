import {useState } from 'react'
import { Link} from 'react-router-dom'
import './productcard.scss'
import { useDispatch} from "react-redux";
import {addToCart} from '../../../redux/cartSlice';
import Rating from './Rating';

const ProductCard = ({id, price, images, title, discountPercentage, rating}) => {

//  const filteredProducts=items.filter((item)=>{
//   return (
//     category==="men's clothing" || category==="women's clothing"
//     );
// });



  const dispatch = useDispatch();

  return (
    <div className="product-card">      
      <div className='product' >
        <div className="top-img">
          <Link to={`/product/${id}`}>
          <img src={images[0]} alt="" srcSet="" />
          </Link>
          {discountPercentage > 0 &&
            <div className="top-discount">-{discountPercentage}% </div>
          }
        </div>
        <div className="bottom-card">
          <div className="title"><Link to={`/product/${id}`} style={{
          textDecoration: 'none'
          }}>{title}{id}</Link>
          </div>
          <hr/>
          <div className="last-bottom">
            <div className="diff-prices">
              <div className="discount">
              ${(price)}
              </div>
              {discountPercentage>0 &&
              <div className="before">
                ${(price+(price*(discountPercentage*.01))).toFixed(2)}
                
              </div>
              }

            </div>
            <div className="rate-stars">
            <Rating
            value={rating}
            
          />
            
            </div>
          </div>

        </div>
        <div className="hover">
          <div className="icon active" ><i className="fa-regular fa-heart"></i></div>
          <div className="icon"
            
          ><i className="fa-solid fa-bag-shopping" onClick={ () =>
            dispatch(addToCart(id))
            }></i></div>

          <div className="icon"><i className="fa-solid fa-eye"></i></div>

          <div className="icon"><i className="fa-solid fa-shuffle"></i></div>

        </div>
      </div>
    </div>
  )
}

export default ProductCard


