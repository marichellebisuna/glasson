import {Services, Featured, Instagram, Banner, Hero, Singledeal} from '../../components/'
import './home.scss'

const Home = () => {
  return (   
    <div className="home">     
     <Hero />
     <Services />    
     <div className="deals">
        <div className="left">
          <Singledeal/>
        </div>
        <div className="right">
          <Singledeal/>
        </div>
               
     </div>       
     <Featured />
     <Banner />
     <Instagram />
    </div>     
  )
}

export default Home