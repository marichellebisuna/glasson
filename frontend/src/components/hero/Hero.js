import './hero.scss'
import { useState } from 'react'
import {slide} from '../../data'


const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0)
 
  const handleArrow = (direction)=>{    
    if(direction ==="left"){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)        
     }
    else{
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)      
    }
  }

  return (
    <div className='hero'>
      <div className="arrow" onClick={()=>handleArrow("left")} >
         <i className="fa-solid fa-arrow-left left" ></i>
      </div>
      <div className="hero-container"  style={{transform:`translateX(${-100 * slideIndex }vw)`}}>
        {slide.map((i)=>     
          <div className="hero-wrapper" key={i.id} 
          // style={{backgroundColor:`${i.bg}`}}
          >             
            <div className="details">
              <div className="brand">{i.brand}</div>
              <div className="title"><h1>{i.title}</h1></div>
              <div className="desc">{i.desc}          
            </div>          
          </div>
          <div className="image" >
              <img  src={require(`../../assets/hero/`+i.img+'.png')} alt="" srcSet="" />
            </div>
          </div>    
        )}
      </div>      
      <div className="arrow" onClick={()=>handleArrow("right")}>
      <i className="fa-solid fa-arrow-right right" ></i>  
      </div>      
    </div>
  )
}

export default Hero