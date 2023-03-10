import './instagram.scss';
import insta1 from '../../assets/instagram/1.jpg';
import insta2 from '../../assets/instagram/2.jpg';
import insta3 from '../../assets/instagram/3.jpg';
import insta4 from '../../assets/instagram/4.jpg';
import insta5 from '../../assets/instagram/5.jpg';

const Instagram = () => {  

  return (    
    <div className='instagram'>
      <div className="box">
        <img src={insta1} alt="" srcSet="" />
      </div>
     
      <div className="box">
         <img src={insta2} alt="" srcSet="" />
      </div>
     
      <div className="box">
        <img src={insta3} alt="" srcSet="" />
      </div>
      
      <div className="box">
        <img src={insta4} alt="" srcSet="" />
      </div>
      
      <div className="box">
        <img src={insta5} alt="" srcSet="" />
      </div>
      
      
       
    </div>
  )
}

export default Instagram