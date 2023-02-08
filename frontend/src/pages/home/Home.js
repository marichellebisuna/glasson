 import Hotdeals from '../../components/hotdeals/Hotdeals'
import Services from '../../components/services/Services'
import Featured from '../../components/featured/Featured'
import Instagram from '../../components/instagram/Instagram'
import Banner from '../../components/banner/Banner'
import Hero from '../../components/hero/Hero'
import './home.scss'
const Home = () => {
  
  return (   
    <div>     
     <Hero />
     <Services />
     <Hotdeals/> 
      <Featured />
     <Banner />
     <Instagram />
    </div> 
    
  )
}

export default Home