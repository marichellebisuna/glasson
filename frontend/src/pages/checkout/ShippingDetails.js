import { Link } from 'react-router-dom'
import './shippingdetails.scss'
import {cart} from '../../data'
import { useState } from 'react'

const ShippingDetails = () => {
  const [qty, setQty] = useState(1)
  const [payment, setPayment] = useState()

  return (
    <div className="shippingdetails"><div className="breadcrumbs">
    <div className="breadcrumbs">
      <div className="container">
        <div className="left"><Link to="/">Home </Link><span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i> </span> <Link to="/products">Shops </Link>
         <span style={{padding:"0 20px", color:"gray", fontSize:"12px"}}> <i className="fa-solid fa-chevron-right"></i> </span><span style={{ color:"gray"}}> Checkout </span></div>  
      </div>
                
    </div>  
    <div className="process">
      <div className="step">
        <span>shopping cart</span> 
        <div className="number ">01</div>
      </div>        
      
      <div className="step">
        <span>checkout</span> 
        <div className="number active">02</div>       
      </div>

      <div className="step">
        <span>order completed </span>
        <div className="number">03</div>
      </div>
    </div>  
   
    <div className="details">   

      <div className="detail white"> 
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
              <div className="name" style={{marginLeft:"10px"}}>
                <div className="label">Last Name*</div>
                <input type="text" name="" id="" />
              </div>            
            </div>            
            <div className="full">
              <div className="name"> 
                <div className="label">Address 1*</div>
                <input style={{width:"710px"}} type="text" name="" id="" />            
              </div>       
            </div>
            <div className="full">
              <div className="name"> 
                <div className="label">Address 2 (optional - Company, Buzzer, c/o, etc.)</div>
                <input style={{width:"710px"}} type="text" name="" id="" />            
              </div>       
            </div>
            <div className="full">
              <div className="name"> 
                <div className="label" >City</div>
                <input style={{width:"710px"}} type="text" name="" id="" />
              </div>                         
            </div>
            <div className="full">              
              <div className="name"> 
                <div className="label">State/Province/Region</div>
                <select style={{width:"410px", borderRight:"solid 1px lightgray",marginTop:"10px"}} id="country" name="country">
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
            </div>
            <div className="full" style={{marginTop:"10px"}}>
              <div className="name"> 
                <div className="label" >Country</div>
                <div className="text" style={{marginBottom:"15px", paddingLeft:"5px", marginTop:"5px"}}>Australia</div>
              </div>                         
            </div>
            <div className="full">             
              <div className="name">
                <div className="label">Postcode*</div>
                <input style={{width:"410px"}} type="text" name="" id="" />
              </div>            
            </div>
            <div className="full" >            
              <div className="name"> 
                <div className="label" style={{paddingBottom:"10px"}}>Country Code     
                </div>
                <select style={{width:"130px"}} id="phone" name="phone">              
                  <option value="home" >Home</option>                
                  <option value="mobile">Mobile</option>
                  <option value="work">Work</option>                  
                </select> 
              </div>          
              <div className="name" style={{paddingTop:"10px"}}>
                <div className="label">Phone number</div>
                <input style={{width:"280px"}} type="text" name="" id="" />
              </div>            
            </div>  
          <hr style={{width:"100%", opacity:"0.3"}}/>
          
            <div className="me" style={{color:"gray"}}>
              <input type="checkbox" name="" id="" />
              <label >I want to receive emails to be first to know about exclusive offers and new products.</label>
            </div>           
        
          </div>  
                
          <div className="bottom" >
          <img src="https://simplymemorialcards.ie/wp-content/uploads/2018/10/secure.png" alt="" srcset="" />
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
          <hr />
          <div className='sub'>
            <div className="total">Estimated Total:</div>
            <div className="price">$469.00</div>
          </div>  
          {/* <div className='text'>       
              <div className="detail">Tax included and shipping calculated at checkout.</div>
              <div className="terms">
                <input type="checkbox" name="" id="" />
                <label>I agree with Terms & Conditions</label>
              </div>    
          </div> */}
          {/* <div className="how">
            <div className="text">How you'll pay</div>
          <div className="pay">
            <div className="payment">
              <input type="radio" name="payment" id="" onClick={(e)=>setPayment("mastercard")}/>
              <img src="https://www.nicepng.com/png/detail/5-50082_free-credit-card-visa-and-master-card-png.png" alt="" srcset="" />
            </div>
            <div className="payment">
              <input type="radio" name="payment" id="" onClick={(e)=>setPayment("paypal")} />
              <img src="https://pngimg.com/uploads/paypal/small/paypal_PNG2.png"alt="" srcset="" />
            </div>
          </div>
            
          </div> */}
          {/* {payment && <button className='orange'>{`proceed to ${payment}`}</button> } */}
          <button className='orange'>Next Step</button> 
        </div>
      
        <div className="bottom">
        <img src="https://www.nicepng.com/png/detail/95-954587_image-result-for-secure-checkout-safe-and-secure.png" alt="" srcset="" />
        </div>
          
  {payment && <button className='orange'>{`proceed to ${payment}`}</button>  }
      </div>
     
    </div>
    </div>
  </div>
  )
}

export default ShippingDetails;