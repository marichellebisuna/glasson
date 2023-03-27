import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {cart} from '../../data'
import './table.scss'

const Table = ({item}) => {
  const [qty, setQty] = useState(1)

  return (    
   <tr >
      <td className="images-items"><div className="image1" ><Link to={`/product/${item.id}`}><img src={item.images[0].url} alt="" srcSet="" /></Link></div>
            <div className="image2" ><Link to={`/product/${item.id}`}><img src={item.images[1].url} alt="" srcSet="" /></Link></div></td>
      <td > <Link to={`/product/${item}`}> {item.title}</Link></td>
      <td><span className="blue">${item.price}</span></td>
      <td>
        <div className="quantity">                
          <div className="qty">{qty}</div>
          <div className="func">
            <div className="option" ><i className="fa-solid fa-angle-up"></i> </div>
            <div className="option" ><i className="fa-solid fa-angle-down"></i> </div>
            
          </div>                
        </div>
      </td>
      <td><span className="blue">${(item.price * qty).toFixed(2)}</span></td>
      <td ><span className='close'><i className="fa-sharp fa-solid fa-xmark"></i></span></td>
  </tr>
  )
}

export default Table