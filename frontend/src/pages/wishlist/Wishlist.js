import './wishlist.scss'
import {cart} from '../../data'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Wishlist = () => {
  const [qty, setQty] = useState(1)
  return (
    <div className="wishlist">
        <div className="breadcrumbs">
          <div className="container">
            <div className="left"><Link to="/">Home </Link><span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i> </span> <span style={{ color:"gray"}}> Wishlist </span></div>  
          </div>
                
        </div>  
        <div className="box">
          <table>
            <tr>
              <td>image</td>
              <td>product name</td>
              <td>price</td>
              <td>stock status</td>
              <td>total</td>
              <td ><span className='x'><i class="fa-sharp fa-solid fa-xmark"></i></span></td>
            </tr>
            {cart.map((i,index)=>       
            <tr key={index}>
              <td className="images-items"><div className="image1" key={i}><Link to={`/product/${i}`}><img src={i.images[0].url} alt="" srcset="" /></Link></div>
                    <div className="image2" key={i}><Link to={`/product/${i}`}><img src={i.images[1].url} alt="" srcset="" /></Link></div></td>
              <td> <Link to={`/product/${i}`}> {i.title}</Link></td>
              <td><span className="blue">${i.price}</span></td>
              <td>
                <div className="qty">
                  {i.inStock>0 ?"in stock":"Out of stock"}
                </div>
              
              </td>
              <td><span className="blue">${(i.price * qty).toFixed(2)}</span></td>
              <td ><span className='close'><i class="fa-sharp fa-solid fa-xmark"></i></span></td>
            </tr>
            )}
          </table>
        </div>       
    </div> 
  )
}

export default Wishlist