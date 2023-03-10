import './sidecart.scss'
import {cart} from '../../data'
import { Link } from 'react-router-dom';
import Advert from './Advert';
import { useEffect, useState } from 'react';

const SideCart = ({setShow, show}) => {
  const [qty, setQty] = useState(1)
//   const [total, setTotal] = useState(0.0);

// useEffect(() => {    
//     const newTotal = item.reduce((a,b) => (a.qty * a.price) + (b.qty * b.price));
//     setTotal(newTotal)
// }, [item]) 
 
  return (
    <div className={show?'sidecart':'sidecart hide'} onClick={()=>setShow(!show)}>
      <div className={show?"content":"content hide"}>
        <div className="title">
          <div className="text">Shopping Cart</div>
          <i className="fa-solid fa-xmark" onClick={()=>setShow(!show)}></i>
        </div>
        <div className="items">
          <Advert/>
         <hr/>
          {cart.length >0 ?
         <div className="item">
          
         {
          cart.map((i, index)=>
            <div className="contain" key={index}>
             <div className="images-items">
                <div className="image1" key={i}><Link to={`/product/${i}`}><img src={i.images[0].url} alt="" srcSet="" /></Link></div>
                <div className="image2" key={i}><Link to={`/product/${i}`}><img src={i.images[1].url} alt="" srcSet="" /></Link></div>
             </div>
                
              
              <div className="details">                
                <div className="title">{i.title}</div>
                <div className="row">
                  <div className="price">${i.price.toFixed(2)}</div>
                <div className="qty">Qty: {qty}</div>
                </div>
                <div className="row">
                  <div className="price">Free postage</div>
                  <div className="trash"><i className="fa-solid fa-trash"></i></div>
                </div>
              </div>
            </div>            
          )
         }          
         
            <div className="total">
              <div className="total-text">subtotal</div>
              <div className="price">AU $85.00</div>             
            </div>
           <div className="reset">
            <div className="text">reset cart
              </div></div>
            <div className="buttons">
              <Link to="/checkout/shipping-details"><button className='orange'>checkout</button></Link>
            <Link to="/cart"><button className='block'>view cart</button></Link>  

            </div>
         </div> 

          :
          <>
          <div className="text">0 items</div>
          <div className="text">Free shipping for all orders over $200.00!</div>
          <div className="text center">Your cart is empty</div>
          <div className="orange">
            <button ><Link to="/products">continue shopping</Link></button>
          </div>
          </>
          }

          </div>
      </div>
    </div>
  )
}

export default SideCart