import './banner.scss';
import banner1 from '../../assets/banner/1.jpg';
import banner2 from '../../assets/banner/2.jpg';
import banner3 from '../../assets/banner/3.jpg';


const Banner = () => {  

  return (    
    <div className='banner'>
      <div className="box1">
        <img src={banner1} alt="" srcset="" />
      </div>
     
      <div className="box2">
         <img src={banner2} alt="" srcset="" />
      </div>
     
      <div className="box2">
        <img src={banner3} alt="" srcset="" />
      </div>     
       
    </div>
  )
}

export default Banner