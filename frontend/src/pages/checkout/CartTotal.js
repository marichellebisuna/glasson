import { useState } from 'react'
import './carttotal.scss'

const CartTotal = () => {
  const [coupon, setCoupon] = useState()

  return (
    <div className="details totals">
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
        <div className="bottom" >
        <img src="https://www.nicepng.com/png/detail/95-954587_image-result-for-secure-checkout-safe-and-secure.png" alt="" srcset="" />
        </div>

        </div>

        
        {!coupon  && 
        <div className="coupon">
          <input type="text" name="" id="" placeholder='Coupon Code'/>
          <div className="text">Coupon code will be applied on the checkout page</div>
          <button className='block'>apply coupon</button>
        </div>
        }
  </div>
  )
}

export default CartTotal