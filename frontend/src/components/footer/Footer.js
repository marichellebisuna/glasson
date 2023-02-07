import './footer.scss'
import cards from '../../assets/cards.png'
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="column">
          <div className="title">About Us</div>
          <div className="about-container">
             <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet et dolor ac consequat. In feugiat leo eros, nec pretium est sollicitudin et. Donec nec imperdiet lectus. 
             </div>
            <div className="left">         
              <div className="social"><i class="fa-brands fa-facebook-f"></i></div>
              <div className="social"><i class="fa-brands fa-twitter"></i></div>
              <div className="social"><i class="fa-brands fa-google-plus-g"></i></div>
              <div className="social"><i class="fa-brands fa-instagram"></i></div>          
            </div>
          </div>
         
        </div>
        <div className="column">
          <div className="title">Information</div>
          <ul>
            <li>About us</li>
            <li>Contact Us</li>
            <li>Blogs</li>
            <li>Terms Of Use</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
        <div className="column">
          <div className="title">My Account</div>
          <ul>
            <li>My Order</li>
            <li>Wishlist</li>
            <li>My Credit</li>
            <li>Login</li>
            <li>Personal Info</li>
          </ul>
        </div>
        <div className="column">
          <div className="title">Customer</div>
          <ul>
            <li>Help & FAQ?</li>
            <li>Order & Return</li>
            <li>Shipping Info</li>
            <li>Search Team</li>
            <li>Store Location</li>
          </ul>
        </div>
        <div className="column">
          <div className="store">
            <div className="title">Store 1</div>
            <div className='details'>
              <div className='icon'><i class="fa-solid fa-location-dot"></i>Strawberry, AR 72469, USA</div>
              <div className='icon'><i class="fa-solid fa-phone"></i>+ 1 870-625-7364</div>
              <div className='icon'><i class="fa-regular fa-clock"></i>06:30 am - 22:00 pmr</div>
            </div>  
          </div>
          <div className="store" style={{marginTop:"20px"}}>
            <div className="title">Store 2</div>
            <div className='details'>
              <div className='icon'><i class="fa-solid fa-location-dot"></i>Strawberry, AR 72469, USA</div>
              <div className='icon'><i class="fa-solid fa-phone"></i>+ 1 870-625-7364</div>
              <div className='icon'><i class="fa-regular fa-clock"></i>06:30 am - 22:00 pmr</div>
            </div>  
          </div>
          </div>
        

        </div>
  
      <div className="middle">
        <div className="container">
           <div className="left">
            <div className="join">Join Our Newsletter Now</div>
            <div className="text">Get E-mail updates about our latest shop and special</div>
          </div>
        <div className="right">
          <input type="text" name="" id="" placeholder='Enter your email'/>
          <button type="submit">Subscribe</button>
        </div>
        </div>
       
      </div>
      <div className="bottom">
        <div className="left">Copyright &copy; <span style={{color:"red", fontWeight:700}}>Glasso</span>. All Rights Reserved </div>
        <div className="right"><img src={cards} alt="" srcset="" /></div>
      </div>
    </div>
  )
}

export default Footer