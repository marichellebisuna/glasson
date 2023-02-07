import './navbar.scss'
import logo from '../../media/logo.png'
import {Link} from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  
  return (
    <div className='navbar'>      
      <div className="top">   
        <div className="container">
          <div className="left">         
            <div className="social"><i class="fa-brands fa-facebook-f"></i></div>
            <div className="social"><i class="fa-brands fa-twitter"></i></div>
            <div className="social"><i class="fa-brands fa-google-plus-g"></i></div>
            <div className="social"><i class="fa-brands fa-instagram"></i></div>          
          </div>
          <div className="right">
            <div className="email"><span><i class="fa-regular fa-envelope"></i></span>admin@gmail.com</div>
            <div className="times">
            <span><i class="fa-regular fa-clock"></i></span> 9:00 AM - 18:00 PM
            </div>
          </div>
      </div>
        

      </div>
      <div className="middle">
        <div className="logo"><img src={logo} alt="" srcset="" />
        </div>
        <div className="menu">       
          <ul className='list'>
            <Link to="/"><li className='listitem active'>Home</li></Link>
            <Link to="/products/:id"><li className='listitem'>Products</li></Link>
            <Link to="/product/:id"><li className='listitem'>Product</li></Link>
            <Link to="/login"><li className='listitem'>Login</li></Link>
            <Link to="/register"><li className='listitem'>Register</li></Link>
          </ul>
          <div className="icons">
          <i class="fa-regular fa-user"></i> 
          <div className="cart">
          <i class="fa-solid fa-cart-shopping"></i>
          <div className="number">0</div>
          </div>           
          
          </div>
        </div>
        
      </div>
      <div className="bottom">
        <div className="container">      
          <div className="search">         
            <div className="categories">                     
              <select name="" id="">            
                <option value="" className="active">All Categories</option>                  
                <option value="">Men</option>
                <option value="">Women</option>
                <option value="">Kids</option>             
              </select>    
              <div className="button"><i class="fa-solid fa-angle-down"></i></div> 
            </div>

            <input type="text" name="" id="" placeholder='What do you need?'/>
            
          </div>  
          <button type="submit">Search</button>
        </div>
        <div className="support">
          <div className="icon"><i class="fa-solid fa-headset"></i></div>
          <div className="hotline">
            <div className="text">SUPPORT 24/7</div>
            Hotline: +08 123 456 789
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar