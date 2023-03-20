import './wishlist.scss'
import {cart} from '../../data'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Table from '../../components/table/Table'

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
          <table >
            <thead>
            <tr>
              <td>image</td>
              <td>product name</td>
              <td>price</td>
              <td>quantity</td>
              <td>total</td>
              <td ><span className='x'><i className="fa-sharp fa-solid fa-xmark"></i></span></td>
            </tr>
            </thead>
             <tbody>
            {cart.map((item, i)=>    
              <Table item={item} key={i}/>              
            )}
             </tbody>
          </table>
        </div>     
    </div> 
  )
}

export default Wishlist