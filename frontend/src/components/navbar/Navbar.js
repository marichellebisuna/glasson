import './navbar.scss'
import logo from '../../media/logo.png'
import {Link, useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react'
import {cart} from '../../../src/data'

const Navbar = () => {
  const location = useLocation().pathname.split("/")[1]

  const [active, setActive] = useState(false)

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    }
  }, [])
  
  
  return (
    <div className='navbar'>  
      <div className={active ? "top active" : "top"}>   
        <div className="container">
          <div className="left">         
            <div className="social"><i className="fa-brands fa-facebook-f"></i></div>
            <div className="social"><i className="fa-brands fa-twitter"></i></div>
            <div className="social"><i className="fa-brands fa-google-plus-g"></i></div>
            <div className="social"><i className="fa-brands fa-instagram"></i></div>          
          </div>
          <div className="right">
            <div className="email"><span><i className="fa-regular fa-envelope"></i></span>admin@gmail.com</div>
            <div className="times">
            <span><i className="fa-regular fa-clock"></i></span> 9:00 AM - 18:00 PM
            </div>
          </div>
        </div>
      </div>    
      <div className="middle">
        <div className="logo-img"><Link to="/"> <img src={logo} alt="" srcSet="" /></Link>
        </div>
        <div className="nav-menu">       
          <ul className='list-menu'>
            <Link to="/"><li className={location==="" ?'listitem active':'listitem'}>Home</li></Link>
            <Link to="/products"><li className={location==="products" ?'listitem active':'listitem'}>Products</li></Link>
            <Link to="/product/:id"><li className={location==="product" ?'listitem active':'listitem'}>Product</li></Link>
            <Link to="/login"><li className={location==="login" ?'listitem active':'listitem'}>Login</li></Link>
            <Link to="/register"><li className={location==="register" ?'listitem active':'listitem'}>Register</li></Link>
          </ul>
          <div className="menu-icons">
          <i className="fa-regular fa-user"></i>    
          <div className="wish">
            <Link to="/wishlist">
            <div className="outline"><i class="fa-regular fa-heart"></i></div>
            <div className="solid"><i class="fa-solid fa-heart"></i></div>
            </Link>
            <div className="number">{cart.length}</div>
          </div>   
           
         
          <div className="cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <div className="number">{cart.length}</div>
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
              <div className="button"><i className="fa-solid fa-angle-down"></i></div> 
            </div>

            <input type="text" name="" id="" placeholder='What do you need?'/>
            
          </div>  
          <button type="submit">Search</button>
        </div>
        <div className="support">
          <div className="icon"><i className="fa-solid fa-headset"></i></div>
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