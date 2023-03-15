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