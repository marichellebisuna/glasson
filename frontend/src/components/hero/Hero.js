import './hero.scss'
import hero from '../../assets/hero/guy.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="container">        
        <div className="details">
          <div className="brand">massa dapibus</div>
          <div className="title"><h1>carbonate 100% glasses</h1></div>
          <div className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nunc arcu, mattis vel odio eget, vehicula porta nisi. Vestibulum condimentum dictum erat, in accumsan sem. </div>
          <button type="submit">shop now</button>
          
        </div>
         <div className="image">
          <img src={hero} alt="" srcset="" />
        </div>
      </div>
    
     
    </div>
  )
}

export default Hero