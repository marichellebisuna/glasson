import './navbar.scss'
import logo from '../../media/logo.png'
import {Link, useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react'
//import {cart} from '../../../src/data'
import SideCart from './SideCart'
import Sidemenu from './Sidemenu'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../../redux/cartSlice'

const Navbar = () => {
  const location = useLocation().pathname.split("/")[1]
  const {items, totalCount, totalAmount} = useSelector(state=>state.cart)
  const dispatch = useDispatch()
  const [active, setActive] = useState(false)
  const [show, setShow] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }
  useEffect(()=>{
dispatch(getCartTotal())
  },[])

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
          <div className='list-menu'>
            <div className="menus">
              <Link to="/"><div className={location==="" ?'listitem active':'listitem'}>Home</div></Link>
              <Link to="/products/"><div className={location==="products" ?'listitem active':'listitem'}>Products</div></Link>
              {/* <Link to="/product/:id"><div className={location==="product" ?'listitem active':'listitem'}>Product</div></Link> */}
              <Link to="/login"><div className={location==="login" ?'listitem active':'listitem'}>Login</div></Link>
              <Link to="/register"><div className={location==="register" ?'listitem active':'listitem'}>Register</div></Link>
            </div>
           
             <div className="menu-icons">
                <i className="fa-regular fa-user"></i>    
                <div className="wish">
                  <Link to="/wishlist">
                  <div className="outline"><i className="fa-regular fa-heart"></i></div>
                  <div className="solid"><i className="fa-solid fa-heart"></i></div>
                  </Link>
                  <div className="number">
                    {items.length}
                    </div>
                </div>  
                <div className="cart-icon" onClick={()=>setShow(!show)}>                  
                  <i className="fa-solid fa-cart-shopping"></i>                
                  <div className="number">
                    {totalCount}
                    </div>
                </div>  
              </div>
              <div className="hamburger" onClick={()=>setShowMenu(true)}>
                <i className="fa-solid fa-bars"></i>
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
      <SideCart setShow={setShow} show={show}/>
    <Sidemenu setShowMenu={setShowMenu} showMenu={showMenu}/>
    </div>
    
  )
}

export default Navbar