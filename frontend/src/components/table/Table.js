import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {cart} from '../../data'
import './table.scss'

const Table = () => {
  const [qty, setQty] = useState(1)

  return (
    
    <table>
    <tr>
      <td>image</td>
      <td>product name</td>
      <td>price</td>
      <td>quantity</td>
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
        <div className="quantity">                
          <div className="qty">{qty}</div>
          <div className="func">
            <div className="option" ><i class="fa-solid fa-angle-up"></i> </div>
            <div className="option" ><i class="fa-solid fa-angle-down"></i> </div>
            
          </div>                
        </div>
      </td>
      <td><span className="blue">${(i.price * qty).toFixed(2)}</span></td>
      <td ><span className='close'><i class="fa-sharp fa-solid fa-xmark"></i></span></td>
    </tr>
    )}
  </table>
  
  )
}

export default Table