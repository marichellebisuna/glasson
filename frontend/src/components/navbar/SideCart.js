import './sidecart.scss'
import { Link } from 'react-router-dom';
import Advert from './Advert';
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'

import {
  remove,
  increase,
  decrease,
  clearCart,
  getCartTotal
  } from '../../redux/cartSlice';

const SideCart = ({setShow, show}) => {
  const dispatch = useDispatch();
  const {items, totalAmount, totalCount} = useSelector((state) => state.cart)
  console.log(items)
  useEffect(()=>{
    dispatch(getCartTotal())
    },[items])

  return (
    <div className={show?'sidecart':'sidecart hide'} 
     onClick={()=>setShow(!show)}
    >
      <div className={show?"content":"content hide"}>
        <div className="title">
          <div className="text">Shopping Cart</div>
          <i className="fa-solid fa-arrow-right" onClick={()=>setShow(!show)}></i>
         
        </div>
        <div className="items">
          <Advert/>
          <div className="text">Shopping Cart 
          ({totalCount})
          </div>
       
         { items.length >0 ?

         <div className="item">          
         {
          items?.map((i, index) => 
          (
            <>
            <div className="contain" key={index}>
              <div className="images-items" >
                  <div className="image1" ><Link to={`/product/${index}`}><img src={i.images[0].url} alt="" srcSet="" /></Link></div>
                  <div className="image2" ><Link to={`/product/${index}`}><img src={i.images[1].url} alt="" srcSet="" /></Link></div>
              </div>
                              
              <div className="details">      
                <div className="detail-row">
                <Link to={`/product/${index}`}><div className="price">{i.title}</div></Link>
                  <div className="trash" onClick={() =>
                dispatch(remove(i.id)
                )}><i className="fa-solid fa-xmark"></i></div>
                </div>      
                
                <div className="detail-row">
                  <div className="quantity">               
                    <div className="func">
                      <div className="option" onClick={() =>
                dispatch(decrease(i.id)
                )}><i className="fa-solid fa-minus"></i></div>
                      <div className="qty">{i.amount}</div>
                      <div className="option" onClick={() =>
                dispatch(increase(i.id)
                )}><i className="fa-solid fa-plus"></i></div>
                    </div>                
                  </div>
                  <div className="free">${i.price.toFixed(2)}</div>
                  <div className="free-total">${i.price * i.amount}</div>               
                </div>             
              </div>             
            </div>  
            <hr/>  
            </>    
          )

          )
         }         
            <div className="total">
              <div className="total-text">Total:
               <div className="price"> ${totalAmount}</div> </div>
                
              <div className="trash" onClick={() =>
                dispatch(clearCart()
                )}><i className="fa-solid fa-trash"></i></div>          
            </div>
          
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