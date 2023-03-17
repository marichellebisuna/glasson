import { useLocation } from 'react-router-dom'
import './process.scss'

const Process = () => {
  const location = useLocation()
  const path =location.pathname.split('/')
  return (
    <div className="process">
      <div className="step">
        <span>shopping cart</span> 
        <div className={path[1]==="cart"?"number active":"number"}>01</div>
      </div>        
      
      <div className="step">
        <span>checkout</span> 
        <div className={path[1]==="checkout" ?"number active":"number"}>02</div>       
      </div>

      <div className="step">
        <span>order completed </span>
        <div className="number">03</div>
      </div>
    </div>
  )
}

export default Process