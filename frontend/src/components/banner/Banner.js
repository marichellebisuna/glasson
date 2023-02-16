import './banner.scss';
import banner1 from '../../assets/banner/1.jpg';
import banner2 from '../../assets/banner/2.jpg';
import banner3 from '../../assets/banner/3.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {  
  return (    
    <div className='banner'>
      <div className="box1">
        <Link to="/products?brand=sunglasses"><img src={banner1} alt="" srcSet="" /></Link>
      </div>
     
      <div className="box2">
      <Link to="/products?brand=eyeglasses"><img src={banner2} alt="" srcSet="" /></Link>
      </div>
     
      <div className="box2">
      <Link to="/products?brand=vogue"><img src={banner3} alt="" srcSet="" /></Link>
      </div>     
       
    </div>
  )
}

export default Banner