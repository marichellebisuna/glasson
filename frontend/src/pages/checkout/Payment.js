import { Link } from 'react-router-dom'
import './payment.scss'
import {user, cart} from '../../data'
import { useState } from 'react'
import Process from '../../components/process/Process'
import CartTotal from './CartTotal'

const Payment = () => {
  const [qty, setQty] = useState(1)
  const [payment, setPayment] = useState()
  const [coupon, setCoupon] = useState()


  const [ tab, setTab ] = useState("tab1")

  return (
    <div className="payment"><div className="breadcrumbs">
    <div className="breadcrumbs">
      <div className="container">
        <div className="left"><Link to="/">Home </Link><span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i> </span> <Link to="/products">Shops </Link>
         <span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i> </span><span style={{ color:"gray"}}> Checkout </span></div>
      </div>

    </div>
   
    <Process />
    <div className="details">
      <div className="detail">
        <div className="tabs" >
          <div className="tab"  onClick={()=>setTab("tab1")}>
              <div className={tab==="tab1" ?"tab-title active" : "tab-title"}>
              VISA/Mastercard
              </div>
              {tab==="tab1" &&
            <div className="information" >Checkout with Visa, Mastercard, and American Express using IntegraPay</div>
              }

          </div>
          <div className="tab" onClick={()=>setTab("tab2")}>
            <div className={tab==="tab2"?"tab-title2 active":"tab-title2"} >
          PayPal
            </div>
            {tab==="tab2" &&
            <>
            <div className="information" ><div className="text">Checkout with PayPal</div>

             <div className="button"><img src="https://au.objects-cc.com/template-resources/images/rwd/buttons/btn_paypal.png" alt="" srcset="" /></div>
            <div className="text" >By proceeding with PayPal Checkout, you're agreeing to our <Link to="/" style={{color:"inherit"}}> Terms and Conditions</Link></div>
            </div>

            </>
              }
          </div>
        </div>
        <div className="totals"><CartTotal/></div>
        <div className="shipping">
          <div className="this">
            <div className="label">Shipping Details</div>
            <div className="edit">Edit <i className="fa-solid fa-pencil"></i></div>
          </div>
          <div className="text">{user.firstName} {user.lastName}</div>
          <div className="text">{user.address}</div>
          <div className="together">
             <div className="text">{user.city} </div>
             <span style={{textTransform:"uppercase"}}> {user.state}</span>
          </div>

          <div className="text">{user.postcode}</div>
          <div className="text">{user.country}</div>
          <div className="text">{user.phone}</div>
        </div>
        <div className="box">
          <table>
            <tr className='title'>Review Items</tr>
            <tr>
              <td>image</td>
              <td>product name</td>
              <td>price</td>
              <td>quantity</td>
              <td>total</td>
              <td ><span className='x'><i className="fa-sharp fa-solid fa-xmark"></i></span></td>
            </tr>
            {cart.map((i,index)=>
            <tr key={index}>
              <td ><img src={i.images[0].url} alt="" srcset="" /></td>
              <td> <Link to={`/product/${i}`}> {i.title}</Link></td>
              <td><span className="blue">${i.price}</span></td>
              <td>
                <div className="quantity">
                  <div className="qty">{qty}</div>
                  {/* <div className="func">
                    <div className="option" ><i className="fa-solid fa-angle-up"></i> </div>
                    <div className="option" ><i className="fa-solid fa-angle-down"></i> </div>

                  </div>                 */}
                </div>
              </td>
              <td><span className="blue">${(i.price * qty).toFixed(2)}</span></td>
              <td ><span className='close'><i className="fa-sharp fa-solid fa-xmark"></i></span></td>
            </tr>
            )}
          </table>
        </div>
      </div>
      <div className="detail total">
        <div className="top">
          <h2>cart totals</h2>
          <hr />
          <div className='sub'>
            <div className="text">Subtotal:</div>
            <div className="price">$460.00</div>
          </div>
          <div className='sub'>
            <div className="text">Shipping:</div>
            <div className="price">$9.00</div>
          </div>
          {
          coupon && <div className='sub'>
          <div className="text">Coupon:</div>
          <div className="price">$9.00</div>
        </div>
        }
          <hr />
          <div className='sub'>
            <div className="total">Total:</div>
            <div className="price">$469.00</div>
          </div>

          <button className='orange'>Complete Order</button>
        </div>

        <div className="bottom" >
        <img src="https://www.nicepng.com/png/detail/95-954587_image-result-for-secure-checkout-safe-and-secure.png" alt="" srcset="" />
        </div>
        {!coupon  && 
        <div className="coupon">
          <input type="text" name="" id="" placeholder='Coupon Code'/>
          <div className="text">Coupon code will be applied on the checkout page</div>
          <button className='block'>apply coupon</button>
        </div>
}
      </div>
      
      
    </div>
    </div>
  </div>
  )
}

export default Payment;