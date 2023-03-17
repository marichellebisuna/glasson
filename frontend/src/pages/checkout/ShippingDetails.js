import { Link } from 'react-router-dom'
import './shippingdetails.scss'
import {cart} from '../../data'
import { useState } from 'react'
import Process from '../../components/process/Process'

const ShippingDetails = () => {
  const [qty, setQty] = useState(1)
  const [payment, setPayment] = useState()
  const [coupon, setCoupon] = useState()
 
  return (
    <div className="shippingdetails"><div className="breadcrumbs">
    <div className="breadcrumbs">
      <div className="container">
        <div className="left"><Link to="/">Home </Link><span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i> </span> <Link to="/products">Shops </Link>
         <span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i> </span><span style={{ color:"gray"}}> Checkout </span></div>  
      </div>
                
    </div>  
    
    <Process/>
    <div className="details">
      <div className="detail">      
        <div className="billing">
        <div className="title"><h1>Billing details</h1></div>
          <div className="options">
            <div className="full">
              <div className="name"> 
                <div className="label">Email*</div>
                <input type="email" name="" id="" />
              </div>         
            </div>
            <div className="full">
              <div className="name"> 
                <div className="label">First Name*</div>
                <input type="text" name="" id="" />
              </div>          
              <div className="name" >
                <div className="label">Last Name*</div>
                <input type="text" name="" id="" />
              </div>            
            </div>            
            <div className="full">
              <div className="name address"> 
                <div className="label">Address 1*</div>
                <input  type="text" name="" id="" />            
              </div>       
            </div>
            <div className="full">
              <div className="name address"> 
                <div className="label">Address 2 (optional - Company, Buzzer, c/o, etc.)</div>
                <input  type="text" name="" id="" />            
              </div>       
            </div>
            <div className="full">
              <div className="name"> 
                <div className="label" >City</div>
                <input  type="text" name="" id="" />
              </div> 
              <div className="name"> 
                <div className="label" >Country</div>
                <div className="text" style={{marginBottom:"15px", paddingLeft:"5px", marginTop:"10px"}}>Australia</div>
              </div>                           
            </div>
            <div className="full">              
              <div className="name"> 
                <div className="label">State/Province/Region</div>
                <select style={{ borderRight:"solid 1px lightgray",marginTop:"10px"}} id="country" name="country">
                  <option selected>Please select...</option>
                  <option value="ACT">ACT</option>
                  <option value="NSW">New South Wales</option>
                  <option value="NT">Northern Territory</option>
                  <option value="QUE">Queensland</option>
                  <option value="SA">South Australia</option>
                  <option value="TAS">Tasmania</option>
                  <option value="VIC">Victoria</option>
                  <option value="WA">Western Australia</option>                                 
                </select> 
              </div>
              <div className="name postcode" style={{ marginTop:"10px"}}>
                <div className="label">Postcode*</div>
                <input  type="text" name="" id="" />
              </div> 
              <div className="name"> 
                <div className="label" style={{paddingBottom:"10px"}}>Phone Number*     
                </div>
                <select  id="phone" name="phone" style={{ borderRight:"solid 1px lightgray"}}>              
                  <option value="home" >Home</option>                
                  <option value="mobile">Mobile</option>
                  <option value="work">Work</option>                  
                </select> 
              </div>          
              <div className="name postcode" >   
              <div className="label" style={{padding:"15px 0"}}> 
                </div>             
                <input type="text" name="" id="" />
              </div>          
            </div>
           
           
             
          <hr style={{width:"100%", opacity:"0.3"}}/>
          
            <div className="me" style={{color:"gray"}}>
              <input type="checkbox" name="" id="" />
              <label >I want to receive emails to be first to know about exclusive offers and new products.</label>
            </div>           
        
          </div>                  
          {/* <div className="bottom" >
          <img src="https://simplymemorialcards.ie/wp-content/uploads/2018/10/secure.png" alt="" srcset="" />
          </div>   */}       
      
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
              <td ><span className='x'><i class="fa-sharp fa-solid fa-xmark"></i></span></td>
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
                    <div className="option" ><i class="fa-solid fa-angle-up"></i> </div>
                    <div className="option" ><i class="fa-solid fa-angle-down"></i> </div>

                  </div>                 */}
                </div>
              </td>
              <td><span className="blue">${(i.price * qty).toFixed(2)}</span></td>
              <td ><span className='close'><i class="fa-sharp fa-solid fa-xmark"></i></span></td>
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

          <button className='orange'><Link to="/checkout/payment">Next Step</Link></button> 
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

export default ShippingDetails;