import './sidecart.scss'
//import {cart} from '../../data'
import { Link } from 'react-router-dom';
import Advert from './Advert';
import {useState } from 'react';
import { useSelector } from 'react-redux'

const SideCart = ({setShow, show}) => {
const {items} = useSelector((state) => state.cart)
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
          <i className="fa-solid fa-arrow-right" onClick={()=>setShow(!show)}></i>
         
        </div>
        <div className="items">
          <Advert/>
          <div className="text">Shopping Cart 
          ({items.length})
          </div>
       
         { items.length >0 ?

         <div className="item">          
         {
          items?.map((i, index) => 
         (
            <>
            <div className="contain" key={index}>
              <div className="images-items">
                  <div className="image1" ><Link to={`/product/${i}`}><img src={i.images[0].url} alt="" srcSet="" /></Link></div>
                  <div className="image2" ><Link to={`/product/${i}`}><img src={i.images[1].url} alt="" srcSet="" /></Link></div>
              </div>
                              
              <div className="details">      
                <div className="detail-row">
                <Link to={`/product/${i}`}><div className="price">{i.title}</div></Link>
                  <div className="trash"><i class="fa-solid fa-xmark"></i></div>
                </div>      
                
                <div className="detail-row">
                  <div className="quantity">               
                    <div className="func">
                      <div className="option" ><i class="fa-solid fa-minus"></i></div>
                      <div className="qty">{qty}</div>
                      <div className="option" ><i class="fa-solid fa-plus"></i></div>
                    </div>                
                  </div>
                  <div className="free">${i.price.toFixed(2)}</div>
                  <div className="free-total">${i.price * qty}</div>

               
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
               <div className="price"> $85.00</div> </div>
                
              <div className="trash"><i className="fa-solid fa-trash"></i></div>          
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