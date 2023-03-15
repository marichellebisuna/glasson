 import Hotdeals from '../../components/hotdeals/Hotdeals'
 import Deal from '../../components/hotdeals/singlehotdeal/Deal'

import Services from '../../components/services/Services'
import Featured from '../../components/featured/Featured'
import Instagram from '../../components/instagram/Instagram'
import Banner from '../../components/banner/Banner'
import Hero from '../../components/hero/Hero'
import './home.scss'
import Singledeal from '../../components/products/hotdeals/singlehotdeal/Singledeal'

const Home = () => {

  return (   
    <div className="home">     
     <Hero />
     <Services />    
     <div className="deals">
        <Singledeal/>       
     </div>       
     <Featured />
     <Banner />
     <Instagram />
    </div> 
    
  )
}

export default Home