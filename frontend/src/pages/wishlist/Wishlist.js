import './wishlist.scss'
import {cart} from '../../data'
import { Link } from 'react-router-dom'

const Wishlist = () => {
  return (
    <div className="wishlist">
       <div className="breadcrumbs">
      <div className="container">
        <div className="left"><Link to="/">Home </Link><span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i> </span> <span style={{ color:"gray"}}> Wishlist </span></div>  
      </div>
                
    </div>  
      <table>
        <tr>
          <td>image</td>
          <td>product name</td>
          <td>price</td>
          <td>stock status</td>
          <td></td>
          
        </tr>
        {cart.map((i,index)=>       
        <tr key={index}>
          <td ><img src={i.images[0].url} alt="" srcset="" /></td>
          <td> <Link to={`/product/${i}`}> {i.title}</Link></td>
          <td>${i.price}</td>
          <td><span className="qty">{i.inStock>0?"in Stock":"out of stock"}</span>                           
          </td>
          <td>
            <div className="cart">
              <span><i class="fa-solid fa-cart-shopping"></i></span>
              <button>add to cart</button>
            </div>
          </td>        
        </tr>
        )}
      </table>
      
    </div> 
  )
}

export default Wishlist